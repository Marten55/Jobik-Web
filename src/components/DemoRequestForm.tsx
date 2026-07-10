"use client";

import { useState } from "react";
import { TRADES } from "@/lib/catalog";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export function DemoRequestForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    trade: TRADES[0].key,
    region: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch(`${API_BASE}/api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail || `Chyba ${res.status}`);
      }
      setStatus("ok");
      setMsg("Ďakujeme! Ozveme sa ti čo najskôr a pripravíme ti demo.");
    } catch (err) {
      setStatus("err");
      setMsg(err instanceof Error ? err.message : "Neznáma chyba");
    }
  }

  if (status === "ok") {
    return (
      <div className="card text-center">
        <div className="mb-2 text-2xl">✅</div>
        <h2 className="mb-1 text-lg font-semibold">Žiadosť odoslaná</h2>
        <p className="text-sm text-muted">{msg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card">
      {status === "err" && (
        <div className="mb-3 rounded-lg bg-err/15 px-3 py-2 text-sm text-err">{msg}</div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Meno</label>
          <input
            className="input" value={form.name}
            onChange={(e) => set("name", e.target.value)} placeholder="Ján Novák"
          />
        </div>
        <div>
          <label className="label">Firma</label>
          <input
            className="input" value={form.company}
            onChange={(e) => set("company", e.target.value)} placeholder="Novák s.r.o."
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

      <label className="label mt-3">Aké práce ťa zaujímajú?</label>
      <select
        className="input" value={form.trade}
        onChange={(e) => set("trade", e.target.value)}
      >
        {TRADES.map((t) => (
          <option key={t.key} value={t.key}>{t.labelSk} — {t.labelDe}</option>
        ))}
      </select>

      <label className="label mt-3">Región v Nemecku (nepovinné)</label>
      <input
        className="input" value={form.region}
        onChange={(e) => set("region", e.target.value)} placeholder="napr. München, Bavorsko…"
      />

      <label className="label mt-3">Správa (nepovinné)</label>
      <textarea
        className="input min-h-20" value={form.message}
        onChange={(e) => set("message", e.target.value)}
        placeholder="Napíš nám, čo presne hľadáš…"
      />

      <button type="submit" disabled={status === "sending"} className="btn mt-4 w-full">
        {status === "sending" ? "Odosielam…" : "Chcem demo zadarmo"}
      </button>
      <p className="mt-2 text-center text-xs text-muted">
        Žiadny záväzok. Ozveme sa ti a pripravíme krátke demo na tvoje remeslo.
      </p>
    </form>
  );
}
