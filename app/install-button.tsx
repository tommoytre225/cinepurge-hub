"use client";

export function InstallButton() {
  const handleInstall = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  };

  return (
    <button onClick={handleInstall} className="btn-secondary flex items-center justify-center gap-2">
      📱 Installer l&apos;app
    </button>
  );
}
