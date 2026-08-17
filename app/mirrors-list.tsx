'use client';

import { useEffect, useState } from 'react';

interface Mirror {
  primary: string;
  mirrors: string[];
  total: number;
  fallback?: boolean;
}

export function MirrorsList() {
  const [data, setData] = useState<Mirror | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMirrors = async () => {
      try {
        const res = await fetch(`/api/mirrors/list?t=${Date.now()}`, {
          cache: 'no-store',
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch mirrors:', error);
        setData({
          primary: 'https://cinepurge.xyz/',
          mirrors: [],
          total: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMirrors();

    // Revalidate every 10 seconds for dev
    const interval = setInterval(fetchMirrors, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="flex justify-center py-12">
        <p className="text-[#999999]">Chargement des accès...</p>
      </div>
    );
  }

  const allLinks = [data.primary, ...data.mirrors];
  const maxCols = allLinks.length === 1 ? 1 : allLinks.length === 2 ? 2 : 3;

  return (
    <>
      <div className={`grid gap-6 ${maxCols === 1 ? 'max-w-md mx-auto' : `md:grid-cols-2 ${maxCols === 3 ? 'lg:grid-cols-3' : ''}`}`}>
        {/* Primary */}
        <a
          href={data.primary}
          target="_blank"
          rel="noopener noreferrer"
          className="card hover:border-[#FF3B30] hover:shadow-lg hover:shadow-[#FF3B30]/20 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">🌐</div>
            <span className="badge text-xs">PRINCIPAL</span>
          </div>
          <h3 className="font-bold text-lg mb-2 break-all">{new URL(data.primary).hostname}</h3>
          <p className="text-[#999999] text-sm">Lien officiel - toujours actif</p>
          <div className="mt-4 pt-4 border-t border-[#1a1a1f] text-xs text-[#FF3B30] font-bold group-hover:translate-x-1 transition-transform">
            Accéder →
          </div>
        </a>

        {/* Mirrors */}
        {data.mirrors.map((mirror, i) => (
          <a
            key={i}
            href={mirror}
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:border-[#FF3B30] hover:shadow-lg hover:shadow-[#FF3B30]/20 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">🔄</div>
              <span className="text-xs text-[#FF3B30] font-bold">MIROIR {i + 1}</span>
            </div>
            <h3 className="font-bold text-lg mb-2 break-all">{new URL(mirror).hostname}</h3>
            <p className="text-[#999999] text-sm">Accès alternatif</p>
            <div className="mt-4 pt-4 border-t border-[#1a1a1f] text-xs text-[#FF3B30] font-bold group-hover:translate-x-1 transition-transform">
              Accéder →
            </div>
          </a>
        ))}

        {/* Empty mirrors if less than 3 */}
        {allLinks.length < 3 && allLinks.length < 3 && (
          <>
            {Array.from({ length: 3 - allLinks.length }).map((_, i) => (
              <div key={`empty-${i}`} className="card opacity-50 border-dashed">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">🔄</div>
                  <span className="text-xs text-[#999999]">Miroir {allLinks.length + i + 1}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#999999]">À venir</h3>
                <p className="text-[#999999] text-sm">Fallback en cas de besoin</p>
              </div>
            ))}
          </>
        )}
      </div>

      <p className="text-[#999999] text-sm mt-8 text-center">
        {data.total > 0
          ? `${data.total} miroir${data.total > 1 ? 's' : ''} actif${data.total > 1 ? 's' : ''} — Les miroirs sont activés automatiquement si le lien principal devient indisponible.`
          : 'Les miroirs seront activés automatiquement si le lien principal devient indisponible.'}
        {data.fallback && <span className="ml-2 text-[#FF3B30]">⚠️ Mode fallback (Redis indisponible)</span>}
      </p>
    </>
  );
}
