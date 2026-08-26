/* ============================================================
   Partneris Immobilier — Cadre légal de l'investissement par pays
   Synthèse à visée informative (2026) — vérifiez toujours la
   réglementation en vigueur avec un professionnel local avant
   tout engagement. Les seuils d'investissement pour les
   programmes de résidence évoluent régulièrement.
   ============================================================ */

var DROIT_DATA = [
  // ================= EUROPE =================
  {
    id:"CH", name:"Suisse", region:"Europe",
    acces:"Restreint pour les non-résidents hors UE/AELE (Lex Koller).",
    accesNiveau:"restreint",
    nationalite:"Ressortissants UE/AELE domiciliés en Suisse : accès quasi libre. Hors UE/AELE : autorisation cantonale formelle obligatoire pour la résidence principale ; immobilier de rendement pur très limité.",
    structure:"Achat direct possible pour les résidents ; structures spécifiques (fonds, autorisation cantonale) pour les non-résidents.",
    visa:"Aucun programme de résidence par investissement immobilier.",
    notes:"Réforme 2026 : obligation de revente sous 2 ans en cas de départ de Suisse, quotas réduits pour résidences secondaires. Voir notre page dédiée à l'investissement en Suisse."
  },
  {
    id:"FR", name:"France", region:"Europe",
    acces:"Ouvert — aucune restriction générale à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité ou de résidence pour acheter.",
    structure:"Achat en nom propre, SCI ou société possible selon la stratégie patrimoniale et successorale.",
    visa:"Pas de golden visa lié à l'immobilier ; le visa « passeport talent » existe pour d'autres formes d'investissement.",
    notes:"Fiscalité : IFI au-delà de 1.3M€ de patrimoine immobilier net, prélèvements sociaux sur les revenus locatifs des non-résidents (convention fiscale à vérifier)."
  },
  {
    id:"DE", name:"Allemagne", region:"Europe",
    acces:"Ouvert — aucune restriction à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre ou via société (GmbH) pour optimiser la fiscalité et la transmission.",
    visa:"Pas de golden visa immobilier.",
    notes:"Encadrement des loyers (Mietpreisbremse) dans les grandes villes ; frais de notaire et droits de mutation (Grunderwerbsteuer) 3.5–6.5% selon le Land."
  },
  {
    id:"ES", name:"Espagne", region:"Europe",
    acces:"Ouvert — liberté totale, sauf zones militaires et frontalières spécifiques.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct avec numéro NIE obligatoire pour tout acquéreur étranger.",
    visa:"Golden Visa espagnole supprimée pour l'immobilier depuis avril 2025 ; d'autres voies de résidence (non lucrative, entrepreneur) restent disponibles.",
    notes:"Impôt sur le revenu des non-résidents (IRNR) sur les loyers ; plus-value soumise à retenue à la source de 3% du prix pour les non-résidents."
  },
  {
    id:"IT", name:"Italie", region:"Europe",
    acces:"Ouvert sous condition de réciprocité avec le pays d'origine (automatique pour UE et la majorité des pays occidentaux).",
    accesNiveau:"ouvert",
    nationalite:"Principe de réciprocité — à vérifier pour les nationalités hors UE/USA/Suisse.",
    structure:"Achat direct en nom propre le plus courant.",
    visa:"Investor Visa for Italy (à partir de 250k€ en start-up ou 2M€ en obligations d'État — l'immobilier seul n'ouvre pas ce visa).",
    notes:"Régime fiscal forfaitaire attractif pour nouveaux résidents fortunés (« flat tax » 200k€/an sur revenus étrangers)."
  },
  {
    id:"PT", name:"Portugal", region:"Europe",
    acces:"Ouvert — aucune restriction à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité ; numéro fiscal (NIF) obligatoire.",
    structure:"Achat direct en nom propre ou via société.",
    visa:"Golden Visa toujours active mais recentrée depuis 2023 sur les fonds d'investissement et la création d'emploi — l'achat immobilier direct n'ouvre plus droit au visa.",
    notes:"Régime NHR (non-habitual resident) fortement restreint depuis 2024 — vérifier l'éligibilité au cas par cas."
  },
  {
    id:"GB", name:"Royaume-Uni", region:"Europe",
    acces:"Ouvert — marché parmi les plus libéraux au monde.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité ou de résidence.",
    structure:"Achat direct ou via société (souvent utilisé pour l'optimisation successorale et fiscale).",
    visa:"Tier 1 Investor Visa supprimé en 2022 ; aucune voie de résidence liée à l'immobilier.",
    notes:"Stamp Duty Land Tax majoré de 2% pour les acheteurs non-résidents, en sus de la surtaxe résidence secondaire (+5%)."
  },
  {
    id:"IE", name:"Irlande", region:"Europe",
    acces:"Ouvert — aucune restriction générale.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Immigrant Investor Programme suspendu depuis 2023.",
    notes:"Marché locatif très tendu à Dublin ; encadrement des loyers dans les « Rent Pressure Zones »."
  },
  {
    id:"NL", name:"Pays-Bas", region:"Europe",
    acces:"Ouvert — aucune restriction à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre ou société (BV).",
    visa:"Pas de golden visa immobilier.",
    notes:"Loi sur l'encadrement des loyers étendue (Wet betaalbare huur) ; plusieurs villes limitent l'achat locatif dans certains quartiers (« opkoopbescherming »)."
  },
  {
    id:"BE", name:"Belgique", region:"Europe",
    acces:"Ouvert — aucune restriction.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre le plus courant.",
    visa:"Pas de golden visa immobilier.",
    notes:"Droits d'enregistrement variables selon la région (Wallonie, Flandre, Bruxelles) — de 3% à 12.5%."
  },
  {
    id:"AT", name:"Autriche", region:"Europe",
    acces:"Restreint dans certains Länder (autorisation préalable pour non-UE, notamment résidences secondaires).",
    accesNiveau:"restreint",
    nationalite:"Ressortissants UE/AELE : accès facilité. Hors UE : autorisation régionale requise selon le Land.",
    structure:"Achat direct possible, autorisation administrative dans certains cas.",
    visa:"Programme de résidence par investissement direct (dès 3M€, création d'emploi) — non spécifique à l'immobilier.",
    notes:"Vienne reste très encadrée pour les résidences secondaires."
  },
  {
    id:"LU", name:"Luxembourg", region:"Europe",
    acces:"Ouvert — aucune restriction.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Pas de golden visa immobilier.",
    notes:"Marché parmi les plus chers d'Europe ; fiscalité de détention avantageuse."
  },
  {
    id:"GR", name:"Grèce", region:"Europe",
    acces:"Ouvert — aucune restriction générale (zones frontalières sensibles exceptées, autorisation militaire).",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité pour l'achat.",
    structure:"Achat direct en nom propre.",
    visa:"Golden Visa active : 250 000€ dans les zones moins tendues, jusqu'à 800 000€ à Athènes, Thessalonique et îles touristiques. Permis de résidence renouvelable sans obligation de séjour.",
    notes:"L'un des golden visa les plus accessibles d'Europe en 2026."
  },
  {
    id:"MT", name:"Malte", region:"Europe",
    acces:"Restreint — permis AIP (Acquisition of Immovable Property) requis hors zones désignées pour non-résidents UE.",
    accesNiveau:"restreint",
    nationalite:"Ressortissants UE résidant à Malte depuis 5 ans : accès libre. Autres : permis AIP ou achat en zone désignée (Special Designated Areas).",
    structure:"Achat direct en zone désignée sans restriction ; permis AIP ailleurs.",
    visa:"Malta Permanent Residence Programme dès 350–600k€ (achat) ou loyer annuel minimum + contribution.",
    notes:"Naturalisation accélérée possible via programme d'investissement distinct (contribution + immobilier)."
  },
  {
    id:"PL", name:"Pologne", region:"Europe",
    acces:"Ouvert pour les ressortissants UE/AELE ; permis du ministère de l'Intérieur requis pour les autres (biens fonciers surtout).",
    accesNiveau:"ouvert",
    nationalite:"UE/AELE : libre. Hors UE : autorisation pour terrains agricoles/forestiers, appartements généralement libres.",
    structure:"Achat direct en nom propre le plus courant.",
    visa:"Pas de golden visa immobilier.",
    notes:"Marché locatif en forte croissance dans les grandes villes (Varsovie, Cracovie, Wrocław)."
  },
  {
    id:"RO", name:"Roumanie", region:"Europe",
    acces:"Restreint — le terrain est réservé aux ressortissants roumains et citoyens UE ; les autres doivent passer par une société.",
    accesNiveau:"restreint",
    nationalite:"UE : accès au terrain autorisé. Hors UE : acquisition de terrain via société roumaine.",
    structure:"Société roumaine recommandée pour sécuriser l'acquisition hors UE.",
    visa:"Pas de golden visa immobilier.",
    notes:"Les appartements en copropriété (sans quote-part de terrain significative) restent accessibles plus simplement."
  },
  {
    id:"HU", name:"Hongrie", region:"Europe",
    acces:"Ouvert pour les logements ; autorisation pour le foncier agricole.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition stricte pour l'achat de logements.",
    structure:"Achat direct en nom propre.",
    visa:"Programme « Guest Investor » : obligations souveraines dès 250 000€ ou fonds immobilier réglementé, donnant droit à un permis de résidence de 2 ans renouvelable.",
    notes:"Aucune obligation de présence physique minimale pour conserver le statut."
  },
  {
    id:"CZ", name:"République tchèque", region:"Europe",
    acces:"Restreint pour le foncier hors UE — accès facilité pour les logements en copropriété.",
    accesNiveau:"restreint",
    nationalite:"UE et conjoints de citoyens tchèques : accès libre. Autres : société tchèque recommandée pour le foncier.",
    structure:"Société locale (s.r.o.) souvent utilisée par les acquéreurs hors UE.",
    visa:"Pas de golden visa immobilier.",
    notes:"Marché de Prague très demandé par les investisseurs internationaux."
  },
  {
    id:"HR", name:"Croatie", region:"Europe",
    acces:"Restreint hors UE — approbation du Ministère de la Justice requise (délai pouvant atteindre 12 mois).",
    accesNiveau:"restreint",
    nationalite:"UE : accès libre sous réserve de réciprocité. Hors UE : approbation ministérielle ou société croate.",
    structure:"Société croate : alternative rapide à l'approbation ministérielle.",
    visa:"Pas de golden visa immobilier.",
    notes:"Zones côtières (Istrie, Dalmatie) très recherchées pour la location saisonnière."
  },
  {
    id:"BG", name:"Bulgarie", region:"Europe",
    acces:"Restreint pour le terrain — réservé aux ressortissants bulgares et personnes morales bulgares.",
    accesNiveau:"restreint",
    nationalite:"UE/AELE : accès aux logements. Terrain : société bulgare nécessaire pour tous les étrangers, UE compris.",
    structure:"Société bulgare (OOD) largement utilisée pour l'acquisition foncière.",
    visa:"Ancien programme d'investissement suspendu.",
    notes:"Rendements élevés sur le littoral et à Sofia, marché encore abordable."
  },
  {
    id:"CY", name:"Chypre", region:"Europe",
    acces:"Ouvert avec autorisation du Conseil des ministres pour les non-UE au-delà d'un bien.",
    accesNiveau:"restreint",
    nationalite:"UE : accès libre. Hors UE : autorisation requise, généralement accordée pour un bien résidentiel.",
    structure:"Achat direct après autorisation administrative.",
    visa:"Permis de résidence permanent dès 300 000€ d'investissement immobilier (catégorie F/6.2).",
    notes:"Fiscalité attractive pour retraités et non-domiciliés."
  },
  {
    id:"TR", name:"Turquie", region:"Moyen-Orient",
    acces:"Ouvert sous réciprocité — la plupart des nationalités peuvent acheter librement hors zones militaires.",
    accesNiveau:"ouvert",
    nationalite:"Réciprocité requise avec le pays d'origine (le cas pour la grande majorité des pays occidentaux).",
    structure:"Achat direct en nom propre le plus courant.",
    visa:"Citoyenneté turque par investissement dès 400 000 USD d'immobilier, avec engagement de conservation de 3 ans.",
    notes:"L'un des programmes de citoyenneté par investissement immobilier les plus accessibles au monde."
  },

  // ================= AMÉRIQUE DU NORD =================
  {
    id:"US", name:"États-Unis", region:"Amérique du Nord",
    acces:"Ouvert — aucune restriction fédérale générale à la propriété étrangère résidentielle.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité pour l'achat (restrictions sectorielles sur terres agricoles dans certains États).",
    structure:"Achat en nom propre, LLC ou trust — la structure impacte fortement la fiscalité successorale (estate tax) des non-résidents.",
    visa:"EB-5 (green card) dès 800 000 USD créant des emplois — l'immobilier locatif classique n'y est pas éligible seul.",
    notes:"FIRPTA : retenue à la source de 15% sur le prix de vente lors de la revente par un non-résident."
  },
  {
    id:"CA", name:"Canada", region:"Amérique du Nord",
    acces:"Restreint — interdiction fédérale d'achat résidentiel par des non-résidents/non-citoyens (Loi sur l'interdiction d'achat d'immeubles résidentiels par des non-Canadiens), plus restrictions provinciales.",
    accesNiveau:"restreint",
    nationalite:"Résidents permanents et citoyens : accès libre. Non-résidents : achat résidentiel largement restreint jusqu'en 2027 (loi prolongée), exceptions limitées.",
    structure:"L'immobilier commercial et certains projets neufs restent accessibles selon la province.",
    visa:"Pas de golden visa immobilier ; programmes d'investisseurs provinciaux distincts (Québec, etc.).",
    notes:"Île-du-Prince-Édouard limite historiquement les non-résidents à 5 acres sans permis. Vérifier l'évolution du moratoire fédéral avant tout projet."
  },

  // ================= AMÉRIQUE LATINE =================
  {
    id:"MX", name:"Mexique", region:"Amérique latine",
    acces:"Restreint dans la « zone restreinte » (100 km des frontières, 50 km des côtes) — accès via fideicomiso ou société.",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction hors zone restreinte.",
    structure:"Fideicomiso (fiducie bancaire, 50 ans renouvelables) ou société mexicaine pour la zone restreinte.",
    visa:"Visa de résident temporaire/permanent possible par justification de revenus ou d'investissement (non spécifiquement immobilier).",
    notes:"Structure très encadrée mais largement éprouvée — la majorité des reventes touristiques (Riviera Maya, Los Cabos) passent par fideicomiso."
  },
  {
    id:"BR", name:"Brésil", region:"Amérique latine",
    acces:"Restreint dans les zones frontalières et de sécurité nationale ; ouvert ailleurs.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité hors zones sensibles.",
    structure:"Achat direct en nom propre ou société brésilienne.",
    visa:"Visa investisseur (VIPER) dès environ 1 million BRL d'investissement immobilier (montant réduit dans le Nord/Nord-Est).",
    notes:"Le visa investisseur immobilier reste l'une des voies de résidence les plus accessibles d'Amérique du Sud."
  },
  {
    id:"AR", name:"Argentine", region:"Amérique latine",
    acces:"Ouvert — aucune restriction à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Pas de golden visa dédié, mais résidence « rentista » possible avec revenus justifiés.",
    notes:"Marché historiquement attractif pour les investisseurs internationaux en dollars."
  },
  {
    id:"CO", name:"Colombie", region:"Amérique latine",
    acces:"Ouvert — aucune restriction générale.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Visa « M » investisseur dès environ 100 000 USD, ou visa retraité/rentier selon revenus.",
    notes:"Medellín et Bogotá concentrent l'essentiel de la demande locative internationale."
  },
  {
    id:"PA", name:"Panama", region:"Amérique latine",
    acces:"Restreint à 10 km des frontières ; accès facilité en zones touristiques côtières désignées.",
    accesNiveau:"ouvert",
    nationalite:"Aucune restriction hors zones frontalières.",
    structure:"Achat direct en nom propre.",
    visa:"Programme « Qualified Investor » dès 300 000 USD d'immobilier, résidence permanente rapide.",
    notes:"L'un des visas investisseurs immobiliers les plus rapides des Amériques (quelques mois)."
  },
  {
    id:"CR", name:"Costa Rica", region:"Amérique latine",
    acces:"Ouvert — mêmes droits que les nationaux, sauf zone maritime terrestre (bande littorale de 200m, concession requise).",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre ; société costaricienne pour la zone maritime terrestre.",
    visa:"Loi d'attraction d'investisseurs : résidence dès 150 000 USD d'investissement immobilier.",
    notes:"Cadre juridique stable, très prisé des investisseurs nord-américains et européens."
  },
  {
    id:"DO", name:"République dominicaine", region:"Amérique latine",
    acces:"Ouvert — aucune restriction à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Loi CONFOTUR : exonérations fiscales importantes sur les projets touristiques approuvés ; résidence facilitée pour investisseurs.",
    notes:"Régime fiscal parmi les plus incitatifs des Caraïbes pour l'immobilier touristique."
  },
  {
    id:"UY", name:"Uruguay", region:"Amérique latine",
    acces:"Ouvert — aucune restriction, traitement identique aux nationaux.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Résidence fiscale facilitée par investissement immobilier (environ 400 000 USD) ou création d'emploi.",
    notes:"Stabilité juridique reconnue comme l'une des meilleures d'Amérique latine."
  },

  // ================= MOYEN-ORIENT / AFRIQUE =================
  {
    id:"AE", name:"Émirats arabes unis", region:"Moyen-Orient",
    acces:"Restreint aux zones freehold désignées (Dubaï, Abu Dhabi) — hors de ces zones, propriété réservée aux nationaux du CCG.",
    accesNiveau:"restreint",
    nationalite:"Toutes nationalités éligibles dans les zones freehold.",
    structure:"Achat direct en nom propre dans les zones désignées.",
    visa:"Golden Visa (10 ans) dès 2 millions AED (~545 000 USD) d'investissement immobilier ; visa investisseur 2 ans dès 750 000 AED.",
    notes:"0% d'impôt sur le revenu locatif et la plus-value pour les particuliers ; frais de transfert DLD de 4%."
  },
  {
    id:"SA", name:"Arabie saoudite", region:"Moyen-Orient",
    acces:"Historiquement restreint — ouverture progressive à La Mecque/Médine exceptée, zones désignées Vision 2030 en développement.",
    accesNiveau:"restreint",
    nationalite:"Accès élargi en cours de réforme (2024-2026) ; vérifier le statut zone par zone.",
    structure:"Accompagnement local indispensable, cadre encore en évolution.",
    visa:"Premium Residency (« Iqama Mumayaza ») liée à l'investissement, distincte de l'achat immobilier simple.",
    notes:"Marché à fort potentiel mais cadre réglementaire encore en construction — vigilance renforcée recommandée."
  },
  {
    id:"MA", name:"Maroc", region:"Afrique",
    acces:"Ouvert pour l'urbain — autorisation requise pour le foncier agricole.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité pour les biens urbains.",
    structure:"Achat direct en nom propre le plus courant.",
    visa:"Pas de golden visa dédié ; carte de séjour facilitée pour investisseurs significatifs.",
    notes:"Contrôle des changes marocain à anticiper pour le rapatriement des revenus et du capital."
  },
  {
    id:"EG", name:"Égypte", region:"Afrique",
    acces:"Ouvert pour la majorité des zones résidentielles et touristiques.",
    accesNiveau:"ouvert",
    nationalite:"Certaines zones (Sinaï notamment) soumises à autorisation.",
    structure:"Achat direct en nom propre.",
    visa:"Résidence facilitée pour investissement immobilier dès environ 100 000 USD (seuils variables selon décrets).",
    notes:"Contrôle des changes et fluctuation de la livre égyptienne à intégrer dans l'analyse de rendement."
  },
  {
    id:"MU", name:"Maurice", region:"Afrique",
    acces:"Ouvert via les programmes dédiés (PDS, Smart City, Ground+2) — achat direct hors programme très limité.",
    accesNiveau:"restreint",
    nationalite:"Toutes nationalités éligibles via les programmes agréés.",
    structure:"Achat dans un projet certifié Economic Development Board.",
    visa:"Permis de résidence permanent accordé automatiquement dès 375 000 USD investis (PDS/Smart City).",
    notes:"Fiscalité très avantageuse : 15% flat tax, pas de droits de succession."
  },
  {
    id:"ZA", name:"Afrique du Sud", region:"Afrique",
    acces:"Ouvert — aucune restriction générale à la propriété étrangère.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre ou société.",
    visa:"Visa résidence financièrement indépendante lié au patrimoine, pas strictement à l'immobilier.",
    notes:"Contrôle des changes sud-africain (South African Reserve Bank) à anticiper pour les flux transfrontaliers."
  },

  // ================= ASIE / PACIFIQUE =================
  {
    id:"JP", name:"Japon", region:"Asie",
    acces:"Ouvert — aucune restriction sur la propriété foncière, y compris pour les non-résidents.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité ou de résidence.",
    structure:"Achat direct en nom propre, sans visa ni permis de séjour requis.",
    visa:"Pas de golden visa ; le « Business Manager Visa » existe pour l'exploitation active d'un bien.",
    notes:"L'un des marchés les plus ouverts au monde pour les investisseurs étrangers, y compris non-résidents."
  },
  {
    id:"SG", name:"Singapour", region:"Asie",
    acces:"Ouvert pour les condominiums ; restreint pour les maisons individuelles (« landed property »).",
    accesNiveau:"restreint",
    nationalite:"Résidents permanents et citoyens : accès élargi. Étrangers : condominiums accessibles, maisons individuelles soumises à autorisation.",
    structure:"Achat direct pour les condominiums.",
    visa:"Pas de golden visa immobilier ; Global Investor Programme distinct (activité économique, pas immobilier pur).",
    notes:"Additional Buyer's Stamp Duty (ABSD) pouvant atteindre 60% du prix pour les acheteurs étrangers."
  },
  {
    id:"HK", name:"Hong Kong", region:"Asie",
    acces:"Ouvert — aucune restriction à l'achat par des non-résidents.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité.",
    structure:"Achat direct en nom propre.",
    visa:"Pas de golden visa immobilier actuellement.",
    notes:"Droits de mutation additionnels (Buyer's Stamp Duty 15%) pour les non-résidents permanents."
  },
  {
    id:"TH", name:"Thaïlande", region:"Asie",
    acces:"Restreint — la propriété foncière directe est interdite aux étrangers ; les condominiums sont accessibles.",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction spécifique pour les condominiums (quota collectif de 49% de la surface totale de l'immeuble).",
    structure:"Copropriété (condominium, 49% max par immeuble), société thaïlandaise (49% de participation étrangère max), ou bail emphytéotique de 30 ans renouvelable.",
    visa:"Thailand Elite Visa (résidence longue durée par abonnement, non lié directement à l'immobilier).",
    notes:"Le montage en société ou le bail long terme sont les solutions les plus utilisées pour les maisons individuelles."
  },
  {
    id:"MY", name:"Malaisie", region:"Asie",
    acces:"Ouvert sous seuils de prix minimums fixés par chaque État (souvent 1 million MYR pour les étrangers).",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction de nationalité, mais seuils de prix variables selon l'État.",
    structure:"Achat direct en nom propre au-delà du seuil minimum local.",
    visa:"Malaysia My Second Home (MM2H) : résidence long terme liée à des dépôts financiers et éligibilité patrimoniale (critères resserrés depuis 2021).",
    notes:"Kuala Lumpur et Penang concentrent l'essentiel de la demande étrangère."
  },
  {
    id:"ID", name:"Indonésie", region:"Asie",
    acces:"Restreint — pas de pleine propriété foncière pour les étrangers ; droit d'usage (Hak Pakai) jusqu'à 80 ans.",
    accesNiveau:"restreint",
    nationalite:"Toutes nationalités éligibles au Hak Pakai avec titre de séjour valide.",
    structure:"Hak Pakai (droit de jouissance) ou société PT PMA pour un usage commercial/locatif structuré.",
    visa:"Second Home Visa dès 2 milliards IDR (~130 000 USD) de dépôt ou actifs, résidence 5 ou 10 ans.",
    notes:"Bali reste le marché le plus dynamique, avec un cadre Hak Pakai désormais bien structuré pour les étrangers."
  },
  {
    id:"PH", name:"Philippines", region:"Asie",
    acces:"Restreint — le foncier est réservé aux nationaux ; les condominiums sont accessibles (quota de 40% par immeuble).",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction spécifique pour les condominiums dans la limite du quota collectif.",
    structure:"Copropriété (condominium) ou bail long terme (jusqu'à 50 ans renouvelable) pour les maisons individuelles.",
    visa:"Special Resident Retiree's Visa (SRRV) lié à un dépôt/investissement, distinct de l'achat immobilier direct.",
    notes:"Manille et Cebu concentrent l'essentiel des investissements étrangers en condominiums."
  },
  {
    id:"VN", name:"Vietnam", region:"Asie",
    acces:"Restreint — bail de 50 ans renouvelable, quota de 30% des unités par immeuble pour les étrangers.",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction de nationalité dans la limite des quotas.",
    structure:"Bail à long terme dans des projets éligibles aux étrangers, vérifié via le certificat rose.",
    visa:"Pas de golden visa immobilier ; visas investisseurs distincts liés à la création d'entreprise.",
    notes:"Ho Chi Minh-Ville et Hanoï concentrent la majorité des projets ouverts aux étrangers."
  },
  {
    id:"KH", name:"Cambodge", region:"Asie",
    acces:"Ouvert pour les étages de copropriété (hors rez-de-chaussée) — foncier réservé aux nationaux.",
    accesNiveau:"restreint",
    nationalite:"Aucune restriction de nationalité pour la copropriété étage.",
    structure:"Pleine propriété (« strata title ») possible pour les unités en copropriété du 1er étage et au-dessus.",
    visa:"Pas de golden visa dédié ; visa affaires (visa E) renouvelable facilement.",
    notes:"L'un des rares marchés d'Asie du Sud-Est offrant la pleine propriété en copropriété aux étrangers."
  },
  {
    id:"IN", name:"Inde", region:"Asie",
    acces:"Ouvert pour les NRI (Non-Resident Indians) et OCI (Overseas Citizens of India) ; très restreint pour les autres étrangers.",
    accesNiveau:"restreint",
    nationalite:"NRI/OCI : accès libre au résidentiel et commercial. Autres nationalités : achat quasi impossible sauf via résidence longue durée.",
    structure:"Achat direct pour NRI/OCI ; location longue durée (jusqu'à 99 ans) pour les autres.",
    visa:"Pas de golden visa immobilier pour les non-NRI.",
    notes:"Marché principalement accessible à la diaspora indienne dans le cadre d'une stratégie d'investissement direct."
  },
  {
    id:"AU", name:"Australie", region:"Pacifique",
    acces:"Restreint — approbation du Foreign Investment Review Board (FIRB) obligatoire pour tout achat par un non-résident.",
    accesNiveau:"restreint",
    nationalite:"Résidents permanents : accès libre. Non-résidents : FIRB obligatoire, généralement limité au neuf.",
    structure:"Achat direct après approbation FIRB ; droits de timbre majorés pour étrangers (surtaxe jusqu'à 8% selon l'État).",
    visa:"Golden visa australien (Significant/Premium Investor Visa) supprimé en 2024 — nouvelles voies d'investissement plus restrictives.",
    notes:"Depuis 2025, restrictions supplémentaires sur l'achat de logements existants par des non-résidents dans plusieurs zones."
  },
  {
    id:"NZ", name:"Nouvelle-Zélande", region:"Pacifique",
    acces:"Très restreint — interdiction générale d'achat résidentiel par des non-résidents depuis 2018.",
    accesNiveau:"restreint",
    nationalite:"Citoyens/résidents néo-zélandais et australiens : accès libre. Autres nationalités : achat résidentiel interdit sauf exceptions (accords de libre-échange, ex. Singapour).",
    structure:"Immobilier commercial et certains développements neufs à grande échelle restent accessibles sous conditions OIO.",
    visa:"Pas de golden visa immobilier — Active Investor Plus Visa existe mais exclut l'immobilier résidentiel direct.",
    notes:"L'un des marchés les plus fermés du monde développé pour les investisseurs étrangers non-résidents."
  },
  {
    id:"GE", name:"Géorgie", region:"Asie",
    acces:"Ouvert — aucune restriction à la propriété étrangère sur le résidentiel.",
    accesNiveau:"ouvert",
    nationalite:"Aucune condition de nationalité (l'agricole reste restreint).",
    structure:"Achat direct en nom propre.",
    visa:"Résidence facilitée par investissement immobilier dès 100 000 USD.",
    notes:"L'un des marchés les plus ouverts et rapides d'accès pour les investisseurs internationaux."
  },
];

function droitParId(id){
  return DROIT_DATA.find(function(d){ return d.id === id; });
}
