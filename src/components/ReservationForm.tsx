"use client";

import { useState } from "react";
import { TRADES, PLANS } from "@/lib/catalog";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const PERIODS = [
  { value: "1", label: "1 mesiac" },
  { value: "3", label: "3 mesiace" },
  { value: "6", label: "6 mesiacov" },
  { value: "12", label: "12 mesiacov" },
];

export function ReservationForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    ico: "",
    dic: "",
    trade: TRADES[0].key,
    region: "",
    domain: "",
    fromEmail: "",
    plan: "start",
    period: "1",
    note: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setStatus("err");
      setMsg("Bez súhlasu s odosielaním z tvojej adresy (UWG §7) nevieme rezerváciu spracovať.");
      return;
    }
    setStatus("sending");
    setMsg("");

    const plan = PLANS[form.plan];
    const details = [
      "— REZERVÁCIA / OBJEDNÁVKA —",
      `Balík: ${plan?.name ?? form.plan} (${plan?.priceEur ?? "?"} € / mes. bez DPH)`,
      `Obdobie: ${form.period} mes.`,
      `IČO: ${form.ico || "—"}   DIČ: ${form.dic || "—"}`,
      `Odosielacia doména: ${form.domain || "—"}`,
      `E-mail odosielateľa: ${form.fromEmail || "—"}`,
      `Súhlas UWG §7 (odosielanie z vlastnej adresy): ${consent ? "áno" : "NIE"}`,
      form.note ? `Poznámka: ${form.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch(`${API_BASE}/api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          trade: form.trade,
          region: form.region,
          message: details,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || `Chyba ${res.status}`);
      }
      setStatus("ok");
      setMsg("Ďakujeme! Ozveme sa ti, pošleme faktúru a po úhrade spustíme onboarding.");
    } catch (err) {
      setStatus("err");
      setMsg(err instanceof Error ? err.message : "Neznáma chyba");
    }
  }

  if (status === "ok") {
    return (
      <div className="card text-center">
        <div className="mb-2 text-2xl">✅</div>
        <h2 className="mb-1 text-lg font-semibold">Rezervácia odoslaná</h2>
        <p className="text-sm text-muted">{msg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card">
      {status === "err" && (
        <div className="mb-3 rounded-lg bg-err/15 px-3 py-2 text-sm text-err">{msg}</div>
      )}

      {/* Firma a kontakt */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Firma</label>
          <input
            className="input" value={form.company}
            onChange={(e) => set("company", e.target.value)} placeholder="Novák s.r.o."
          />
        </div>
        <div>
          <label className="label">Kontaktná osoba</label>
          <input
            className="input" value={form.name}
            onChange={(e) => set("name", e.target.value)} placeholder="Ján Novák"
          />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">E-mail *</label>
          <input
            className="input" type="email" required value={form.email}
            onChange={(e) => set("email", e.target.value)} placeholder="jan@novak.sk"
          />
        </div>
        <div>
          <label className="label">Telefón</label>
          <input
            className="input" value={form.phone}
            onChange={(e) => set("phone", e.target.value)} placeholder="+421 9xx xxx xxx"
          />
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">IČO</label>
          <input
            className="input" value={form.ico} inputMode="numeric"
            onChange={(e) => set("ico", e.target.value)} placeholder="12345678"
          />
        </div>
        <div>
          <label className="label">DIČ / IČ DPH</label>
          <input
            className="input" value={form.dic}
            onChange={(e) => set("dic", e.target.value)} placeholder="SK2020..."
          />
        </div>
      </div>

      {/* Zacielenie */}
      <label className="label">Remeslo</label>
      <select className="input" value={form.trade} onChange={(e) => set("trade", e.target.value)}>
        {TRADES.map((t) => (
          <option key={t.key} value={t.key}>
            {t.labelSk} — {t.labelDe}
          </option>
        ))}
      </select>

      <label className="label">Cieľové mestá / regióny v Nemecku</label>
      <input
        className="input" value={form.region}
        onChange={(e) => set("region", e.target.value)} placeholder="napr. München, Stuttgart, Bavorsko"
      />

      {/* Odosielanie */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Odosielacia doména</label>
          <input
            className="input" value={form.domain}
            onChange={(e) => set("domain", e.target.value)} placeholder="vasafirma.de"
          />
        </div>
        <div>
          <label className="label">E-mail odosielateľa</label>
          <input
            className="input" value={form.fromEmail}
            onChange={(e) => set("fromEmail", e.target.value)} placeholder="info@vasafirma.de"
          />
        </div>
      </div>

      {/* Balík */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Balík</label>
          <select className="input" value={form.plan} onChange={(e) => set("plan", e.target.value)}>
            {Object.values(PLANS).map((p) => (
              <option key={p.key} value={p.key}>
                {p.name} — {p.priceEur} € / mes.
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Fakturačné obdobie</label>
          <select
            className="input" value={form.period}
            onChange={(e) => set("period", e.target.value)}
          >
            {PERIODS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
      </div>

      <label className="label">Poznámka — čo robíš a akého klienta hľadáš (nepovinné)</label>
      <textarea
        className="input min-h-20" value={form.note}
        onChange={(e) => set("note", e.target.value)}
        placeholder="Pomôže nám presnejšie vytriediť firmy…"
      />

      {/* Súhlas */}
      <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm text-muted">
        <input
          type="checkbox" checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-accent"
        />
        <span>
          Súhlasím, aby Jobík posielal obchodné e-maily z mojej domény, a preberám zodpovednosť za
          oprávnenosť oslovenia podľa nemeckého práva (UWG §7). Bez tohto súhlasu odosielanie
          nespustíme.
        </span>
      </label>

      <button type="submit" disabled={status === "sending"} className="btn mt-4 w-full">
        {status === "sending" ? "Odosielam…" : "Rezervovať miesto"}
      </button>
      <p className="mt-2 text-center text-xs text-muted">
        Nezáväzné odoslanie. Ozveme sa ti a pošleme faktúru — platíš až potom. Odoslaním súhlasíš{" "}
        <a href="/vop" className="text-accent hover:underline">
          so Všeobecnými obchodnými podmienkami
        </a>
        .
      </p>
    </form>
  );
}
