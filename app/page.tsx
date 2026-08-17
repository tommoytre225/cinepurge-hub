import Link from "next/link";
import { Play, Zap, Shield, Download, Tv } from "lucide-react";
import { InstallButton } from "./install-button";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B30]/5 via-transparent to-[#FF3B30]/5 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10 fade-in">
          <div className="mb-6">
            <span className="px-4 py-2 glass-card border border-[rgba(255,255,255,0.08)] rounded-full text-sm text-accent">
              🎬 Hub Officiel
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bienvenue sur<br />
            <span className="text-accent">CinePurge</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Votre point d&apos;accès officiel et sécurisé à notre plateforme de streaming. Sauvegardez cette page pour toujours accéder à l&apos;adresse actuelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://cinepurge.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Accéder à CinePurge
            </a>
            <InstallButton />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 glass-card backdrop-blur p-8 rounded-lg border border-[rgba(255,255,255,0.08)] max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">5K+</div>
              <div className="text-sm text-foreground-muted mt-2">Films</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">2K+</div>
              <div className="text-sm text-foreground-muted mt-2">Séries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">10K+</div>
              <div className="text-sm text-foreground-muted mt-2">Animés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-16">Pourquoi CinePurge ?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: 'Accès immédiat',
              desc: 'Pas d&apos;inscription nécessaire. Commencez à regarder directement.'
            },
            {
              icon: Tv,
              title: 'Multi-appareils',
              desc: 'Regardez sur votre téléphone, tablette, ordinateur ou TV.'
            },
            {
              icon: Download,
              title: 'Téléchargement',
              desc: 'Téléchargez vos contenus favoris pour les regarder hors ligne.'
            },
            {
              icon: Shield,
              title: 'Qualité HD',
              desc: 'Profitez du meilleur de la qualité vidéo en haute définition.'
            },
            {
              icon: Play,
              title: 'Synchronisation',
              desc: 'Votre historique sync entre tous vos appareils automatiquement.'
            },
            {
              icon: Zap,
              title: '24/7 Disponible',
              desc: 'Accès 24 heures sur 24, 7 jours sur 7, sans interruption.'
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(255,59,48,0.3)] transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-foreground-muted text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-16">Questions Fréquentes</h2>

        <div className="space-y-4">
          {[
            {
              q: 'L&apos;adresse de CinePurge change-t-elle ?',
              a: 'Oui, pour des raisons de sécurité et d&apos;accessibilité, l&apos;adresse peut changer. Sauvegardez cette page pour toujours accéder à l&apos;adresse actuelle.'
            },
            {
              q: 'Pourquoi ce hub existe-t-il ?',
              a: 'Ce hub offre un point d&apos;accès stable et sécurisé. Il protège nos utilisateurs contre les faux domaines et les sites frauduleux.'
            },
            {
              q: 'Y a-t-il une application mobile ?',
              a: 'Vous pouvez installer CinePurge comme application mobile (PWA) en cliquant sur le bouton "Installer l&apos;app".'
            },
            {
              q: 'Comment je suis sûr que c&apos;est le vrai site ?',
              a: 'Vérifiez l&apos;URL dans votre navigateur et marquez-la en favoris. Le seul lien officiel est sur ce hub.'
            },
            {
              q: 'Y a-t-il des frais ?',
              a: 'Non, CinePurge est complètement gratuit. Aucun abonnement, aucun frais caché.'
            },
            {
              q: 'Vous collectez mes données ?',
              a: 'Ce hub ne collecte aucune donnée. Aucun cookie, aucun tracker. Consultez notre politique de confidentialité.'
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group p-4 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg cursor-pointer hover:border-[rgba(255,59,48,0.3)] transition-all"
            >
              <summary className="font-semibold flex justify-between items-center">
                {item.q}
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-foreground-muted mt-3 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="section-title mb-6">Prêt à commencer ?</h2>
        <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
          Accédez à notre plateforme maintenant et découvrez des milliers de films, séries et animés.
        </p>
        <a
          href="https://cinepurge.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Play size={20} />
          Aller sur CinePurge
        </a>
      </section>
    </div>
  );
}
