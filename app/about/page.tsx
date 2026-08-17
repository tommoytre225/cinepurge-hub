import Link from 'next/link';
import { Shield, Globe, Lock } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">À Propos</h1>
          <p className="text-xl text-foreground-muted">
            Découvrez comment fonctionne le hub CinePurge et pourquoi il est essentiel pour votre sécurité.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-8">Notre Mission</h2>
        <div className="glass-card border border-[rgba(255,255,255,0.08)] rounded-lg p-8">
          <p className="text-lg text-foreground-muted leading-relaxed mb-6">
            CinePurge Hub existe pour offrir un point d'accès <strong className="text-white">stable, sécurisé et officiel</strong> à notre plateforme de streaming.
          </p>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Avec les changements fréquents de domaine pour des raisons de sécurité et d'accessibilité, ce hub devient votre <strong className="text-white">référence permanente</strong> — l'endroit où vous êtes toujours certain de trouver l'adresse correcte.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-12">Avantages du Hub</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-bold text-xl mb-4">Protection contre les fraudes</h3>
            <p className="text-foreground-muted">
              Les sites frauduleux et les faux domaines sont courants. Ce hub officiel est votre garantie d'accéder au vrai service.
            </p>
          </div>

          <div className="p-8 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <Globe className="w-12 h-12 text-secondary mb-4" />
            <h3 className="font-bold text-xl mb-4">Accessibilité garantie</h3>
            <p className="text-foreground-muted">
              Même si l'adresse principale change, ce hub reste votre point d'accès unique et stable.
            </p>
          </div>

          <div className="p-8 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <Lock className="w-12 h-12 text-[#8B5CF6] mb-4" />
            <h3 className="font-bold text-xl mb-4">Sécurité maximale</h3>
            <p className="text-foreground-muted">
              Aucune donnée collectée. Aucun cookie. Aucun tracker. Votre vie privée est protégée.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-8">Comment ça marche ?</h2>

        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Hub stable',
              desc: 'Ce site (senpai-wiki.com équivalent de CinePurge) reste toujours disponible.'
            },
            {
              step: '2',
              title: 'Mise à jour automatique',
              desc: 'Chaque changement de domaine est automatiquement publié ici.'
            },
            {
              step: '3',
              title: 'Mettez en favoris',
              desc: 'Bookmarkez cette page pour accéder facilement à l\'adresse actuelle.'
            },
            {
              step: '4',
              title: 'Accès sécurisé',
              desc: 'Vous êtes toujours sûr d\'accéder au vrai service, pas à une copie.'
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold">
                  {item.step}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garanties */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-8">Nos Garanties</h2>

        <div className="space-y-4">
          <div className="p-6 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <h4 className="font-bold text-accent mb-2">✓ Informations à jour</h4>
            <p className="text-foreground-muted text-sm">
              Cette page affiche TOUJOURS l'adresse actuelle de CinePurge, sans cache ni délai.
            </p>
          </div>

          <div className="p-6 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <h4 className="font-bold text-accent mb-2">✓ Aucune collecte de données</h4>
            <p className="text-foreground-muted text-sm">
              Zéro cookies. Zéro tracking. Zéro collecte personnelle. Consultez notre politique de confidentialité.
            </p>
          </div>

          <div className="p-6 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <h4 className="font-bold text-accent mb-2">✓ Accès direct</h4>
            <p className="text-foreground-muted text-sm">
              Pas de redirects trompeurs, pas de pages publicitaires. Directement à l'adresse officielle.
            </p>
          </div>

          <div className="p-6 glass-card border border-[rgba(255,255,255,0.08)] rounded-lg">
            <h4 className="font-bold text-accent mb-2">✓ Protection légale</h4>
            <p className="text-foreground-muted text-sm">
              Consultez nos conditions d'utilisation et notre politique DMCA pour plus de détails.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 border-t border-[#374151]">
        <h2 className="section-title mb-4">Prêt à accéder à CinePurge ?</h2>
        <a
          href="https://cinepurge.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Accéder maintenant
        </a>
      </section>
    </div>
  );
}
