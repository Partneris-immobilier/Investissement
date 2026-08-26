/* ============================================================
   Partneris Immobilier — Base de données pays
   Rendements locatifs bruts moyens (source : Global Property Guide,
   données agrégées T3 2026) + coordonnées approximatives (lat/lon)
   pour le placement des marqueurs sur le globe 3D.
   Ces chiffres sont des moyennes nationales indicatives à but
   pédagogique — ils ne remplacent pas une étude de marché locale.
   ============================================================ */

var PAYS_DATA = [
  // ---- Europe ----
  { id:"CH", name:"Suisse", region:"Europe", lat:46.8, lon:8.2, yield:2.91, priceIdx:9, note:"Marché mature, forte stabilité, accès restreint aux non-résidents (Lex Koller)." },
  { id:"FR", name:"France", region:"Europe", lat:46.6, lon:2.2, yield:4.83, priceIdx:6, note:"Marché ouvert, fiscalité élevée sur les revenus locatifs." },
  { id:"DE", name:"Allemagne", region:"Europe", lat:51.2, lon:10.4, yield:3.42, priceIdx:6, note:"Marché locatif très encadré (Mietpreisbremse), forte demande urbaine." },
  { id:"ES", name:"Espagne", region:"Europe", lat:40.0, lon:-3.7, yield:5.43, priceIdx:4, note:"Marché ouvert aux étrangers, tourisme et golden visa (immobilier exclu depuis 2025)." },
  { id:"IT", name:"Italie", region:"Europe", lat:42.5, lon:12.5, yield:6.61, priceIdx:4, note:"Rendements attractifs hors grandes métropoles, fiscalité complexe." },
  { id:"PT", name:"Portugal", region:"Europe", lat:39.5, lon:-8.0, yield:4.29, priceIdx:4, note:"Marché ouvert, ancien golden visa recentré sur fonds d'investissement." },
  { id:"GB", name:"Royaume-Uni", region:"Europe", lat:54.0, lon:-2.5, yield:7.35, priceIdx:6, note:"Marché liquide, droits de mutation (Stamp Duty) majorés pour non-résidents." },
  { id:"IE", name:"Irlande", region:"Europe", lat:53.4, lon:-8.0, yield:7.66, priceIdx:5, note:"Forte demande locative à Dublin, offre limitée." },
  { id:"NL", name:"Pays-Bas", region:"Europe", lat:52.2, lon:5.5, yield:5.97, priceIdx:5, note:"Encadrement des loyers renforcé, marché tendu." },
  { id:"BE", name:"Belgique", region:"Europe", lat:50.6, lon:4.5, yield:4.31, priceIdx:4, note:"Marché stable, fiscalité modérée sur la détention." },
  { id:"AT", name:"Autriche", region:"Europe", lat:47.6, lon:14.1, yield:3.31, priceIdx:5, note:"Rendements faibles, marché très qualitatif à Vienne." },
  { id:"LU", name:"Luxembourg", region:"Europe", lat:49.8, lon:6.1, yield:3.27, priceIdx:8, note:"Prix parmi les plus élevés d'Europe, fiscalité avantageuse." },
  { id:"GR", name:"Grèce", region:"Europe", lat:39.0, lon:22.0, yield:4.38, priceIdx:2, note:"Golden Visa dès 250k-800k€ selon zone, prix encore abordables." },
  { id:"PL", name:"Pologne", region:"Europe", lat:52.0, lon:19.5, yield:5.92, priceIdx:3, note:"Marché en croissance, forte demande locative urbaine." },
  { id:"RO", name:"Roumanie", region:"Europe", lat:45.9, lon:25.0, yield:5.87, priceIdx:2, note:"Achat direct de terrain réservé aux nationaux — société locale nécessaire." },
  { id:"HU", name:"Hongrie", region:"Europe", lat:47.2, lon:19.5, yield:4.69, priceIdx:3, note:"Programme Guest Investor (obligations souveraines) pour la résidence." },
  { id:"CZ", name:"République tchèque", region:"Europe", lat:49.8, lon:15.5, yield:3.39, priceIdx:4, note:"Terrain réservé UE / conjoints tchèques ; société pour les autres." },
  { id:"SK", name:"Slovaquie", region:"Europe", lat:48.7, lon:19.5, yield:4.49, priceIdx:3, note:"Marché émergent, accès facilité pour ressortissants UE." },
  { id:"HR", name:"Croatie", region:"Europe", lat:45.1, lon:15.2, yield:4.21, priceIdx:3, note:"Approbation ministérielle requise hors UE, forte demande touristique." },
  { id:"BG", name:"Bulgarie", region:"Europe", lat:42.7, lon:25.5, yield:4.27, priceIdx:2, note:"Terrain réservé aux nationaux ; appartements accessibles via société." },
  { id:"RS", name:"Serbie", region:"Europe", lat:44.0, lon:21.0, yield:5.14, priceIdx:2, note:"Réciprocité requise, marché encore abordable." },
  { id:"LV", name:"Lettonie", region:"Europe", lat:56.9, lon:24.6, yield:7.20, priceIdx:2, note:"Rendements élevés, ancien programme golden visa suspendu." },
  { id:"LT", name:"Lituanie", region:"Europe", lat:55.2, lon:23.9, yield:5.54, priceIdx:2, note:"Marché ouvert, fiscalité compétitive." },
  { id:"EE", name:"Estonie", region:"Europe", lat:58.6, lon:25.0, yield:4.19, priceIdx:3, note:"Environnement numérique et fiscal attractif." },
  { id:"UA", name:"Ukraine", region:"Europe", lat:49.0, lon:31.0, yield:7.55, priceIdx:1, note:"Risque géopolitique majeur — vigilance requise avant tout investissement." },
  { id:"MD", name:"Moldavie", region:"Europe", lat:47.2, lon:28.5, yield:9.49, priceIdx:1, note:"Rendements très élevés mais marché peu liquide." },
  { id:"MK", name:"Macédoine du Nord", region:"Europe", lat:41.6, lon:21.7, yield:6.53, priceIdx:1, note:"Marché émergent, prix bas." },
  { id:"ME", name:"Monténégro", region:"Europe", lat:42.7, lon:19.3, yield:4.84, priceIdx:2, note:"Zones côtières prisées des investisseurs étrangers." },
  { id:"IS", name:"Islande", region:"Europe", lat:64.9, lon:-19.0, yield:5.41, priceIdx:5, note:"Marché restreint, forte demande touristique." },
  { id:"DK", name:"Danemark", region:"Europe", lat:56.2, lon:9.5, yield:4.11, priceIdx:6, note:"Marché stable et transparent, accès non-UE limité." },
  { id:"SE", name:"Suède", region:"Europe", lat:60.1, lon:18.6, yield:5.75, priceIdx:5, note:"Marché locatif très réglementé (files d'attente)." },
  { id:"NO", name:"Norvège", region:"Europe", lat:60.5, lon:8.5, yield:4.95, priceIdx:7, note:"Prix élevés, marché stable et transparent." },
  { id:"FI", name:"Finlande", region:"Europe", lat:64.0, lon:26.0, yield:5.63, priceIdx:4, note:"Marché ouvert, fiscalité modérée." },
  { id:"CY", name:"Chypre", region:"Europe", lat:35.1, lon:33.4, yield:4.88, priceIdx:3, note:"Fiscalité avantageuse, marché prisé des retraités européens." },
  { id:"AD", name:"Andorre", region:"Europe", lat:42.5, lon:1.5, yield:4.18, priceIdx:6, note:"Fiscalité très avantageuse, accès à la propriété encadré." },
  { id:"SI", name:"Slovénie", region:"Europe", lat:46.1, lon:14.8, yield:4.15, priceIdx:4, note:"Marché stable, forte réciprocité UE." },
  { id:"BA", name:"Bosnie-Herzégovine", region:"Europe", lat:44.2, lon:17.8, yield:3.96, priceIdx:1, note:"Marché naissant, cadre juridique encore en construction." },

  // ---- Amérique du Nord ----
  { id:"US", name:"États-Unis", region:"Amérique du Nord", lat:38.0, lon:-97.0, yield:6.71, priceIdx:5, note:"Marché très liquide, accès libre aux étrangers, fiscalité fédérale + État." },
  { id:"CA", name:"Canada", region:"Amérique du Nord", lat:56.0, lon:-106.0, yield:5.72, priceIdx:6, note:"Restrictions provinciales (ex. Île-du-Prince-Édouard), taxe anti-spéculation." },

  // ---- Amérique latine & Caraïbes ----
  { id:"MX", name:"Mexique", region:"Amérique latine", lat:23.6, lon:-102.5, yield:5.79, priceIdx:2, note:"Achat direct interdit près des côtes/frontières — fideicomiso ou société." },
  { id:"BR", name:"Brésil", region:"Amérique latine", lat:-14.2, lon:-51.9, yield:5.71, priceIdx:2, note:"Restrictions dans les zones frontalières et de sécurité nationale." },
  { id:"AR", name:"Argentine", region:"Amérique latine", lat:-38.4, lon:-63.6, yield:5.46, priceIdx:2, note:"Aucune restriction à la propriété étrangère." },
  { id:"CL", name:"Chili", region:"Amérique latine", lat:-35.7, lon:-71.5, yield:4.80, priceIdx:3, note:"Marché ouvert, restrictions uniquement zones frontalières." },
  { id:"CO", name:"Colombie", region:"Amérique latine", lat:4.6, lon:-74.3, yield:7.01, priceIdx:2, note:"Marché ouvert, forte croissance à Medellín et Bogotá." },
  { id:"PE", name:"Pérou", region:"Amérique latine", lat:-9.2, lon:-75.0, yield:5.93, priceIdx:2, note:"Marché ouvert, restrictions en zone frontalière (traité de réciprocité)." },
  { id:"PA", name:"Panama", region:"Amérique latine", lat:8.5, lon:-80.8, yield:6.94, priceIdx:3, note:"Interdit à 6 miles des frontières ; visa investisseur attractif." },
  { id:"CR", name:"Costa Rica", region:"Amérique latine", lat:9.7, lon:-83.8, yield:7.63, priceIdx:3, note:"Mêmes droits que les nationaux, restrictions côtières (zone maritime)." },
  { id:"DO", name:"République dominicaine", region:"Amérique latine", lat:18.7, lon:-70.2, yield:8.53, priceIdx:2, note:"Marché très ouvert, forte fiscalité incitative (CONFOTUR)." },
  { id:"UY", name:"Uruguay", region:"Amérique latine", lat:-32.5, lon:-55.8, yield:6.47, priceIdx:3, note:"Aucune restriction, stabilité juridique reconnue en Amérique latine." },
  { id:"PR", name:"Porto Rico", region:"Amérique latine", lat:18.2, lon:-66.5, yield:8.46, priceIdx:3, note:"Régime fiscal Act 60 attractif pour investisseurs américains et étrangers." },

  // ---- Afrique & Moyen-Orient ----
  { id:"ZA", name:"Afrique du Sud", region:"Afrique", lat:-30.6, lon:22.9, yield:11.53, priceIdx:2, note:"Rendement le plus élevé du classement mondial, risque devise/sécurité à intégrer." },
  { id:"MA", name:"Maroc", region:"Afrique", lat:31.8, lon:-7.1, yield:7.36, priceIdx:2, note:"Marché ouvert aux étrangers, forte demande à Marrakech et Casablanca." },
  { id:"EG", name:"Égypte", region:"Afrique", lat:26.8, lon:30.8, yield:7.61, priceIdx:1, note:"Marché en essor, contrôle des changes à anticiper." },
  { id:"MU", name:"Maurice", region:"Afrique", lat:-20.3, lon:57.6, yield:3.29, priceIdx:5, note:"Programmes PDS/Smart City offrant permis de résidence à l'achat." },
  { id:"AE", name:"Émirats arabes unis", region:"Moyen-Orient", lat:23.4, lon:53.8, yield:4.94, priceIdx:5, note:"Propriété freehold dans zones désignées, 0% impôt sur le revenu locatif." },
  { id:"SA", name:"Arabie saoudite", region:"Moyen-Orient", lat:24.0, lon:45.0, yield:6.84, priceIdx:3, note:"Ouverture progressive aux étrangers dans certaines zones (Vision 2030)." },
  { id:"QA", name:"Qatar", region:"Moyen-Orient", lat:25.3, lon:51.2, yield:5.17, priceIdx:5, note:"Propriété freehold dans zones désignées, visa résident associé." },
  { id:"TR", name:"Turquie", region:"Moyen-Orient", lat:38.9, lon:35.2, yield:7.32, priceIdx:2, note:"Citoyenneté par investissement dès 400 000 USD." },
  { id:"IL", name:"Israël", region:"Moyen-Orient", lat:31.0, lon:34.8, yield:3.05, priceIdx:6, note:"Marché ouvert, prix élevés, fiscalité spécifique aux non-résidents." },

  // ---- Asie & Pacifique ----
  { id:"JP", name:"Japon", region:"Asie", lat:36.2, lon:138.3, yield:4.55, priceIdx:4, note:"Propriété étrangère libre, aucune restriction sur le foncier." },
  { id:"SG", name:"Singapour", region:"Asie", lat:1.35, lon:103.8, yield:3.06, priceIdx:8, note:"Droit de timbre additionnel (ABSD) jusqu'à 60% pour étrangers." },
  { id:"HK", name:"Hong Kong", region:"Asie", lat:22.3, lon:114.2, yield:3.55, priceIdx:8, note:"Marché ouvert, droits de mutation élevés pour non-résidents." },
  { id:"TH", name:"Thaïlande", region:"Asie", lat:15.9, lon:100.9, yield:6.49, priceIdx:2, note:"Achat direct interdit — copropriété (49% max), société ou bail 30 ans." },
  { id:"MY", name:"Malaisie", region:"Asie", lat:4.2, lon:101.9, yield:5.27, priceIdx:2, note:"Seuils de prix minimum par État, programme MM2H disponible." },
  { id:"ID", name:"Indonésie", region:"Asie", lat:-0.8, lon:113.9, yield:8.22, priceIdx:1, note:"Droit de jouissance (Hak Pakai) plutôt que pleine propriété pour étrangers." },
  { id:"PH", name:"Philippines", region:"Asie", lat:12.9, lon:121.8, yield:5.10, priceIdx:1, note:"Terrain réservé aux nationaux ; condominiums accessibles (max 40%)." },
  { id:"VN", name:"Vietnam", region:"Asie", lat:14.1, lon:108.3, yield:3.85, priceIdx:1, note:"Bail 50 ans renouvelable, quota de 30% par immeuble pour étrangers." },
  { id:"KH", name:"Cambodge", region:"Asie", lat:12.6, lon:104.9, yield:7.81, priceIdx:1, note:"Copropriété accessible en pleine propriété (hors rez-de-chaussée)." },
  { id:"IN", name:"Inde", region:"Asie", lat:22.0, lon:79.0, yield:5.16, priceIdx:2, note:"Achat résidentiel/commercial libre pour NRI/OCI, restreint pour les autres étrangers." },
  { id:"GE", name:"Géorgie", region:"Asie", lat:42.3, lon:43.4, yield:7.25, priceIdx:1, note:"Aucune restriction sur le résidentiel, marché très ouvert." },
  { id:"KZ", name:"Kazakhstan", region:"Asie", lat:48.0, lon:66.9, yield:10.95, priceIdx:1, note:"Rendement très élevé, marché encore peu mature pour les étrangers." },
  { id:"AU", name:"Australie", region:"Pacifique", lat:-25.3, lon:133.8, yield:4.94, priceIdx:6, note:"Approbation FIRB obligatoire, souvent limitée au neuf." },
  { id:"NZ", name:"Nouvelle-Zélande", region:"Pacifique", lat:-41.0, lon:174.9, yield:4.24, priceIdx:6, note:"Achat résidentiel interdit aux non-résidents depuis 2018 (hors exceptions)." },
  { id:"TW", name:"Taïwan", region:"Asie", lat:23.7, lon:121.0, yield:2.26, priceIdx:5, note:"Réciprocité requise, marché de niche pour investisseurs étrangers." },
  { id:"MO", name:"Macao", region:"Asie", lat:22.2, lon:113.5, yield:2.08, priceIdx:6, note:"Marché restreint, prix très élevés, rendements faibles." },
];

/* Seuils de qualification utilisés par le calculateur du globe.
   Le "verdict" ci-dessous est indicatif — basé uniquement sur le
   rendement brut moyen national, à affiner avec un conseiller. */
function verdictPourRendement(y){
  if (y >= 6.5) return { label:"Opportunité forte", cls:"pill-green" };
  if (y >= 4.5) return { label:"Potentiel intéressant", cls:"pill-gold" };
  if (y >= 3.0) return { label:"À étudier au cas par cas", cls:"pill-amber" };
  return { label:"Rendement faible / valeur refuge", cls:"pill-red" };
}
