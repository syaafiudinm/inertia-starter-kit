/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    // tambahkan env variables lain di sini kalau ada
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
    readonly glob: (pattern: string) => Record<string, () => Promise<any>>;
}
