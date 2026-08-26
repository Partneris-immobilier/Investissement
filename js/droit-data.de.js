/* ============================================================
   Partneris Immobilier — Rechtlicher Rahmen für Investitionen nach Land
   Informative Zusammenfassung (2026) — prüfen Sie die geltenden
   Vorschriften stets mit einem lokalen Fachexperten, bevor Sie sich
   verpflichten. Die Investitionsschwellen für Aufenthaltsprogramme
   ändern sich regelmässig.
   ============================================================ */

var DROIT_DATA = [
  // ================= EUROPA =================
  {
    id:"CH", name:"Schweiz", region:"Europa",
    acces:"Eingeschränkt für Nicht-Ansässige ausserhalb der EU/EFTA (Lex Koller).",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA-Staatsangehörige mit Wohnsitz in der Schweiz: nahezu freier Zugang. Ausserhalb der EU/EFTA: für den Erwerb des Hauptwohnsitzes ist eine formelle kantonale Bewilligung obligatorisch; reine Renditeimmobilien sind stark eingeschränkt.",
    structure:"Direkterwerb für Ansässige möglich; für Nicht-Ansässige spezifische Strukturen (Fonds, kantonale Bewilligung).",
    visa:"Kein Aufenthaltsprogramm durch Immobilieninvestition.",
    notes:"Reform 2026: Wiederverkaufspflicht innerhalb von 2 Jahren bei Wegzug aus der Schweiz, reduzierte Kontingente für Zweitwohnungen. Siehe unsere Seite zum Investieren in der Schweiz."
  },
  {
    id:"FR", name:"Frankreich", region:"Europa",
    acces:"Offen — keine allgemeine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeits- oder Wohnsitzvoraussetzung für den Kauf.",
    structure:"Kauf im eigenen Namen, über eine SCI (Immobiliengesellschaft) oder eine Gesellschaft möglich, je nach Vermögens- und Nachlassstrategie.",
    visa:"Kein an Immobilien gekoppeltes Golden Visa; das „Passeport Talent“-Visum existiert für andere Formen der Investition.",
    notes:"Besteuerung: Vermögenssteuer auf Immobilien (IFI) ab 1,3 Mio. € netto Immobilienvermögen, Sozialabgaben auf Mieteinnahmen von Nicht-Ansässigen (Doppelbesteuerungsabkommen prüfen)."
  },
  {
    id:"DE", name:"Deutschland", region:"Europa",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen oder über eine Gesellschaft (GmbH) zur Optimierung von Steuern und Nachfolge.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Mietpreisbremse in Grossstädten; Notarkosten und Grunderwerbsteuer 3,5–6,5% je nach Bundesland."
  },
  {
    id:"ES", name:"Spanien", region:"Europa",
    acces:"Offen — vollständige Freiheit, ausser in bestimmten Militär- und Grenzzonen.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb, wobei für jeden ausländischen Käufer eine NIE-Nummer obligatorisch ist.",
    visa:"Spanisches Golden Visa für Immobilien seit April 2025 abgeschafft; andere Aufenthaltswege (nicht erwerbstätig, Unternehmer) bleiben verfügbar.",
    notes:"Einkommensteuer für Nicht-Ansässige (IRNR) auf Mieteinnahmen; Kapitalgewinne unterliegen für Nicht-Ansässige einem Quellensteuerabzug von 3% des Verkaufspreises."
  },
  {
    id:"IT", name:"Italien", region:"Europa",
    acces:"Offen unter der Bedingung der Gegenseitigkeit mit dem Herkunftsland (automatisch für die EU und die meisten westlichen Länder).",
    accesNiveau:"ouvert",
    nationalite:"Grundsatz der Gegenseitigkeit — für Staatsangehörigkeiten ausserhalb der EU/USA/Schweiz zu prüfen.",
    structure:"Direkterwerb im eigenen Namen ist die gängigste Form.",
    visa:"Investor Visa for Italy (ab 250'000 € in Start-ups oder 2 Mio. € in Staatsanleihen — Immobilien allein berechtigen nicht zu diesem Visum).",
    notes:"Attraktive Pauschalbesteuerung für neue vermögende Ansässige („Flat Tax“ von 200'000 €/Jahr auf ausländische Einkünfte)."
  },
  {
    id:"PT", name:"Portugal", region:"Europa",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung; Steuernummer (NIF) obligatorisch.",
    structure:"Direkterwerb im eigenen Namen oder über eine Gesellschaft.",
    visa:"Golden Visa weiterhin aktiv, seit 2023 aber auf Investmentfonds und Arbeitsplatzschaffung ausgerichtet — der direkte Immobilienkauf berechtigt nicht mehr zum Visum.",
    notes:"NHR-Regime (nicht gewöhnlich Ansässige) seit 2024 stark eingeschränkt — Anspruchsberechtigung im Einzelfall prüfen."
  },
  {
    id:"GB", name:"Vereinigtes Königreich", region:"Europa",
    acces:"Offen — einer der liberalsten Märkte der Welt.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeits- oder Wohnsitzvoraussetzung.",
    structure:"Direkterwerb oder über eine Gesellschaft (häufig zur steuerlichen und erbrechtlichen Optimierung genutzt).",
    visa:"Tier-1-Investorenvisum 2022 abgeschafft; kein an Immobilien gekoppelter Aufenthaltsweg.",
    notes:"Stamp Duty Land Tax um 2% erhöht für nicht ansässige Käufer, zusätzlich zum Zweitwohnungszuschlag (+5%)."
  },
  {
    id:"IE", name:"Irland", region:"Europa",
    acces:"Offen — keine allgemeine Einschränkung.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Immigrant Investor Programme seit 2023 ausgesetzt.",
    notes:"Sehr angespannter Mietmarkt in Dublin; Mietpreisregulierung in den „Rent Pressure Zones“."
  },
  {
    id:"NL", name:"Niederlande", region:"Europa",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen oder über eine Gesellschaft (BV).",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Erweitertes Mietpreisgesetz (Wet betaalbare huur); mehrere Städte schränken den Kauf zu Vermietungszwecken in bestimmten Vierteln ein („opkoopbescherming“)."
  },
  {
    id:"BE", name:"Belgien", region:"Europa",
    acces:"Offen — keine Einschränkung.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen ist die gängigste Form.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Registrierungsgebühren variieren je nach Region (Wallonien, Flandern, Brüssel) — von 3% bis 12,5%."
  },
  {
    id:"AT", name:"Österreich", region:"Europa",
    acces:"In bestimmten Bundesländern eingeschränkt (vorherige Bewilligung für Nicht-EU-Bürger, insbesondere bei Zweitwohnungen).",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA-Staatsangehörige: erleichterter Zugang. Ausserhalb der EU: je nach Bundesland regionale Bewilligung erforderlich.",
    structure:"Direkterwerb möglich, in bestimmten Fällen behördliche Bewilligung erforderlich.",
    visa:"Aufenthaltsprogramm durch Direktinvestition (ab 3 Mio. €, Arbeitsplatzschaffung) — nicht spezifisch für Immobilien.",
    notes:"Wien bleibt bei Zweitwohnungen stark reglementiert."
  },
  {
    id:"LU", name:"Luxemburg", region:"Europa",
    acces:"Offen — keine Einschränkung.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Einer der teuersten Märkte Europas; vorteilhafte Besteuerung des Immobilienbesitzes."
  },
  {
    id:"GR", name:"Griechenland", region:"Europa",
    acces:"Offen — keine allgemeine Einschränkung (ausser sensible Grenzzonen, militärische Bewilligung erforderlich).",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung für den Kauf.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Golden Visa aktiv: 250 000 € in weniger nachgefragten Zonen, bis zu 800 000 € in Athen, Thessaloniki und auf touristischen Inseln. Erneuerbare Aufenthaltsbewilligung ohne Aufenthaltspflicht.",
    notes:"Eines der am leichtesten zugänglichen Golden Visa Europas im Jahr 2026."
  },
  {
    id:"MT", name:"Malta", region:"Europa",
    acces:"Eingeschränkt — ausserhalb ausgewiesener Zonen ist für Nicht-EU-Ansässige eine AIP-Bewilligung (Acquisition of Immovable Property) erforderlich.",
    accesNiveau:"restreint",
    nationalite:"EU-Staatsangehörige mit 5-jährigem Wohnsitz in Malta: freier Zugang. Andere: AIP-Bewilligung oder Kauf in einer ausgewiesenen Zone (Special Designated Areas).",
    structure:"Direkterwerb in ausgewiesenen Zonen ohne Einschränkung; anderswo AIP-Bewilligung.",
    visa:"Malta Permanent Residence Programme ab 350'000–600'000 € (Kauf) oder Mindestjahresmiete + Beitrag.",
    notes:"Beschleunigte Einbürgerung über ein separates Investitionsprogramm möglich (Beitrag + Immobilie)."
  },
  {
    id:"PL", name:"Polen", region:"Europa",
    acces:"Offen für EU/EFTA-Staatsangehörige; für andere ist eine Bewilligung des Innenministeriums erforderlich (vor allem für Grundstücke).",
    accesNiveau:"ouvert",
    nationalite:"EU/EFTA: frei. Ausserhalb der EU: Bewilligung für land-/forstwirtschaftliche Flächen erforderlich, Wohnungen in der Regel frei.",
    structure:"Direkterwerb im eigenen Namen ist die gängigste Form.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Stark wachsender Mietmarkt in den Grossstädten (Warschau, Krakau, Breslau)."
  },
  {
    id:"RO", name:"Rumänien", region:"Europa",
    acces:"Eingeschränkt — Grundstücke sind rumänischen Staatsangehörigen und EU-Bürgern vorbehalten; andere müssen über eine Gesellschaft erwerben.",
    accesNiveau:"restreint",
    nationalite:"EU: Grundstückszugang erlaubt. Ausserhalb der EU: Grundstückserwerb über eine rumänische Gesellschaft.",
    structure:"Für den Erwerb ausserhalb der EU wird eine rumänische Gesellschaft empfohlen, um den Kauf abzusichern.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Eigentumswohnungen (ohne wesentlichen Grundstücksanteil) bleiben einfacher zugänglich."
  },
  {
    id:"HU", name:"Ungarn", region:"Europa",
    acces:"Offen für Wohnimmobilien; Bewilligung für landwirtschaftliche Flächen erforderlich.",
    accesNiveau:"ouvert",
    nationalite:"Keine strikte Voraussetzung für den Kauf von Wohnraum.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"„Guest Investor“-Programm: Staatsanleihen ab 250 000 € oder regulierter Immobilienfonds, berechtigt zu einer erneuerbaren 2-jährigen Aufenthaltsbewilligung.",
    notes:"Keine Mindestanwesenheitspflicht zur Aufrechterhaltung des Status."
  },
  {
    id:"CZ", name:"Tschechien", region:"Europa",
    acces:"Für Grundstücke ausserhalb der EU eingeschränkt — erleichterter Zugang bei Eigentumswohnungen.",
    accesNiveau:"restreint",
    nationalite:"EU-Bürger und Ehepartner tschechischer Staatsangehöriger: freier Zugang. Andere: für Grundstücke wird eine tschechische Gesellschaft empfohlen.",
    structure:"Lokale Gesellschaft (s.r.o.) wird von Käufern ausserhalb der EU häufig genutzt.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Der Prager Markt ist bei internationalen Investoren sehr gefragt."
  },
  {
    id:"HR", name:"Kroatien", region:"Europa",
    acces:"Ausserhalb der EU eingeschränkt — Genehmigung des Justizministeriums erforderlich (Bearbeitungszeit bis zu 12 Monate).",
    accesNiveau:"restreint",
    nationalite:"EU: freier Zugang unter Vorbehalt der Gegenseitigkeit. Ausserhalb der EU: ministerielle Genehmigung oder kroatische Gesellschaft.",
    structure:"Kroatische Gesellschaft: schnelle Alternative zur ministeriellen Genehmigung.",
    visa:"Kein Immobilien-Golden-Visa.",
    notes:"Küstenregionen (Istrien, Dalmatien) sind für die Feriensaisonvermietung sehr gefragt."
  },
  {
    id:"BG", name:"Bulgarien", region:"Europa",
    acces:"Für Grundstücke eingeschränkt — bulgarischen Staatsangehörigen und bulgarischen juristischen Personen vorbehalten.",
    accesNiveau:"restreint",
    nationalite:"EU/EFTA: Zugang zu Wohnraum. Grundstücke: Für alle Ausländer, EU-Bürger eingeschlossen, ist eine bulgarische Gesellschaft erforderlich.",
    structure:"Bulgarische Gesellschaft (OOD) wird für den Grundstückserwerb häufig genutzt.",
    visa:"Früheres Investitionsprogramm ausgesetzt.",
    notes:"Hohe Renditen an der Küste und in Sofia, noch erschwinglicher Markt."
  },
  {
    id:"CY", name:"Zypern", region:"Europa",
    acces:"Offen, wobei für Nicht-EU-Bürger ab einer zweiten Immobilie eine Genehmigung des Ministerrats erforderlich ist.",
    accesNiveau:"restreint",
    nationalite:"EU: freier Zugang. Ausserhalb der EU: Bewilligung erforderlich, wird in der Regel für eine Wohnimmobilie erteilt.",
    structure:"Direkterwerb nach behördlicher Bewilligung.",
    visa:"Dauerhafte Aufenthaltsbewilligung ab 300 000 € Immobilieninvestition (Kategorie F/6.2).",
    notes:"Attraktive Besteuerung für Rentner und Nicht-Domizilierte."
  },
  {
    id:"TR", name:"Türkei", region:"Naher Osten",
    acces:"Offen unter Gegenseitigkeit — die meisten Staatsangehörigkeiten können ausserhalb von Militärzonen frei kaufen.",
    accesNiveau:"ouvert",
    nationalite:"Gegenseitigkeit mit dem Herkunftsland erforderlich (was für die überwiegende Mehrheit der westlichen Länder zutrifft).",
    structure:"Direkterwerb im eigenen Namen ist die gängigste Form.",
    visa:"Türkische Staatsbürgerschaft durch Investition ab 400 000 USD in Immobilien, mit einer Haltefrist von 3 Jahren.",
    notes:"Eines der weltweit am leichtesten zugänglichen Programme für den Erwerb der Staatsbürgerschaft durch Immobilieninvestition."
  },

  // ================= NORDAMERIKA =================
  {
    id:"US", name:"USA", region:"Nordamerika",
    acces:"Offen — keine allgemeine bundesstaatliche Einschränkung für ausländisches Wohneigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung für den Kauf (sektorale Einschränkungen bei landwirtschaftlichen Flächen in bestimmten Bundesstaaten).",
    structure:"Kauf im eigenen Namen, über eine LLC oder einen Trust — die Struktur beeinflusst die Erbschaftssteuer (Estate Tax) für Nicht-Ansässige erheblich.",
    visa:"EB-5 (Green Card) ab 800 000 USD bei Arbeitsplatzschaffung — eine klassische Renditeimmobilie allein ist dafür nicht anspruchsberechtigt.",
    notes:"FIRPTA: Quellensteuerabzug von 15% auf den Verkaufspreis beim Weiterverkauf durch einen Nicht-Ansässigen."
  },
  {
    id:"CA", name:"Kanada", region:"Nordamerika",
    acces:"Eingeschränkt — bundesweites Verbot des Wohnimmobilienkaufs durch Nicht-Ansässige/Nicht-Staatsbürger (Gesetz über das Verbot des Kaufs von Wohnimmobilien durch Nicht-Kanadier), zusätzlich provinzielle Einschränkungen.",
    accesNiveau:"restreint",
    nationalite:"Ständige Ansässige und Staatsbürger: freier Zugang. Nicht-Ansässige: Wohnimmobilienkauf bis 2027 weitgehend eingeschränkt (Gesetz verlängert), begrenzte Ausnahmen.",
    structure:"Gewerbeimmobilien und bestimmte Neubauprojekte bleiben je nach Provinz zugänglich.",
    visa:"Kein Immobilien-Golden-Visa; separate provinzielle Investorenprogramme (Québec usw.).",
    notes:"Prince Edward Island begrenzt Nicht-Ansässige traditionell auf 5 Acres ohne Bewilligung. Vor jedem Projekt die Entwicklung des bundesweiten Moratoriums prüfen."
  },

  // ================= LATEINAMERIKA =================
  {
    id:"MX", name:"Mexiko", region:"Lateinamerika",
    acces:"In der „Sperrzone“ eingeschränkt (100 km von den Grenzen, 50 km von der Küste) — Zugang über Fideicomiso (Treuhand) oder Gesellschaft.",
    accesNiveau:"restreint",
    nationalite:"Keine Einschränkung ausserhalb der Sperrzone.",
    structure:"Fideicomiso (Bank-Treuhandvertrag, 50 Jahre verlängerbar) oder mexikanische Gesellschaft für die Sperrzone.",
    visa:"Befristetes/dauerhaftes Aufenthaltsvisum möglich durch Einkommens- oder Investitionsnachweis (nicht speziell immobilienbezogen).",
    notes:"Stark reguliertes, aber bewährtes Modell — die meisten touristischen Weiterverkäufe (Riviera Maya, Los Cabos) laufen über den Fideicomiso."
  },
  {
    id:"BR", name:"Brasilien", region:"Lateinamerika",
    acces:"In Grenz- und nationalen Sicherheitszonen eingeschränkt; anderswo offen.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung ausserhalb sensibler Zonen.",
    structure:"Direkterwerb im eigenen Namen oder über eine brasilianische Gesellschaft.",
    visa:"Investorenvisum (VIPER) ab rund 1 Million BRL Immobilieninvestition (reduzierter Betrag im Norden/Nordosten).",
    notes:"Das Immobilien-Investorenvisum bleibt einer der am leichtesten zugänglichen Aufenthaltswege Südamerikas."
  },
  {
    id:"AR", name:"Argentinien", region:"Lateinamerika",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Kein eigenes Golden Visa, aber ein „Rentista“-Aufenthaltstitel ist bei nachgewiesenem Einkommen möglich.",
    notes:"Historisch attraktiver Markt für internationale Investoren in US-Dollar."
  },
  {
    id:"CO", name:"Kolumbien", region:"Lateinamerika",
    acces:"Offen — keine allgemeine Einschränkung.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Investoren-Visum „M“ ab rund 100 000 USD, oder Renten-/Rentnervisum je nach Einkommen.",
    notes:"Medellín und Bogotá vereinen den Grossteil der internationalen Mietnachfrage."
  },
  {
    id:"PA", name:"Panama", region:"Lateinamerika",
    acces:"Innerhalb von 10 km der Grenzen eingeschränkt; erleichterter Zugang in ausgewiesenen touristischen Küstenzonen.",
    accesNiveau:"ouvert",
    nationalite:"Keine Einschränkung ausserhalb der Grenzzonen.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"„Qualified Investor“-Programm ab 300 000 USD in Immobilien, rasche dauerhafte Aufenthaltsbewilligung.",
    notes:"Eines der schnellsten Immobilien-Investorenvisa Amerikas (wenige Monate)."
  },
  {
    id:"CR", name:"Costa Rica", region:"Lateinamerika",
    acces:"Offen — gleiche Rechte wie Staatsangehörige, ausser in der Meeres-Land-Zone (200 m breiter Küstenstreifen, Konzession erforderlich).",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen; für die Meeres-Land-Zone eine costa-ricanische Gesellschaft.",
    visa:"Investorenförderungsgesetz: Aufenthalt ab 150 000 USD Immobilieninvestition.",
    notes:"Stabiler Rechtsrahmen, bei nordamerikanischen und europäischen Investoren sehr gefragt."
  },
  {
    id:"DO", name:"Dominikanische Republik", region:"Lateinamerika",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"CONFOTUR-Gesetz: erhebliche Steuerbefreiungen für genehmigte Tourismusprojekte; erleichterter Aufenthalt für Investoren.",
    notes:"Eines der attraktivsten Steuersysteme der Karibik für touristische Immobilien."
  },
  {
    id:"UY", name:"Uruguay", region:"Lateinamerika",
    acces:"Offen — keine Einschränkung, gleiche Behandlung wie Staatsangehörige.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Erleichterter steuerlicher Aufenthalt durch Immobilieninvestition (rund 400 000 USD) oder Arbeitsplatzschaffung.",
    notes:"Rechtssicherheit gilt als eine der besten Lateinamerikas."
  },

  // ================= NAHER OSTEN / AFRIKA =================
  {
    id:"AE", name:"Vereinigte Arabische Emirate", region:"Naher Osten",
    acces:"Auf ausgewiesene Freehold-Zonen beschränkt (Dubai, Abu Dhabi) — ausserhalb dieser Zonen ist Eigentum den Staatsangehörigen des Golfkooperationsrats (GCC) vorbehalten.",
    accesNiveau:"restreint",
    nationalite:"Alle Staatsangehörigkeiten sind in den Freehold-Zonen berechtigt.",
    structure:"Direkterwerb im eigenen Namen in den ausgewiesenen Zonen.",
    visa:"Golden Visa (10 Jahre) ab 2 Millionen AED (~545 000 USD) Immobilieninvestition; 2-Jahres-Investorenvisum ab 750 000 AED.",
    notes:"0% Steuer auf Mieteinnahmen und Kapitalgewinne für Privatpersonen; DLD-Übertragungsgebühr von 4%."
  },
  {
    id:"SA", name:"Saudi-Arabien", region:"Naher Osten",
    acces:"Historisch eingeschränkt — schrittweise Öffnung, ausser in Mekka/Medina; ausgewiesene Vision-2030-Zonen im Aufbau.",
    accesNiveau:"restreint",
    nationalite:"Erweiterter Zugang im Zuge laufender Reformen (2024–2026); Status je Zone zu prüfen.",
    structure:"Lokale Begleitung unerlässlich, Rahmen noch im Wandel.",
    visa:"Premium Residency („Iqama Mumayaza“) ist an Investitionen gekoppelt und unterscheidet sich vom einfachen Immobilienkauf.",
    notes:"Markt mit hohem Potenzial, aber der regulatorische Rahmen befindet sich noch im Aufbau — erhöhte Vorsicht empfohlen."
  },
  {
    id:"MA", name:"Marokko", region:"Afrika",
    acces:"Offen für städtische Immobilien — Bewilligung für landwirtschaftliche Flächen erforderlich.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung für städtische Immobilien.",
    structure:"Direkterwerb im eigenen Namen ist die gängigste Form.",
    visa:"Kein eigenes Golden Visa; erleichterte Aufenthaltskarte für bedeutende Investoren.",
    notes:"Marokkanische Devisenkontrollen sind bei der Rückführung von Einkommen und Kapital zu berücksichtigen."
  },
  {
    id:"EG", name:"Ägypten", region:"Afrika",
    acces:"Offen für die meisten Wohn- und Tourismuszonen.",
    accesNiveau:"ouvert",
    nationalite:"Bestimmte Zonen (insbesondere Sinai) unterliegen einer Bewilligungspflicht.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Erleichterter Aufenthalt bei Immobilieninvestition ab rund 100 000 USD (Schwellenwerte je nach Erlass variabel).",
    notes:"Devisenkontrollen und Schwankungen des ägyptischen Pfunds sind in die Renditeanalyse einzubeziehen."
  },
  {
    id:"MU", name:"Mauritius", region:"Afrika",
    acces:"Offen über spezielle Programme (PDS, Smart City, Ground+2) — Direkterwerb ausserhalb dieser Programme stark eingeschränkt.",
    accesNiveau:"restreint",
    nationalite:"Alle Staatsangehörigkeiten sind über die zugelassenen Programme berechtigt.",
    structure:"Kauf in einem vom Economic Development Board zertifizierten Projekt.",
    visa:"Dauerhafte Aufenthaltsbewilligung wird ab einer Investition von 375 000 USD automatisch erteilt (PDS/Smart City).",
    notes:"Sehr vorteilhafte Besteuerung: 15% Flat Tax, keine Erbschaftssteuer."
  },
  {
    id:"ZA", name:"Südafrika", region:"Afrika",
    acces:"Offen — keine allgemeine Einschränkung für ausländisches Eigentum.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen oder über eine Gesellschaft.",
    visa:"Aufenthaltsvisum für finanziell Unabhängige, gekoppelt an das Vermögen, nicht ausschliesslich an Immobilien.",
    notes:"Südafrikanische Devisenkontrollen (South African Reserve Bank) sind bei grenzüberschreitenden Geldflüssen zu berücksichtigen."
  },

  // ================= ASIEN / PAZIFIK =================
  {
    id:"JP", name:"Japan", region:"Asien",
    acces:"Offen — keine Einschränkung beim Grundbesitz, auch nicht für Nicht-Ansässige.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeits- oder Wohnsitzvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen, ohne dass ein Visum oder eine Aufenthaltsbewilligung erforderlich ist.",
    visa:"Kein Golden Visa; das „Business Manager Visa“ existiert für die aktive Bewirtschaftung einer Immobilie.",
    notes:"Einer der weltweit offensten Märkte für ausländische Investoren, auch für Nicht-Ansässige."
  },
  {
    id:"SG", name:"Singapur", region:"Asien",
    acces:"Offen für Eigentumswohnungen; eingeschränkt für Einfamilienhäuser („landed property“).",
    accesNiveau:"restreint",
    nationalite:"Ständige Ansässige und Staatsbürger: erweiterter Zugang. Ausländer: Eigentumswohnungen zugänglich, Einfamilienhäuser bewilligungspflichtig.",
    structure:"Direkterwerb bei Eigentumswohnungen.",
    visa:"Kein Immobilien-Golden-Visa; separates Global Investor Programme (wirtschaftliche Tätigkeit, nicht reine Immobilien).",
    notes:"Additional Buyer's Stamp Duty (ABSD) kann für ausländische Käufer bis zu 60% des Preises betragen."
  },
  {
    id:"HK", name:"Hongkong", region:"Asien",
    acces:"Offen — keine Einschränkung beim Kauf durch Nicht-Ansässige.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung.",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Derzeit kein Immobilien-Golden-Visa.",
    notes:"Zusätzliche Erwerbssteuer (Buyer's Stamp Duty 15%) für nicht dauerhaft Ansässige."
  },
  {
    id:"TH", name:"Thailand", region:"Asien",
    acces:"Eingeschränkt — direktes Grundeigentum ist Ausländern untersagt; Eigentumswohnungen sind zugänglich.",
    accesNiveau:"restreint",
    nationalite:"Keine spezifische Einschränkung für Eigentumswohnungen (Gesamtquote von 49% der Gebäudefläche).",
    structure:"Eigentumswohnung (Condominium, max. 49% pro Gebäude), thailändische Gesellschaft (max. 49% ausländische Beteiligung) oder erneuerbarer Erbpachtvertrag über 30 Jahre.",
    visa:"Thailand Elite Visa (langfristiger Aufenthalt im Abonnement, nicht direkt an Immobilien gekoppelt).",
    notes:"Die Gesellschaftsstruktur oder der langfristige Pachtvertrag sind die gängigsten Lösungen für Einfamilienhäuser."
  },
  {
    id:"MY", name:"Malaysia", region:"Asien",
    acces:"Offen, mit von jedem Bundesstaat festgelegten Mindestpreisschwellen (für Ausländer oft 1 Million MYR).",
    accesNiveau:"restreint",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung, aber je nach Bundesstaat unterschiedliche Preisschwellen.",
    structure:"Direkterwerb im eigenen Namen oberhalb der lokalen Mindestschwelle.",
    visa:"Malaysia My Second Home (MM2H): langfristiger Aufenthalt gekoppelt an finanzielle Einlagen und Vermögensvoraussetzungen (Kriterien seit 2021 verschärft).",
    notes:"Kuala Lumpur und Penang vereinen den Grossteil der ausländischen Nachfrage."
  },
  {
    id:"ID", name:"Indonesien", region:"Asien",
    acces:"Eingeschränkt — kein Volleigentum an Grundstücken für Ausländer; Nutzungsrecht (Hak Pakai) bis zu 80 Jahre.",
    accesNiveau:"restreint",
    nationalite:"Alle Staatsangehörigkeiten sind mit gültigem Aufenthaltstitel für Hak Pakai berechtigt.",
    structure:"Hak Pakai (Nutzungsrecht) oder PT-PMA-Gesellschaft für eine strukturierte gewerbliche/vermietete Nutzung.",
    visa:"Second Home Visa ab 2 Milliarden IDR (~130 000 USD) Einlage oder Vermögen, Aufenthalt für 5 oder 10 Jahre.",
    notes:"Bali bleibt der dynamischste Markt, mit einem inzwischen gut strukturierten Hak-Pakai-Rahmen für Ausländer."
  },
  {
    id:"PH", name:"Philippinen", region:"Asien",
    acces:"Eingeschränkt — Grundstücke sind Staatsangehörigen vorbehalten; Eigentumswohnungen sind zugänglich (Quote von 40% pro Gebäude).",
    accesNiveau:"restreint",
    nationalite:"Keine spezifische Einschränkung für Eigentumswohnungen innerhalb der Gesamtquote.",
    structure:"Eigentumswohnung (Condominium) oder langfristiger Pachtvertrag (bis zu 50 Jahre, verlängerbar) für Einfamilienhäuser.",
    visa:"Special Resident Retiree's Visa (SRRV), gekoppelt an eine Einlage/Investition, unabhängig vom direkten Immobilienkauf.",
    notes:"Manila und Cebu vereinen den Grossteil der ausländischen Investitionen in Eigentumswohnungen."
  },
  {
    id:"VN", name:"Vietnam", region:"Asien",
    acces:"Eingeschränkt — erneuerbarer Pachtvertrag über 50 Jahre, Quote von 30% der Einheiten pro Gebäude für Ausländer.",
    accesNiveau:"restreint",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung innerhalb der Quotengrenzen.",
    structure:"Langfristiger Pachtvertrag in für Ausländer zugelassenen Projekten, nachgewiesen durch das „rosa Zertifikat“.",
    visa:"Kein Immobilien-Golden-Visa; separate Investorenvisa im Zusammenhang mit einer Unternehmensgründung.",
    notes:"Ho-Chi-Minh-Stadt und Hanoi vereinen die meisten für Ausländer offenen Projekte."
  },
  {
    id:"KH", name:"Kambodscha", region:"Asien",
    acces:"Offen für Stockwerkseigentum (ausser Erdgeschoss) — Grundstücke sind Staatsangehörigen vorbehalten.",
    accesNiveau:"restreint",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung für Stockwerkseigentum.",
    structure:"Volleigentum („Strata Title“) möglich für Eigentumseinheiten ab dem 1. Stock.",
    visa:"Kein eigenes Golden Visa; Geschäftsvisum (Visa E) leicht verlängerbar.",
    notes:"Einer der wenigen Märkte Südostasiens, der Ausländern Volleigentum an Eigentumswohnungen bietet."
  },
  {
    id:"IN", name:"Indien", region:"Asien",
    acces:"Offen für NRI (Non-Resident Indians) und OCI (Overseas Citizens of India); für andere Ausländer stark eingeschränkt.",
    accesNiveau:"restreint",
    nationalite:"NRI/OCI: freier Zugang zu Wohn- und Gewerbeimmobilien. Andere Staatsangehörigkeiten: Kauf praktisch unmöglich, ausser über einen langfristigen Aufenthalt.",
    structure:"Direkterwerb für NRI/OCI; langfristige Miete (bis zu 99 Jahre) für andere.",
    visa:"Kein Immobilien-Golden-Visa für Nicht-NRI.",
    notes:"Markt hauptsächlich für die indische Diaspora im Rahmen einer Direktinvestitionsstrategie zugänglich."
  },
  {
    id:"AU", name:"Australien", region:"Pazifik",
    acces:"Eingeschränkt — für jeden Kauf durch einen Nicht-Ansässigen ist eine Genehmigung des Foreign Investment Review Board (FIRB) obligatorisch.",
    accesNiveau:"restreint",
    nationalite:"Ständige Ansässige: freier Zugang. Nicht-Ansässige: FIRB obligatorisch, in der Regel auf Neubauten beschränkt.",
    structure:"Direkterwerb nach FIRB-Genehmigung; erhöhte Stempelsteuer für Ausländer (Zuschlag bis zu 8% je nach Bundesstaat).",
    visa:"Australisches Golden Visa (Significant/Premium Investor Visa) 2024 abgeschafft — neue Investitionswege sind restriktiver.",
    notes:"Seit 2025 gelten in mehreren Zonen zusätzliche Einschränkungen beim Kauf bestehender Wohnimmobilien durch Nicht-Ansässige."
  },
  {
    id:"NZ", name:"Neuseeland", region:"Pazifik",
    acces:"Stark eingeschränkt — allgemeines Verbot des Wohnimmobilienkaufs durch Nicht-Ansässige seit 2018.",
    accesNiveau:"restreint",
    nationalite:"Neuseeländische und australische Staatsbürger/Ansässige: freier Zugang. Andere Staatsangehörigkeiten: Wohnimmobilienkauf verboten, ausser bei Ausnahmen (Freihandelsabkommen, z. B. Singapur).",
    structure:"Gewerbeimmobilien und bestimmte grosse Neubauprojekte bleiben unter OIO-Bedingungen zugänglich.",
    visa:"Kein Immobilien-Golden-Visa — das Active Investor Plus Visa existiert, schliesst aber direkte Wohnimmobilien aus.",
    notes:"Einer der verschlossensten Märkte der entwickelten Welt für nicht ansässige ausländische Investoren."
  },
  {
    id:"GE", name:"Georgien", region:"Asien",
    acces:"Offen — keine Einschränkung für ausländisches Eigentum bei Wohnimmobilien.",
    accesNiveau:"ouvert",
    nationalite:"Keine Staatsangehörigkeitsvoraussetzung (landwirtschaftliche Flächen bleiben eingeschränkt).",
    structure:"Direkterwerb im eigenen Namen.",
    visa:"Erleichterter Aufenthalt durch Immobilieninvestition ab 100 000 USD.",
    notes:"Einer der offensten und am schnellsten zugänglichen Märkte für internationale Investoren."
  },
];

function droitParId(id){
  return DROIT_DATA.find(function(d){ return d.id === id; });
}
