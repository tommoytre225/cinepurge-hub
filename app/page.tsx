'use client';

import Link from 'next/link';
import { Play, Zap, Shield, Download, Tv, ArrowRight } from 'lucide-react';
import { InstallButton } from './install-button';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 film-grain">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FF3B30]/5 to-transparent" />

        <div className="max-w-5xl mx-auto w-full">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] w-fit">
              <span className="w-2 h-2 bg-[#FF3B30] rounded-full animate-pulse" />
              <span className="text-sm text-[#f0f0f2]">Hub Officiel CinePurge</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Votre accès<br />
                <span className="text-accent">sécurisé</span> à<br />
                CinePurge
              </h1>
              <p className="text-lg md:text-xl text-[#999999] max-w-2xl leading-relaxed">
                Point d&apos;ancrage officiel et stable pour accéder à la plateforme. Sauvegardez cette page pour toujours disposer de l&apos;adresse actuelle.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://cinepurge.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                <Play size={20} />
                Accédez maintenant
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <InstallButton />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(255,255,255,0.08)]">
              {[
                { number: '5K+', label: 'Films' },
                { number: '2K+', label: 'Séries' },
                { number: '10K+', label: 'Animés' },
              ].map((stat, i) => (
                <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-[#999999] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title-accent text-3xl md:text-4xl font-bold mb-16">
            Pourquoi CinePurge Hub ?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Accès immédiat',
                desc: 'Pas d&apos;inscription requise. Commencez à regarder directement.'
              },
              {
                icon: Tv,
                title: 'Multi-appareils',
                desc: 'Téléphone, tablette, ordinateur ou TV — synchro parfaite.'
              },
              {
                icon: Download,
                title: 'Hors ligne',
                desc: 'Téléchargez pour regarder sans connexion internet.'
              },
              {
                icon: Shield,
                title: 'Protégé',
                desc: 'Domaine officiel sécurisé contre les contrefaçons.'
              },
              {
                icon: Play,
                title: 'Synchronisé',
                desc: 'Votre historique persiste sur tous vos appareils.'
              },
              {
                icon: Zap,
                title: '24/7 actif',
                desc: 'Disponible 24h/24, 7j/7 sans interruption.'
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-card card-glow-hover p-6 rounded-lg border border-[rgba(255,255,255,0.055)] group animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:text-[#FF6B50] transition-colors" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#999999]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title-accent text-3xl md:text-4xl font-bold mb-16">
            Comment ça marche
          </h2>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Hub permanent', desc: 'Ce site reste actif en permanence, c&apos;est votre ancre stable.' },
              { step: '2', title: 'Mise à jour auto', desc: 'L&apos;adresse de CinePurge change ? Nous la publions ici en temps réel.' },
              { step: '3', title: 'Mettez en favoris', desc: 'Bookmarkez cette page pour accéder à l&apos;adresse actuelle en 1 clic.' },
              { step: '4', title: 'Sécurisé', desc: 'Vous êtes toujours certain d&apos;accéder au vrai service, pas à une copie.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group cursor-default">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF3B30] to-[#FF6B50] flex items-center justify-center font-bold text-white group-hover:shadow-lg group-hover:shadow-[#FF3B30]/30 transition-all">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="absolute left-1/2 top-10 w-0.5 h-12 bg-gradient-to-b from-[#FF3B30]/30 to-transparent transform -translate-x-1/2" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-[#999999] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title-accent text-3xl md:text-4xl font-bold mb-16">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'L&apos;adresse change vraiment ?',
                a: 'Oui, pour des raisons de sécurité. Ce hub vous permet d&apos;accéder à la vraie adresse en permanence.'
              },
              {
                q: 'Comment je suis sûr que c&apos;est officiel ?',
                a: 'Vérifiez l&apos;URL et mettez en favoris. C&apos;est la seule source officielle autorisée.'
              },
              {
                q: 'Vous collectez mes données ?',
                a: 'Non. Ce hub ne collecte aucune donnée. Zéro cookie, zéro tracker.'
              },
              {
                q: 'Y a-t-il une app mobile ?',
                a: 'Cliquez sur "Installer l&apos;app" pour installer CinePurge comme PWA sur votre mobile.'
              },
              {
                q: 'Y a-t-il des frais ?',
                a: 'CinePurge est 100% gratuit. Aucun abonnement, aucun frais caché.'
              },
              {
                q: 'Ça marche sur tous les appareils ?',
                a: 'Oui. Téléphone, tablette, ordinateur, TV — tout fonctionne.'
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="glass-card card-glow-hover group p-5 rounded-lg border border-[rgba(255,255,255,0.055)] cursor-pointer"
              >
                <summary className="font-semibold flex justify-between items-center select-none">
                  <span className="group-hover:text-accent transition-colors">{faq.q}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform duration-200">▼</span>
                </summary>
                <p className="text-sm text-[#999999] mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-lg text-[#999999] mb-8 max-w-2xl mx-auto">
            Accédez maintenant à CinePurge et découvrez des milliers de films, séries et animés.
          </p>
          <a
            href="https://cinepurge.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            <Play size={20} />
            Aller sur CinePurge
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
