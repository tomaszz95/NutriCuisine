/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECIPEID: string
  readonly VITE_RECIPEKEY: string
  readonly VITE_FOODID: string
  readonly VITE_FOODKEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
