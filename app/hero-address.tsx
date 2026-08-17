'use client';

import { useEffect, useState } from 'react';

interface HeroData {
  primary: string;
}

export function HeroAddress() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await fetch(`/api/mirrors/list?t=${Date.now()}`, {
          cache: 'no-store',
        });
        const json = await res.json();
        setData({ primary: json.primary });
      } catch (error) {
        console.error('Failed to fetch address:', error);
        setData({ primary: 'https://cinepurge.xyz/' });
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();

    // Revalidate every 10 seconds
    const interval = setInterval(fetchAddress, 10000);
    return () => clearInterval(interval);
  }, []);

  const url = data?.primary || 'https://cinepurge.xyz/';

  return (
    <>
      {/* Main Link */}
      <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-10 space-y-5 max-w-2xl mx-auto">
        <div className="space-y-3">
          <p className="section-label">Adresse actuelle</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-black text-[#FF3B30] hover:text-[#FF6B50] transition-colors break-all"
          >
            {url}
          </a>
        </div>

        <div className="flex gap-4 text-sm text-[#999999] pt-2">
          <span>✓ Connexion chiffrée</span>
          <span>✓ Officiel</span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full block text-center text-lg py-4 mt-6"
        >
          Accéder à CinePurge
        </a>
      </div>
    </>
  );
}
