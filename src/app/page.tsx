import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ReservationForm } from "@/components/ReservationForm";
import { PLANS } from "@/lib/catalog";
import { APP_URL } from "@/lib/site";

export const metadata = {
  title: "Jobík — nemecké zákazky pre tvoju remeselnú firmu",
  description:
    "Nájdeme ti nemecké firmy = tvojich klientov a oslovíme ich za teba personalizovaným e-mailom z tvojej vlastnej adresy. Vyber balík a rezervuj si miesto, alebo vyskúšaj demo zadarmo.",
};

const STEPS = [
  {
    title: "Povieš nám odbor a kam cieliš",
    body: "Vyberieš remeslo a nemecké mestá či regióny. Podľa toho ti Jobík vyhľadá reálne firmy aj s kontaktom.",
  },
  {
    title: "Jobík nájde a vytriedi firmy",
    body: "Zozbiera nemecké firmy, ktoré tvoje remeslo dopytujú. Umelá inteligencia každú posúdi — relevantný klient, alebo len šum. Tebe idú len tie relevantné.",
  },
  {
    title: "Rozošle e-maily z tvojej adresy",
    body: "Každý e-mail je v nemčine a prispôsobený tomu, čo firma robí — s tvojím podpisom a logom. Odchádza z tvojej domény, takže odpoveď príde priamo tebe.",
  },
  {
    title: "Ty riešiš len odpovede",
    body: "Kto odpíše, uvidíš na jednom mieste. Pri balíku Premium Jobík navyše pošle jednu zdvorilú pripomienku tým, čo sa neozvali.",
  },
];

const NEEDS = [
  "Údaje o firme — názov, IČO/DIČ, kontaktná osoba",
  "Odbor a cieľové nemecké regióny",
  "Doména, z ktorej sa má posielať (pomôžeme ti ju overiť)",
  "Podpis do e-mailu, prípadne logo",
  "Súhlas s odosielaním z tvojej adresy (UWG §7)",
];

export default function HomePage() {
  const plans = [PLANS.start, PLANS.profi, PLANS.premium];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-10 flex items-center justify-between">
        <Link href="/" aria-label="Jobík — domov">
          <Logo size={28} />
        </Link>
        <a href={`${APP_URL}/login`} className="text-sm text-muted hover:text-fg">
          Už mám účet
        </a>
      </header>

      {/* Hero */}
      <section className="mb-12">
        <span className="pill bg-accent/15 text-accent">O aplikácii Jobík</span>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-balance">
          Nemecké zákazky pre tvoju remeselnú firmu — bez toho, aby si zdvihol telefón
        </h1>
        <p className="mt-3 max-w-xl text-[15px] text-muted">
          Jobík za teba nájde nemecké firmy, ktoré si tvoje remeslo objednávajú ako subdodávku, a
          osloví ich personalizovaným e-mailom z tvojej vlastnej adresy. Ty riešiš len tie, čo
          odpovedia. Vyber si balík nižšie a rezervuj si miesto — ozveme sa a spustíme onboarding.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/demo" className="btn">Vyskúšaj demo zadarmo</Link>
          <a href="#rezervacia" className="btn-ghost text-sm">Rezervovať miesto</a>
        </div>
      </section>

      {/* Ako to funguje */}
      <section className="mb-12">
        <h2 className="mb-5 text-xl font-semibold">Ako to funguje</h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={i} className="card">
              <div className="mb-2 text-lg font-semibold text-accent tabular-nums">{i + 1}</div>
              <h3 className="mb-1 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Balíky */}
      <section className="mb-12">
        <h2 className="mb-1 text-xl font-semibold">Balíky</h2>
        <p className="mb-5 text-sm text-muted">
          Mesačné predplatné. Kvóta = koľko firiem nájdeme a koľko e-mailov za teba odošleme za
          mesiac. Nie si viazaný na dlhé obdobie.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {plans.map((p) => {
            const featured = p.key === "premium";
            return (
              <div
                key={p.key}
                className={`card flex flex-col ${featured ? "border-accent" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  {featured && (
                    <span className="pill bg-accent/15 text-accent">follow-up</span>
                  )}
                </div>
                <div className="mt-2 text-2xl font-semibold tabular-nums">
                  {p.priceEur} €
                  <span className="ml-1 text-xs font-normal text-muted">/ mes. bez DPH</span>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  <li className="tabular-nums">{p.leads} firiem / mesiac</li>
                  <li className="tabular-nums">{p.emails} e-mailov / mesiac</li>
                  <li>{p.followUp ? "vrátane pripomienok" : "bez pripomienok"}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-muted">
          K cene sa účtuje 23 % DPH. Platba prebieha bankovým prevodom na faktúru. Chceš si to
          najprv nezáväzne pozrieť?{" "}
          <Link href="/demo" className="text-accent hover:underline">
            Vyskúšaj demo zadarmo
          </Link>
          .
        </p>
      </section>

      {/* Čo potrebujeme */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Čo od teba potrebujeme</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {NEEDS.map((n, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted">
              <span className="text-accent">→</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Rezervačný formulár */}
      <section id="rezervacia" className="mb-6 scroll-mt-6">
        <h2 className="mb-1 text-xl font-semibold">Rezervačný list</h2>
        <p className="mb-5 text-sm text-muted">
          Vyplň, čo vieš — čím viac, tým rýchlejšie ťa naštartujeme. Nič sa neplatí hneď: ozveme sa
          ti, pošleme faktúru a po úhrade spustíme onboarding.
        </p>
        <ReservationForm />
      </section>

      <footer className="mt-12 border-t border-line pt-6 text-center text-xs text-muted">
        Jobík — prevádzkuje ADM Technics ·{" "}
        <a href={`${APP_URL}/login`} className="hover:text-fg">Prihlásenie</a>
      </footer>
    </div>
  );
}
