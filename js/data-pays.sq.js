/* ============================================================
   Partneris Immobilier — Baza e të dhënave të vendeve
   Rendimente mesatare bruto qiraje (burimi: Global Property Guide,
   të dhëna të agreguara T3 2026) + koordinata të përafërta (lat/lon)
   për vendosjen e shënuesve në globin 3D.
   Këto shifra janë mesatare kombëtare indikative, me qëllim
   edukativ — nuk zëvendësojnë një studim të tregut lokal.
   ============================================================ */

var PAYS_DATA = [
  // ---- Evropë ----
  { id:"CH", name:"Zvicër", region:"Evropë", lat:46.8, lon:8.2, yield:2.91, priceIdx:9, note:"Treg i pjekur, stabilitet i lartë, akses i kufizuar për jorezidentët (Lex Koller)." },
  { id:"FR", name:"Francë", region:"Evropë", lat:46.6, lon:2.2, yield:4.83, priceIdx:6, note:"Treg i hapur, fiskalitet i lartë mbi të ardhurat nga qiraja." },
  { id:"DE", name:"Gjermani", region:"Evropë", lat:51.2, lon:10.4, yield:3.42, priceIdx:6, note:"Treg qiraje shumë i rregulluar (Mietpreisbremse), kërkesë e fortë urbane." },
  { id:"ES", name:"Spanjë", region:"Evropë", lat:40.0, lon:-3.7, yield:5.43, priceIdx:4, note:"Treg i hapur për të huajt, turizëm dhe golden visa (pasuria e paluajtshme e përjashtuar që nga 2025)." },
  { id:"IT", name:"Itali", region:"Evropë", lat:42.5, lon:12.5, yield:6.61, priceIdx:4, note:"Rendimente tërheqëse jashtë metropoleve të mëdha, fiskalitet kompleks." },
  { id:"PT", name:"Portugali", region:"Evropë", lat:39.5, lon:-8.0, yield:4.29, priceIdx:4, note:"Treg i hapur, ish-golden visa e ri-orientuar drejt fondeve të investimit." },
  { id:"GB", name:"Mbretëria e Bashkuar", region:"Evropë", lat:54.0, lon:-2.5, yield:7.35, priceIdx:6, note:"Treg likuid, taksa transferimi (Stamp Duty) e rritur për jorezidentët." },
  { id:"IE", name:"Irlandë", region:"Evropë", lat:53.4, lon:-8.0, yield:7.66, priceIdx:5, note:"Kërkesë e fortë qiraje në Dublin, ofertë e kufizuar." },
  { id:"NL", name:"Holandë", region:"Evropë", lat:52.2, lon:5.5, yield:5.97, priceIdx:5, note:"Rregullim i shtuar i qirave, treg i ngushtë." },
  { id:"BE", name:"Belgjikë", region:"Evropë", lat:50.6, lon:4.5, yield:4.31, priceIdx:4, note:"Treg i qëndrueshëm, fiskalitet i moderuar mbi pronësinë." },
  { id:"AT", name:"Austri", region:"Evropë", lat:47.6, lon:14.1, yield:3.31, priceIdx:5, note:"Rendimente të ulëta, treg shumë cilësor në Vjenë." },
  { id:"LU", name:"Luksemburg", region:"Evropë", lat:49.8, lon:6.1, yield:3.27, priceIdx:8, note:"Çmime ndër më të lartat në Evropë, fiskalitet i favorshëm." },
  { id:"GR", name:"Greqi", region:"Evropë", lat:39.0, lon:22.0, yield:4.38, priceIdx:2, note:"Golden Visa nga 250 000-800 000€ sipas zonës, çmime ende të përballueshme." },
  { id:"PL", name:"Poloni", region:"Evropë", lat:52.0, lon:19.5, yield:5.92, priceIdx:3, note:"Treg në rritje, kërkesë e fortë qiraje urbane." },
  { id:"RO", name:"Rumani", region:"Evropë", lat:45.9, lon:25.0, yield:5.87, priceIdx:2, note:"Blerja e drejtpërdrejtë e tokës e rezervuar për shtetasit — kërkohet shoqëri lokale." },
  { id:"HU", name:"Hungari", region:"Evropë", lat:47.2, lon:19.5, yield:4.69, priceIdx:3, note:"Programi Guest Investor (obligacione shtetërore) për rezidencë." },
  { id:"CZ", name:"Republika Çeke", region:"Evropë", lat:49.8, lon:15.5, yield:3.39, priceIdx:4, note:"Toka e rezervuar për BE / bashkëshortë çekë; shoqëri për të tjerët." },
  { id:"SK", name:"Sllovaki", region:"Evropë", lat:48.7, lon:19.5, yield:4.49, priceIdx:3, note:"Treg në zhvillim, akses i lehtësuar për shtetasit e BE-së." },
  { id:"HR", name:"Kroaci", region:"Evropë", lat:45.1, lon:15.2, yield:4.21, priceIdx:3, note:"Miratim ministror i kërkuar jashtë BE-së, kërkesë e fortë turistike." },
  { id:"BG", name:"Bullgari", region:"Evropë", lat:42.7, lon:25.5, yield:4.27, priceIdx:2, note:"Toka e rezervuar për shtetasit; apartamentet të aksesueshme përmes shoqërisë." },
  { id:"RS", name:"Serbi", region:"Evropë", lat:44.0, lon:21.0, yield:5.14, priceIdx:2, note:"Kërkohet reciprocitet, treg ende i përballueshëm." },
  { id:"LV", name:"Letoni", region:"Evropë", lat:56.9, lon:24.6, yield:7.20, priceIdx:2, note:"Rendimente të larta, ish-programi golden visa i pezulluar." },
  { id:"LT", name:"Lituani", region:"Evropë", lat:55.2, lon:23.9, yield:5.54, priceIdx:2, note:"Treg i hapur, fiskalitet konkurrues." },
  { id:"EE", name:"Estoni", region:"Evropë", lat:58.6, lon:25.0, yield:4.19, priceIdx:3, note:"Mjedis dixhital dhe fiskal tërheqës." },
  { id:"UA", name:"Ukrainë", region:"Evropë", lat:49.0, lon:31.0, yield:7.55, priceIdx:1, note:"Rrezik i madh gjeopolitik — kujdes i shtuar para çdo investimi." },
  { id:"MD", name:"Moldavi", region:"Evropë", lat:47.2, lon:28.5, yield:9.49, priceIdx:1, note:"Rendimente shumë të larta por treg pak likuid." },
  { id:"MK", name:"Maqedonia e Veriut", region:"Evropë", lat:41.6, lon:21.7, yield:6.53, priceIdx:1, note:"Treg në zhvillim, çmime të ulëta." },
  { id:"ME", name:"Mali i Zi", region:"Evropë", lat:42.7, lon:19.3, yield:4.84, priceIdx:2, note:"Zonat bregdetare shumë të kërkuara nga investitorët e huaj." },
  { id:"IS", name:"Islandë", region:"Evropë", lat:64.9, lon:-19.0, yield:5.41, priceIdx:5, note:"Treg i kufizuar, kërkesë e fortë turistike." },
  { id:"DK", name:"Danimarkë", region:"Evropë", lat:56.2, lon:9.5, yield:4.11, priceIdx:6, note:"Treg i qëndrueshëm dhe transparent, akses i kufizuar për jashtë-BE." },
  { id:"SE", name:"Suedi", region:"Evropë", lat:60.1, lon:18.6, yield:5.75, priceIdx:5, note:"Treg qiraje shumë i rregulluar (lista pritjeje)." },
  { id:"NO", name:"Norvegji", region:"Evropë", lat:60.5, lon:8.5, yield:4.95, priceIdx:7, note:"Çmime të larta, treg i qëndrueshëm dhe transparent." },
  { id:"FI", name:"Finlandë", region:"Evropë", lat:64.0, lon:26.0, yield:5.63, priceIdx:4, note:"Treg i hapur, fiskalitet i moderuar." },
  { id:"CY", name:"Qipro", region:"Evropë", lat:35.1, lon:33.4, yield:4.88, priceIdx:3, note:"Fiskalitet i favorshëm, treg i kërkuar nga pensionistët evropianë." },
  { id:"AD", name:"Andorra", region:"Evropë", lat:42.5, lon:1.5, yield:4.18, priceIdx:6, note:"Fiskalitet shumë i favorshëm, akses në pronësi i rregulluar." },
  { id:"SI", name:"Slloveni", region:"Evropë", lat:46.1, lon:14.8, yield:4.15, priceIdx:4, note:"Treg i qëndrueshëm, reciprocitet i fortë me BE-në." },
  { id:"BA", name:"Bosnjë-Hercegovinë", region:"Evropë", lat:44.2, lon:17.8, yield:3.96, priceIdx:1, note:"Treg në lindje, kuadri ligjor ende në ndërtim e sipër." },

  // ---- Amerika e Veriut ----
  { id:"US", name:"Shtetet e Bashkuara", region:"Amerika e Veriut", lat:38.0, lon:-97.0, yield:6.71, priceIdx:5, note:"Treg shumë likuid, akses i lirë për të huajt, fiskalitet federal + shtetëror." },
  { id:"CA", name:"Kanada", region:"Amerika e Veriut", lat:56.0, lon:-106.0, yield:5.72, priceIdx:6, note:"Kufizime provinciale (p.sh. Ishulli i Princit Eduard), taksë kundër-spekulimit." },

  // ---- Amerika Latine & Karaibet ----
  { id:"MX", name:"Meksikë", region:"Amerika Latine", lat:23.6, lon:-102.5, yield:5.79, priceIdx:2, note:"Blerja e drejtpërdrejtë e ndaluar afër bregdetit/kufijve — fideicomiso ose shoqëri." },
  { id:"BR", name:"Brazil", region:"Amerika Latine", lat:-14.2, lon:-51.9, yield:5.71, priceIdx:2, note:"Kufizime në zonat kufitare dhe të sigurisë kombëtare." },
  { id:"AR", name:"Argjentinë", region:"Amerika Latine", lat:-38.4, lon:-63.6, yield:5.46, priceIdx:2, note:"Asnjë kufizim mbi pronësinë e huaj." },
  { id:"CL", name:"Kili", region:"Amerika Latine", lat:-35.7, lon:-71.5, yield:4.80, priceIdx:3, note:"Treg i hapur, kufizime vetëm në zonat kufitare." },
  { id:"CO", name:"Kolumbi", region:"Amerika Latine", lat:4.6, lon:-74.3, yield:7.01, priceIdx:2, note:"Treg i hapur, rritje e fortë në Medellín dhe Bogotá." },
  { id:"PE", name:"Peru", region:"Amerika Latine", lat:-9.2, lon:-75.0, yield:5.93, priceIdx:2, note:"Treg i hapur, kufizime në zonën kufitare (traktat reciprociteti)." },
  { id:"PA", name:"Panama", region:"Amerika Latine", lat:8.5, lon:-80.8, yield:6.94, priceIdx:3, note:"E ndaluar brenda 6 miljeve nga kufijtë; vizë investitori tërheqëse." },
  { id:"CR", name:"Kosta Rika", region:"Amerika Latine", lat:9.7, lon:-83.8, yield:7.63, priceIdx:3, note:"Të njëjtat të drejta si shtetasit, kufizime bregdetare (zona detare)." },
  { id:"DO", name:"Republika Dominikane", region:"Amerika Latine", lat:18.7, lon:-70.2, yield:8.53, priceIdx:2, note:"Treg shumë i hapur, fiskalitet i fortë nxitës (CONFOTUR)." },
  { id:"UY", name:"Uruguai", region:"Amerika Latine", lat:-32.5, lon:-55.8, yield:6.47, priceIdx:3, note:"Asnjë kufizim, stabilitet juridik i njohur në Amerikën Latine." },
  { id:"PR", name:"Porto Riko", region:"Amerika Latine", lat:18.2, lon:-66.5, yield:8.46, priceIdx:3, note:"Regjim fiskal Act 60 tërheqës për investitorë amerikanë dhe të huaj." },

  // ---- Afrikë & Lindja e Mesme ----
  { id:"ZA", name:"Afrika e Jugut", region:"Afrikë", lat:-30.6, lon:22.9, yield:11.53, priceIdx:2, note:"Rendimenti më i lartë në renditjen botërore, rrezik valutor/sigurie për t'u marrë parasysh." },
  { id:"MA", name:"Marok", region:"Afrikë", lat:31.8, lon:-7.1, yield:7.36, priceIdx:2, note:"Treg i hapur për të huajt, kërkesë e fortë në Marrakesh dhe Kazablankë." },
  { id:"EG", name:"Egjipt", region:"Afrikë", lat:26.8, lon:30.8, yield:7.61, priceIdx:1, note:"Treg në rritje, kontroll i këmbimit valutor për t'u parashikuar." },
  { id:"MU", name:"Mauricius", region:"Afrikë", lat:-20.3, lon:57.6, yield:3.29, priceIdx:5, note:"Programet PDS/Smart City ofrojnë leje qëndrimi me blerjen." },
  { id:"AE", name:"Emiratet e Bashkuara Arabe", region:"Lindja e Mesme", lat:23.4, lon:53.8, yield:4.94, priceIdx:5, note:"Pronësi freehold në zona të caktuara, 0% taksë mbi të ardhurat nga qiraja." },
  { id:"SA", name:"Arabia Saudite", region:"Lindja e Mesme", lat:24.0, lon:45.0, yield:6.84, priceIdx:3, note:"Hapje graduale për të huajt në disa zona (Vizioni 2030)." },
  { id:"QA", name:"Katar", region:"Lindja e Mesme", lat:25.3, lon:51.2, yield:5.17, priceIdx:5, note:"Pronësi freehold në zona të caktuara, vizë rezidenti e lidhur." },
  { id:"TR", name:"Turqi", region:"Lindja e Mesme", lat:38.9, lon:35.2, yield:7.32, priceIdx:2, note:"Shtetësi përmes investimit nga 400 000 USD." },
  { id:"IL", name:"Izrael", region:"Lindja e Mesme", lat:31.0, lon:34.8, yield:3.05, priceIdx:6, note:"Treg i hapur, çmime të larta, fiskalitet specifik për jorezidentët." },

  // ---- Azi & Paqësor ----
  { id:"JP", name:"Japoni", region:"Azi", lat:36.2, lon:138.3, yield:4.55, priceIdx:4, note:"Pronësi e lirë për të huajt, asnjë kufizim mbi tokën." },
  { id:"SG", name:"Singapor", region:"Azi", lat:1.35, lon:103.8, yield:3.06, priceIdx:8, note:"Taksë shtesë vule (ABSD) deri në 60% për të huajt." },
  { id:"HK", name:"Hong Kong", region:"Azi", lat:22.3, lon:114.2, yield:3.55, priceIdx:8, note:"Treg i hapur, taksa transferimi të larta për jorezidentët." },
  { id:"TH", name:"Tajlandë", region:"Azi", lat:15.9, lon:100.9, yield:6.49, priceIdx:2, note:"Blerja e drejtpërdrejtë e ndaluar — bashkëpronësi (49% maksimum), shoqëri ose qira 30-vjeçare." },
  { id:"MY", name:"Malajzi", region:"Azi", lat:4.2, lon:101.9, yield:5.27, priceIdx:2, note:"Pragje çmimi minimale sipas shtetit, programi MM2H i disponueshëm." },
  { id:"ID", name:"Indonezi", region:"Azi", lat:-0.8, lon:113.9, yield:8.22, priceIdx:1, note:"E drejtë përdorimi (Hak Pakai) në vend të pronësisë së plotë për të huajt." },
  { id:"PH", name:"Filipine", region:"Azi", lat:12.9, lon:121.8, yield:5.10, priceIdx:1, note:"Toka e rezervuar për shtetasit; kondominiumet të aksesueshme (maksimumi 40%)." },
  { id:"VN", name:"Vietnam", region:"Azi", lat:14.1, lon:108.3, yield:3.85, priceIdx:1, note:"Qira 50-vjeçare e ripërtëritshme, kuotë 30% për ndërtesë për të huajt." },
  { id:"KH", name:"Kamboxhia", region:"Azi", lat:12.6, lon:104.9, yield:7.81, priceIdx:1, note:"Bashkëpronësi e aksesueshme në pronësi të plotë (përveç përdhesës)." },
  { id:"IN", name:"Indi", region:"Azi", lat:22.0, lon:79.0, yield:5.16, priceIdx:2, note:"Blerje rezidenciale/tregtare e lirë për NRI/OCI, e kufizuar për të huajt e tjerë." },
  { id:"GE", name:"Gjeorgji", region:"Azi", lat:42.3, lon:43.4, yield:7.25, priceIdx:1, note:"Asnjë kufizim mbi pronën rezidenciale, treg shumë i hapur." },
  { id:"KZ", name:"Kazakistan", region:"Azi", lat:48.0, lon:66.9, yield:10.95, priceIdx:1, note:"Rendiment shumë i lartë, treg ende pak i pjekur për të huajt." },
  { id:"AU", name:"Australi", region:"Paqësor", lat:-25.3, lon:133.8, yield:4.94, priceIdx:6, note:"Miratim i detyrueshëm nga FIRB, shpesh i kufizuar te ndërtesat e reja." },
  { id:"NZ", name:"Zelanda e Re", region:"Paqësor", lat:-41.0, lon:174.9, yield:4.24, priceIdx:6, note:"Blerja rezidenciale e ndaluar për jorezidentët që nga 2018 (me përjashtime)." },
  { id:"TW", name:"Tajvan", region:"Azi", lat:23.7, lon:121.0, yield:2.26, priceIdx:5, note:"Kërkohet reciprocitet, treg nike për investitorë të huaj." },
  { id:"MO", name:"Makao", region:"Azi", lat:22.2, lon:113.5, yield:2.08, priceIdx:6, note:"Treg i kufizuar, çmime shumë të larta, rendimente të ulëta." },
];

/* Pragjet e kualifikimit të përdorura nga kalkulatori i globit.
   "Verdikti" më poshtë është indikativ — bazuar vetëm në
   rendimentin mesatar bruto kombëtar, për t'u thelluar me një këshilltar. */
function verdictPourRendement(y){
  if (y >= 6.5) return { label:"Mundësi e fortë", cls:"pill-green" };
  if (y >= 4.5) return { label:"Potencial interesant", cls:"pill-gold" };
  if (y >= 3.0) return { label:"Për t'u studiuar rast pas rasti", cls:"pill-amber" };
  return { label:"Rendiment i ulët / vlerë strehimi", cls:"pill-red" };
}
