/* ============================================================
   Partneris Immobilier — Country database
   Average gross rental yields (source: Global Property Guide,
   data aggregated Q3 2026) + approximate coordinates (lat/lon)
   for placing markers on the 3D globe.
   These figures are indicative national averages for educational
   purposes — they do not replace a local market study.
   ============================================================ */

var PAYS_DATA = [
  // ---- Europe ----
  { id:"CH", name:"Switzerland", region:"Europe", lat:46.8, lon:8.2, yield:2.91, priceIdx:9, note:"Mature market, strong stability, restricted access for non-residents (Lex Koller)." },
  { id:"FR", name:"France", region:"Europe", lat:46.6, lon:2.2, yield:4.83, priceIdx:6, note:"Open market, high taxation on rental income." },
  { id:"DE", name:"Germany", region:"Europe", lat:51.2, lon:10.4, yield:3.42, priceIdx:6, note:"Heavily regulated rental market (Mietpreisbremse), strong urban demand." },
  { id:"ES", name:"Spain", region:"Europe", lat:40.0, lon:-3.7, yield:5.43, priceIdx:4, note:"Market open to foreigners, tourism and golden visa (real estate excluded since 2025)." },
  { id:"IT", name:"Italy", region:"Europe", lat:42.5, lon:12.5, yield:6.61, priceIdx:4, note:"Attractive yields outside major metropolitan areas, complex taxation." },
  { id:"PT", name:"Portugal", region:"Europe", lat:39.5, lon:-8.0, yield:4.29, priceIdx:4, note:"Open market, former golden visa refocused on investment funds." },
  { id:"GB", name:"United Kingdom", region:"Europe", lat:54.0, lon:-2.5, yield:7.35, priceIdx:6, note:"Liquid market, higher Stamp Duty (transfer tax) for non-residents." },
  { id:"IE", name:"Ireland", region:"Europe", lat:53.4, lon:-8.0, yield:7.66, priceIdx:5, note:"Strong rental demand in Dublin, limited supply." },
  { id:"NL", name:"Netherlands", region:"Europe", lat:52.2, lon:5.5, yield:5.97, priceIdx:5, note:"Stricter rent control, tight market." },
  { id:"BE", name:"Belgium", region:"Europe", lat:50.6, lon:4.5, yield:4.31, priceIdx:4, note:"Stable market, moderate holding taxation." },
  { id:"AT", name:"Austria", region:"Europe", lat:47.6, lon:14.1, yield:3.31, priceIdx:5, note:"Low yields, very high-quality market in Vienna." },
  { id:"LU", name:"Luxembourg", region:"Europe", lat:49.8, lon:6.1, yield:3.27, priceIdx:8, note:"Among the highest prices in Europe, favorable taxation." },
  { id:"GR", name:"Greece", region:"Europe", lat:39.0, lon:22.0, yield:4.38, priceIdx:2, note:"Golden Visa from €250k-800k depending on zone, still affordable prices." },
  { id:"PL", name:"Poland", region:"Europe", lat:52.0, lon:19.5, yield:5.92, priceIdx:3, note:"Growing market, strong urban rental demand." },
  { id:"RO", name:"Romania", region:"Europe", lat:45.9, lon:25.0, yield:5.87, priceIdx:2, note:"Direct land purchase reserved for nationals — local company required." },
  { id:"HU", name:"Hungary", region:"Europe", lat:47.2, lon:19.5, yield:4.69, priceIdx:3, note:"Guest Investor Program (sovereign bonds) for residence." },
  { id:"CZ", name:"Czech Republic", region:"Europe", lat:49.8, lon:15.5, yield:3.39, priceIdx:4, note:"Land reserved for EU nationals / Czech spouses; company required for others." },
  { id:"SK", name:"Slovakia", region:"Europe", lat:48.7, lon:19.5, yield:4.49, priceIdx:3, note:"Emerging market, easier access for EU nationals." },
  { id:"HR", name:"Croatia", region:"Europe", lat:45.1, lon:15.2, yield:4.21, priceIdx:3, note:"Ministerial approval required outside the EU, strong tourist demand." },
  { id:"BG", name:"Bulgaria", region:"Europe", lat:42.7, lon:25.5, yield:4.27, priceIdx:2, note:"Land reserved for nationals; apartments accessible via a company." },
  { id:"RS", name:"Serbia", region:"Europe", lat:44.0, lon:21.0, yield:5.14, priceIdx:2, note:"Reciprocity required, market still affordable." },
  { id:"LV", name:"Latvia", region:"Europe", lat:56.9, lon:24.6, yield:7.20, priceIdx:2, note:"High yields, former golden visa program suspended." },
  { id:"LT", name:"Lithuania", region:"Europe", lat:55.2, lon:23.9, yield:5.54, priceIdx:2, note:"Open market, competitive taxation." },
  { id:"EE", name:"Estonia", region:"Europe", lat:58.6, lon:25.0, yield:4.19, priceIdx:3, note:"Attractive digital and tax environment." },
  { id:"UA", name:"Ukraine", region:"Europe", lat:49.0, lon:31.0, yield:7.55, priceIdx:1, note:"Major geopolitical risk — caution required before any investment." },
  { id:"MD", name:"Moldova", region:"Europe", lat:47.2, lon:28.5, yield:9.49, priceIdx:1, note:"Very high yields but illiquid market." },
  { id:"MK", name:"North Macedonia", region:"Europe", lat:41.6, lon:21.7, yield:6.53, priceIdx:1, note:"Emerging market, low prices." },
  { id:"ME", name:"Montenegro", region:"Europe", lat:42.7, lon:19.3, yield:4.84, priceIdx:2, note:"Coastal areas popular with foreign investors." },
  { id:"IS", name:"Iceland", region:"Europe", lat:64.9, lon:-19.0, yield:5.41, priceIdx:5, note:"Restricted market, strong tourist demand." },
  { id:"DK", name:"Denmark", region:"Europe", lat:56.2, lon:9.5, yield:4.11, priceIdx:6, note:"Stable and transparent market, limited non-EU access." },
  { id:"SE", name:"Sweden", region:"Europe", lat:60.1, lon:18.6, yield:5.75, priceIdx:5, note:"Heavily regulated rental market (waiting lists)." },
  { id:"NO", name:"Norway", region:"Europe", lat:60.5, lon:8.5, yield:4.95, priceIdx:7, note:"High prices, stable and transparent market." },
  { id:"FI", name:"Finland", region:"Europe", lat:64.0, lon:26.0, yield:5.63, priceIdx:4, note:"Open market, moderate taxation." },
  { id:"CY", name:"Cyprus", region:"Europe", lat:35.1, lon:33.4, yield:4.88, priceIdx:3, note:"Favorable taxation, popular with European retirees." },
  { id:"AD", name:"Andorra", region:"Europe", lat:42.5, lon:1.5, yield:4.18, priceIdx:6, note:"Very favorable taxation, regulated access to ownership." },
  { id:"SI", name:"Slovenia", region:"Europe", lat:46.1, lon:14.8, yield:4.15, priceIdx:4, note:"Stable market, strong EU reciprocity." },
  { id:"BA", name:"Bosnia and Herzegovina", region:"Europe", lat:44.2, lon:17.8, yield:3.96, priceIdx:1, note:"Nascent market, legal framework still developing." },

  // ---- North America ----
  { id:"US", name:"United States", region:"North America", lat:38.0, lon:-97.0, yield:6.71, priceIdx:5, note:"Very liquid market, open access for foreigners, federal + state taxation." },
  { id:"CA", name:"Canada", region:"North America", lat:56.0, lon:-106.0, yield:5.72, priceIdx:6, note:"Provincial restrictions (e.g. Prince Edward Island), anti-speculation tax." },

  // ---- Latin America & Caribbean ----
  { id:"MX", name:"Mexico", region:"Latin America", lat:23.6, lon:-102.5, yield:5.79, priceIdx:2, note:"Direct purchase prohibited near coasts/borders — fideicomiso or company required." },
  { id:"BR", name:"Brazil", region:"Latin America", lat:-14.2, lon:-51.9, yield:5.71, priceIdx:2, note:"Restrictions in border and national security zones." },
  { id:"AR", name:"Argentina", region:"Latin America", lat:-38.4, lon:-63.6, yield:5.46, priceIdx:2, note:"No restrictions on foreign ownership." },
  { id:"CL", name:"Chile", region:"Latin America", lat:-35.7, lon:-71.5, yield:4.80, priceIdx:3, note:"Open market, restrictions only in border zones." },
  { id:"CO", name:"Colombia", region:"Latin America", lat:4.6, lon:-74.3, yield:7.01, priceIdx:2, note:"Open market, strong growth in Medellín and Bogotá." },
  { id:"PE", name:"Peru", region:"Latin America", lat:-9.2, lon:-75.0, yield:5.93, priceIdx:2, note:"Open market, restrictions in border zones (reciprocity treaty)." },
  { id:"PA", name:"Panama", region:"Latin America", lat:8.5, lon:-80.8, yield:6.94, priceIdx:3, note:"Prohibited within 6 miles of the borders; attractive investor visa." },
  { id:"CR", name:"Costa Rica", region:"Latin America", lat:9.7, lon:-83.8, yield:7.63, priceIdx:3, note:"Same rights as nationals, coastal restrictions (maritime zone)." },
  { id:"DO", name:"Dominican Republic", region:"Latin America", lat:18.7, lon:-70.2, yield:8.53, priceIdx:2, note:"Very open market, strong incentive taxation (CONFOTUR)." },
  { id:"UY", name:"Uruguay", region:"Latin America", lat:-32.5, lon:-55.8, yield:6.47, priceIdx:3, note:"No restrictions, legal stability recognized in Latin America." },
  { id:"PR", name:"Puerto Rico", region:"Latin America", lat:18.2, lon:-66.5, yield:8.46, priceIdx:3, note:"Attractive Act 60 tax regime for American and foreign investors." },

  // ---- Africa & Middle East ----
  { id:"ZA", name:"South Africa", region:"Africa", lat:-30.6, lon:22.9, yield:11.53, priceIdx:2, note:"Highest yield in the global ranking, currency/security risk to factor in." },
  { id:"MA", name:"Morocco", region:"Africa", lat:31.8, lon:-7.1, yield:7.36, priceIdx:2, note:"Market open to foreigners, strong demand in Marrakech and Casablanca." },
  { id:"EG", name:"Egypt", region:"Africa", lat:26.8, lon:30.8, yield:7.61, priceIdx:1, note:"Growing market, exchange controls to anticipate." },
  { id:"MU", name:"Mauritius", region:"Africa", lat:-20.3, lon:57.6, yield:3.29, priceIdx:5, note:"PDS/Smart City programs granting a residence permit upon purchase." },
  { id:"AE", name:"United Arab Emirates", region:"Middle East", lat:23.4, lon:53.8, yield:4.94, priceIdx:5, note:"Freehold ownership in designated zones, 0% tax on rental income." },
  { id:"SA", name:"Saudi Arabia", region:"Middle East", lat:24.0, lon:45.0, yield:6.84, priceIdx:3, note:"Gradual opening to foreigners in certain zones (Vision 2030)." },
  { id:"QA", name:"Qatar", region:"Middle East", lat:25.3, lon:51.2, yield:5.17, priceIdx:5, note:"Freehold ownership in designated zones, associated resident visa." },
  { id:"TR", name:"Turkey", region:"Middle East", lat:38.9, lon:35.2, yield:7.32, priceIdx:2, note:"Citizenship by investment from 400,000 USD." },
  { id:"IL", name:"Israel", region:"Middle East", lat:31.0, lon:34.8, yield:3.05, priceIdx:6, note:"Open market, high prices, specific taxation for non-residents." },

  // ---- Asia & Pacific ----
  { id:"JP", name:"Japan", region:"Asia", lat:36.2, lon:138.3, yield:4.55, priceIdx:4, note:"Free foreign ownership, no restrictions on land." },
  { id:"SG", name:"Singapore", region:"Asia", lat:1.35, lon:103.8, yield:3.06, priceIdx:8, note:"Additional Buyer's Stamp Duty (ABSD) up to 60% for foreigners." },
  { id:"HK", name:"Hong Kong", region:"Asia", lat:22.3, lon:114.2, yield:3.55, priceIdx:8, note:"Open market, high transfer duties for non-residents." },
  { id:"TH", name:"Thailand", region:"Asia", lat:15.9, lon:100.9, yield:6.49, priceIdx:2, note:"Direct purchase prohibited — condominium (49% max), company or 30-year lease." },
  { id:"MY", name:"Malaysia", region:"Asia", lat:4.2, lon:101.9, yield:5.27, priceIdx:2, note:"Minimum price thresholds by state, MM2H program available." },
  { id:"ID", name:"Indonesia", region:"Asia", lat:-0.8, lon:113.9, yield:8.22, priceIdx:1, note:"Right of use (Hak Pakai) rather than full ownership for foreigners." },
  { id:"PH", name:"Philippines", region:"Asia", lat:12.9, lon:121.8, yield:5.10, priceIdx:1, note:"Land reserved for nationals; condominiums accessible (max 40%)." },
  { id:"VN", name:"Vietnam", region:"Asia", lat:14.1, lon:108.3, yield:3.85, priceIdx:1, note:"Renewable 50-year lease, 30% quota per building for foreigners." },
  { id:"KH", name:"Cambodia", region:"Asia", lat:12.6, lon:104.9, yield:7.81, priceIdx:1, note:"Condominium accessible in full ownership (except ground floor)." },
  { id:"IN", name:"India", region:"Asia", lat:22.0, lon:79.0, yield:5.16, priceIdx:2, note:"Free residential/commercial purchase for NRI/OCI, restricted for other foreigners." },
  { id:"GE", name:"Georgia", region:"Asia", lat:42.3, lon:43.4, yield:7.25, priceIdx:1, note:"No restrictions on residential property, very open market." },
  { id:"KZ", name:"Kazakhstan", region:"Asia", lat:48.0, lon:66.9, yield:10.95, priceIdx:1, note:"Very high yield, market still not very mature for foreigners." },
  { id:"AU", name:"Australia", region:"Pacific", lat:-25.3, lon:133.8, yield:4.94, priceIdx:6, note:"Mandatory FIRB approval, often limited to new-build." },
  { id:"NZ", name:"New Zealand", region:"Pacific", lat:-41.0, lon:174.9, yield:4.24, priceIdx:6, note:"Residential purchase prohibited for non-residents since 2018 (with exceptions)." },
  { id:"TW", name:"Taiwan", region:"Asia", lat:23.7, lon:121.0, yield:2.26, priceIdx:5, note:"Reciprocity required, niche market for foreign investors." },
  { id:"MO", name:"Macau", region:"Asia", lat:22.2, lon:113.5, yield:2.08, priceIdx:6, note:"Restricted market, very high prices, low yields." },
];

/* Qualification thresholds used by the globe's calculator.
   The "verdict" below is indicative — based solely on the average
   national gross yield, to be refined with an advisor. */
function verdictPourRendement(y){
  if (y >= 6.5) return { label:"Strong opportunity", cls:"pill-green" };
  if (y >= 4.5) return { label:"Interesting potential", cls:"pill-gold" };
  if (y >= 3.0) return { label:"To be assessed case by case", cls:"pill-amber" };
  return { label:"Low yield / safe haven", cls:"pill-red" };
}
