import Link from "next/link";
import { Logo } from "@/components/Logo";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { APP_URL } from "@/lib/site";

export const metadata = {
  title: "Demo zadarmo — Jobík",
  description:
    "Vyskúšaj Jobík 3 dni zadarmo. Nájdeme ti nemecké firmy pre tvoje remeslo a naozaj ich oslovíme z tvojej adresy — až 15 e-mailov denne, bez záväzku.",
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" aria-label="Jobík — domov">
          <Logo size={28} />
        </Link>
        <a href={`${APP_URL}/login`} className="text-sm text-muted hover:text-fg">
          Už mám účet
        </a>
      </header>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Vyskúšaj Jobík zadarmo</h1>
        <p className="mt-2 text-sm text-muted">
          Nájdeme ti <strong className="text-fg">nemecké firmy = tvojich potenciálnych
          klientov</strong> pre tvoje remeslo, aj s kontaktom a krátkym „čo robia". V demo verzii
          ich za teba <strong className="text-fg">naozaj oslovíme</strong> personalizovaným
          e-mailom z tvojej vlastnej adresy — presne ako v plnej verzii, len bezplatne a v malom.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-muted">
          <li>✅ 3 dni zadarmo, bez záväzku</li>
          <li>✅ reálne nemecké firmy pre tvoje remeslo</li>
          <li>✅ až 15 reálnych oslovení denne z tvojej domény</li>
        </ul>
        <p className="mt-3 text-sm text-muted">
          Aby sme mohli posielať z tvojej adresy, spolu ti overíme doménu a nastavíme právny
          základ (nem. UWG §7) — prevedieme ťa tým. Vyplň formulár a ozveme sa.
        </p>
        <p className="mt-3 text-sm text-muted">
          Chceš rovno objednať?{" "}
          <Link href="/" className="text-accent hover:underline">Pozri balíky a rezervuj miesto</Link>.
        </p>
      </div>

      <DemoRequestForm />
    </div>
  );
}
