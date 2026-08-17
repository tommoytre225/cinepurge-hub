'use client';

import { useState } from 'react';

export function ReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      url: formData.get('url'),
      reason: formData.get('reason'),
      email: formData.get('email')
    };

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Report error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="block text-sm font-bold mb-2">URL suspecte</label>
        <input
          type="url"
          name="url"
          placeholder="https://..."
          required
          className="w-full bg-[#070709] border border-[#333333] rounded px-3 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Raison</label>
        <select name="reason" required className="w-full bg-[#070709] border border-[#333333] rounded px-3 py-2 text-white">
          <option>Faux site (phishing)</option>
          <option>Contrefaçon</option>
          <option>Contenu malveillant</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Email (optionnel)</label>
        <input
          type="email"
          name="email"
          placeholder="vous@exemple.com"
          className="w-full bg-[#070709] border border-[#333333] rounded px-3 py-2 text-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:opacity-50"
      >
        {loading ? 'Envoi...' : 'Signaler'}
      </button>

      {submitted && (
        <p className="text-[#4ade80] text-sm">✓ Rapport reçu. Merci!</p>
      )}
    </form>
  );
}
