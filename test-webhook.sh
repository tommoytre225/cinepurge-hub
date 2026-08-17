#!/bin/bash

# CinePurge Hub - Webhook Test Script
# Usage: ./test-webhook.sh [url] [type] [secret]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Config
URL="${1:-https://cinepurge.lol/}"
TYPE="${2:-primary}"
SECRET="${3:-dev-secret-change-in-production}"
WEBHOOK_URL="${4:-http://localhost:3002/api/mirrors/webhook}"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}CinePurge Hub - Webhook Test${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Validate URL
if ! [[ "$URL" =~ ^https?:// ]]; then
  echo -e "${RED}✗ Invalid URL format${NC}"
  exit 1
fi

echo -e "${YELLOW}Configuration:${NC}"
echo "  URL:          $URL"
echo "  Type:         $TYPE"
echo "  Secret:       $SECRET"
echo "  Webhook:      $WEBHOOK_URL"
echo ""

# Create JSON payload
PAYLOAD=$(cat <<EOF
{"url": "$URL", "type": "$TYPE"}
EOF
)

echo -e "${YELLOW}Payload:${NC}"
echo "  $PAYLOAD"
echo ""

# Generate HMAC signature using Node.js
echo -e "${YELLOW}Generating signature...${NC}"

SIGNATURE=$(node -e "
const crypto = require('crypto');
const payload = '$PAYLOAD';
const secret = '$SECRET';
const hmac = crypto.createHmac('sha256', secret);
hmac.update(payload);
console.log('sha256=' + hmac.digest('hex'));
")

echo -e "${GREEN}✓ Signature generated${NC}"
echo "  $SIGNATURE"
echo ""

# Send webhook request
echo -e "${YELLOW}Sending webhook request...${NC}"
echo ""

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -H "X-Signature: $SIGNATURE" \
  -d "$PAYLOAD")

# Extract status code and body
HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

echo -e "${BLUE}Response:${NC}"
echo "  Status Code: $HTTP_CODE"
echo "  Body:"
echo "$BODY" | jq . 2>/dev/null || echo "$BODY"
echo ""

# Check result
if [[ "$HTTP_CODE" == "200" ]]; then
  echo -e "${GREEN}✓ Success! Webhook executed${NC}"
  echo ""
  echo -e "${YELLOW}Checking mirrors list...${NC}"
  curl -s "http://localhost:3002/api/mirrors/list" | jq .
  echo ""
  exit 0
else
  echo -e "${RED}✗ Error! HTTP $HTTP_CODE${NC}"
  exit 1
fi
