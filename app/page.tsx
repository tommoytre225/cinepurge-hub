export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-12">

        {/* Logo/Title */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold">CinePurge</h1>
          <p className="text-[#999999] text-lg">Hub officiel - Point d&apos;accès stable</p>
        </div>

        {/* Main Link - PROMINENT */}
        <div className="space-y-4">
          <p className="text-sm text-[#999999] uppercase tracking-wide">Adresse actuelle</p>
          <div className="glass-card border border-[rgba(255,59,48,0.2)] rounded-lg p-8">
            <a
              href="https://cinepurge.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-semibold text-accent hover:text-[#FF6B50] transition-colors break-all"
            >
              cinepurge.xyz
            </a>
          </div>
          <p className="text-sm text-[#999999] mt-6">
            Mettez cette page en favoris pour accéder à CinePurge même si l&apos;adresse change
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          <div className="glass-card rounded-lg p-4 border border-[rgba(255,255,255,0.08)]">
            <div className="text-2xl font-bold text-accent">5K+</div>
            <div className="text-xs text-[#999999] mt-2">Films</div>
          </div>
          <div className="glass-card rounded-lg p-4 border border-[rgba(255,255,255,0.08)]">
            <div className="text-2xl font-bold text-accent">2K+</div>
            <div className="text-xs text-[#999999] mt-2">Séries</div>
          </div>
          <div className="glass-card rounded-lg p-4 border border-[rgba(255,255,255,0.08)]">
            <div className="text-2xl font-bold text-accent">10K+</div>
            <div className="text-xs text-[#999999] mt-2">Animés</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href="https://cinepurge.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Accédez à CinePurge
          </a>
          <a href="/about" className="btn-secondary">
            En savoir plus
          </a>
        </div>

        {/* Why This Hub */}
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-12">
          <h2 className="text-sm text-[#999999] uppercase tracking-wide mb-6">Pourquoi ce hub</h2>
          <div className="text-left space-y-3 text-sm text-[#999999]">
            <p>✓ <strong>Point d&apos;ancrage permanent</strong> — Même si le domaine de CinePurge change, ce hub reste stable</p>
            <p>✓ <strong>Protection contre les fraudes</strong> — Évite les faux sites et les copies malveillantes</p>
            <p>✓ <strong>Adresse toujours à jour</strong> — Consultez ici pour la vraie URL officielle</p>
            <p>✓ <strong>Aucune donnée collectée</strong> — Zéro cookies, zéro tracking</p>
          </div>
        </div>

      </div>
    </div>
  );
}
