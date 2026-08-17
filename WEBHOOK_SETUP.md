# CinePurge Hub - Webhook Setup

## Overview

The webhook system allows you to automatically update the primary address and mirrors when CinePurge changes domain or adds failover mirrors.

## Configuration

### 1. Get Upstash Redis Credentials

1. Go to [Upstash Console](https://console.upstash.com)
2. Create a new Redis database (or use existing)
3. Copy:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### 2. Set Environment Variables

**On Vercel:**

1. Go to project settings → Environment Variables
2. Add:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
   - `WEBHOOK_SECRET` (choose a strong secret)

3. Redeploy

### 3. Generate HMAC Signature

When calling the webhook, you need to sign the request body with HMAC-SHA256.

**Example (Node.js):**

```javascript
const crypto = require('crypto');

const secret = 'your-webhook-secret';
const body = JSON.stringify({ url: 'https://cinepurge.lol/', type: 'primary' });

const signature = 'sha256=' + crypto.createHmac('sha256', secret)
  .update(body)
  .digest('hex');

console.log(signature); // sha256=abc123...
```

**Example (Python):**

```python
import hmac
import hashlib
import json

secret = 'your-webhook-secret'
body = json.dumps({'url': 'https://cinepurge.lol/', 'type': 'primary'})

signature = 'sha256=' + hmac.new(
    secret.encode(),
    body.encode(),
    hashlib.sha256
).hexdigest()

print(signature)  # sha256=abc123...
```

## API Usage

### Endpoint

```
POST https://hub.cinepurge.xyz/api/mirrors/webhook
```

### Headers

```
X-Signature: sha256=<computed-signature>
Content-Type: application/json
```

### Request Body

```json
{
  "url": "https://cinepurge.lol/",
  "type": "primary"
}
```

**Parameters:**
- `url` (string, required): The new address (must be valid HTTPS/HTTP URL)
- `type` (string, optional): "primary" to set as main address, "mirror" to add as fallback (default: "mirror")

### Response

**Success (200):**
```json
{
  "success": true,
  "url": "https://cinepurge.lol/",
  "type": "primary",
  "timestamp": "2026-08-17T10:00:00.000Z"
}
```

**Errors:**

- `401` - Invalid or missing X-Signature header
- `400` - Invalid URL format
- `429` - Rate limit exceeded (10 requests per minute)
- `500` - Server error

## Examples

### Update Primary Address

When CinePurge moves from `cinepurge.xyz` to `cinepurge.lol`:

```bash
curl -X POST https://hub.cinepurge.xyz/api/mirrors/webhook \
  -H "Content-Type: application/json" \
  -H "X-Signature: sha256=abc123..." \
  -d '{"url": "https://cinepurge.lol/", "type": "primary"}'
```

### Add Mirror

Add a backup domain:

```bash
curl -X POST https://hub.cinepurge.xyz/api/mirrors/webhook \
  -H "Content-Type: application/json" \
  -H "X-Signature: sha256=abc123..." \
  -d '{"url": "https://cinepurge-backup.lol/", "type": "mirror"}'
```

## Listing Mirrors

Get current mirrors (public, no auth needed):

```
GET https://hub.cinepurge.xyz/api/mirrors/list
```

Response:
```json
{
  "primary": "https://cinepurge.lol/",
  "mirrors": ["https://cinepurge-backup.lol/"],
  "total": 1,
  "timestamp": "2026-08-17T10:00:00.000Z"
}
```

## Security Notes

- ✅ All requests are rate-limited to 10/minute per IP
- ✅ Signatures are verified with HMAC-SHA256
- ✅ URLs are validated before storage
- ✅ Max 5 mirrors can be stored
- ✅ Action logs are kept (last 100 entries)
- ✅ Redis persistence is enabled

## Troubleshooting

### "Invalid signature"
- Make sure you're signing the EXACT request body
- Check that `WEBHOOK_SECRET` matches on both sides
- Verify no URL encoding is applied before signing

### "Rate limit exceeded"
- Wait 60 seconds before retrying
- Each IP gets 10 requests per minute

### No changes appear on hub
- Check `/api/mirrors/list` to see if the URL was stored
- Verify Redis credentials are correct
- Check browser cache (Ctrl+Shift+Delete)

