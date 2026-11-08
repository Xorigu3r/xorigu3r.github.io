// =====================================================================================
//  PRODUCTES XORIGUER · la llista que mostra la pàgina de descàrregues
//
//  Per afegir un producte: copia un bloc { ... }, canvia'n les dades i posa la icona a img/.
//
//  - versio:  ruta del versio.json dins del repo Xorigu3r/xoriguer-versions (el mateix que fan servir
//             els programes per actualitzar-se). La pàgina en treu la versió, l'enllaç de l'instal·lador
//             de Windows i les notes. Si encara no existeix, el botó de Windows surt com «Aviat».
//  - windows: enllaç fix a l'instal·lador (només si NO hi ha versio.json; el versio.json té prioritat).
//             false = el producte no té versió de Windows (no surt el botó).
//  - web:     adreça de l'app web (PWA). Es pot obrir al navegador i instal·lar al mòbil.
//  - apk:     enllaç a l'APK d'Android (opcional). Si el versio.json porta "apk", té prioritat.
//  - beta:    true = surt l'etiqueta «Beta».
//  - salut:   true = surt l'avís «No substitueix el criteri mèdic».
// =====================================================================================

// Enllaç de baixada directa del Google Drive (salta la pàgina de "no es pot analitzar")
const DRIVE = id => `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;

window.PRODUCTES = [
  {
    id: "pressio", nom: "XoriguerPressió", icona: "img/pressio.png", salut: true,
    versio: "pressio/versio.json",
    web: "https://xorigu3r.github.io/xoriguer-pressio/",
    desc: {
      ca: "Registre de la pressió arterial: classificació, mitjana de 7 dies, gràfics i informe PDF per al metge.",
      es: "Registro de la presión arterial: clasificación, media de 7 días, gráficos e informe PDF para el médico.",
      fr: "Suivi de la tension artérielle : classification, moyenne sur 7 jours, graphiques et rapport PDF pour le médecin.",
      en: "Blood pressure log: classification, 7-day average, charts and a PDF report for your doctor.",
    },
  },
  {
    id: "botifarra", nom: "Botifarra", icona: "img/botifarra.png",
    versio: "botifarra/versio.json",
    web: "https://botifarra-d71cc.web.app/",
    windows: DRIVE("1dMCEtug-hVK0r7WnJFVdVk4IV46t7bUI"),
    apk: DRIVE("1vvD8kDXQgQ2vbpmtHIfql1yA_Dt6wL4x"),
    desc: {
      ca: "La botifarra de tota la vida: en solitari contra la IA o online amb amics.",
      es: "La botifarra de siempre: en solitario contra la IA u online con amigos.",
      fr: "La botifarra traditionnelle : en solo contre l’IA ou en ligne avec des amis.",
      en: "The classic Catalan card game: solo against the AI or online with friends.",
    },
  },
  {
    id: "plans", nom: "XoriguerPlans", icona: "img/plans.png", beta: true,
    versio: "Xoriguer/versio.json",
    web: "https://xoriguerappplans.etrempat.workers.dev/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/plans-apk-v1.0.0/XoriguerAPPplans.apk",
    desc: {
      ca: "Plans d’entrenament personalitzats: sessions, rutes, estat de forma, Strava i Garmin.",
      es: "Planes de entrenamiento personalizados: sesiones, rutas, estado de forma, Strava y Garmin.",
      fr: "Plans d’entraînement personnalisés : séances, parcours, forme, Strava et Garmin.",
      en: "Personalised training plans: sessions, routes, fitness, Strava and Garmin.",
    },
  },
  {
    id: "acobert", nom: "Xoriguer Acobert", icona: "img/acobert.png", beta: true,
    versio: "acobert/versio.json",
    desc: {
      ca: "Entrenament a casa amb rodet intel·ligent: sessions guiades, rutes virtuals i potència.",
      es: "Entrenamiento en casa con rodillo inteligente: sesiones guiadas, rutas virtuales y potencia.",
      fr: "Entraînement à la maison sur home-trainer connecté : séances guidées, parcours virtuels et puissance.",
      en: "Indoor training on a smart trainer: guided sessions, virtual routes and power.",
    },
  },
  {
    id: "placardiac", nom: "Pla Cardíac", icona: "img/placardiac.png", salut: true,
    versio: "placardiac/versio.json",
    desc: {
      ca: "Pla d’exercici per a la rehabilitació cardíaca, adaptat a les indicacions del cardiòleg.",
      es: "Plan de ejercicio para la rehabilitación cardíaca, adaptado a las indicaciones del cardiólogo.",
      fr: "Programme d’exercices de réadaptation cardiaque, adapté aux consignes du cardiologue.",
      en: "Cardiac rehabilitation exercise plan, adapted to your cardiologist’s instructions.",
    },
  },
  {
    id: "menjarsa", nom: "Xoriguer · Menjar més sa", icona: "img/menjarsa.png", salut: true,
    versio: "menjarsa/versio.json",   // només porta l'APK (no hi ha versió de Windows)
    windows: false,
    web: "https://xoriguer.etrempat.workers.dev/",
    desc: {
      ca: "Escaneja un aliment i et diu si és bo per a tu, segons el teu perfil de salut.",
      es: "Escanea un alimento y te dice si es bueno para ti, según tu perfil de salud.",
      fr: "Scannez un aliment et découvrez s’il vous convient, selon votre profil de santé.",
      en: "Scan a food and find out whether it suits you, based on your health profile.",
    },
  },
];
