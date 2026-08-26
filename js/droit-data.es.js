/* ============================================================
   Partneris Immobilier — Marco legal de la inversión por país
   Síntesis informativa (2026) — verifique siempre la normativa
   vigente con un profesional local antes de cualquier compromiso.
   Los umbrales de los programas de residencia cambian con
   frecuencia.
   ============================================================ */

var DROIT_DATA = [
  // ================= EUROPA =================
  {
    id:"CH", name:"Suiza", region:"Europa",
    acces:"Restringido para no residentes fuera de la UE/AELC (Lex Koller).",
    accesNiveau:"restreint",
    nationalite:"Ciudadanos de la UE/AELC domiciliados en Suiza: acceso casi libre. Fuera de la UE/AELC: autorización cantonal formal obligatoria para la residencia principal; el inmobiliario de renta pura está muy limitado.",
    structure:"Compra directa posible para los residentes; estructuras específicas (fondos, autorización cantonal) para los no residentes.",
    visa:"Ningún programa de residencia por inversión inmobiliaria.",
    notes:"Reforma 2026: obligación de reventa en un plazo de 2 años en caso de abandonar Suiza, cuotas reducidas para residencias secundarias. Consulte nuestra página dedicada a la inversión en Suiza."
  },
  {
    id:"FR", name:"Francia", region:"Europa",
    acces:"Abierto — sin restricción general a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad o residencia para comprar.",
    structure:"Compra a título personal, SCI o sociedad posible según la estrategia patrimonial y sucesoria.",
    visa:"Sin golden visa vinculada al inmobiliario; existe el visado «passeport talent» para otras formas de inversión.",
    notes:"Fiscalidad: IFI a partir de 1,3 M€ de patrimonio inmobiliario neto, cotizaciones sociales sobre los ingresos de alquiler de los no residentes (verificar el convenio fiscal)."
  },
  {
    id:"DE", name:"Alemania", region:"Europa",
    acces:"Abierto — sin restricción a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal o mediante sociedad (GmbH) para optimizar la fiscalidad y la transmisión.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Regulación de alquileres (Mietpreisbremse) en las grandes ciudades; gastos notariales e impuesto de transmisión (Grunderwerbsteuer) del 3,5–6,5% según el Land."
  },
  {
    id:"ES", name:"España", region:"Europa",
    acces:"Abierto — libertad total, salvo zonas militares y fronterizas específicas.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa con número de NIE obligatorio para todo comprador extranjero.",
    visa:"Golden Visa española suprimida para el inmobiliario desde abril de 2025; otras vías de residencia (no lucrativa, emprendedor) siguen disponibles.",
    notes:"Impuesto sobre la Renta de no Residentes (IRNR) sobre los alquileres; la plusvalía está sujeta a una retención en origen del 3% del precio para los no residentes."
  },
  {
    id:"IT", name:"Italia", region:"Europa",
    acces:"Abierto bajo condición de reciprocidad con el país de origen (automático para la UE y la mayoría de los países occidentales).",
    accesNiveau:"ouvert",
    nationalite:"Principio de reciprocidad — a verificar para nacionalidades fuera de la UE/EE. UU./Suiza.",
    structure:"Compra directa a título personal, la más habitual.",
    visa:"Investor Visa for Italy (desde 250.000 € en startups o 2 M€ en deuda pública — el inmobiliario por sí solo no da acceso a este visado).",
    notes:"Régimen fiscal a tanto alzado atractivo para nuevos residentes de alto patrimonio («flat tax» de 200.000 €/año sobre ingresos extranjeros)."
  },
  {
    id:"PT", name:"Portugal", region:"Europa",
    acces:"Abierto — sin restricción a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad; número fiscal (NIF) obligatorio.",
    structure:"Compra directa a título personal o mediante sociedad.",
    visa:"Golden Visa sigue activa pero reorientada desde 2023 hacia fondos de inversión y creación de empleo — la compra inmobiliaria directa ya no da acceso al visado.",
    notes:"Régimen NHR (residente no habitual) muy restringido desde 2024 — verificar la elegibilidad caso por caso."
  },
  {
    id:"GB", name:"Reino Unido", region:"Europa",
    acces:"Abierto — mercado entre los más liberales del mundo.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad o residencia.",
    structure:"Compra directa o mediante sociedad (a menudo utilizada para la optimización sucesoria y fiscal).",
    visa:"Tier 1 Investor Visa suprimido en 2022; ninguna vía de residencia vinculada al inmobiliario.",
    notes:"Stamp Duty Land Tax incrementado un 2% para los compradores no residentes, además del recargo por segunda residencia (+5%)."
  },
  {
    id:"IE", name:"Irlanda", region:"Europa",
    acces:"Abierto — sin restricción general.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Immigrant Investor Programme suspendido desde 2023.",
    notes:"Mercado de alquiler muy tensionado en Dublín; regulación de alquileres en las «Rent Pressure Zones»."
  },
  {
    id:"NL", name:"Países Bajos", region:"Europa",
    acces:"Abierto — sin restricción a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal o mediante sociedad (BV).",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Ley de regulación de alquileres ampliada (Wet betaalbare huur); varias ciudades limitan la compra para alquiler en ciertos barrios («opkoopbescherming»)."
  },
  {
    id:"BE", name:"Bélgica", region:"Europa",
    acces:"Abierto — sin restricción.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal, la más habitual.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Impuestos de registro variables según la región (Valonia, Flandes, Bruselas) — del 3% al 12,5%."
  },
  {
    id:"AT", name:"Austria", region:"Europa",
    acces:"Restringido en ciertos Länder (autorización previa para no comunitarios, especialmente segundas residencias).",
    accesNiveau:"restreint",
    nationalite:"Ciudadanos de la UE/AELC: acceso facilitado. Fuera de la UE: autorización regional requerida según el Land.",
    structure:"Compra directa posible, autorización administrativa en ciertos casos.",
    visa:"Programa de residencia por inversión directa (desde 3 M€, creación de empleo) — no específico del inmobiliario.",
    notes:"Viena sigue muy regulada para las segundas residencias."
  },
  {
    id:"LU", name:"Luxemburgo", region:"Europa",
    acces:"Abierto — sin restricción.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Mercado entre los más caros de Europa; fiscalidad de tenencia ventajosa."
  },
  {
    id:"GR", name:"Grecia", region:"Europa",
    acces:"Abierto — sin restricción general (salvo zonas fronterizas sensibles, autorización militar).",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad para la compra.",
    structure:"Compra directa a título personal.",
    visa:"Golden Visa activa: 250.000 € en las zonas menos tensionadas, hasta 800.000 € en Atenas, Salónica e islas turísticas. Permiso de residencia renovable sin obligación de estancia.",
    notes:"Una de las golden visa más accesibles de Europa en 2026."
  },
  {
    id:"MT", name:"Malta", region:"Europa",
    acces:"Restringido — se requiere el permiso AIP (Acquisition of Immovable Property) fuera de las zonas designadas para no residentes de la UE.",
    accesNiveau:"restreint",
    nationalite:"Ciudadanos de la UE residentes en Malta desde hace 5 años: acceso libre. Otros: permiso AIP o compra en zona designada (Special Designated Areas).",
    structure:"Compra directa en zona designada sin restricción; permiso AIP en el resto de casos.",
    visa:"Malta Permanent Residence Programme desde 350.000–600.000 € (compra) o alquiler anual mínimo + contribución.",
    notes:"Naturalización acelerada posible mediante un programa de inversión distinto (contribución + inmobiliario)."
  },
  {
    id:"PL", name:"Polonia", region:"Europa",
    acces:"Abierto para ciudadanos de la UE/AELC; se requiere permiso del Ministerio del Interior para el resto (sobre todo bienes rústicos).",
    accesNiveau:"ouvert",
    nationalite:"UE/AELC: libre. Fuera de la UE: autorización para terrenos agrícolas/forestales; los apartamentos son generalmente libres.",
    structure:"Compra directa a título personal, la más habitual.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Mercado de alquiler en fuerte crecimiento en las grandes ciudades (Varsovia, Cracovia, Breslavia)."
  },
  {
    id:"RO", name:"Rumanía", region:"Europa",
    acces:"Restringido — el terreno está reservado a los ciudadanos rumanos y ciudadanos de la UE; el resto debe pasar por una sociedad.",
    accesNiveau:"restreint",
    nationalite:"UE: acceso al terreno autorizado. Fuera de la UE: adquisición de terreno mediante sociedad rumana.",
    structure:"Se recomienda una sociedad rumana para garantizar la adquisición fuera de la UE.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Los apartamentos en propiedad horizontal (sin cuota de terreno significativa) siguen siendo accesibles más fácilmente."
  },
  {
    id:"HU", name:"Hungría", region:"Europa",
    acces:"Abierto para viviendas; se requiere autorización para el suelo agrícola.",
    accesNiveau:"ouvert",
    nationalite:"Sin condición estricta para la compra de viviendas.",
    structure:"Compra directa a título personal.",
    visa:"Programa «Guest Investor»: deuda pública desde 250.000 € o fondo inmobiliario regulado, que da derecho a un permiso de residencia de 2 años renovable.",
    notes:"Sin obligación de presencia física mínima para mantener el estatus."
  },
  {
    id:"CZ", name:"República Checa", region:"Europa",
    acces:"Restringido para el suelo fuera de la UE — acceso facilitado para las viviendas en propiedad horizontal.",
    accesNiveau:"restreint",
    nationalite:"UE y cónyuges de ciudadanos checos: acceso libre. Otros: se recomienda una sociedad checa para el suelo.",
    structure:"Sociedad local (s.r.o.) utilizada a menudo por los compradores de fuera de la UE.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"El mercado de Praga es muy demandado por los inversores internacionales."
  },
  {
    id:"HR", name:"Croacia", region:"Europa",
    acces:"Restringido fuera de la UE — se requiere la aprobación del Ministerio de Justicia (plazo de hasta 12 meses).",
    accesNiveau:"restreint",
    nationalite:"UE: acceso libre sujeto a reciprocidad. Fuera de la UE: aprobación ministerial o sociedad croata.",
    structure:"Sociedad croata: alternativa rápida a la aprobación ministerial.",
    visa:"Sin golden visa inmobiliaria.",
    notes:"Las zonas costeras (Istria, Dalmacia) son muy buscadas para el alquiler vacacional."
  },
  {
    id:"BG", name:"Bulgaria", region:"Europa",
    acces:"Restringido para el terreno — reservado a los ciudadanos búlgaros y personas jurídicas búlgaras.",
    accesNiveau:"restreint",
    nationalite:"UE/AELC: acceso a las viviendas. Terreno: se necesita una sociedad búlgara para todos los extranjeros, incluidos los de la UE.",
    structure:"Sociedad búlgara (OOD) ampliamente utilizada para la adquisición de terreno.",
    visa:"Antiguo programa de inversión suspendido.",
    notes:"Rentabilidades elevadas en el litoral y en Sofía, mercado aún asequible."
  },
  {
    id:"CY", name:"Chipre", region:"Europa",
    acces:"Abierto con autorización del Consejo de Ministros para los no comunitarios más allá de un inmueble.",
    accesNiveau:"restreint",
    nationalite:"UE: acceso libre. Fuera de la UE: autorización requerida, generalmente concedida para un inmueble residencial.",
    structure:"Compra directa tras autorización administrativa.",
    visa:"Permiso de residencia permanente desde 300.000 € de inversión inmobiliaria (categoría F/6.2).",
    notes:"Fiscalidad atractiva para jubilados y no domiciliados."
  },
  {
    id:"TR", name:"Turquía", region:"Oriente Medio",
    acces:"Abierto bajo reciprocidad — la mayoría de las nacionalidades pueden comprar libremente fuera de las zonas militares.",
    accesNiveau:"ouvert",
    nationalite:"Se requiere reciprocidad con el país de origen (es el caso de la gran mayoría de los países occidentales).",
    structure:"Compra directa a título personal, la más habitual.",
    visa:"Ciudadanía turca por inversión desde 400.000 USD en inmobiliario, con compromiso de mantenimiento de 3 años.",
    notes:"Uno de los programas de ciudadanía por inversión inmobiliaria más accesibles del mundo."
  },

  // ================= AMÉRICA DEL NORTE =================
  {
    id:"US", name:"Estados Unidos", region:"América del Norte",
    acces:"Abierto — sin restricción federal general a la propiedad extranjera residencial.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad para la compra (restricciones sectoriales sobre tierras agrícolas en ciertos estados).",
    structure:"Compra a título personal, LLC o trust — la estructura afecta fuertemente a la fiscalidad sucesoria (estate tax) de los no residentes.",
    visa:"EB-5 (green card) desde 800.000 USD generando empleo — el alquiler residencial clásico no es elegible por sí solo.",
    notes:"FIRPTA: retención en origen del 15% sobre el precio de venta en la reventa por un no residente."
  },
  {
    id:"CA", name:"Canadá", region:"América del Norte",
    acces:"Restringido — prohibición federal de compra residencial por no residentes/no canadienses (Ley de prohibición de compra de inmuebles residenciales por no canadienses), más restricciones provinciales.",
    accesNiveau:"restreint",
    nationalite:"Residentes permanentes y ciudadanos: acceso libre. No residentes: compra residencial ampliamente restringida hasta 2027 (ley prorrogada), excepciones limitadas.",
    structure:"El inmobiliario comercial y ciertos proyectos nuevos siguen siendo accesibles según la provincia.",
    visa:"Sin golden visa inmobiliaria; programas de inversores provinciales distintos (Quebec, etc.).",
    notes:"La Isla del Príncipe Eduardo limita históricamente a los no residentes a 5 acres sin permiso. Verificar la evolución de la moratoria federal antes de cualquier proyecto."
  },

  // ================= AMÉRICA LATINA =================
  {
    id:"MX", name:"México", region:"América Latina",
    acces:"Restringido en la «zona restringida» (100 km de las fronteras, 50 km de las costas) — acceso mediante fideicomiso o sociedad.",
    accesNiveau:"restreint",
    nationalite:"Sin restricción fuera de la zona restringida.",
    structure:"Fideicomiso (fideicomiso bancario, 50 años renovables) o sociedad mexicana para la zona restringida.",
    visa:"Visado de residente temporal/permanente posible mediante justificación de ingresos o inversión (no específicamente inmobiliario).",
    notes:"Estructura muy regulada pero ampliamente probada — la mayoría de las reventas turísticas (Riviera Maya, Los Cabos) pasan por fideicomiso."
  },
  {
    id:"BR", name:"Brasil", region:"América Latina",
    acces:"Restringido en las zonas fronterizas y de seguridad nacional; abierto en el resto.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad fuera de las zonas sensibles.",
    structure:"Compra directa a título personal o sociedad brasileña.",
    visa:"Visado de inversor (VIPER) desde aproximadamente 1 millón de BRL de inversión inmobiliaria (importe reducido en el Norte/Noreste).",
    notes:"El visado de inversor inmobiliario sigue siendo una de las vías de residencia más accesibles de Sudamérica."
  },
  {
    id:"AR", name:"Argentina", region:"América Latina",
    acces:"Abierto — sin restricción a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Sin golden visa dedicada, pero es posible la residencia «rentista» con ingresos justificados.",
    notes:"Mercado históricamente atractivo para los inversores internacionales en dólares."
  },
  {
    id:"CO", name:"Colombia", region:"América Latina",
    acces:"Abierto — sin restricción general.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Visado «M» de inversor desde aproximadamente 100.000 USD, o visado de jubilado/rentista según ingresos.",
    notes:"Medellín y Bogotá concentran la mayor parte de la demanda de alquiler internacional."
  },
  {
    id:"PA", name:"Panamá", region:"América Latina",
    acces:"Restringido a 10 km de las fronteras; acceso facilitado en zonas turísticas costeras designadas.",
    accesNiveau:"ouvert",
    nationalite:"Sin restricción fuera de las zonas fronterizas.",
    structure:"Compra directa a título personal.",
    visa:"Programa «Qualified Investor» desde 300.000 USD de inmobiliario, residencia permanente rápida.",
    notes:"Uno de los visados de inversor inmobiliario más rápidos de las Américas (unos pocos meses)."
  },
  {
    id:"CR", name:"Costa Rica", region:"América Latina",
    acces:"Abierto — mismos derechos que los nacionales, salvo la zona marítimo-terrestre (franja costera de 200 m, se requiere concesión).",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal; sociedad costarricense para la zona marítimo-terrestre.",
    visa:"Ley de atracción de inversores: residencia desde 150.000 USD de inversión inmobiliaria.",
    notes:"Marco jurídico estable, muy apreciado por los inversores norteamericanos y europeos."
  },
  {
    id:"DO", name:"República Dominicana", region:"América Latina",
    acces:"Abierto — sin restricción a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Ley CONFOTUR: exenciones fiscales importantes en los proyectos turísticos aprobados; residencia facilitada para inversores.",
    notes:"Régimen fiscal entre los más incentivadores del Caribe para el inmobiliario turístico."
  },
  {
    id:"UY", name:"Uruguay", region:"América Latina",
    acces:"Abierto — sin restricción, trato idéntico al de los nacionales.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Residencia fiscal facilitada mediante inversión inmobiliaria (aproximadamente 400.000 USD) o creación de empleo.",
    notes:"Estabilidad jurídica reconocida como una de las mejores de América Latina."
  },

  // ================= ORIENTE MEDIO / ÁFRICA =================
  {
    id:"AE", name:"Emiratos Árabes Unidos", region:"Oriente Medio",
    acces:"Restringido a las zonas freehold designadas (Dubái, Abu Dabi) — fuera de estas zonas, la propiedad está reservada a los nacionales del CCG.",
    accesNiveau:"restreint",
    nationalite:"Todas las nacionalidades son elegibles en las zonas freehold.",
    structure:"Compra directa a título personal en las zonas designadas.",
    visa:"Golden Visa (10 años) desde 2 millones de AED (~545.000 USD) de inversión inmobiliaria; visado de inversor de 2 años desde 750.000 AED.",
    notes:"0% de impuesto sobre el ingreso de alquiler y la plusvalía para los particulares; gastos de transferencia DLD del 4%."
  },
  {
    id:"SA", name:"Arabia Saudita", region:"Oriente Medio",
    acces:"Históricamente restringido — con apertura progresiva salvo en La Meca/Medina, zonas designadas Visión 2030 en desarrollo.",
    accesNiveau:"restreint",
    nationalite:"Acceso ampliado en curso de reforma (2024-2026); verificar el estatus zona por zona.",
    structure:"Acompañamiento local indispensable, marco todavía en evolución.",
    visa:"Residencia Premium («Iqama Mumayaza») vinculada a la inversión, distinta de la simple compra inmobiliaria.",
    notes:"Mercado de alto potencial pero con marco regulatorio aún en construcción — se recomienda especial prudencia."
  },
  {
    id:"MA", name:"Marruecos", region:"África",
    acces:"Abierto para el urbano — se requiere autorización para el suelo agrícola.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad para los bienes urbanos.",
    structure:"Compra directa a título personal, la más habitual.",
    visa:"Sin golden visa dedicada; tarjeta de residencia facilitada para inversores significativos.",
    notes:"El control de cambios marroquí debe tenerse en cuenta para la repatriación de ingresos y capital."
  },
  {
    id:"EG", name:"Egipto", region:"África",
    acces:"Abierto para la mayoría de las zonas residenciales y turísticas.",
    accesNiveau:"ouvert",
    nationalite:"Ciertas zonas (en particular el Sinaí) están sujetas a autorización.",
    structure:"Compra directa a título personal.",
    visa:"Residencia facilitada por inversión inmobiliaria desde aproximadamente 100.000 USD (umbrales variables según decretos).",
    notes:"El control de cambios y la fluctuación de la libra egipcia deben integrarse en el análisis de rentabilidad."
  },
  {
    id:"MU", name:"Mauricio", region:"África",
    acces:"Abierto mediante los programas dedicados (PDS, Smart City, Ground+2) — la compra directa fuera de programa es muy limitada.",
    accesNiveau:"restreint",
    nationalite:"Todas las nacionalidades son elegibles mediante los programas autorizados.",
    structure:"Compra en un proyecto certificado por el Economic Development Board.",
    visa:"Permiso de residencia permanente concedido automáticamente desde 375.000 USD invertidos (PDS/Smart City).",
    notes:"Fiscalidad muy ventajosa: tipo fijo del 15%, sin impuesto de sucesiones."
  },
  {
    id:"ZA", name:"Sudáfrica", region:"África",
    acces:"Abierto — sin restricción general a la propiedad extranjera.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal o mediante sociedad.",
    visa:"Visado de residencia por independencia financiera vinculado al patrimonio, no estrictamente al inmobiliario.",
    notes:"El control de cambios sudafricano (South African Reserve Bank) debe tenerse en cuenta para los flujos transfronterizos."
  },

  // ================= ASIA / PACÍFICO =================
  {
    id:"JP", name:"Japón", region:"Asia",
    acces:"Abierto — sin restricción sobre la propiedad del suelo, incluso para no residentes.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad o residencia.",
    structure:"Compra directa a título personal, sin necesidad de visado ni permiso de residencia.",
    visa:"Sin golden visa; existe el «Business Manager Visa» para la explotación activa de un inmueble.",
    notes:"Uno de los mercados más abiertos del mundo para los inversores extranjeros, incluidos los no residentes."
  },
  {
    id:"SG", name:"Singapur", region:"Asia",
    acces:"Abierto para los condominios; restringido para las viviendas unifamiliares («landed property»).",
    accesNiveau:"restreint",
    nationalite:"Residentes permanentes y ciudadanos: acceso ampliado. Extranjeros: condominios accesibles, viviendas unifamiliares sujetas a autorización.",
    structure:"Compra directa para los condominios.",
    visa:"Sin golden visa inmobiliaria; el Global Investor Programme es distinto (actividad económica, no inmobiliario puro).",
    notes:"Additional Buyer's Stamp Duty (ABSD) que puede alcanzar el 60% del precio para los compradores extranjeros."
  },
  {
    id:"HK", name:"Hong Kong", region:"Asia",
    acces:"Abierto — sin restricción a la compra por no residentes.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad.",
    structure:"Compra directa a título personal.",
    visa:"Sin golden visa inmobiliaria actualmente.",
    notes:"Impuestos de transmisión adicionales (Buyer's Stamp Duty del 15%) para los no residentes permanentes."
  },
  {
    id:"TH", name:"Tailandia", region:"Asia",
    acces:"Restringido — la propiedad directa del suelo está prohibida a los extranjeros; los condominios son accesibles.",
    accesNiveau:"restreint",
    nationalite:"Sin restricción específica para los condominios (cuota colectiva del 49% de la superficie total del edificio).",
    structure:"Copropiedad (condominio, 49% máx. por edificio), sociedad tailandesa (49% de participación extranjera máx.), o arrendamiento enfitéutico de 30 años renovable.",
    visa:"Thailand Elite Visa (residencia de larga duración por suscripción, no vinculada directamente al inmobiliario).",
    notes:"La constitución de sociedad o el arrendamiento a largo plazo son las soluciones más utilizadas para las viviendas unifamiliares."
  },
  {
    id:"MY", name:"Malasia", region:"Asia",
    acces:"Abierto bajo umbrales de precio mínimos fijados por cada estado (a menudo 1 millón de MYR para extranjeros).",
    accesNiveau:"restreint",
    nationalite:"Sin restricción de nacionalidad, pero umbrales de precio variables según el estado.",
    structure:"Compra directa a título personal por encima del umbral mínimo local.",
    visa:"Malaysia My Second Home (MM2H): residencia a largo plazo vinculada a depósitos financieros y elegibilidad patrimonial (criterios endurecidos desde 2021).",
    notes:"Kuala Lumpur y Penang concentran la mayor parte de la demanda extranjera."
  },
  {
    id:"ID", name:"Indonesia", region:"Asia",
    acces:"Restringido — sin plena propiedad del suelo para los extranjeros; derecho de uso (Hak Pakai) hasta 80 años.",
    accesNiveau:"restreint",
    nationalite:"Todas las nacionalidades son elegibles para el Hak Pakai con un permiso de residencia válido.",
    structure:"Hak Pakai (derecho de uso) o sociedad PT PMA para un uso comercial/de alquiler estructurado.",
    visa:"Second Home Visa desde 2.000 millones de IDR (~130.000 USD) de depósito o activos, residencia de 5 o 10 años.",
    notes:"Bali sigue siendo el mercado más dinámico, con un marco Hak Pakai ahora bien estructurado para los extranjeros."
  },
  {
    id:"PH", name:"Filipinas", region:"Asia",
    acces:"Restringido — el suelo está reservado a los nacionales; los condominios son accesibles (cuota del 40% por edificio).",
    accesNiveau:"restreint",
    nationalite:"Sin restricción específica para los condominios dentro del límite de la cuota colectiva.",
    structure:"Copropiedad (condominio) o arrendamiento a largo plazo (hasta 50 años renovable) para las viviendas unifamiliares.",
    visa:"Special Resident Retiree's Visa (SRRV) vinculado a un depósito/inversión, distinto de la compra inmobiliaria directa.",
    notes:"Manila y Cebú concentran la mayor parte de las inversiones extranjeras en condominios."
  },
  {
    id:"VN", name:"Vietnam", region:"Asia",
    acces:"Restringido — arrendamiento de 50 años renovable, cuota del 30% de las unidades por edificio para extranjeros.",
    accesNiveau:"restreint",
    nationalite:"Sin restricción de nacionalidad dentro del límite de las cuotas.",
    structure:"Arrendamiento a largo plazo en proyectos elegibles para extranjeros, verificado mediante el certificado rosa.",
    visa:"Sin golden visa inmobiliaria; visados de inversor distintos vinculados a la creación de empresa.",
    notes:"Ho Chi Minh y Hanói concentran la mayoría de los proyectos abiertos a los extranjeros."
  },
  {
    id:"KH", name:"Camboya", region:"Asia",
    acces:"Abierto para las plantas en propiedad horizontal (salvo planta baja) — el suelo está reservado a los nacionales.",
    accesNiveau:"restreint",
    nationalite:"Sin restricción de nacionalidad para la copropiedad en planta.",
    structure:"Plena propiedad («strata title») posible para las unidades en propiedad horizontal a partir de la primera planta.",
    visa:"Sin golden visa dedicada; visado de negocios (visado E) renovable fácilmente.",
    notes:"Uno de los pocos mercados del Sudeste Asiático que ofrece la plena propiedad en régimen de propiedad horizontal a los extranjeros."
  },
  {
    id:"IN", name:"India", region:"Asia",
    acces:"Abierto para los NRI (Non-Resident Indians) y OCI (Overseas Citizens of India); muy restringido para el resto de extranjeros.",
    accesNiveau:"restreint",
    nationalite:"NRI/OCI: acceso libre al residencial y comercial. Otras nacionalidades: compra casi imposible salvo mediante residencia de larga duración.",
    structure:"Compra directa para NRI/OCI; arrendamiento a largo plazo (hasta 99 años) para el resto.",
    visa:"Sin golden visa inmobiliaria para los no NRI.",
    notes:"Mercado principalmente accesible a la diáspora india dentro de una estrategia de inversión directa."
  },
  {
    id:"AU", name:"Australia", region:"Pacífico",
    acces:"Restringido — se requiere la aprobación del Foreign Investment Review Board (FIRB) obligatoria para toda compra por un no residente.",
    accesNiveau:"restreint",
    nationalite:"Residentes permanentes: acceso libre. No residentes: FIRB obligatorio, generalmente limitado a obra nueva.",
    structure:"Compra directa tras la aprobación del FIRB; impuestos de timbre incrementados para extranjeros (recargo de hasta el 8% según el estado).",
    visa:"Golden visa australiana (Significant/Premium Investor Visa) suprimida en 2024 — nuevas vías de inversión más restrictivas.",
    notes:"Desde 2025, restricciones adicionales a la compra de viviendas existentes por no residentes en varias zonas."
  },
  {
    id:"NZ", name:"Nueva Zelanda", region:"Pacífico",
    acces:"Muy restringido — prohibición general de compra residencial por no residentes desde 2018.",
    accesNiveau:"restreint",
    nationalite:"Ciudadanos/residentes neozelandeses y australianos: acceso libre. Otras nacionalidades: compra residencial prohibida salvo excepciones (acuerdos de libre comercio, p. ej. Singapur).",
    structure:"El inmobiliario comercial y ciertos desarrollos nuevos a gran escala siguen siendo accesibles bajo condiciones OIO.",
    visa:"Sin golden visa inmobiliaria — existe el Active Investor Plus Visa pero excluye el inmobiliario residencial directo.",
    notes:"Uno de los mercados más cerrados del mundo desarrollado para los inversores extranjeros no residentes."
  },
  {
    id:"GE", name:"Georgia", region:"Asia",
    acces:"Abierto — sin restricción a la propiedad extranjera en el residencial.",
    accesNiveau:"ouvert",
    nationalite:"Ninguna condición de nacionalidad (el agrícola sigue restringido).",
    structure:"Compra directa a título personal.",
    visa:"Residencia facilitada por inversión inmobiliaria desde 100.000 USD.",
    notes:"Uno de los mercados más abiertos y de acceso más rápido para los inversores internacionales."
  },
];

function droitParId(id){
  return DROIT_DATA.find(function(d){ return d.id === id; });
}
