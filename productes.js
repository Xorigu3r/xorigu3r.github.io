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
    id: "domino", nom: "Dòmino", icona: "img/domino.png",
    versio: "domino/versio.json",      // instal·lador de Windows + APK (Release domino-v…)
    web: "https://xorigu3r.github.io/domino/",
    desc: {
      ca: "Dòmino per parelles: en solitari contra la IA o online amb amics.",
      es: "Dominó por parejas: en solitario contra la IA u online con amigos.",
      fr: "Dominos par équipes : en solo contre l’IA ou en ligne avec des amis.",
      en: "Partnership dominoes: solo against the AI or online with friends.",
    },
  },
  {
    id: "paraules", nom: "Paraules", icona: "img/paraules.png",
    versio: "paraules/versio.json",    // instal·lador de Windows + APK (Release paraules-v…)
    web: "https://xorigu3r.github.io/paraules/",
    desc: {
      ca: "Joc de paraules creuades en català i castellà: contra la IA o online amb amics, per torns.",
      es: "Juego de palabras cruzadas en catalán y castellano: contra la IA u online con amigos, por turnos.",
      fr: "Jeu de mots croisés en catalan et en espagnol : contre l’IA ou en ligne avec des amis, au tour par tour.",
      en: "Crossword tile game in Catalan and Spanish: against the AI or online with friends, turn by turn.",
    },
  },
  {
    id: "lectura", nom: "Lectura · Xoriguer", icona: "img/lectura.png", beta: true,
    // Windows: ZIP portable (descomprimir i obrir l'exe). Codi: https://github.com/Xorigu3r/xoriguer-lectura
    windows: "https://github.com/Xorigu3r/xoriguer-lectura/releases/download/v0.3.0/LecturaXoriguer-Windows.zip",
    apk: "https://github.com/Xorigu3r/xoriguer-lectura/releases/download/v0.3.0/LecturaXoriguer.apk",
    desc: {
      ca: "Lector de llibres gratuït i de codi obert: EPUB, PDF, Kindle, Word, còmics… Llibres de domini públic per baixar, lectura en veu alta, diccionari, cites i notes.",
      es: "Lector de libros gratuito y de código abierto: EPUB, PDF, Kindle, Word, cómics… Libros de dominio público para descargar, lectura en voz alta, diccionario, citas y notas.",
      fr: "Liseuse gratuite et open source : EPUB, PDF, Kindle, Word, BD… Livres du domaine public à télécharger, lecture à voix haute, dictionnaire, citations et notes.",
      en: "Free, open-source ebook reader: EPUB, PDF, Kindle, Word, comics… Public-domain books to download, read-aloud, dictionary, highlights and notes.",
    },
  },
  {
    id: "plans", nom: "XoriguerPlans", icona: "img/plans.png", beta: true,
    versio: "Xoriguer/versio.json",
    web: "https://xorigu3r.github.io/plans/",
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
    web: "https://xorigu3r.github.io/pla-cardiac/",
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
    web: "https://xorigu3r.github.io/menjar-sa/",
    desc: {
      ca: "Escaneja un aliment i et diu si és bo per a tu, segons el teu perfil de salut.",
      es: "Escanea un alimento y te dice si es bueno para ti, según tu perfil de salud.",
      fr: "Scannez un aliment et découvrez s’il vous convient, selon votre profil de santé.",
      en: "Scan a food and find out whether it suits you, based on your health profile.",
    },
  },
  {
    id: "gasolina", nom: "Gasolina a prop", icona: "img/gasolina.png",
    windows: false,                    // només app web (PWA)
    web: "https://xorigu3r.github.io/gasolina/",
    desc: {
      ca: "Les gasolineres més barates del teu voltant, amb preus oficials, i si val la pena desviar-se. Sense anuncis.",
      es: "Las gasolineras más baratas a tu alrededor, con precios oficiales, y si vale la pena desviarse. Sin anuncios.",
      fr: "Les stations les moins chères autour de vous, aux prix officiels, et si le détour vaut le coup. Sans publicité.",
      en: "The cheapest petrol stations around you, with official prices, and whether a detour is worth it. No ads.",
    },
  },
  {
    id: "aparcament", nom: "Xoriguer Aparcament", icona: "img/aparcament.png",
    windows: false,                    // només app web (PWA)
    web: "https://xorigu3r.github.io/xoriguer-aparcament/",
    desc: {
      ca: "On has aparcat el cotxe? Guarda la posició, torna-hi a peu i controla el temps del parquímetre.",
      es: "¿Dónde has aparcado el coche? Guarda la posición, vuelve a pie y controla el tiempo del parquímetro.",
      fr: "Où est garée ta voiture ? Enregistre la position, retrouve-la à pied et surveille le temps du parcmètre.",
      en: "Where did you park? Save the spot, walk back to it and keep track of the parking meter.",
    },
  },
  {
    id: "radars", nom: "Xoriguer Radars", icona: "img/radars.png", beta: true,
    windows: false,                    // app web (PWA) + APK d'Android
    web: "https://xorigu3r.github.io/xoriguer-radars/",
    apk: "https://github.com/Xorigu3r/xoriguer-radars/releases/download/v1.2/XoriguerRadars.apk",
    desc: {
      ca: "T’avisa per veu dels radars fixos i trams que tens al davant (DGT, Trànsit i França), també pel Bluetooth del cotxe i amb la pantalla apagada. Velocitat mitjana als trams, incidències de trànsit i mapa sense connexió.",
      es: "Te avisa por voz de los radares fijos y de tramo que tienes delante (DGT, Tráfico de Cataluña y Francia), también por el Bluetooth del coche y con la pantalla apagada. Velocidad media en tramos, incidencias de tráfico y mapa sin conexión.",
      fr: "Vous prévient à voix haute des radars fixes et tronçons devant vous (Espagne, Catalogne ; en France, zones de danger uniquement), aussi par le Bluetooth de la voiture et écran éteint. Vitesse moyenne, trafic et carte hors ligne.",
      en: "Spoken alerts for the fixed and average-speed cameras ahead of you (Spain, Catalonia, and danger zones in France), also over the car’s Bluetooth and with the screen off. Average-speed tracking, traffic incidents and offline maps.",
    },
  },
  {
    id: "papers", nom: "Xoriguer Papers", icona: "img/papers.png", beta: true,
    windows: false,                    // només app web (PWA)
    web: "https://xorigu3r.github.io/xoriguer-papers/",
    desc: {
      ca: "Entén la teva nòmina línia a línia: comprova els càlculs, l’IRPF segons el model 145 i simula canvis. Tot al teu dispositiu.",
      es: "Entiende tu nómina línea a línea: comprueba los cálculos, el IRPF según el modelo 145 y simula cambios. Todo en tu dispositivo.",
      fr: "Comprenez votre fiche de paie ligne par ligne : vérifiez les calculs et l’impôt retenu, et simulez des changements. Tout reste sur votre appareil.",
      en: "Understand your Spanish payslip line by line: check the maths, the income-tax withholding and simulate changes. Everything stays on your device.",
    },
  },
];
