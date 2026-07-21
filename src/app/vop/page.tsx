import Link from "next/link";
import { Logo } from "@/components/Logo";
import { APP_URL } from "@/lib/site";

export const metadata = {
  title: "Všeobecné obchodné podmienky — Jobík",
  description:
    "Všeobecné obchodné podmienky poskytovania služby Jobík spoločnosťou ADM Technics s.r.o.",
};

type Section = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

const SECTIONS: Section[] = [
  {
    title: "1. Úvodné ustanovenia",
    paragraphs: [
      "1.1 Tieto všeobecné obchodné podmienky (ďalej len „VOP“) upravujú práva a povinnosti medzi spoločnosťou ADM Technics s.r.o., so sídlom Vasiľov 5, 029 51 Lokca, IČO 53950364, DIČ 2121532160, zapísanou v Obchodnom registri Okresného súdu Žilina, oddiel Sro, vložka č. 77718/L (ďalej len „Poskytovateľ“), a jej zákazníkom (ďalej len „Objednávateľ“) pri poskytovaní webovej aplikácie Jobík (ďalej len „Služba“).",
      "1.2 Objednávateľom môže byť výlučne fyzická alebo právnická osoba konajúca v rámci svojej podnikateľskej činnosti (živnostník, obchodná spoločnosť a pod.). Služba nie je určená spotrebiteľom. Zmluvný vzťah medzi Poskytovateľom a Objednávateľom sa riadi zákonom č. 513/1991 Zb. Obchodný zákonník v znení neskorších predpisov a nevzťahujú sa naň ustanovenia zákona č. 250/2007 Z. z. o ochrane spotrebiteľa ani zákona č. 102/2014 Z. z. o ochrane spotrebiteľa pri predaji na diaľku, vrátane práva odstúpiť od zmluvy do 14 dní.",
      "1.3 Odoslaním Objednávky alebo registráciou účtu Objednávateľ potvrdzuje, že sa s týmito VOP oboznámil, súhlasí s nimi a spĺňa podmienku podľa bodu 1.2.",
      "1.4 Kontakt na Poskytovateľa: info@admtechnics.sk, +421 949 410 044, admtechnics.sk.",
    ],
  },
  {
    title: "2. Definícia pojmov",
    list: [
      "Služba / Aplikácia Jobík — webová aplikácia dostupná na jobik.admtechnics.sk, ktorá na základe zvoleného remesla a regiónu vyhľadáva nemecké firmy, vyhodnocuje ich relevantnosť a v mene Objednávateľa im odosiela personalizované e-maily z jeho vlastnej e-mailovej domény.",
      "Balík — konkrétny rozsah Služby (počet vyhľadaných firiem a odoslaných e-mailov za mesiac, prípadne funkcia automatickej pripomienky), ktorého aktuálna ponuka a cena je uvedená v aplikácii pri výbere balíka.",
      "Predplatné obdobie — obdobie (1, 3, 6 alebo 12 mesiacov), na ktoré si Objednávateľ Balík objedná a zaplatí.",
      "Objednávka — úkon, ktorým si Objednávateľ v aplikácii vyberie Balík a Predplatné obdobie.",
    ],
  },
  {
    title: "3. Predmet Služby",
    paragraphs: [
      "3.1 Poskytovateľ sa zaväzuje v rozsahu zvoleného Balíka: (a) vyhľadať nemecké firmy zodpovedajúce zvolenému remeslu a regiónu z verejne dostupných zdrojov (najmä Google Places), (b) posúdiť ich relevantnosť automatizovaným (AI) vyhodnotením, (c) vygenerovať a z e-mailovej domény Objednávateľa odoslať personalizované e-maily oslovujúce tieto firmy, v rozsahu kvóty zvoleného Balíka.",
      "3.2 Poskytovateľ negarantuje konkrétny počet odpovedí, obchodných stretnutí ani uzavretých zákaziek — záväzok Poskytovateľa sa vzťahuje na rozsah a funkčnosť Služby (počet vyhľadaných firiem a odoslaných e-mailov), nie na obchodný výsledok Objednávateľa.",
      "3.3 Súčasťou Služby pri Balíku s funkciou pripomienky (follow-up) je aj jedna automatická pripomienka firmám, ktoré na prvý e-mail neodpovedali, v rozsahu uvedenom pri danom Balíku.",
    ],
  },
  {
    title: "4. Uzavretie zmluvy",
    paragraphs: [
      "4.1 Zmluvný vzťah vzniká zaregistrovaním účtu v aplikácii a potvrdením Objednávky Objednávateľom, ktorá je následne potvrdená vystavením faktúry zo strany Poskytovateľa.",
      "4.2 Objednávateľ je povinný pri registrácii/Objednávke uviesť pravdivé fakturačné údaje (obchodné meno, IČO, sídlo, prípadne DIČ/IČ DPH) a kontaktné údaje.",
      "4.3 Poskytovateľ si vyhradzuje právo Objednávku odmietnuť, najmä ak Objednávateľ v minulosti podstatne porušil tieto VOP alebo neuhradil predchádzajúcu faktúru.",
    ],
  },
  {
    title: "5. Cena a platobné podmienky",
    paragraphs: [
      "5.1 Ceny Balíkov sú uvedené v aplikácii bez DPH. Poskytovateľ je platiteľom DPH; k cene sa pripočítava DPH v aktuálne platnej sadzbe (v čase vydania týchto VOP 23 %).",
      "5.2 Platba prebieha bezhotovostným bankovým prevodom na základe faktúry vystavenej Poskytovateľom, so štandardnou lehotou splatnosti 14 dní, pokiaľ nie je na faktúre uvedené inak.",
      "5.3 Služba sa aktivuje alebo predlžuje po pripísaní platby na účet Poskytovateľa. Do pripísania platby nie je Poskytovateľ povinný Službu v danom rozsahu poskytovať.",
      "5.4 Predplatné sa neobnovuje automaticky — po uplynutí zaplateného Predplatného obdobia zadá Objednávateľ novú Objednávku, ak chce v Službe pokračovať.",
    ],
  },
  {
    title: "6. Trvanie a ukončenie zmluvy",
    paragraphs: [
      "6.1 Zmluva sa uzatvára na Objednávateľom zvolené Predplatné obdobie a zaniká jeho uplynutím, ak sa strany nedohodnú inak.",
      "6.2 Ktorákoľvek zo strán môže od zmluvy odstúpiť s okamžitou účinnosťou v prípade podstatného porušenia týchto VOP druhou stranou, ktoré nebolo napravené ani do 14 dní od doručenia písomnej výzvy.",
      "6.3 Poskytovateľ je oprávnený pozastaviť poskytovanie Služby, ak je Objednávateľ v omeškaní s úhradou faktúry o viac ako 14 dní, a to až do jej uhradenia.",
      "6.4 Zaplatené a nevyčerpané Predplatné obdobie sa pri odstúpení z dôvodu na strane Objednávateľa nevracia; to neplatí, ak k odstúpeniu došlo z dôvodu podstatného porušenia povinností Poskytovateľom.",
    ],
  },
  {
    title: "7. Práva a povinnosti Objednávateľa",
    paragraphs: [
      "7.1 Objednávateľ je povinný zabezpečiť vlastnú e-mailovú doménu, z ktorej sa budú e-maily odosielať, vrátane jej overenia (DKIM/SPF) potrebného na fungovanie Služby.",
      "7.2 Objednávateľ výslovne potvrdzuje a preberá plnú zodpovednosť za právny základ priameho oslovovania nemeckých firiem e-mailom podľa § 7 nemeckého zákona proti nekalej súťaži (Gesetz gegen den unlauteren Wettbewerb, UWG) a ďalších relevantných predpisov Nemeckej spolkovej republiky. Bez tohto potvrdenia Poskytovateľ odosielanie e-mailov nespustí.",
      "7.3 Objednávateľ nesmie Službu využívať na odosielanie obsahu, ktorý je klamlivý, protiprávny, alebo ktorý porušuje práva tretích osôb, ani ju sprístupniť tretej osobe bez súhlasu Poskytovateľa.",
      "7.4 Objednávateľ je povinný bezodkladne informovať Poskytovateľa o akejkoľvek zmene fakturačných alebo kontaktných údajov.",
    ],
  },
  {
    title: "8. Práva a povinnosti Poskytovateľa",
    paragraphs: [
      "8.1 Poskytovateľ sprístupní Objednávateľovi Službu v rozsahu zvoleného Balíka a poskytuje podporu prostredníctvom e-mailu info@admtechnics.sk.",
      "8.2 Poskytovateľ je oprávnený obmedziť alebo pozastaviť poskytovanie Služby, ak má dôvodné podozrenie, že Objednávateľ porušuje tieto VOP, právne predpisy, alebo že jej ďalšie poskytovanie by mohlo Poskytovateľovi či tretím osobám spôsobiť škodu.",
      "8.3 Poskytovateľ je oprávnený jednostranne meniť rozsah a funkcie Služby aj jednotlivých Balíkov; o podstatných zmenách, ktoré znevýhodňujú Objednávateľa, informuje vopred prostredníctvom e-mailu alebo v aplikácii.",
    ],
  },
  {
    title: "9. Ochrana osobných údajov",
    paragraphs: [
      "9.1 Pri vyhľadávaní a spracúvaní údajov o nemeckých firmách (najmä kontaktné a firemné údaje z verejne dostupných zdrojov) vystupuje Poskytovateľ ako prevádzkovateľ v zmysle Nariadenia (EÚ) 2016/679 (GDPR) / nemeckého DSGVO, na základe oprávneného záujmu podľa čl. 6 ods. 1 písm. f) GDPR. Dotknuté osoby majú právo namietať a požadovať výmaz svojich údajov.",
      "9.2 Osobné údaje samotného Objednávateľa (fakturačné a kontaktné údaje) spracúva Poskytovateľ v súlade so zákonom č. 18/2018 Z. z. o ochrane osobných údajov a GDPR, na účely plnenia zmluvy a fakturácie. Podrobnosti upravujú samostatné Zásady ochrany osobných údajov Poskytovateľa.",
      "9.3 Zodpovednosť za súlad samotného odoslania e-mailu (jeho obsahu a oprávnenosti oslovenia adresáta) s právom Nemeckej spolkovej republiky, najmä § 7 UWG, nesie výlučne Objednávateľ v súlade s bodom 7.2.",
    ],
  },
  {
    title: "10. Zodpovednosť za škodu",
    paragraphs: [
      "10.1 Poskytovateľ zodpovedá za škodu spôsobenú Objednávateľovi porušením svojich povinností podľa Obchodného zákonníka.",
      "10.2 Poskytovateľ nezodpovedá za: (a) obchodný výsledok Objednávateľa (počet odpovedí, získaných zákaziek), (b) obsah komunikácie, ktorá medzi Objednávateľom a oslovenou firmou prebehne po nadviazaní kontaktu, (c) výpadky alebo nedostupnosť služieb tretích strán (napr. Google, e-mailový server), (d) škodu vzniknutú v dôsledku porušenia právnych predpisov zo strany Objednávateľa, najmä podľa bodu 7.2.",
      "10.3 Celková zodpovednosť Poskytovateľa za škodu voči Objednávateľovi je v každom jednotlivom prípade obmedzená do výšky ceny zaplatenej Objednávateľom za posledné Predplatné obdobie.",
    ],
  },
  {
    title: "11. Reklamácie",
    paragraphs: [
      "11.1 Reklamácie týkajúce sa rozsahu alebo funkčnosti Služby uplatňuje Objednávateľ e-mailom na info@admtechnics.sk.",
      "11.2 Poskytovateľ reklamáciu vybaví najneskôr do 30 dní od jej doručenia.",
    ],
  },
  {
    title: "12. Dôvernosť",
    paragraphs: [
      "12.1 Zmluvné strany sa zaväzujú zachovávať mlčanlivosť o informáciách získaných v súvislosti s plnením zmluvy, ktoré majú povahu obchodného tajomstva alebo boli výslovne označené ako dôverné, a to aj po skončení zmluvného vzťahu.",
    ],
  },
  {
    title: "13. Duševné vlastníctvo",
    paragraphs: [
      "13.1 Aplikácia Jobík, jej softvér, dizajn a súvisiaci obsah sú predmetom autorských a iných práv Poskytovateľa. Objednávateľovi vzniká len právo Službu užívať v rozsahu zvoleného Balíka, nie žiadne vlastnícke ani licenčné práva presahujúce tento rozsah.",
    ],
  },
  {
    title: "14. Záverečné ustanovenia",
    paragraphs: [
      "14.1 Tieto VOP a zmluvný vzťah nimi upravený sa spravujú právnym poriadkom Slovenskej republiky.",
      "14.2 Spory vzniknuté zo zmluvného vzťahu rozhoduje vecne a miestne príslušný súd Slovenskej republiky.",
      "14.3 Poskytovateľ je oprávnený tieto VOP jednostranne meniť; zmena sa nedotýka Objednávok potvrdených pred nadobudnutím účinnosti zmeny. Aktuálne znenie VOP je vždy dostupné v aplikácii a na webe Poskytovateľa.",
      "14.4 Tieto VOP nadobúdajú platnosť a účinnosť dňom ich zverejnenia.",
    ],
  },
];

export default function VopPage() {
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

      <section className="mb-10">
        <span className="pill bg-accent/15 text-accent">Právne dokumenty</span>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-balance">
          Všeobecné obchodné podmienky
        </h1>
        <p className="mt-3 max-w-xl text-[15px] text-muted">
          Podmienky poskytovania služby Jobík spoločnosťou ADM Technics s.r.o. Vzťah medzi
          Poskytovateľom a Objednávateľom je vzťahom medzi podnikateľmi (B2B) podľa Obchodného
          zákonníka.
        </p>
      </section>

      {SECTIONS.map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">{section.title}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p} className="mb-2 text-sm text-muted">
              {p}
            </p>
          ))}
          {section.list && (
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
