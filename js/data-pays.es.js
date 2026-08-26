/* ============================================================
   Partneris Immobilier — Base de datos de países
   Rentabilidades brutas de alquiler medias (fuente: Global Property
   Guide, datos agregados T3 2026) + coordenadas aproximadas (lat/lon)
   para la ubicación de los marcadores en el globo 3D.
   Estas cifras son promedios nacionales indicativos con fines
   pedagógicos — no sustituyen un estudio de mercado local.
   ============================================================ */

var PAYS_DATA = [
  // ---- Europa ----
  { id:"CH", name:"Suiza", region:"Europa", lat:46.8, lon:8.2, yield:2.91, priceIdx:9, note:"Mercado maduro, gran estabilidad, acceso restringido para no residentes (Lex Koller)." },
  { id:"FR", name:"Francia", region:"Europa", lat:46.6, lon:2.2, yield:4.83, priceIdx:6, note:"Mercado abierto, fiscalidad elevada sobre los ingresos de alquiler." },
  { id:"DE", name:"Alemania", region:"Europa", lat:51.2, lon:10.4, yield:3.42, priceIdx:6, note:"Mercado de alquiler muy regulado (Mietpreisbremse), fuerte demanda urbana." },
  { id:"ES", name:"España", region:"Europa", lat:40.0, lon:-3.7, yield:5.43, priceIdx:4, note:"Mercado abierto a extranjeros, turismo y golden visa (inmobiliario excluido desde 2025)." },
  { id:"IT", name:"Italia", region:"Europa", lat:42.5, lon:12.5, yield:6.61, priceIdx:4, note:"Rentabilidades atractivas fuera de las grandes metrópolis, fiscalidad compleja." },
  { id:"PT", name:"Portugal", region:"Europa", lat:39.5, lon:-8.0, yield:4.29, priceIdx:4, note:"Mercado abierto, antigua golden visa reorientada hacia fondos de inversión." },
  { id:"GB", name:"Reino Unido", region:"Europa", lat:54.0, lon:-2.5, yield:7.35, priceIdx:6, note:"Mercado líquido, impuestos de transmisión (Stamp Duty) incrementados para no residentes." },
  { id:"IE", name:"Irlanda", region:"Europa", lat:53.4, lon:-8.0, yield:7.66, priceIdx:5, note:"Fuerte demanda de alquiler en Dublín, oferta limitada." },
  { id:"NL", name:"Países Bajos", region:"Europa", lat:52.2, lon:5.5, yield:5.97, priceIdx:5, note:"Regulación de alquileres reforzada, mercado tensionado." },
  { id:"BE", name:"Bélgica", region:"Europa", lat:50.6, lon:4.5, yield:4.31, priceIdx:4, note:"Mercado estable, fiscalidad moderada sobre la tenencia." },
  { id:"AT", name:"Austria", region:"Europa", lat:47.6, lon:14.1, yield:3.31, priceIdx:5, note:"Rentabilidades bajas, mercado de gran calidad en Viena." },
  { id:"LU", name:"Luxemburgo", region:"Europa", lat:49.8, lon:6.1, yield:3.27, priceIdx:8, note:"Precios entre los más altos de Europa, fiscalidad ventajosa." },
  { id:"GR", name:"Grecia", region:"Europa", lat:39.0, lon:22.0, yield:4.38, priceIdx:2, note:"Golden Visa desde 250.000-800.000 € según la zona, precios aún asequibles." },
  { id:"PL", name:"Polonia", region:"Europa", lat:52.0, lon:19.5, yield:5.92, priceIdx:3, note:"Mercado en crecimiento, fuerte demanda de alquiler urbano." },
  { id:"RO", name:"Rumanía", region:"Europa", lat:45.9, lon:25.0, yield:5.87, priceIdx:2, note:"Compra directa de terreno reservada a los nacionales — se requiere sociedad local." },
  { id:"HU", name:"Hungría", region:"Europa", lat:47.2, lon:19.5, yield:4.69, priceIdx:3, note:"Programa Guest Investor (bonos soberanos) para la residencia." },
  { id:"CZ", name:"República Checa", region:"Europa", lat:49.8, lon:15.5, yield:3.39, priceIdx:4, note:"Terreno reservado a ciudadanos de la UE / cónyuges checos; sociedad para el resto." },
  { id:"SK", name:"Eslovaquia", region:"Europa", lat:48.7, lon:19.5, yield:4.49, priceIdx:3, note:"Mercado emergente, acceso facilitado para ciudadanos de la UE." },
  { id:"HR", name:"Croacia", region:"Europa", lat:45.1, lon:15.2, yield:4.21, priceIdx:3, note:"Aprobación ministerial requerida fuera de la UE, fuerte demanda turística." },
  { id:"BG", name:"Bulgaria", region:"Europa", lat:42.7, lon:25.5, yield:4.27, priceIdx:2, note:"Terreno reservado a los nacionales; los apartamentos son accesibles mediante sociedad." },
  { id:"RS", name:"Serbia", region:"Europa", lat:44.0, lon:21.0, yield:5.14, priceIdx:2, note:"Se requiere reciprocidad, mercado aún asequible." },
  { id:"LV", name:"Letonia", region:"Europa", lat:56.9, lon:24.6, yield:7.20, priceIdx:2, note:"Rentabilidades elevadas, antiguo programa de golden visa suspendido." },
  { id:"LT", name:"Lituania", region:"Europa", lat:55.2, lon:23.9, yield:5.54, priceIdx:2, note:"Mercado abierto, fiscalidad competitiva." },
  { id:"EE", name:"Estonia", region:"Europa", lat:58.6, lon:25.0, yield:4.19, priceIdx:3, note:"Entorno digital y fiscal atractivo." },
  { id:"UA", name:"Ucrania", region:"Europa", lat:49.0, lon:31.0, yield:7.55, priceIdx:1, note:"Riesgo geopolítico importante — se requiere prudencia antes de cualquier inversión." },
  { id:"MD", name:"Moldavia", region:"Europa", lat:47.2, lon:28.5, yield:9.49, priceIdx:1, note:"Rentabilidades muy elevadas pero mercado poco líquido." },
  { id:"MK", name:"Macedonia del Norte", region:"Europa", lat:41.6, lon:21.7, yield:6.53, priceIdx:1, note:"Mercado emergente, precios bajos." },
  { id:"ME", name:"Montenegro", region:"Europa", lat:42.7, lon:19.3, yield:4.84, priceIdx:2, note:"Zonas costeras muy valoradas por los inversores extranjeros." },
  { id:"IS", name:"Islandia", region:"Europa", lat:64.9, lon:-19.0, yield:5.41, priceIdx:5, note:"Mercado restringido, fuerte demanda turística." },
  { id:"DK", name:"Dinamarca", region:"Europa", lat:56.2, lon:9.5, yield:4.11, priceIdx:6, note:"Mercado estable y transparente, acceso limitado para no comunitarios." },
  { id:"SE", name:"Suecia", region:"Europa", lat:60.1, lon:18.6, yield:5.75, priceIdx:5, note:"Mercado de alquiler muy regulado (listas de espera)." },
  { id:"NO", name:"Noruega", region:"Europa", lat:60.5, lon:8.5, yield:4.95, priceIdx:7, note:"Precios elevados, mercado estable y transparente." },
  { id:"FI", name:"Finlandia", region:"Europa", lat:64.0, lon:26.0, yield:5.63, priceIdx:4, note:"Mercado abierto, fiscalidad moderada." },
  { id:"CY", name:"Chipre", region:"Europa", lat:35.1, lon:33.4, yield:4.88, priceIdx:3, note:"Fiscalidad ventajosa, mercado apreciado por los jubilados europeos." },
  { id:"AD", name:"Andorra", region:"Europa", lat:42.5, lon:1.5, yield:4.18, priceIdx:6, note:"Fiscalidad muy ventajosa, acceso a la propiedad regulado." },
  { id:"SI", name:"Eslovenia", region:"Europa", lat:46.1, lon:14.8, yield:4.15, priceIdx:4, note:"Mercado estable, fuerte reciprocidad con la UE." },
  { id:"BA", name:"Bosnia y Herzegovina", region:"Europa", lat:44.2, lon:17.8, yield:3.96, priceIdx:1, note:"Mercado incipiente, marco jurídico aún en construcción." },

  // ---- América del Norte ----
  { id:"US", name:"Estados Unidos", region:"América del Norte", lat:38.0, lon:-97.0, yield:6.71, priceIdx:5, note:"Mercado muy líquido, acceso libre para extranjeros, fiscalidad federal + estatal." },
  { id:"CA", name:"Canadá", region:"América del Norte", lat:56.0, lon:-106.0, yield:5.72, priceIdx:6, note:"Restricciones provinciales (p. ej. Isla del Príncipe Eduardo), impuesto antiespeculación." },

  // ---- América Latina y el Caribe ----
  { id:"MX", name:"México", region:"América Latina", lat:23.6, lon:-102.5, yield:5.79, priceIdx:2, note:"Compra directa prohibida cerca de costas/fronteras — fideicomiso o sociedad." },
  { id:"BR", name:"Brasil", region:"América Latina", lat:-14.2, lon:-51.9, yield:5.71, priceIdx:2, note:"Restricciones en zonas fronterizas y de seguridad nacional." },
  { id:"AR", name:"Argentina", region:"América Latina", lat:-38.4, lon:-63.6, yield:5.46, priceIdx:2, note:"Sin restricciones a la propiedad extranjera." },
  { id:"CL", name:"Chile", region:"América Latina", lat:-35.7, lon:-71.5, yield:4.80, priceIdx:3, note:"Mercado abierto, restricciones solo en zonas fronterizas." },
  { id:"CO", name:"Colombia", region:"América Latina", lat:4.6, lon:-74.3, yield:7.01, priceIdx:2, note:"Mercado abierto, fuerte crecimiento en Medellín y Bogotá." },
  { id:"PE", name:"Perú", region:"América Latina", lat:-9.2, lon:-75.0, yield:5.93, priceIdx:2, note:"Mercado abierto, restricciones en zona fronteriza (tratado de reciprocidad)." },
  { id:"PA", name:"Panamá", region:"América Latina", lat:8.5, lon:-80.8, yield:6.94, priceIdx:3, note:"Prohibido a 6 millas de las fronteras; visado de inversor atractivo." },
  { id:"CR", name:"Costa Rica", region:"América Latina", lat:9.7, lon:-83.8, yield:7.63, priceIdx:3, note:"Mismos derechos que los nacionales, restricciones costeras (zona marítimo-terrestre)." },
  { id:"DO", name:"República Dominicana", region:"América Latina", lat:18.7, lon:-70.2, yield:8.53, priceIdx:2, note:"Mercado muy abierto, fuerte incentivo fiscal (CONFOTUR)." },
  { id:"UY", name:"Uruguay", region:"América Latina", lat:-32.5, lon:-55.8, yield:6.47, priceIdx:3, note:"Sin restricciones, estabilidad jurídica reconocida en América Latina." },
  { id:"PR", name:"Puerto Rico", region:"América Latina", lat:18.2, lon:-66.5, yield:8.46, priceIdx:3, note:"Régimen fiscal Act 60 atractivo para inversores estadounidenses y extranjeros." },

  // ---- África y Oriente Medio ----
  { id:"ZA", name:"Sudáfrica", region:"África", lat:-30.6, lon:22.9, yield:11.53, priceIdx:2, note:"Rentabilidad más alta del ranking mundial, riesgo cambiario/de seguridad a tener en cuenta." },
  { id:"MA", name:"Marruecos", region:"África", lat:31.8, lon:-7.1, yield:7.36, priceIdx:2, note:"Mercado abierto a extranjeros, fuerte demanda en Marrakech y Casablanca." },
  { id:"EG", name:"Egipto", region:"África", lat:26.8, lon:30.8, yield:7.61, priceIdx:1, note:"Mercado en auge, control de cambios a tener en cuenta." },
  { id:"MU", name:"Mauricio", region:"África", lat:-20.3, lon:57.6, yield:3.29, priceIdx:5, note:"Programas PDS/Smart City que ofrecen permiso de residencia con la compra." },
  { id:"AE", name:"Emiratos Árabes Unidos", region:"Oriente Medio", lat:23.4, lon:53.8, yield:4.94, priceIdx:5, note:"Propiedad freehold en zonas designadas, 0% de impuesto sobre el ingreso de alquiler." },
  { id:"SA", name:"Arabia Saudita", region:"Oriente Medio", lat:24.0, lon:45.0, yield:6.84, priceIdx:3, note:"Apertura progresiva a extranjeros en determinadas zonas (Visión 2030)." },
  { id:"QA", name:"Catar", region:"Oriente Medio", lat:25.3, lon:51.2, yield:5.17, priceIdx:5, note:"Propiedad freehold en zonas designadas, visado de residente asociado." },
  { id:"TR", name:"Turquía", region:"Oriente Medio", lat:38.9, lon:35.2, yield:7.32, priceIdx:2, note:"Ciudadanía por inversión desde 400.000 USD." },
  { id:"IL", name:"Israel", region:"Oriente Medio", lat:31.0, lon:34.8, yield:3.05, priceIdx:6, note:"Mercado abierto, precios elevados, fiscalidad específica para no residentes." },

  // ---- Asia y Pacífico ----
  { id:"JP", name:"Japón", region:"Asia", lat:36.2, lon:138.3, yield:4.55, priceIdx:4, note:"Propiedad extranjera libre, sin restricciones sobre el suelo." },
  { id:"SG", name:"Singapur", region:"Asia", lat:1.35, lon:103.8, yield:3.06, priceIdx:8, note:"Impuesto de timbre adicional (ABSD) de hasta el 60% para extranjeros." },
  { id:"HK", name:"Hong Kong", region:"Asia", lat:22.3, lon:114.2, yield:3.55, priceIdx:8, note:"Mercado abierto, impuestos de transmisión elevados para no residentes." },
  { id:"TH", name:"Tailandia", region:"Asia", lat:15.9, lon:100.9, yield:6.49, priceIdx:2, note:"Compra directa prohibida — copropiedad (49% máx.), sociedad o arrendamiento a 30 años." },
  { id:"MY", name:"Malasia", region:"Asia", lat:4.2, lon:101.9, yield:5.27, priceIdx:2, note:"Umbrales de precio mínimo por estado, programa MM2H disponible." },
  { id:"ID", name:"Indonesia", region:"Asia", lat:-0.8, lon:113.9, yield:8.22, priceIdx:1, note:"Derecho de uso (Hak Pakai) en lugar de plena propiedad para extranjeros." },
  { id:"PH", name:"Filipinas", region:"Asia", lat:12.9, lon:121.8, yield:5.10, priceIdx:1, note:"Terreno reservado a los nacionales; los condominios son accesibles (máx. 40%)." },
  { id:"VN", name:"Vietnam", region:"Asia", lat:14.1, lon:108.3, yield:3.85, priceIdx:1, note:"Arrendamiento a 50 años renovable, cuota del 30% por edificio para extranjeros." },
  { id:"KH", name:"Camboya", region:"Asia", lat:12.6, lon:104.9, yield:7.81, priceIdx:1, note:"Copropiedad accesible en plena propiedad (excepto planta baja)." },
  { id:"IN", name:"India", region:"Asia", lat:22.0, lon:79.0, yield:5.16, priceIdx:2, note:"Compra residencial/comercial libre para NRI/OCI, restringida para el resto de extranjeros." },
  { id:"GE", name:"Georgia", region:"Asia", lat:42.3, lon:43.4, yield:7.25, priceIdx:1, note:"Sin restricciones sobre el residencial, mercado muy abierto." },
  { id:"KZ", name:"Kazajistán", region:"Asia", lat:48.0, lon:66.9, yield:10.95, priceIdx:1, note:"Rentabilidad muy elevada, mercado aún poco maduro para los extranjeros." },
  { id:"AU", name:"Australia", region:"Pacífico", lat:-25.3, lon:133.8, yield:4.94, priceIdx:6, note:"Aprobación FIRB obligatoria, a menudo limitada a obra nueva." },
  { id:"NZ", name:"Nueva Zelanda", region:"Pacífico", lat:-41.0, lon:174.9, yield:4.24, priceIdx:6, note:"Compra residencial prohibida a los no residentes desde 2018 (salvo excepciones)." },
  { id:"TW", name:"Taiwán", region:"Asia", lat:23.7, lon:121.0, yield:2.26, priceIdx:5, note:"Se requiere reciprocidad, mercado de nicho para inversores extranjeros." },
  { id:"MO", name:"Macao", region:"Asia", lat:22.2, lon:113.5, yield:2.08, priceIdx:6, note:"Mercado restringido, precios muy elevados, rentabilidades bajas." },
];

/* Umbrales de calificación utilizados por la calculadora del globo.
   El "veredicto" indicado a continuación es orientativo — se basa
   únicamente en la rentabilidad bruta media nacional y debe
   afinarse con un asesor. */
function verdictPourRendement(y){
  if (y >= 6.5) return { label:"Oportunidad alta", cls:"pill-green" };
  if (y >= 4.5) return { label:"Potencial interesante", cls:"pill-gold" };
  if (y >= 3.0) return { label:"A estudiar caso por caso", cls:"pill-amber" };
  return { label:"Rentabilidad baja / valor refugio", cls:"pill-red" };
}
