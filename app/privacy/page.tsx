export default function Privacy() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Politique de Confidentialité</h1>
          <p className="text-xl text-muted">
            Transparence totale. Voici comment nous gérons vos données (ou plutôt, comment nous ne les collectons pas).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">1. Aucune collecte de données</h2>
            <p className="text-muted mb-4">
              <strong className="text-white">Ce hub ne collecte AUCUNE donnée personnelle.</strong>
            </p>
            <ul className="space-y-3 text-muted">
              <li>❌ Aucun cookie n'est créé</li>
              <li>❌ Aucun tracker n'est utilisé</li>
              <li>❌ Aucun compte utilisateur n'est demandé</li>
              <li>❌ Aucune analytique invasive</li>
              <li>❌ Aucun profil n'est créé</li>
            </ul>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">2. Stockage local du navigateur</h2>
            <p className="text-muted">
              La seule exception : si vous fermez la notification d'installation PWA, ce choix est sauvegardé dans le <code className="bg-black/50 px-2 py-1 rounded text-primary">localStorage</code> de votre navigateur. Cette donnée reste <strong>uniquement sur votre appareil</strong> et n'est jamais envoyée à nos serveurs.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">3. Logs serveur</h2>
            <p className="text-muted mb-4">
              Pour des raisons de sécurité technique, nos serveurs enregistrent automatiquement :
            </p>
            <ul className="space-y-2 text-muted ml-4">
              <li>• Adresse IP (de manière anonymisée)</li>
              <li>• Pages consultées</li>
              <li>• Timestamps des requêtes</li>
            </ul>
            <p className="text-muted mt-4">
              Ces logs sont automatiquement supprimés régulièrement et <strong>ne sont jamais utilisés pour créer un profil utilisateur</strong>.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">4. Ressources externes</h2>
            <p className="text-muted mb-4">
              Ce site utilise <strong>Google Fonts</strong> pour les polices d'écriture.
            </p>
            <p className="text-muted mb-4">
              Lorsque vous visitez cette page, votre navigateur se connecte directement aux serveurs de Google, qui voient votre adresse IP. <strong>Consultez la politique de confidentialité de Google</strong> pour en savoir plus sur comment ils traitent cette donnée.
            </p>
            <p className="text-muted">
              Nous ne contrôlons pas Google et ne sommes pas responsables de leurs pratiques de données.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">5. Quand vous accédez à CinePurge</h2>
            <p className="text-muted mb-4">
              <strong>Important :</strong> Cette politique de confidentialité ne s'applique qu'à ce hub. Une fois que vous accédez à CinePurge lui-même, <strong className="text-primary">c'est sa propre politique de confidentialité qui s'applique</strong>.
            </p>
            <p className="text-muted">
              Ce hub et la plateforme CinePurge sont gérés séparément pour cette raison précise : le hub reste minimaliste et sécurisé.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">6. Droits et transparence</h2>
            <p className="text-muted">
              Puisque nous ne collectons pas de données personnelles, il n'y a rien à demander, corriger ou supprimer. Si vous avez des questions sur cette politique, contactez-nous à <strong>privacy@cinepurge.app</strong>.
            </p>
          </div>

          <div className="border-t border-[#374151] pt-8">
            <h2 className="text-3xl font-bold mb-4">7. Modifications de cette politique</h2>
            <p className="text-muted">
              Cette politique peut être mise à jour à tout moment. Consultez cette page régulièrement pour rester informé.
            </p>
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
