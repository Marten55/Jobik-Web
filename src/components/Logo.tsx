import Image from "next/image";

// Pomer strán ADM loga (320×132).
const LOGO_W = 320;
const LOGO_H = 132;

/**
 * Brand logo v hlavičke verejných stránok.
 *
 * DOČASNE: logo prevádzkovateľa (ADM Technics). Cieľ = white-label: každý klient
 * dostane vlastné logo. PNG má biele pozadie, preto je v bielej kartičke, aby čisto
 * sedelo na tmavej téme.
 */
export function Logo({
  size = 32,
  className = "",
}: {
  size?: number; // výška loga v px
  className?: string;
}) {
  const width = Math.round((size * LOGO_W) / LOGO_H);
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="inline-flex items-center rounded-md bg-white px-2 py-1.5">
        <Image
          src="/adm-logo.png"
          alt="ADM Technics"
          width={LOGO_W}
          height={LOGO_H}
          priority
          style={{ height: size, width }}
        />
      </span>
    </span>
  );
}
