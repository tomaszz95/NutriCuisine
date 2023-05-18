/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECIPEID: string
  readonly VITE_RECIPEKEY: string
  readonly VITE_FOODID: string
  readonly VITE_FOODKEY: string
  readonly VITE_APIKEY: string
  readonly VITE_AUTHDOMAIN: string
  readonly VITE_APPID: string
  readonly VITE_PROJECTID: string
  readonly VITE_STORAGEBUCKET: string
  readonly VITE_MESSAGINGSENDERID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
