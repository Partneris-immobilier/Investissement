/* ============================================================
   Partneris Immobilier — Kuadri ligjor i investimit sipas vendit
   Sintezë me qëllim informativ (2026) — verifikoni gjithmonë
   rregulloren në fuqi me një profesionist lokal para çdo
   angazhimi. Pragjet e investimit për programet e rezidencës
   ndryshojnë rregullisht.
   ============================================================ */

var DROIT_DATA = [
  // ================= EVROPË =================
  {
    id:"CH", name:"Zvicër", region:"Evropë",
    acces:"I kufizuar për jorezidentët jashtë BE/EFTA-s (Lex Koller).",
    accesNiveau:"restreint",
    nationalite:"Shtetasit e BE/EFTA-s me vendbanim në Zvicër: akses pothuajse i lirë. Jashtë BE/EFTA-s: leje kantonale zyrtare e detyrueshme për banesën kryesore; pasuria e paluajtshme thjesht për qira është shumë e kufizuar.",
    structure:"Blerje e drejtpërdrejtë e mundshme për rezidentët; struktura specifike (fonde, leje kantonale) për jorezidentët.",
    visa:"Asnjë program rezidence përmes investimit në pasuri të paluajtshme.",
    notes:"Reforma e 2026: detyrim rishitjeje brenda 2 vjetësh në rast largimi nga Zvicra, kuota të reduktuara për banesat sekondare. Shihni faqen tonë të dedikuar investimit në Zvicër."
  },
  {
    id:"FR", name:"Francë", region:"Evropë",
    acces:"I hapur — asnjë kufizim i përgjithshëm mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie apo rezidence për të blerë.",
    structure:"Blerje në emër personal, SCI (shoqëri civile e patundshmërive) ose shoqëri tjetër, sipas strategjisë pasurore dhe trashëgimore.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme; viza « passeport talent » ekziston për forma të tjera investimi.",
    notes:"Fiskaliteti: IFI (taksa mbi pasurinë e patundshme) mbi 1,3 milionë € pasuri të paluajtshme neto, kontribute sociale mbi të ardhurat nga qiraja për jorezidentët (duhet verifikuar konventa tatimore)."
  },
  {
    id:"DE", name:"Gjermani", region:"Evropë",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal ose përmes shoqërisë (GmbH) për të optimizuar fiskalitetin dhe trashëgiminë.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Rregullim i qirave (Mietpreisbremse) në qytetet e mëdha; tarifa noteriale dhe taksa transferimi (Grunderwerbsteuer) 3.5–6.5% sipas landit."
  },
  {
    id:"ES", name:"Spanjë", region:"Evropë",
    acces:"I hapur — liri e plotë, përveç zonave ushtarake dhe kufitare specifike.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë me numër NIE të detyrueshëm për çdo blerës të huaj.",
    visa:"Golden Visa spanjolle e hequr për pasurinë e paluajtshme që nga prilli 2025; rrugë të tjera rezidence (jo-fitimprurëse, sipërmarrëse) mbeten të disponueshme.",
    notes:"Taksë mbi të ardhurat e jorezidentëve (IRNR) mbi qiratë; fitimi kapital i nënshtrohet mbajtjes në burim prej 3% të çmimit për jorezidentët."
  },
  {
    id:"IT", name:"Itali", region:"Evropë",
    acces:"I hapur në kushte reciprociteti me vendin e origjinës (automatik për BE-në dhe shumicën e vendeve perëndimore).",
    accesNiveau:"ouvert",
    nationalite:"Parimi i reciprocitetit — duhet verifikuar për shtetësitë jashtë BE/SHBA/Zvicër.",
    structure:"Blerja e drejtpërdrejtë në emër personal është më e zakonshmja.",
    visa:"Investor Visa for Italy (nga 250 000€ në start-up ose 2 milionë € në obligacione shtetërore — vetëm pasuria e paluajtshme nuk e hap këtë vizë).",
    notes:"Regjim fiskal forfetar tërheqës për rezidentë të rinj të pasur (« flat tax » 200 000€/vit mbi të ardhurat e huaja)."
  },
  {
    id:"PT", name:"Portugali", region:"Evropë",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie; numri fiskal (NIF) i detyrueshëm.",
    structure:"Blerje e drejtpërdrejtë në emër personal ose përmes shoqërisë.",
    visa:"Golden Visa ende aktive, por e ri-orientuar që nga 2023 drejt fondeve të investimit dhe krijimit të vendeve të punës — blerja e drejtpërdrejtë e pasurisë së paluajtshme nuk jep më të drejtën e vizës.",
    notes:"Regjimi NHR (rezident jo-i-zakonshëm) shumë i kufizuar që nga 2024 — duhet verifikuar përshtatshmëria rast pas rasti."
  },
  {
    id:"GB", name:"Mbretëria e Bashkuar", region:"Evropë",
    acces:"I hapur — treg ndër më liberalët në botë.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie apo rezidence.",
    structure:"Blerje e drejtpërdrejtë ose përmes shoqërisë (shpesh e përdorur për optimizimin trashëgimor dhe fiskal).",
    visa:"Tier 1 Investor Visa e hequr në 2022; asnjë rrugë rezidence e lidhur me pasurinë e paluajtshme.",
    notes:"Stamp Duty Land Tax i rritur me 2% për blerësit jorezidentë, në shtesë të mbitaksës për banesën sekondare (+5%)."
  },
  {
    id:"IE", name:"Irlandë", region:"Evropë",
    acces:"I hapur — asnjë kufizim i përgjithshëm.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Immigrant Investor Programme i pezulluar që nga 2023.",
    notes:"Treg qiraje shumë i tensionuar në Dublin; rregullim i qirave në « Rent Pressure Zones »."
  },
  {
    id:"NL", name:"Holandë", region:"Evropë",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal ose shoqëri (BV).",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Ligji për rregullimin e zgjeruar të qirave (Wet betaalbare huur); disa qytete kufizojnë blerjen për qira në lagje të caktuara (« opkoopbescherming »)."
  },
  {
    id:"BE", name:"Belgjikë", region:"Evropë",
    acces:"I hapur — asnjë kufizim.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerja e drejtpërdrejtë në emër personal është më e zakonshmja.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Taksa regjistrimi të ndryshueshme sipas rajonit (Vallonia, Flandria, Bruksel) — nga 3% deri në 12.5%."
  },
  {
    id:"AT", name:"Austri", region:"Evropë",
    acces:"I kufizuar në disa Länder (leje paraprake për jashtë-BE-në, veçanërisht banesat sekondare).",
    accesNiveau:"restreint",
    nationalite:"Shtetasit e BE/EFTA-s: akses i lehtësuar. Jashtë BE-së: kërkohet leje rajonale sipas landit.",
    structure:"Blerje e drejtpërdrejtë e mundshme, leje administrative në disa raste.",
    visa:"Program rezidence përmes investimit të drejtpërdrejtë (nga 3 milionë €, krijim vendesh pune) — jo specifik për pasurinë e paluajtshme.",
    notes:"Vjena mbetet shumë e rregulluar për banesat sekondare."
  },
  {
    id:"LU", name:"Luksemburg", region:"Evropë",
    acces:"I hapur — asnjë kufizim.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Treg ndër më të shtrenjtët në Evropë; fiskalitet i favorshëm mbajtjeje."
  },
  {
    id:"GR", name:"Greqi", region:"Evropë",
    acces:"I hapur — asnjë kufizim i përgjithshëm (përjashtuar zonat kufitare të ndjeshme, leje ushtarake).",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie për blerje.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Golden Visa aktive: 250 000€ në zonat më pak të tensionuara, deri në 800 000€ në Athinë, Selanik dhe ishujt turistikë. Leje qëndrimi e ripërtëritshme pa detyrim qëndrimi fizik.",
    notes:"Një nga golden visa më të aksesueshme në Evropë në 2026."
  },
  {
    id:"MT", name:"Maltë", region:"Evropë",
    acces:"I kufizuar — leja AIP (Acquisition of Immovable Property) kërkohet jashtë zonave të caktuara për jorezidentët e BE-së.",
    accesNiveau:"restreint",
    nationalite:"Shtetasit e BE-së me rezidencë në Maltë prej 5 vjetësh: akses i lirë. Të tjerët: leja AIP ose blerje në zonë të caktuar (Special Designated Areas).",
    structure:"Blerje e drejtpërdrejtë në zonë të caktuar pa kufizim; leja AIP në vendet e tjera.",
    visa:"Malta Permanent Residence Programme nga 350 000–600 000€ (blerje) ose qira vjetore minimale + kontribut.",
    notes:"Natyralizim i përshpejtuar i mundshëm përmes një programi investimi të veçantë (kontribut + pasuri e paluajtshme)."
  },
  {
    id:"PL", name:"Poloni", region:"Evropë",
    acces:"I hapur për shtetasit e BE/EFTA-s; leja e Ministrisë së Punëve të Brendshme kërkohet për të tjerët (kryesisht për tokën).",
    accesNiveau:"ouvert",
    nationalite:"BE/EFTA: e lirë. Jashtë BE-së: leje për tokat bujqësore/pyjore, apartamentet zakonisht të lira.",
    structure:"Blerja e drejtpërdrejtë në emër personal është më e zakonshmja.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Treg qiraje në rritje të fortë në qytetet e mëdha (Varshavë, Krakov, Wrocław)."
  },
  {
    id:"RO", name:"Rumani", region:"Evropë",
    acces:"I kufizuar — toka është e rezervuar për shtetasit rumunë dhe qytetarët e BE-së; të tjerët duhet të kalojnë përmes një shoqërie.",
    accesNiveau:"restreint",
    nationalite:"BE: akses i lejuar në tokë. Jashtë BE-së: blerje toke përmes një shoqërie rumune.",
    structure:"Shoqëria rumune rekomandohet për të siguruar blerjen jashtë BE-së.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Apartamentet në bashkëpronësi (pa pjesë të konsiderueshme toke) mbeten të aksesueshme më lehtë."
  },
  {
    id:"HU", name:"Hungari", region:"Evropë",
    acces:"I hapur për banesat; leje për tokën bujqësore.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht i rreptë për blerjen e banesave.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Programi « Guest Investor »: obligacione shtetërore nga 250 000€ ose fond i rregulluar pasurish të paluajtshme, që jep të drejtën e një leje qëndrimi 2-vjeçare të ripërtëritshme.",
    notes:"Asnjë detyrim prezence fizike minimale për ruajtjen e statusit."
  },
  {
    id:"CZ", name:"Republika Çeke", region:"Evropë",
    acces:"I kufizuar për tokën jashtë BE-së — akses i lehtësuar për banesat në bashkëpronësi.",
    accesNiveau:"restreint",
    nationalite:"BE dhe bashkëshortët e qytetarëve çekë: akses i lirë. Të tjerët: shoqëria çeke rekomandohet për tokën.",
    structure:"Shoqëria lokale (s.r.o.) shpesh e përdorur nga blerësit jashtë BE-së.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Tregu i Pragës shumë i kërkuar nga investitorët ndërkombëtarë."
  },
  {
    id:"HR", name:"Kroaci", region:"Evropë",
    acces:"I kufizuar jashtë BE-së — kërkohet miratim nga Ministria e Drejtësisë (afat që mund të arrijë 12 muaj).",
    accesNiveau:"restreint",
    nationalite:"BE: akses i lirë me kusht reciprociteti. Jashtë BE-së: miratim ministror ose shoqëri kroate.",
    structure:"Shoqëria kroate: alternativë e shpejtë ndaj miratimit ministror.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme.",
    notes:"Zonat bregdetare (Istria, Dalmacia) shumë të kërkuara për qiranë sezonale."
  },
  {
    id:"BG", name:"Bullgari", region:"Evropë",
    acces:"I kufizuar për tokën — i rezervuar për shtetasit bullgarë dhe personat juridikë bullgarë.",
    accesNiveau:"restreint",
    nationalite:"BE/EFTA: akses në banesa. Toka: kërkohet shoqëri bullgare për të gjithë të huajt, përfshirë ata të BE-së.",
    structure:"Shoqëria bullgare (OOD) e përdorur gjerësisht për blerjen e tokës.",
    visa:"Programi i mëparshëm i investimit i pezulluar.",
    notes:"Rendimente të larta në bregdet dhe në Sofje, treg ende i përballueshëm."
  },
  {
    id:"CY", name:"Qipro", region:"Evropë",
    acces:"I hapur me leje nga Këshilli i Ministrave për jashtë-BE-në përtej një prone.",
    accesNiveau:"restreint",
    nationalite:"BE: akses i lirë. Jashtë BE-së: kërkohet leje, zakonisht e akorduar për një pronë rezidenciale.",
    structure:"Blerje e drejtpërdrejtë pas lejes administrative.",
    visa:"Leje qëndrimi e përhershme nga 300 000€ investim në pasuri të paluajtshme (kategoria F/6.2).",
    notes:"Fiskalitet tërheqës për pensionistët dhe personat jo-me-vendbanim."
  },
  {
    id:"TR", name:"Turqi", region:"Lindja e Mesme",
    acces:"I hapur me reciprocitet — shumica e shtetësive mund të blejnë lirisht jashtë zonave ushtarake.",
    accesNiveau:"ouvert",
    nationalite:"Kërkohet reciprocitet me vendin e origjinës (rasti për shumicën dërrmuese të vendeve perëndimore).",
    structure:"Blerja e drejtpërdrejtë në emër personal është më e zakonshmja.",
    visa:"Shtetësi turke përmes investimit nga 400 000 USD në pasuri të paluajtshme, me angazhim mbajtjeje 3-vjeçare.",
    notes:"Një nga programet e shtetësisë përmes investimit në pasuri të paluajtshme më të aksesueshme në botë."
  },

  // ================= AMERIKA E VERIUT =================
  {
    id:"US", name:"Shtetet e Bashkuara", region:"Amerika e Veriut",
    acces:"I hapur — asnjë kufizim federal i përgjithshëm mbi pronësinë e huaj rezidenciale.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie për blerje (kufizime sektoriale mbi tokat bujqësore në disa shtete).",
    structure:"Blerje në emër personal, LLC ose trust — struktura ndikon fuqishëm në taksën trashëgimore (estate tax) të jorezidentëve.",
    visa:"EB-5 (green card) nga 800 000 USD që krijon vende pune — pasuria e paluajtshme klasike për qira nuk kualifikohet vetëm.",
    notes:"FIRPTA: mbajtje në burim prej 15% mbi çmimin e shitjes gjatë rishitjes nga një jorezident."
  },
  {
    id:"CA", name:"Kanada", region:"Amerika e Veriut",
    acces:"I kufizuar — ndalim federal i blerjes rezidenciale nga jorezidentët/jo-shtetasit (Ligji mbi ndalimin e blerjes së pasurive rezidenciale nga jo-kanadezët), plus kufizime provinciale.",
    accesNiveau:"restreint",
    nationalite:"Rezidentët e përhershëm dhe shtetasit: akses i lirë. Jorezidentët: blerja rezidenciale gjerësisht e kufizuar deri në 2027 (ligji i zgjatur), përjashtime të kufizuara.",
    structure:"Pasuria e paluajtshme tregtare dhe disa projekte të reja mbeten të aksesueshme sipas provincës.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme; programe investitorësh provincialë të veçanta (Quebec, etj.).",
    notes:"Ishulli i Princit Eduard historikisht i kufizon jorezidentët në 5 akra pa leje. Duhet verifikuar evolucioni i moratoriumit federal para çdo projekti."
  },

  // ================= AMERIKA LATINE =================
  {
    id:"MX", name:"Meksikë", region:"Amerika Latine",
    acces:"I kufizuar në « zonën e kufizuar » (100 km nga kufijtë, 50 km nga bregdeti) — akses përmes fideicomiso-s ose shoqërisë.",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim jashtë zonës së kufizuar.",
    structure:"Fideicomiso (fiducia bankare, 50 vjet e ripërtëritshme) ose shoqëri meksikane për zonën e kufizuar.",
    visa:"Vizë rezidenti të përkohshme/të përhershme e mundshme me justifikim të ardhurash ose investimi (jo specifikisht pasuri e paluajtshme).",
    notes:"Strukturë shumë e rregulluar por gjerësisht e provuar — shumica e shitjeve turistike (Riviera Maya, Los Cabos) kalojnë përmes fideicomiso-s."
  },
  {
    id:"BR", name:"Brazil", region:"Amerika Latine",
    acces:"I kufizuar në zonat kufitare dhe të sigurisë kombëtare; i hapur në vendet e tjera.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie jashtë zonave të ndjeshme.",
    structure:"Blerje e drejtpërdrejtë në emër personal ose shoqëri braziliane.",
    visa:"Vizë investitori (VIPER) nga rreth 1 milion BRL investim në pasuri të paluajtshme (shumë e reduktuar në Veri/Verilindje).",
    notes:"Viza e investitorit në pasuri të paluajtshme mbetet një nga rrugët më të aksesueshme të rezidencës në Amerikën e Jugut."
  },
  {
    id:"AR", name:"Argjentinë", region:"Amerika Latine",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Asnjë golden visa e dedikuar, por rezidenca « rentista » e mundshme me të ardhura të justifikuara.",
    notes:"Treg historikisht tërheqës për investitorët ndërkombëtarë në dollarë."
  },
  {
    id:"CO", name:"Kolumbi", region:"Amerika Latine",
    acces:"I hapur — asnjë kufizim i përgjithshëm.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Viza « M » investitor nga rreth 100 000 USD, ose viza pensionist/rentier sipas të ardhurave.",
    notes:"Medellín dhe Bogotá përqendrojnë pjesën më të madhe të kërkesës ndërkombëtare për qira."
  },
  {
    id:"PA", name:"Panama", region:"Amerika Latine",
    acces:"I kufizuar brenda 10 km nga kufijtë; akses i lehtësuar në zonat bregdetare turistike të caktuara.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kufizim jashtë zonave kufitare.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Programi « Qualified Investor » nga 300 000 USD pasuri e paluajtshme, rezidencë e përhershme e shpejtë.",
    notes:"Një nga vizat më të shpejta të investitorëve në pasuri të paluajtshme në Amerikë (disa muaj)."
  },
  {
    id:"CR", name:"Kosta Rika", region:"Amerika Latine",
    acces:"I hapur — të njëjtat të drejta si shtetasit, përveç zonës detare-tokësore (brezi bregdetar 200m, kërkohet koncesion).",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal; shoqëri kostarikane për zonën detare-tokësore.",
    visa:"Ligji për tërheqjen e investitorëve: rezidencë nga 150 000 USD investim në pasuri të paluajtshme.",
    notes:"Kuadër juridik i qëndrueshëm, shumë i kërkuar nga investitorët verior-amerikanë dhe evropianë."
  },
  {
    id:"DO", name:"Republika Dominikane", region:"Amerika Latine",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Ligji CONFOTUR: përjashtime tatimore të rëndësishme mbi projektet turistike të miratuara; rezidencë e lehtësuar për investitorët.",
    notes:"Regjim fiskal ndër më nxitësit në Karaibe për pasurinë e paluajtshme turistike."
  },
  {
    id:"UY", name:"Uruguai", region:"Amerika Latine",
    acces:"I hapur — asnjë kufizim, trajtim identik me shtetasit.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Rezidencë fiskale e lehtësuar përmes investimit në pasuri të paluajtshme (rreth 400 000 USD) ose krijimit të vendeve të punës.",
    notes:"Stabilitet juridik i njohur si një nga më të mirët në Amerikën Latine."
  },

  // ================= LINDJA E MESME / AFRIKË =================
  {
    id:"AE", name:"Emiratet e Bashkuara Arabe", region:"Lindja e Mesme",
    acces:"I kufizuar në zonat freehold të caktuara (Dubai, Abu Dhabi) — jashtë këtyre zonave, pronësia e rezervuar për shtetasit e KBGJ-së.",
    accesNiveau:"restreint",
    nationalite:"Të gjitha shtetësitë kualifikohen në zonat freehold.",
    structure:"Blerje e drejtpërdrejtë në emër personal në zonat e caktuara.",
    visa:"Golden Visa (10 vjet) nga 2 milionë AED (~545 000 USD) investim në pasuri të paluajtshme; vizë investitori 2-vjeçare nga 750 000 AED.",
    notes:"0% taksë mbi të ardhurat nga qiraja dhe fitimin kapital për individët; tarifë transferimi DLD prej 4%."
  },
  {
    id:"SA", name:"Arabia Saudite", region:"Lindja e Mesme",
    acces:"Historikisht i kufizuar — hapje graduale, me përjashtim të Mekës/Medinës, zona të caktuara të Vizionit 2030 në zhvillim.",
    accesNiveau:"restreint",
    nationalite:"Akses i zgjeruar në kuadër të një reforme në vazhdim (2024-2026); duhet verifikuar statusi zonë pas zone.",
    structure:"Shoqërimi lokal i domosdoshëm, kuadri ende në evolucion.",
    visa:"Premium Residency (« Iqama Mumayaza ») e lidhur me investimin, e ndryshme nga blerja e thjeshtë e pasurisë së paluajtshme.",
    notes:"Treg me potencial të lartë por kuadër rregullator ende në ndërtim e sipër — rekomandohet kujdes i shtuar."
  },
  {
    id:"MA", name:"Marok", region:"Afrikë",
    acces:"I hapur për pronën urbane — leja kërkohet për tokën bujqësore.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie për pronat urbane.",
    structure:"Blerja e drejtpërdrejtë në emër personal është më e zakonshmja.",
    visa:"Asnjë golden visa e dedikuar; kartë qëndrimi e lehtësuar për investitorë me investim të konsiderueshëm.",
    notes:"Kontrolli i këmbimit valutor marokinas duhet parashikuar për riatdhesimin e të ardhurave dhe kapitalit."
  },
  {
    id:"EG", name:"Egjipt", region:"Afrikë",
    acces:"I hapur për shumicën e zonave rezidenciale dhe turistike.",
    accesNiveau:"ouvert",
    nationalite:"Disa zona (Sinai në veçanti) i nënshtrohen lejes.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Rezidencë e lehtësuar për investim në pasuri të paluajtshme nga rreth 100 000 USD (pragjet të ndryshueshme sipas dekreteve).",
    notes:"Kontrolli i këmbimit valutor dhe luhatja e lirës egjiptiane duhen përfshirë në analizën e rendimentit."
  },
  {
    id:"MU", name:"Mauricius", region:"Afrikë",
    acces:"I hapur përmes programeve të dedikuara (PDS, Smart City, Ground+2) — blerja e drejtpërdrejtë jashtë programit shumë e kufizuar.",
    accesNiveau:"restreint",
    nationalite:"Të gjitha shtetësitë kualifikohen përmes programeve të miratuara.",
    structure:"Blerje në një projekt të certifikuar nga Economic Development Board.",
    visa:"Leje qëndrimi e përhershme e akorduar automatikisht nga 375 000 USD të investuar (PDS/Smart City).",
    notes:"Fiskalitet shumë i favorshëm: 15% flat tax, pa taksa trashëgimie."
  },
  {
    id:"ZA", name:"Afrika e Jugut", region:"Afrikë",
    acces:"I hapur — asnjë kufizim i përgjithshëm mbi pronësinë e huaj.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal ose shoqëri.",
    visa:"Vizë rezidence financiarisht e pavarur, e lidhur me pasurinë, jo strikt me pasurinë e paluajtshme.",
    notes:"Kontrolli i këmbimit valutor afrikano-jugor (South African Reserve Bank) duhet parashikuar për flukset ndërkufitare."
  },

  // ================= AZI / PAQËSOR =================
  {
    id:"JP", name:"Japoni", region:"Azi",
    acces:"I hapur — asnjë kufizim mbi pronësinë e tokës, përfshirë për jorezidentët.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie apo rezidence.",
    structure:"Blerje e drejtpërdrejtë në emër personal, pa vizë apo leje qëndrimi të kërkuar.",
    visa:"Asnjë golden visa; « Business Manager Visa » ekziston për shfrytëzimin aktiv të një prone.",
    notes:"Një nga tregjet më të hapura në botë për investitorët e huaj, përfshirë jorezidentët."
  },
  {
    id:"SG", name:"Singapor", region:"Azi",
    acces:"I hapur për kondominiumet; i kufizuar për shtëpitë individuale (« landed property »).",
    accesNiveau:"restreint",
    nationalite:"Rezidentët e përhershëm dhe shtetasit: akses i zgjeruar. Të huajt: kondominiumet të aksesueshme, shtëpitë individuale i nënshtrohen lejes.",
    structure:"Blerje e drejtpërdrejtë për kondominiumet.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme; Global Investor Programme i veçantë (aktivitet ekonomik, jo thjesht pasuri e paluajtshme).",
    notes:"Additional Buyer's Stamp Duty (ABSD) që mund të arrijë 60% të çmimit për blerësit e huaj."
  },
  {
    id:"HK", name:"Hong Kong", region:"Azi",
    acces:"I hapur — asnjë kufizim mbi blerjen nga jorezidentët.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie.",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme aktualisht.",
    notes:"Taksa transferimi shtesë (Buyer's Stamp Duty 15%) për jorezidentët e përhershëm."
  },
  {
    id:"TH", name:"Tajlandë", region:"Azi",
    acces:"I kufizuar — pronësia e drejtpërdrejtë e tokës është e ndaluar për të huajt; kondominiumet janë të aksesueshme.",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim specifik për kondominiumet (kuotë kolektive prej 49% e sipërfaqes totale të ndërtesës).",
    structure:"Bashkëpronësi (kondominium, maksimumi 49% për ndërtesë), shoqëri tajlandeze (maksimumi 49% pjesëmarrje e huaj), ose qira afatgjatë 30-vjeçare e ripërtëritshme.",
    visa:"Thailand Elite Visa (rezidencë afatgjatë me abonim, jo e lidhur drejtpërdrejt me pasurinë e paluajtshme).",
    notes:"Struktura me shoqëri ose qiraja afatgjatë janë zgjidhjet më të përdorura për shtëpitë individuale."
  },
  {
    id:"MY", name:"Malajzi", region:"Azi",
    acces:"I hapur me pragje çmimi minimale të vendosura nga çdo shtet (shpesh 1 milion MYR për të huajt).",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim shtetësie, por pragje çmimi të ndryshueshme sipas shtetit.",
    structure:"Blerje e drejtpërdrejtë në emër personal mbi pragun minimal lokal.",
    visa:"Malaysia My Second Home (MM2H): rezidencë afatgjatë e lidhur me depozita financiare dhe kualifikim pasuror (kritere të shtrënguara që nga 2021).",
    notes:"Kuala Lumpur dhe Penang përqendrojnë pjesën më të madhe të kërkesës së huaj."
  },
  {
    id:"ID", name:"Indonezi", region:"Azi",
    acces:"I kufizuar — pa pronësi të plotë të tokës për të huajt; e drejtë përdorimi (Hak Pakai) deri në 80 vjet.",
    accesNiveau:"restreint",
    nationalite:"Të gjitha shtetësitë kualifikohen për Hak Pakai me titull qëndrimi të vlefshëm.",
    structure:"Hak Pakai (e drejtë gëzimi) ose shoqëri PT PMA për një përdorim tregtar/qiraje të strukturuar.",
    visa:"Second Home Visa nga 2 miliardë IDR (~130 000 USD) depozitë ose aktive, rezidencë 5 ose 10 vjet.",
    notes:"Bali mbetet tregu më dinamik, me një kuadër Hak Pakai tashmë mirë të strukturuar për të huajt."
  },
  {
    id:"PH", name:"Filipine", region:"Azi",
    acces:"I kufizuar — toka është e rezervuar për shtetasit; kondominiumet janë të aksesueshme (kuotë 40% për ndërtesë).",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim specifik për kondominiumet brenda kufirit të kuotës kolektive.",
    structure:"Bashkëpronësi (kondominium) ose qira afatgjatë (deri në 50 vjet e ripërtëritshme) për shtëpitë individuale.",
    visa:"Special Resident Retiree's Visa (SRRV) e lidhur me një depozitë/investim, e ndryshme nga blerja e drejtpërdrejtë e pasurisë së paluajtshme.",
    notes:"Manila dhe Cebu përqendrojnë pjesën më të madhe të investimeve të huaja në kondominiume."
  },
  {
    id:"VN", name:"Vietnam", region:"Azi",
    acces:"I kufizuar — qira 50-vjeçare e ripërtëritshme, kuotë 30% e njësive për ndërtesë për të huajt.",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim shtetësie brenda kufirit të kuotave.",
    structure:"Qira afatgjatë në projekte të kualifikueshme për të huajt, e verifikuar përmes certifikatës rozë.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme; viza investitorësh të veçanta të lidhura me krijimin e biznesit.",
    notes:"Ho Chi Minh dhe Hanoi përqendrojnë shumicën e projekteve të hapura për të huajt."
  },
  {
    id:"KH", name:"Kamboxhia", region:"Azi",
    acces:"I hapur për katet e bashkëpronësisë (përveç përdhesës) — toka e rezervuar për shtetasit.",
    accesNiveau:"restreint",
    nationalite:"Asnjë kufizim shtetësie për bashkëpronësinë me kate.",
    structure:"Pronësi e plotë (« strata title ») e mundshme për njësitë në bashkëpronësi nga kati i parë e lart.",
    visa:"Asnjë golden visa e dedikuar; vizë biznesi (viza E) lehtësisht e ripërtëritshme.",
    notes:"Një nga tregjet e rralla të Azisë Juglindore që u ofron të huajve pronësi të plotë në bashkëpronësi."
  },
  {
    id:"IN", name:"Indi", region:"Azi",
    acces:"I hapur për NRI-të (Non-Resident Indians) dhe OCI-të (Overseas Citizens of India); shumë i kufizuar për të huajt e tjerë.",
    accesNiveau:"restreint",
    nationalite:"NRI/OCI: akses i lirë në pronën rezidenciale dhe tregtare. Shtetësitë e tjera: blerje pothuajse e pamundur, përveçse përmes rezidencës afatgjatë.",
    structure:"Blerje e drejtpërdrejtë për NRI/OCI; qiradhënie afatgjatë (deri në 99 vjet) për të tjerët.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme për jo-NRI-të.",
    notes:"Treg kryesisht i aksesueshëm për diasporën indiane në kuadër të një strategjie investimi të drejtpërdrejtë."
  },
  {
    id:"AU", name:"Australi", region:"Paqësor",
    acces:"I kufizuar — miratimi i Foreign Investment Review Board (FIRB) i detyrueshëm për çdo blerje nga një jorezident.",
    accesNiveau:"restreint",
    nationalite:"Rezidentët e përhershëm: akses i lirë. Jorezidentët: FIRB i detyrueshëm, zakonisht i kufizuar te ndërtesat e reja.",
    structure:"Blerje e drejtpërdrejtë pas miratimit të FIRB-it; taksa vule të rritura për të huajt (mbitaksë deri në 8% sipas shtetit).",
    visa:"Golden visa australiane (Significant/Premium Investor Visa) e hequr në 2024 — rrugë të reja investimi më kufizuese.",
    notes:"Që nga 2025, kufizime shtesë mbi blerjen e banesave ekzistuese nga jorezidentët në disa zona."
  },
  {
    id:"NZ", name:"Zelanda e Re", region:"Paqësor",
    acces:"Shumë i kufizuar — ndalim i përgjithshëm i blerjes rezidenciale nga jorezidentët që nga 2018.",
    accesNiveau:"restreint",
    nationalite:"Shtetasit/rezidentët neozelandezë dhe australianë: akses i lirë. Shtetësitë e tjera: blerje rezidenciale e ndaluar, me përjashtime (marrëveshje tregtie të lirë, p.sh. Singapor).",
    structure:"Pasuria e paluajtshme tregtare dhe disa zhvillime të reja në shkallë të gjerë mbeten të aksesueshme me kushtet e OIO-s.",
    visa:"Asnjë golden visa e lidhur me pasurinë e paluajtshme — Active Investor Plus Visa ekziston, por përjashton pasurinë e paluajtshme rezidenciale të drejtpërdrejtë.",
    notes:"Një nga tregjet më të mbyllura të botës së zhvilluar për investitorët e huaj jorezidentë."
  },
  {
    id:"GE", name:"Gjeorgji", region:"Azi",
    acces:"I hapur — asnjë kufizim mbi pronësinë e huaj në pronën rezidenciale.",
    accesNiveau:"ouvert",
    nationalite:"Asnjë kusht shtetësie (bujqësore mbetet e kufizuar).",
    structure:"Blerje e drejtpërdrejtë në emër personal.",
    visa:"Rezidencë e lehtësuar përmes investimit në pasuri të paluajtshme nga 100 000 USD.",
    notes:"Një nga tregjet më të hapura dhe me akses më të shpejtë për investitorët ndërkombëtarë."
  },
];

function droitParId(id){
  return DROIT_DATA.find(function(d){ return d.id === id; });
}
