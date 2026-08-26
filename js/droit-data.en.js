/* ============================================================
   Partneris Immobilier — Legal framework for investment by country
   Informational summary (2026) — always verify current regulations
   with a local professional before any commitment. Investment
   thresholds for residence programs change regularly.
   ============================================================ */

var DROIT_DATA = [
  // ================= EUROPE =================
  {
    id:"CH", name:"Switzerland", region:"Europe",
    acces:"Restricted for non-residents outside the EU/EFTA (Lex Koller).",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA nationals domiciled in Switzerland: near-free access. Outside the EU/EFTA: formal cantonal authorization mandatory for a primary residence; pure rental real estate very limited.",
    structure:"Direct purchase possible for residents; specific structures (funds, cantonal authorization) for non-residents.",
    visa:"No residence-by-real-estate-investment program.",
    notes:"2026 reform: resale obligation within 2 years upon leaving Switzerland, reduced quotas for second homes. See our dedicated page on investing in Switzerland."
  },
  {
    id:"FR", name:"France", region:"Europe",
    acces:"Open — no general restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality or residence condition to buy.",
    structure:"Purchase in your own name, SCI (property holding company) or company possible depending on wealth and estate planning strategy.",
    visa:"No golden visa linked to real estate; the \"talent passport\" visa exists for other forms of investment.",
    notes:"Taxation: IFI (wealth tax on real estate) above €1.3M of net real estate assets, social contributions on rental income for non-residents (check the applicable tax treaty)."
  },
  {
    id:"DE", name:"Germany", region:"Europe",
    acces:"Open — no restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name or via a company (GmbH) to optimize taxation and succession.",
    visa:"No real estate golden visa.",
    notes:"Rent control (Mietpreisbremse) in major cities; notary fees and transfer tax (Grunderwerbsteuer) 3.5–6.5% depending on the Land."
  },
  {
    id:"ES", name:"Spain", region:"Europe",
    acces:"Open — full freedom, except specific military and border zones.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase, with a NIE number mandatory for any foreign buyer.",
    visa:"Spanish Golden Visa abolished for real estate since April 2025; other residence routes (non-lucrative, entrepreneur) remain available.",
    notes:"Non-resident income tax (IRNR) on rent; capital gains subject to a 3% withholding tax on the price for non-residents."
  },
  {
    id:"IT", name:"Italy", region:"Europe",
    acces:"Open subject to reciprocity with the country of origin (automatic for the EU and most Western countries).",
    accesNiveau:"ouvert",
    nationalite:"Reciprocity principle — to be checked for nationalities outside the EU/USA/Switzerland.",
    structure:"Direct purchase in your own name is the most common route.",
    visa:"Investor Visa for Italy (from €250k in a start-up or €2M in government bonds — real estate alone does not open this visa).",
    notes:"Attractive flat-tax regime for new wealthy residents (\"flat tax\" of €200k/year on foreign income)."
  },
  {
    id:"PT", name:"Portugal", region:"Europe",
    acces:"Open — no restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition; a tax number (NIF) is mandatory.",
    structure:"Direct purchase in your own name or via a company.",
    visa:"Golden Visa still active but refocused since 2023 on investment funds and job creation — direct real estate purchase no longer qualifies for the visa.",
    notes:"NHR (non-habitual resident) regime heavily restricted since 2024 — check eligibility on a case-by-case basis."
  },
  {
    id:"GB", name:"United Kingdom", region:"Europe",
    acces:"Open — one of the most liberal markets in the world.",
    accesNiveau:"ouvert",
    nationalite:"No nationality or residence condition.",
    structure:"Direct purchase or via a company (often used for estate and tax optimization).",
    visa:"Tier 1 Investor Visa abolished in 2022; no residence route linked to real estate.",
    notes:"Stamp Duty Land Tax increased by 2% for non-resident buyers, on top of the second-home surcharge (+5%)."
  },
  {
    id:"IE", name:"Ireland", region:"Europe",
    acces:"Open — no general restriction.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"Immigrant Investor Programme suspended since 2023.",
    notes:"Very tight rental market in Dublin; rent control in the \"Rent Pressure Zones\"."
  },
  {
    id:"NL", name:"Netherlands", region:"Europe",
    acces:"Open — no restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name or via a company (BV).",
    visa:"No real estate golden visa.",
    notes:"Extended rent control law (Wet betaalbare huur); several cities restrict buy-to-let purchases in certain neighborhoods (\"opkoopbescherming\")."
  },
  {
    id:"BE", name:"Belgium", region:"Europe",
    acces:"Open — no restriction.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name is the most common route.",
    visa:"No real estate golden visa.",
    notes:"Registration duties vary by region (Wallonia, Flanders, Brussels) — from 3% to 12.5%."
  },
  {
    id:"AT", name:"Austria", region:"Europe",
    acces:"Restricted in certain Länder (prior authorization for non-EU buyers, especially for second homes).",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA nationals: easier access. Outside the EU: regional authorization required depending on the Land.",
    structure:"Direct purchase possible, administrative authorization in some cases.",
    visa:"Direct investment residence program (from €3M, job creation) — not specific to real estate.",
    notes:"Vienna remains tightly regulated for second homes."
  },
  {
    id:"LU", name:"Luxembourg", region:"Europe",
    acces:"Open — no restriction.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"No real estate golden visa.",
    notes:"Among the most expensive markets in Europe; favorable holding taxation."
  },
  {
    id:"GR", name:"Greece", region:"Europe",
    acces:"Open — no general restriction (except sensitive border zones, which require military authorization).",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition to buy.",
    structure:"Direct purchase in your own name.",
    visa:"Golden Visa active: €250,000 in less-pressured zones, up to €800,000 in Athens, Thessaloniki and tourist islands. Renewable residence permit with no minimum stay requirement.",
    notes:"One of the most accessible golden visas in Europe in 2026."
  },
  {
    id:"MT", name:"Malta", region:"Europe",
    acces:"Restricted — AIP (Acquisition of Immovable Property) permit required outside designated zones for non-EU non-residents.",
    accesNiveau:"restreint",
    nationalite:"EU nationals residing in Malta for 5 years: free access. Others: AIP permit or purchase in a designated zone (Special Designated Areas).",
    structure:"Direct purchase in a designated zone with no restriction; AIP permit elsewhere.",
    visa:"Malta Permanent Residence Programme from €350–600k (purchase) or minimum annual rent + contribution.",
    notes:"Accelerated naturalization possible via a separate investment program (contribution + real estate)."
  },
  {
    id:"PL", name:"Poland", region:"Europe",
    acces:"Open for EU/EFTA nationals; a permit from the Ministry of the Interior is required for others (mainly for land).",
    accesNiveau:"ouvert",
    nationalite:"EU/EFTA: free. Outside the EU: authorization for agricultural/forest land, apartments generally free.",
    structure:"Direct purchase in your own name is the most common route.",
    visa:"No real estate golden visa.",
    notes:"Strongly growing rental market in major cities (Warsaw, Kraków, Wrocław)."
  },
  {
    id:"RO", name:"Romania", region:"Europe",
    acces:"Restricted — land is reserved for Romanian nationals and EU citizens; others must go through a company.",
    accesNiveau:"restreint",
    nationalite:"EU: access to land authorized. Outside the EU: land acquisition via a Romanian company.",
    structure:"A Romanian company is recommended to secure the acquisition for non-EU buyers.",
    visa:"No real estate golden visa.",
    notes:"Apartments in co-ownership (without a significant land share) remain more simply accessible."
  },
  {
    id:"HU", name:"Hungary", region:"Europe",
    acces:"Open for housing; authorization required for agricultural land.",
    accesNiveau:"ouvert",
    nationalite:"No strict condition for buying housing.",
    structure:"Direct purchase in your own name.",
    visa:"\"Guest Investor\" Program: sovereign bonds from €250,000 or a regulated real estate fund, granting a renewable 2-year residence permit.",
    notes:"No minimum physical presence requirement to maintain the status."
  },
  {
    id:"CZ", name:"Czech Republic", region:"Europe",
    acces:"Restricted for land outside the EU — easier access for apartments in co-ownership.",
    accesNiveau:"restreint",
    nationalite:"EU nationals and spouses of Czech citizens: free access. Others: a Czech company is recommended for land.",
    structure:"A local company (s.r.o.) is often used by non-EU buyers.",
    visa:"No real estate golden visa.",
    notes:"The Prague market is in very high demand from international investors."
  },
  {
    id:"HR", name:"Croatia", region:"Europe",
    acces:"Restricted outside the EU — approval from the Ministry of Justice required (can take up to 12 months).",
    accesNiveau:"restreint",
    nationalite:"EU: free access subject to reciprocity. Outside the EU: ministerial approval or a Croatian company.",
    structure:"A Croatian company: a faster alternative to ministerial approval.",
    visa:"No real estate golden visa.",
    notes:"Coastal areas (Istria, Dalmatia) are highly sought after for seasonal rentals."
  },
  {
    id:"BG", name:"Bulgaria", region:"Europe",
    acces:"Restricted for land — reserved for Bulgarian nationals and Bulgarian legal entities.",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA: access to housing. Land: a Bulgarian company is required for all foreigners, including EU nationals.",
    structure:"A Bulgarian company (OOD) is widely used for land acquisition.",
    visa:"Former investment program suspended.",
    notes:"High yields along the coast and in Sofia, market still affordable."
  },
  {
    id:"CY", name:"Cyprus", region:"Europe",
    acces:"Open with approval from the Council of Ministers for non-EU buyers beyond one property.",
    accesNiveau:"restreint",
    nationalite:"EU: free access. Outside the EU: authorization required, generally granted for one residential property.",
    structure:"Direct purchase after administrative authorization.",
    visa:"Permanent residence permit from €300,000 of real estate investment (category F/6.2).",
    notes:"Attractive taxation for retirees and non-domiciled residents."
  },
  {
    id:"TR", name:"Turkey", region:"Middle East",
    acces:"Open subject to reciprocity — most nationalities can buy freely outside military zones.",
    accesNiveau:"ouvert",
    nationalite:"Reciprocity required with the country of origin (the case for the vast majority of Western countries).",
    structure:"Direct purchase in your own name is the most common route.",
    visa:"Turkish citizenship by investment from 400,000 USD of real estate, with a 3-year holding commitment.",
    notes:"One of the most accessible real estate citizenship-by-investment programs in the world."
  },

  // ================= NORTH AMERICA =================
  {
    id:"US", name:"United States", region:"North America",
    acces:"Open — no general federal restriction on residential foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition to buy (sector-specific restrictions on agricultural land in some states).",
    structure:"Purchase in your own name, LLC or trust — the structure strongly impacts non-residents' estate tax exposure.",
    visa:"EB-5 (green card) from 800,000 USD creating jobs — a standard rental property alone is not eligible.",
    notes:"FIRPTA: 15% withholding tax on the sale price when resold by a non-resident."
  },
  {
    id:"CA", name:"Canada", region:"North America",
    acces:"Restricted — federal ban on residential purchases by non-residents/non-Canadians (Prohibition on the Purchase of Residential Property by Non-Canadians Act), plus provincial restrictions.",
    accesNiveau:"restreint",
    nationalite:"Permanent residents and citizens: free access. Non-residents: residential purchase largely restricted until 2027 (the ban has been extended), limited exceptions.",
    structure:"Commercial real estate and certain new-build projects remain accessible depending on the province.",
    visa:"No real estate golden visa; separate provincial investor programs (Quebec, etc.).",
    notes:"Prince Edward Island has historically limited non-residents to 5 acres without a permit. Check the status of the federal moratorium before any project."
  },

  // ================= LATIN AMERICA =================
  {
    id:"MX", name:"Mexico", region:"Latin America",
    acces:"Restricted in the \"restricted zone\" (100 km from borders, 50 km from coasts) — access via fideicomiso or company.",
    accesNiveau:"restreint",
    nationalite:"No restriction outside the restricted zone.",
    structure:"Fideicomiso (bank trust, renewable 50 years) or a Mexican company for the restricted zone.",
    visa:"Temporary/permanent resident visa possible by proof of income or investment (not specifically real estate).",
    notes:"A tightly regulated but well-proven structure — most tourist-area resales (Riviera Maya, Los Cabos) go through a fideicomiso."
  },
  {
    id:"BR", name:"Brazil", region:"Latin America",
    acces:"Restricted in border and national security zones; open elsewhere.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition outside sensitive zones.",
    structure:"Direct purchase in your own name or via a Brazilian company.",
    visa:"Investor visa (VIPER) from around 1 million BRL of real estate investment (reduced amount in the North/Northeast).",
    notes:"The real estate investor visa remains one of the most accessible residence routes in South America."
  },
  {
    id:"AR", name:"Argentina", region:"Latin America",
    acces:"Open — no restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"No dedicated golden visa, but \"rentista\" residence is possible with proof of income.",
    notes:"A market historically attractive to international investors in US dollars."
  },
  {
    id:"CO", name:"Colombia", region:"Latin America",
    acces:"Open — no general restriction.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"\"M\" investor visa from around 100,000 USD, or retiree/rentier visa depending on income.",
    notes:"Medellín and Bogotá concentrate most of the international rental demand."
  },
  {
    id:"PA", name:"Panama", region:"Latin America",
    acces:"Restricted within 10 km of the borders; easier access in designated coastal tourist zones.",
    accesNiveau:"ouvert",
    nationalite:"No restriction outside border zones.",
    structure:"Direct purchase in your own name.",
    visa:"\"Qualified Investor\" Program from 300,000 USD of real estate, fast-tracked permanent residence.",
    notes:"One of the fastest real estate investor visas in the Americas (a few months)."
  },
  {
    id:"CR", name:"Costa Rica", region:"Latin America",
    acces:"Open — same rights as nationals, except the maritime-terrestrial zone (200m coastal strip, concession required).",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name; a Costa Rican company for the maritime-terrestrial zone.",
    visa:"Investor Attraction Law: residence from 150,000 USD of real estate investment.",
    notes:"A stable legal framework, highly popular with North American and European investors."
  },
  {
    id:"DO", name:"Dominican Republic", region:"Latin America",
    acces:"Open — no restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"CONFOTUR Law: significant tax exemptions on approved tourism projects; facilitated residence for investors.",
    notes:"One of the most incentivizing tax regimes in the Caribbean for tourism real estate."
  },
  {
    id:"UY", name:"Uruguay", region:"Latin America",
    acces:"Open — no restriction, treatment identical to nationals.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"Facilitated tax residence via real estate investment (around 400,000 USD) or job creation.",
    notes:"Legal stability recognized as among the best in Latin America."
  },

  // ================= MIDDLE EAST / AFRICA =================
  {
    id:"AE", name:"United Arab Emirates", region:"Middle East",
    acces:"Restricted to designated freehold zones (Dubai, Abu Dhabi) — outside these zones, ownership is reserved for GCC nationals.",
    accesNiveau:"restreint",
    nationalite:"All nationalities eligible within freehold zones.",
    structure:"Direct purchase in your own name within designated zones.",
    visa:"Golden Visa (10 years) from AED 2 million (~545,000 USD) of real estate investment; 2-year investor visa from AED 750,000.",
    notes:"0% tax on rental income and capital gains for individuals; DLD transfer fee of 4%."
  },
  {
    id:"SA", name:"Saudi Arabia", region:"Middle East",
    acces:"Historically restricted — except for the gradual opening in Mecca/Medina, designated Vision 2030 zones under development.",
    accesNiveau:"restreint",
    nationalite:"Access being expanded as part of ongoing reform (2024-2026); check status zone by zone.",
    structure:"Local support essential, the framework is still evolving.",
    visa:"Premium Residency (\"Iqama Mumayaza\") linked to investment, distinct from a simple real estate purchase.",
    notes:"A high-potential market but with a regulatory framework still under construction — heightened caution recommended."
  },
  {
    id:"MA", name:"Morocco", region:"Africa",
    acces:"Open for urban property — authorization required for agricultural land.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition for urban properties.",
    structure:"Direct purchase in your own name is the most common route.",
    visa:"No dedicated golden visa; a facilitated residence card for significant investors.",
    notes:"Moroccan exchange controls to anticipate for repatriating income and capital."
  },
  {
    id:"EG", name:"Egypt", region:"Africa",
    acces:"Open for most residential and tourist zones.",
    accesNiveau:"ouvert",
    nationalite:"Certain zones (notably Sinai) subject to authorization.",
    structure:"Direct purchase in your own name.",
    visa:"Facilitated residence for real estate investment from around 100,000 USD (thresholds vary by decree).",
    notes:"Exchange controls and fluctuation of the Egyptian pound to factor into the yield analysis."
  },
  {
    id:"MU", name:"Mauritius", region:"Africa",
    acces:"Open via dedicated programs (PDS, Smart City, Ground+2) — direct purchase outside a program very limited.",
    accesNiveau:"restreint",
    nationalite:"All nationalities eligible via approved programs.",
    structure:"Purchase within a project certified by the Economic Development Board.",
    visa:"Permanent residence permit granted automatically from 375,000 USD invested (PDS/Smart City).",
    notes:"Very favorable taxation: 15% flat tax, no inheritance tax."
  },
  {
    id:"ZA", name:"South Africa", region:"Africa",
    acces:"Open — no general restriction on foreign ownership.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name or via a company.",
    visa:"Financially independent residence visa linked to net worth, not strictly to real estate.",
    notes:"South African exchange controls (South African Reserve Bank) to anticipate for cross-border flows."
  },

  // ================= ASIA / PACIFIC =================
  {
    id:"JP", name:"Japan", region:"Asia",
    acces:"Open — no restriction on land ownership, including for non-residents.",
    accesNiveau:"ouvert",
    nationalite:"No nationality or residence condition.",
    structure:"Direct purchase in your own name, no visa or residence permit required.",
    visa:"No golden visa; the \"Business Manager Visa\" exists for actively operating a property.",
    notes:"One of the most open markets in the world for foreign investors, including non-residents."
  },
  {
    id:"SG", name:"Singapore", region:"Asia",
    acces:"Open for condominiums; restricted for landed property (single-family homes).",
    accesNiveau:"restreint",
    nationalite:"Permanent residents and citizens: broader access. Foreigners: condominiums accessible, landed property subject to authorization.",
    structure:"Direct purchase for condominiums.",
    visa:"No real estate golden visa; a separate Global Investor Programme (economic activity, not pure real estate).",
    notes:"Additional Buyer's Stamp Duty (ABSD) can reach 60% of the price for foreign buyers."
  },
  {
    id:"HK", name:"Hong Kong", region:"Asia",
    acces:"Open — no restriction on purchase by non-residents.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition.",
    structure:"Direct purchase in your own name.",
    visa:"No real estate golden visa currently.",
    notes:"Additional transfer duties (Buyer's Stamp Duty 15%) for non-permanent residents."
  },
  {
    id:"TH", name:"Thailand", region:"Asia",
    acces:"Restricted — direct land ownership is prohibited for foreigners; condominiums are accessible.",
    accesNiveau:"restreint",
    nationalite:"No specific restriction for condominiums (collective quota of 49% of a building's total floor area).",
    structure:"Condominium co-ownership (49% max per building), a Thai company (49% max foreign participation), or a renewable 30-year leasehold.",
    visa:"Thailand Elite Visa (long-term residence by subscription, not directly linked to real estate).",
    notes:"Using a company structure or a long-term lease are the most common solutions for single-family homes."
  },
  {
    id:"MY", name:"Malaysia", region:"Asia",
    acces:"Open subject to minimum price thresholds set by each state (often 1 million MYR for foreigners).",
    accesNiveau:"restreint",
    nationalite:"No nationality restriction, but price thresholds vary by state.",
    structure:"Direct purchase in your own name above the local minimum threshold.",
    visa:"Malaysia My Second Home (MM2H): long-term residence linked to financial deposits and wealth eligibility (criteria tightened since 2021).",
    notes:"Kuala Lumpur and Penang concentrate most of the foreign demand."
  },
  {
    id:"ID", name:"Indonesia", region:"Asia",
    acces:"Restricted — no full land ownership for foreigners; right of use (Hak Pakai) for up to 80 years.",
    accesNiveau:"restreint",
    nationalite:"All nationalities eligible for Hak Pakai with a valid residence permit.",
    structure:"Hak Pakai (right of use) or a PT PMA company for structured commercial/rental use.",
    visa:"Second Home Visa from 2 billion IDR (~130,000 USD) of deposit or assets, 5- or 10-year residence.",
    notes:"Bali remains the most dynamic market, with a Hak Pakai framework now well structured for foreigners."
  },
  {
    id:"PH", name:"Philippines", region:"Asia",
    acces:"Restricted — land is reserved for nationals; condominiums are accessible (40% quota per building).",
    accesNiveau:"restreint",
    nationalite:"No specific restriction for condominiums within the collective quota limit.",
    structure:"Condominium co-ownership or a long-term lease (up to 50 years, renewable) for single-family homes.",
    visa:"Special Resident Retiree's Visa (SRRV) linked to a deposit/investment, distinct from a direct real estate purchase.",
    notes:"Manila and Cebu concentrate most of the foreign investment in condominiums."
  },
  {
    id:"VN", name:"Vietnam", region:"Asia",
    acces:"Restricted — renewable 50-year lease, 30% quota of units per building for foreigners.",
    accesNiveau:"restreint",
    nationalite:"No nationality restriction within the quota limits.",
    structure:"Long-term lease in projects eligible for foreigners, verified via the pink certificate.",
    visa:"No real estate golden visa; separate investor visas linked to business creation.",
    notes:"Ho Chi Minh City and Hanoi concentrate most of the projects open to foreigners."
  },
  {
    id:"KH", name:"Cambodia", region:"Asia",
    acces:"Open for co-owned upper floors (excluding the ground floor) — land reserved for nationals.",
    accesNiveau:"restreint",
    nationalite:"No nationality restriction for floor co-ownership.",
    structure:"Full ownership (\"strata title\") possible for co-owned units from the 1st floor and above.",
    visa:"No dedicated golden visa; a business visa (E visa) easily renewable.",
    notes:"One of the few Southeast Asian markets offering full co-ownership to foreigners."
  },
  {
    id:"IN", name:"India", region:"Asia",
    acces:"Open for NRI (Non-Resident Indians) and OCI (Overseas Citizens of India); very restricted for other foreigners.",
    accesNiveau:"restreint",
    nationalite:"NRI/OCI: free access to residential and commercial property. Other nationalities: purchase almost impossible except via long-term residence.",
    structure:"Direct purchase for NRI/OCI; long-term lease (up to 99 years) for others.",
    visa:"No real estate golden visa for non-NRI.",
    notes:"A market mainly accessible to the Indian diaspora as part of a direct investment strategy."
  },
  {
    id:"AU", name:"Australia", region:"Pacific",
    acces:"Restricted — Foreign Investment Review Board (FIRB) approval mandatory for any purchase by a non-resident.",
    accesNiveau:"restreint",
    nationalite:"Permanent residents: free access. Non-residents: FIRB mandatory, generally limited to new-build.",
    structure:"Direct purchase after FIRB approval; higher stamp duty for foreigners (surcharge up to 8% depending on the state).",
    visa:"Australian golden visa (Significant/Premium Investor Visa) abolished in 2024 — new, more restrictive investment routes.",
    notes:"Since 2025, additional restrictions on the purchase of existing homes by non-residents in several areas."
  },
  {
    id:"NZ", name:"New Zealand", region:"Pacific",
    acces:"Very restricted — general ban on residential purchases by non-residents since 2018.",
    accesNiveau:"restreint",
    nationalite:"New Zealand and Australian citizens/residents: free access. Other nationalities: residential purchase prohibited except for exceptions (free trade agreements, e.g. Singapore).",
    structure:"Commercial real estate and certain large-scale new developments remain accessible under OIO conditions.",
    visa:"No real estate golden visa — the Active Investor Plus Visa exists but excludes direct residential real estate.",
    notes:"One of the most closed markets in the developed world for non-resident foreign investors."
  },
  {
    id:"GE", name:"Georgia", region:"Asia",
    acces:"Open — no restriction on foreign ownership of residential property.",
    accesNiveau:"ouvert",
    nationalite:"No nationality condition (agricultural land remains restricted).",
    structure:"Direct purchase in your own name.",
    visa:"Facilitated residence through real estate investment from 100,000 USD.",
    notes:"One of the most open and fastest-access markets for international investors."
  },
];

function droitParId(id){
  return DROIT_DATA.find(function(d){ return d.id === id; });
}
