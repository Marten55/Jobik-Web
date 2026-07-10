// Adresa platenej appky (login / dashboard). Tá beží samostatne (Vercel), NIE na tomto
// statickom webe. Odkazy „Prihlásiť sa / Už mám účet" preto smerujú absolútne sem.
// Prepíš cez NEXT_PUBLIC_APP_URL, ak sa doména appky zmení.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://jobik.admtechnics.sk";
