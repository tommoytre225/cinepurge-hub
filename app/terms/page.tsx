export default function Terms() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Conditions Générales d'Utilisation</h1>
          <p className="text-xl text-foreground-muted">
            Conditions légales pour l'utilisation de CinePurge Hub.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">1. Acceptation des conditions</h2>
            <p className="text-foreground-muted">
              En accédant à ce site, vous acceptez l'intégralité de ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser ce site.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">2. Objet du site</h2>
            <p className="text-foreground-muted">
              CinePurge Hub est un portail d'information qui publie l'adresse actuelle de CinePurge et des informations générales sur le service. Ce site ne fournit pas le streaming de contenu lui-même.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">3. Responsabilité de l'éditeur</h2>
            <p className="text-foreground-muted mb-4">
              L'éditeur de ce site s'efforce de maintenir les informations à jour, exactes et complètes, mais <strong>ne garantit pas leur exactitude, intégralité ou actualité</strong> à tout moment.
            </p>
            <p className="text-foreground-muted">
              Les utilisateurs utilisent les informations fournies à leurs propres risques.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">4. Liens externes</h2>
            <p className="text-foreground-muted">
              Ce site contient des liens vers d'autres sites. L'éditeur <strong>n'accepte aucune responsabilité</strong> pour le contenu, l'exactitude ou les pratiques de ces sites externes.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">5. Utilisation autorisée</h2>
            <p className="text-foreground-muted mb-4">
              Vous acceptez d'utiliser ce site conformément à la loi. Les utilisations interdites incluent :
            </p>
            <ul className="space-y-3 text-foreground-muted ml-4">
              <li>❌ Toute activité illégale</li>
              <li>❌ Les attaques de sécurité (hacking, injections, etc.)</li>
              <li>❌ Le scraping ou l'extraction automatisée de contenu</li>
              <li>❌ La copie ou la reproduction non autorisée</li>
              <li>❌ Le spamming ou l'abus</li>
              <li>❌ Toute violation des droits d'autrui</li>
            </ul>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">6. Responsabilité de l'utilisateur</h2>
            <p className="text-foreground-muted">
              L'utilisateur est <strong>seul responsable</strong> de son utilisation de ce site et de la conformité avec les lois applicables. L'éditeur ne peut être tenu responsable de tout dommage découlant de l'utilisation du site.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">7. Disponibilité du service</h2>
            <p className="text-foreground-muted">
              Ce site peut subir des interruptions pour maintenance, mises à jour ou raisons techniques. L'éditeur n'est pas responsable des interruptions de service.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">8. Modifications des conditions</h2>
            <p className="text-foreground-muted">
              Ces conditions peuvent être modifiées à tout moment sans préavis. Les modifications entrent en vigueur immédiatement. L'utilisation continue du site après les modifications constitue l'acceptation des nouvelles conditions.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">9. Propriété intellectuelle</h2>
            <p className="text-foreground-muted">
              Tout le contenu de ce site (texte, images, logos, design) est protégé par les droits d'auteur. Aucune reproduction sans autorisation.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">10. Juridiction</h2>
            <p className="text-foreground-muted">
              Ces conditions sont régies par le droit suisse. En cas de litige, les tribunaux du canton de Zürich, Suisse, sont seuls compétents.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">11. Contact</h2>
            <p className="text-foreground-muted">
              Pour toute question ou réclamation, contactez-nous à <strong>legal@cinepurge.xyz</strong>.
            </p>
          </div>

          <div className="glass-card border border-[rgba(255,255,255,0.08)] rounded-lg p-8 text-center">
            <p className="text-lg font-semibold mb-2">Dernière mise à jour</p>
            <p className="text-foreground-muted">17 août 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
