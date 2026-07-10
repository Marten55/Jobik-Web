import type { NextConfig } from "next";

// Statický export pre GitHub Pages. `output: "export"` vygeneruje čisté HTML do `out/`.
// basePath sa nastaví cez env len pri deployi na projektovú Pages URL (napr. /Jobik);
// pri vlastnej doméne (subdoména cez CNAME) ostane prázdny.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

const nextConfig: NextConfig = {
  output: "export",
  // next/image nemá na statickom exporte optimalizačný server → servuj obrázky ako sú.
  images: { unoptimized: true },
  // GitHub Pages servuje /demo ako /demo/index.html — trailing slash zaručí správne cesty.
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
