// Shared in-memory store for mirrors (global singleton)
interface MirrorStore {
  primary: string;
  mirrors: string[];
  logs: any[];
}

const DEFAULT_STORE: MirrorStore = {
  primary: 'https://cinepurge.xyz/',
  mirrors: [],
  logs: [],
};

declare global {
  // eslint-disable-next-line no-var
  var __mirrorStore: MirrorStore | undefined;
}

if (!globalThis.__mirrorStore) {
  globalThis.__mirrorStore = { ...DEFAULT_STORE };
}

const store = globalThis.__mirrorStore;

export function getStore(): MirrorStore {
  return { ...store };
}

export function setPrimary(url: string): void {
  store.primary = url;
  addLog({ url, type: 'primary', action: 'set' });
}

export function addMirror(url: string): void {
  if (!store.mirrors.includes(url)) {
    store.mirrors.push(url);
    addLog({ url, type: 'mirror', action: 'added' });
  }
}

export function removeMirror(url: string): void {
  store.mirrors = store.mirrors.filter(m => m !== url);
  addLog({ url, type: 'mirror', action: 'removed' });
}

export function addLog(entry: any): void {
  const log = {
    timestamp: new Date().toISOString(),
    ...entry,
  };
  store.logs.unshift(log);
  // Keep only last 100 logs
  if (store.logs.length > 100) {
    store.logs = store.logs.slice(0, 100);
  }
}

export function reset(): void {
  globalThis.__mirrorStore = { ...DEFAULT_STORE };
}

export function getMirrors(): string[] {
  return [...store.mirrors];
}

export function getPrimary(): string {
  return store.primary;
}

export function getLogs(): any[] {
  return [...store.logs];
}
