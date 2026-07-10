// Zrkadlo Python katalógu (trades/catalog.py + engine/regions.py) pre UI.
// Pozor: keď pribudne remeslo/región na backende, dopíš ho aj sem.
// (Kópia z frontend/src/lib/catalog.ts — táto statická stránka je samostatný build.)

export type Trade = { key: string; labelSk: string; labelDe: string };

export const TRADES: Trade[] = [
  { key: "elektrikar", labelSk: "Elektrikár", labelDe: "Elektromontage / Elektrotechnik" },
  { key: "tesar", labelSk: "Tesár", labelDe: "Zimmerei / Holzbau" },
  { key: "maliar", labelSk: "Maliar", labelDe: "Maler / Lackierer" },
  { key: "klampiar", labelSk: "Klampiar", labelDe: "Klempner / Spengler" },
  { key: "zvarac", labelSk: "Zvárač", labelDe: "Metallbau / Schweißtechnik" },
];

export const REGIONS: string[] = [
  "Berlin", "Hamburg", "München", "Köln", "Frankfurt am Main", "Stuttgart",
  "Düsseldorf", "Dortmund", "Essen", "Hannover", "Nürnberg", "Leipzig",
  "Dresden", "Bremen",
];

export const tradeLabel = (key: string | null | undefined): string =>
  TRADES.find((t) => t.key === key)?.labelSk ?? key ?? "—";

// Zrkadlo predajných balíkov (app/plans.py). Pri zmene kvót dopíš aj tam (zdroj pravdy je backend).
export type Plan = {
  key: string;
  name: string;
  priceEur: number;
  leads: number;
  emails: number;
  followUp: boolean;
};

export const PLANS: Record<string, Plan> = {
  start: { key: "start", name: "Štart", priceEur: 300, leads: 300, emails: 300, followUp: false },
  profi: { key: "profi", name: "Profi", priceEur: 400, leads: 500, emails: 500, followUp: false },
  premium: { key: "premium", name: "Premium", priceEur: 500, leads: 800, emails: 1600, followUp: true },
};

export const planFor = (key: string | null | undefined): Plan =>
  PLANS[key ?? "start"] ?? PLANS.start;
