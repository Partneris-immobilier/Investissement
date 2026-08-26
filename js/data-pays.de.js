/* ============================================================
   Partneris Immobilier — Länderdatenbank
   Durchschnittliche Brutto-Mietrenditen (Quelle: Global Property Guide,
   aggregierte Daten Q3 2026) + ungefähre Koordinaten (Lat/Lon)
   für die Platzierung der Marker auf dem 3D-Globus.
   Diese Zahlen sind indikative nationale Durchschnittswerte zu
   pädagogischen Zwecken — sie ersetzen keine lokale Marktstudie.
   ============================================================ */

var PAYS_DATA = [
  // ---- Europa ----
  { id:"CH", name:"Schweiz", region:"Europa", lat:46.8, lon:8.2, yield:2.91, priceIdx:9, note:"Reifer Markt, hohe Stabilität, eingeschränkter Zugang für Nicht-Ansässige (Lex Koller)." },
  { id:"FR", name:"Frankreich", region:"Europa", lat:46.6, lon:2.2, yield:4.83, priceIdx:6, note:"Offener Markt, hohe Besteuerung der Mieteinnahmen." },
  { id:"DE", name:"Deutschland", region:"Europa", lat:51.2, lon:10.4, yield:3.42, priceIdx:6, note:"Stark regulierter Mietmarkt (Mietpreisbremse), hohe städtische Nachfrage." },
  { id:"ES", name:"Spanien", region:"Europa", lat:40.0, lon:-3.7, yield:5.43, priceIdx:4, note:"Für Ausländer offener Markt, Tourismus und Golden Visa (Immobilien seit 2025 ausgeschlossen)." },
  { id:"IT", name:"Italien", region:"Europa", lat:42.5, lon:12.5, yield:6.61, priceIdx:4, note:"Attraktive Renditen ausserhalb der Grossstädte, komplexes Steuersystem." },
  { id:"PT", name:"Portugal", region:"Europa", lat:39.5, lon:-8.0, yield:4.29, priceIdx:4, note:"Offener Markt, früheres Golden Visa nun auf Investmentfonds ausgerichtet." },
  { id:"GB", name:"Vereinigtes Königreich", region:"Europa", lat:54.0, lon:-2.5, yield:7.35, priceIdx:6, note:"Liquider Markt, erhöhte Grunderwerbsteuer (Stamp Duty) für Nicht-Ansässige." },
  { id:"IE", name:"Irland", region:"Europa", lat:53.4, lon:-8.0, yield:7.66, priceIdx:5, note:"Hohe Mietnachfrage in Dublin, begrenztes Angebot." },
  { id:"NL", name:"Niederlande", region:"Europa", lat:52.2, lon:5.5, yield:5.97, priceIdx:5, note:"Verschärfte Mietpreisregulierung, angespannter Markt." },
  { id:"BE", name:"Belgien", region:"Europa", lat:50.6, lon:4.5, yield:4.31, priceIdx:4, note:"Stabiler Markt, moderate Besteuerung des Immobilienbesitzes." },
  { id:"AT", name:"Österreich", region:"Europa", lat:47.6, lon:14.1, yield:3.31, priceIdx:5, note:"Niedrige Renditen, sehr hochwertiger Markt in Wien." },
  { id:"LU", name:"Luxemburg", region:"Europa", lat:49.8, lon:6.1, yield:3.27, priceIdx:8, note:"Preise unter den höchsten Europas, vorteilhafte Besteuerung." },
  { id:"GR", name:"Griechenland", region:"Europa", lat:39.0, lon:22.0, yield:4.38, priceIdx:2, note:"Golden Visa ab 250k-800k€ je nach Zone, noch erschwingliche Preise." },
  { id:"PL", name:"Polen", region:"Europa", lat:52.0, lon:19.5, yield:5.92, priceIdx:3, note:"Wachsender Markt, hohe städtische Mietnachfrage." },
  { id:"RO", name:"Rumänien", region:"Europa", lat:45.9, lon:25.0, yield:5.87, priceIdx:2, note:"Direkter Grundstückskauf den Staatsangehörigen vorbehalten — lokale Gesellschaft erforderlich." },
  { id:"HU", name:"Ungarn", region:"Europa", lat:47.2, lon:19.5, yield:4.69, priceIdx:3, note:"„Guest Investor“-Programm (Staatsanleihen) für den Aufenthaltstitel." },
  { id:"CZ", name:"Tschechien", region:"Europa", lat:49.8, lon:15.5, yield:3.39, priceIdx:4, note:"Grundstücke EU-Bürgern/Ehepartnern von Tschechen vorbehalten; für andere eine Gesellschaft nötig." },
  { id:"SK", name:"Slowakei", region:"Europa", lat:48.7, lon:19.5, yield:4.49, priceIdx:3, note:"Aufstrebender Markt, erleichterter Zugang für EU-Bürger." },
  { id:"HR", name:"Kroatien", region:"Europa", lat:45.1, lon:15.2, yield:4.21, priceIdx:3, note:"Ministerielle Genehmigung ausserhalb der EU erforderlich, hohe touristische Nachfrage." },
  { id:"BG", name:"Bulgarien", region:"Europa", lat:42.7, lon:25.5, yield:4.27, priceIdx:2, note:"Grundstücke den Staatsangehörigen vorbehalten; Wohnungen über eine Gesellschaft zugänglich." },
  { id:"RS", name:"Serbien", region:"Europa", lat:44.0, lon:21.0, yield:5.14, priceIdx:2, note:"Gegenseitigkeit (Reziprozität) erforderlich, noch erschwinglicher Markt." },
  { id:"LV", name:"Lettland", region:"Europa", lat:56.9, lon:24.6, yield:7.20, priceIdx:2, note:"Hohe Renditen, früheres Golden-Visa-Programm ausgesetzt." },
  { id:"LT", name:"Litauen", region:"Europa", lat:55.2, lon:23.9, yield:5.54, priceIdx:2, note:"Offener Markt, wettbewerbsfähige Besteuerung." },
  { id:"EE", name:"Estland", region:"Europa", lat:58.6, lon:25.0, yield:4.19, priceIdx:3, note:"Attraktives digitales und steuerliches Umfeld." },
  { id:"UA", name:"Ukraine", region:"Europa", lat:49.0, lon:31.0, yield:7.55, priceIdx:1, note:"Erhebliches geopolitisches Risiko — vor jeder Investition ist besondere Vorsicht geboten." },
  { id:"MD", name:"Moldau", region:"Europa", lat:47.2, lon:28.5, yield:9.49, priceIdx:1, note:"Sehr hohe Renditen, aber wenig liquider Markt." },
  { id:"MK", name:"Nordmazedonien", region:"Europa", lat:41.6, lon:21.7, yield:6.53, priceIdx:1, note:"Aufstrebender Markt, niedrige Preise." },
  { id:"ME", name:"Montenegro", region:"Europa", lat:42.7, lon:19.3, yield:4.84, priceIdx:2, note:"Küstenregionen bei ausländischen Investoren beliebt." },
  { id:"IS", name:"Island", region:"Europa", lat:64.9, lon:-19.0, yield:5.41, priceIdx:5, note:"Begrenzter Markt, hohe touristische Nachfrage." },
  { id:"DK", name:"Dänemark", region:"Europa", lat:56.2, lon:9.5, yield:4.11, priceIdx:6, note:"Stabiler und transparenter Markt, eingeschränkter Zugang für Nicht-EU-Bürger." },
  { id:"SE", name:"Schweden", region:"Europa", lat:60.1, lon:18.6, yield:5.75, priceIdx:5, note:"Stark regulierter Mietmarkt (Wartelisten)." },
  { id:"NO", name:"Norwegen", region:"Europa", lat:60.5, lon:8.5, yield:4.95, priceIdx:7, note:"Hohe Preise, stabiler und transparenter Markt." },
  { id:"FI", name:"Finnland", region:"Europa", lat:64.0, lon:26.0, yield:5.63, priceIdx:4, note:"Offener Markt, moderate Besteuerung." },
  { id:"CY", name:"Zypern", region:"Europa", lat:35.1, lon:33.4, yield:4.88, priceIdx:3, note:"Vorteilhafte Besteuerung, bei europäischen Rentnern beliebter Markt." },
  { id:"AD", name:"Andorra", region:"Europa", lat:42.5, lon:1.5, yield:4.18, priceIdx:6, note:"Sehr vorteilhafte Besteuerung, geregelter Zugang zu Wohneigentum." },
  { id:"SI", name:"Slowenien", region:"Europa", lat:46.1, lon:14.8, yield:4.15, priceIdx:4, note:"Stabiler Markt, ausgeprägte EU-Reziprozität." },
  { id:"BA", name:"Bosnien und Herzegowina", region:"Europa", lat:44.2, lon:17.8, yield:3.96, priceIdx:1, note:"Junger Markt, rechtlicher Rahmen noch im Aufbau." },

  // ---- Nordamerika ----
  { id:"US", name:"USA", region:"Nordamerika", lat:38.0, lon:-97.0, yield:6.71, priceIdx:5, note:"Sehr liquider Markt, freier Zugang für Ausländer, Bundes- und Bundesstaatssteuern." },
  { id:"CA", name:"Kanada", region:"Nordamerika", lat:56.0, lon:-106.0, yield:5.72, priceIdx:6, note:"Provinzielle Einschränkungen (z. B. Prince Edward Island), Anti-Spekulationssteuer." },

  // ---- Lateinamerika & Karibik ----
  { id:"MX", name:"Mexiko", region:"Lateinamerika", lat:23.6, lon:-102.5, yield:5.79, priceIdx:2, note:"Direkter Kauf in Küsten-/Grenznähe verboten — Fideicomiso (Treuhand) oder Gesellschaft erforderlich." },
  { id:"BR", name:"Brasilien", region:"Lateinamerika", lat:-14.2, lon:-51.9, yield:5.71, priceIdx:2, note:"Einschränkungen in Grenz- und nationalen Sicherheitszonen." },
  { id:"AR", name:"Argentinien", region:"Lateinamerika", lat:-38.4, lon:-63.6, yield:5.46, priceIdx:2, note:"Keine Einschränkung für ausländisches Eigentum." },
  { id:"CL", name:"Chile", region:"Lateinamerika", lat:-35.7, lon:-71.5, yield:4.80, priceIdx:3, note:"Offener Markt, Einschränkungen nur in Grenzzonen." },
  { id:"CO", name:"Kolumbien", region:"Lateinamerika", lat:4.6, lon:-74.3, yield:7.01, priceIdx:2, note:"Offener Markt, starkes Wachstum in Medellín und Bogotá." },
  { id:"PE", name:"Peru", region:"Lateinamerika", lat:-9.2, lon:-75.0, yield:5.93, priceIdx:2, note:"Offener Markt, Einschränkungen in der Grenzzone (Reziprozitätsabkommen)." },
  { id:"PA", name:"Panama", region:"Lateinamerika", lat:8.5, lon:-80.8, yield:6.94, priceIdx:3, note:"Innerhalb von 6 Meilen der Grenze verboten; attraktives Investorenvisum." },
  { id:"CR", name:"Costa Rica", region:"Lateinamerika", lat:9.7, lon:-83.8, yield:7.63, priceIdx:3, note:"Gleiche Rechte wie Staatsangehörige, Einschränkungen an der Küste (Meereszone)." },
  { id:"DO", name:"Dominikanische Republik", region:"Lateinamerika", lat:18.7, lon:-70.2, yield:8.53, priceIdx:2, note:"Sehr offener Markt, starke steuerliche Anreize (CONFOTUR)." },
  { id:"UY", name:"Uruguay", region:"Lateinamerika", lat:-32.5, lon:-55.8, yield:6.47, priceIdx:3, note:"Keine Einschränkung, in Lateinamerika anerkannte Rechtssicherheit." },
  { id:"PR", name:"Puerto Rico", region:"Lateinamerika", lat:18.2, lon:-66.5, yield:8.46, priceIdx:3, note:"Attraktives Steuersystem Act 60 für US-amerikanische und ausländische Investoren." },

  // ---- Afrika & Naher Osten ----
  { id:"ZA", name:"Südafrika", region:"Afrika", lat:-30.6, lon:22.9, yield:11.53, priceIdx:2, note:"Höchste Rendite im weltweiten Ranking, Währungs-/Sicherheitsrisiko einzukalkulieren." },
  { id:"MA", name:"Marokko", region:"Afrika", lat:31.8, lon:-7.1, yield:7.36, priceIdx:2, note:"Für Ausländer offener Markt, hohe Nachfrage in Marrakesch und Casablanca." },
  { id:"EG", name:"Ägypten", region:"Afrika", lat:26.8, lon:30.8, yield:7.61, priceIdx:1, note:"Aufstrebender Markt, Devisenkontrollen sind einzuplanen." },
  { id:"MU", name:"Mauritius", region:"Afrika", lat:-20.3, lon:57.6, yield:3.29, priceIdx:5, note:"PDS-/Smart-City-Programme mit Aufenthaltsbewilligung beim Kauf." },
  { id:"AE", name:"Vereinigte Arabische Emirate", region:"Naher Osten", lat:23.4, lon:53.8, yield:4.94, priceIdx:5, note:"Freehold-Eigentum in ausgewiesenen Zonen, 0% Steuer auf Mieteinnahmen." },
  { id:"SA", name:"Saudi-Arabien", region:"Naher Osten", lat:24.0, lon:45.0, yield:6.84, priceIdx:3, note:"Schrittweise Öffnung für Ausländer in bestimmten Zonen (Vision 2030)." },
  { id:"QA", name:"Katar", region:"Naher Osten", lat:25.3, lon:51.2, yield:5.17, priceIdx:5, note:"Freehold-Eigentum in ausgewiesenen Zonen, damit verbundenes Aufenthaltsvisum." },
  { id:"TR", name:"Türkei", region:"Naher Osten", lat:38.9, lon:35.2, yield:7.32, priceIdx:2, note:"Staatsbürgerschaft durch Investition ab 400 000 USD." },
  { id:"IL", name:"Israel", region:"Naher Osten", lat:31.0, lon:34.8, yield:3.05, priceIdx:6, note:"Offener Markt, hohe Preise, spezielle Besteuerung für Nicht-Ansässige." },

  // ---- Asien & Pazifik ----
  { id:"JP", name:"Japan", region:"Asien", lat:36.2, lon:138.3, yield:4.55, priceIdx:4, note:"Freies ausländisches Eigentum, keine Einschränkung beim Grundbesitz." },
  { id:"SG", name:"Singapur", region:"Asien", lat:1.35, lon:103.8, yield:3.06, priceIdx:8, note:"Zusätzliche Stempelsteuer (ABSD) von bis zu 60% für Ausländer." },
  { id:"HK", name:"Hongkong", region:"Asien", lat:22.3, lon:114.2, yield:3.55, priceIdx:8, note:"Offener Markt, hohe Grunderwerbsteuer für Nicht-Ansässige." },
  { id:"TH", name:"Thailand", region:"Asien", lat:15.9, lon:100.9, yield:6.49, priceIdx:2, note:"Direkter Kauf verboten — Eigentumswohnung (max. 49%), Gesellschaft oder 30-jähriger Pachtvertrag." },
  { id:"MY", name:"Malaysia", region:"Asien", lat:4.2, lon:101.9, yield:5.27, priceIdx:2, note:"Mindestpreisschwellen je Bundesstaat, MM2H-Programm verfügbar." },
  { id:"ID", name:"Indonesien", region:"Asien", lat:-0.8, lon:113.9, yield:8.22, priceIdx:1, note:"Nutzungsrecht (Hak Pakai) statt Volleigentum für Ausländer." },
  { id:"PH", name:"Philippinen", region:"Asien", lat:12.9, lon:121.8, yield:5.10, priceIdx:1, note:"Grundstücke den Staatsangehörigen vorbehalten; Eigentumswohnungen zugänglich (max. 40%)." },
  { id:"VN", name:"Vietnam", region:"Asien", lat:14.1, lon:108.3, yield:3.85, priceIdx:1, note:"50-jähriger, verlängerbarer Pachtvertrag, Quote von 30% pro Gebäude für Ausländer." },
  { id:"KH", name:"Kambodscha", region:"Asien", lat:12.6, lon:104.9, yield:7.81, priceIdx:1, note:"Eigentumswohnungen im Volleigentum zugänglich (ausser Erdgeschoss)." },
  { id:"IN", name:"Indien", region:"Asien", lat:22.0, lon:79.0, yield:5.16, priceIdx:2, note:"Freier Wohn-/Gewerbeimmobilienkauf für NRI/OCI, eingeschränkt für andere Ausländer." },
  { id:"GE", name:"Georgien", region:"Asien", lat:42.3, lon:43.4, yield:7.25, priceIdx:1, note:"Keine Einschränkung bei Wohnimmobilien, sehr offener Markt." },
  { id:"KZ", name:"Kasachstan", region:"Asien", lat:48.0, lon:66.9, yield:10.95, priceIdx:1, note:"Sehr hohe Rendite, für Ausländer noch wenig ausgereifter Markt." },
  { id:"AU", name:"Australien", region:"Pazifik", lat:-25.3, lon:133.8, yield:4.94, priceIdx:6, note:"FIRB-Genehmigung obligatorisch, meist auf Neubauten beschränkt." },
  { id:"NZ", name:"Neuseeland", region:"Pazifik", lat:-41.0, lon:174.9, yield:4.24, priceIdx:6, note:"Wohnimmobilienkauf für Nicht-Ansässige seit 2018 verboten (mit Ausnahmen)." },
  { id:"TW", name:"Taiwan", region:"Asien", lat:23.7, lon:121.0, yield:2.26, priceIdx:5, note:"Gegenseitigkeit erforderlich, Nischenmarkt für ausländische Investoren." },
  { id:"MO", name:"Macau", region:"Asien", lat:22.2, lon:113.5, yield:2.08, priceIdx:6, note:"Eingeschränkter Markt, sehr hohe Preise, niedrige Renditen." },
];

/* Qualifikationsschwellen, die vom Rechner des Globus verwendet werden.
   Das nachstehende "Urteil" ist indikativ — basiert ausschliesslich auf
   der durchschnittlichen nationalen Bruttorendite und sollte mit einem
   Berater vertieft werden. */
function verdictPourRendement(y){
  if (y >= 6.5) return { label:"Starke Chance", cls:"pill-green" };
  if (y >= 4.5) return { label:"Interessantes Potenzial", cls:"pill-gold" };
  if (y >= 3.0) return { label:"Im Einzelfall zu prüfen", cls:"pill-amber" };
  return { label:"Niedrige Rendite / sicherer Hafen", cls:"pill-red" };
}
