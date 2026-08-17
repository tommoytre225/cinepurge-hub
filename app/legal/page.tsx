export default function Legal() {
  return (
    <div className="bg-[#070709] text-white min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black">Mentions légales</h1>
          <p className="text-[#999999]">Informations légales relatives au site CinePurge Hub.</p>
        </div>

        <div className="space-y-8">
          {/* Éditeur */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Éditeur du site</h2>
            <div className="text-[#999999] space-y-1">
              <p>CPG Media GmbH</p>
              <p>Bahnhofstrasse 42</p>
              <p>8001 Zürich, Suisse</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="text-[#999999] space-y-1">
              <p>Email: contact@cinepurge.xyz</p>
              <p>Formulaire de contact disponible sur le site.</p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Hébergement</h2>
            <div className="text-[#999999] space-y-1">
              <p>Cloudflare, Inc.</p>
              <p>101 Townsend St, San Francisco, CA 94107, USA</p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Propriété intellectuelle</h2>
            <p className="text-[#999999]">
              L'ensemble du contenu de ce site (textes, images, logos, interface) est la propriété
              de CPG Media GmbH ou de ses partenaires. Toute reproduction, distribution ou
              utilisation sans autorisation préalable est interdite.
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Limitation de responsabilité</h2>
            <p className="text-[#999999]">
              CPG Media GmbH ne saurait être tenu responsable des dommages directs ou indirects
              résultant de l'utilisation du site ou de l'impossibilité d'y accéder. Les informations
              fournies sur ce site le sont à titre indicatif et peuvent être modifiées sans préavis.
            </p>
          </div>

          {/* Droit applicable */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-6 space-y-3">
            <h2 className="text-xl font-bold">Droit applicable</h2>
            <p className="text-[#999999]">
              Le présent site et son contenu sont régis par le droit suisse. Tout litige relatif
              à l'utilisation du site sera soumis à la compétence exclusive des tribunaux du
              canton de Zürich, Suisse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
