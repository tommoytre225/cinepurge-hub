export default function DMCA() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Avis DMCA</h1>
          <p className="text-xl text-muted">
            Procédure pour signaler les violations de droits d'auteur.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">1. À propos du DMCA</h2>
            <p className="text-muted mb-4">
              CinePurge respecte les droits d'auteur et la propriété intellectuelle d'autrui. En conformité avec le Digital Millennium Copyright Act (DMCA), nous mettons en place une procédure pour traiter les réclamations relatives aux violations de droits d'auteur.
            </p>
            <p className="text-muted">
              Veuillez noter que <strong>ce hub ne contient pas de contenu soumis à droits d'auteur</strong>. C'est un portail d'information uniquement. Les signalements concernant la plateforme CinePurge elle-même doivent être adressés à CinePurge directement.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">2. Comment signaler une violation</h2>
            <p className="text-muted mb-4">
              Si vous pensez qu'une violation de droit d'auteur a lieu, veuillez envoyer un avis DMCA à :
            </p>
            <div className="bg-black/50 backdrop-blur border border-[#374151] rounded-lg p-6 space-y-3">
              <p><strong>Email :</strong> <span className="text-primary">dmca@cinepurge.app</span></p>
              <p><strong>Adresse postale :</strong></p>
              <p className="text-muted">CinePurge Legal Department</p>
              <p className="text-muted">Paris, France</p>
            </div>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">3. Contenu de l'avis DMCA</h2>
            <p className="text-muted mb-4">
              Votre notification doit inclure les informations suivantes :
            </p>
            <ul className="space-y-4">
              {[
                'Une identification physique ou électronique de l\'œuvre protégée par le droit d\'auteur',
                'Une description claire du contenu violant le droit d\'auteur et de sa localisation',
                'Vos nom, adresse, téléphone et adresse électronique complets',
                'Une déclaration selon laquelle vous avez de bonnes raisons de croire que l\'utilisation n\'est pas autorisée',
                'Une déclaration, sous peine de parjure, attestant de l\'exactitude des informations',
                'Votre signature électronique ou physique',
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-primary flex-shrink-0">→</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">4. Procédure de traitement</h2>
            <p className="text-muted mb-4">
              À la réception d'une notification DMCA valide :
            </p>
            <ol className="space-y-3 text-muted ml-4">
              <li>1. Nous vérifierons la validité de la réclamation</li>
              <li>2. Nous prendrons les mesures appropriées en cas de violation confirmée</li>
              <li>3. Nous notifierons le contrevenant de la réclamation</li>
              <li>4. Nous conserverons une trace de la réclamation</li>
            </ol>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">5. Réclamations contre-productives</h2>
            <p className="text-muted mb-4">
              Les fausses réclamations DMCA sont passibles de poursuites judiciaires selon la loi fédérale. Si vous n'êtes pas certain qu'une violation a eu lieu, consultez un avocat avant d'envoyer une notification.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">6. Objections aux notifications DMCA</h2>
            <p className="text-muted mb-4">
              Si votre contenu a été supprimé suite à une notification DMCA et que vous pensez que c'était une erreur, vous pouvez envoyer un contre-avis à :
            </p>
            <p className="text-muted bg-black/50 backdrop-blur border border-[#374151] rounded-lg p-4">
              <strong>counter-dmca@cinepurge.app</strong>
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">7. Avis important</h2>
            <div className="bg-black/50 backdrop-blur border border-primary/30 rounded-lg p-6 space-y-3">
              <p className="text-muted">
                <strong className="text-primary">Rappel :</strong> Ce hub ne contient pas de contenu soumis à droits d'auteur. Si votre problème concerne du contenu sur la plateforme CinePurge elle-même, vous devez contacter CinePurge directement.
              </p>
              <p className="text-muted">
                Les abus de la procédure DMCA peuvent entraîner des poursuites légales.
              </p>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur border border-[#374151] rounded-lg p-8 text-center">
            <p className="text-lg font-semibold mb-2">Dernière mise à jour</p>
            <p className="text-muted">{new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
