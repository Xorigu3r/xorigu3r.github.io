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
//  - cat:     categoria (jocs, esport, salut, cotxe, utils). Els noms i l'ordre són a CATEGORIES (index.html).
// =====================================================================================

// Enllaç de baixada directa del Google Drive (salta la pàgina de "no es pot analitzar")
const DRIVE = id => `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;

window.PRODUCTES = [
  {
    id: "pressio", cat: "salut", nom: "XoriguerPressió", icona: "img/pressio.png", salut: true,
    versio: "pressio/versio.json",
    web: "https://xorigu3r.github.io/xoriguer-pressio/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/pressio-apk-v1.0.0/XoriguerPressio.apk",
    desc: {
      ca: "Registre de la pressió arterial: classificació, mitjana de 7 dies, gràfics i informe PDF per al metge.",
      es: "Registro de la presión arterial: clasificación, media de 7 días, gráficos e informe PDF para el médico.",
      fr: "Suivi de la tension artérielle : classification, moyenne sur 7 jours, graphiques et rapport PDF pour le médecin.",
      en: "Blood pressure log: classification, 7-day average, charts and a PDF report for your doctor.",
    },
  },
  {
    id: "botifarra", cat: "jocs", nom: "Botifarra", icona: "img/botifarra.png",
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
    id: "domino", cat: "jocs", nom: "Dòmino", icona: "img/domino.png",
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
    id: "paraules", cat: "jocs", nom: "Paraules", icona: "img/paraules.png",
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
    id: "lectura", cat: "utils", nom: "Lectura · Xoriguer", icona: "img/lectura.png", beta: true,
    // Windows: instal·lador MSI (a la Release també hi ha el ZIP portable). Codi: https://github.com/Xorigu3r/xoriguer-lectura
    windows: "https://github.com/Xorigu3r/xoriguer-lectura/releases/download/v0.7.0/LecturaXoriguer-Instalador.msi",
    apk: "https://github.com/Xorigu3r/xoriguer-lectura/releases/download/v0.7.0/LecturaXoriguer.apk",
    desc: {
      ca: "Lector de llibres gratuït i de codi obert: EPUB, PDF, Kindle, Word, còmics… Llibres de domini públic per baixar, lectura en veu alta, diccionari, cites i notes.",
      es: "Lector de libros gratuito y de código abierto: EPUB, PDF, Kindle, Word, cómics… Libros de dominio público para descargar, lectura en voz alta, diccionario, citas y notas.",
      fr: "Liseuse gratuite et open source : EPUB, PDF, Kindle, Word, BD… Livres du domaine public à télécharger, lecture à voix haute, dictionnaire, citations et notes.",
      en: "Free, open-source ebook reader: EPUB, PDF, Kindle, Word, comics… Public-domain books to download, read-aloud, dictionary, highlights and notes.",
    },
  },
  {
    id: "plans", cat: "esport", nom: "XoriguerPlans", icona: "img/plans.png", beta: true,
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
    id: "acobert", cat: "esport", nom: "Xoriguer Acobert", icona: "img/acobert.png", beta: "proves",   // «Beta · Fase de proves»
    versio: "acobert/versio.json",
    desc: {
      ca: "Entrenament a casa amb rodet intel·ligent: sessions guiades, rutes virtuals i potència.",
      es: "Entrenamiento en casa con rodillo inteligente: sesiones guiadas, rutas virtuales y potencia.",
      fr: "Entraînement à la maison sur home-trainer connecté : séances guidées, parcours virtuels et puissance.",
      en: "Indoor training on a smart trainer: guided sessions, virtual routes and power.",
    },
  },
  {
    id: "placardiac", cat: "salut", nom: "Pla Cardíac", icona: "img/placardiac.png", salut: true,
    versio: "placardiac/versio.json",
    web: "https://xorigu3r.github.io/pla-cardiac/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/placardiac-apk-v1.0.0/XoriguerPlaCardiac.apk",
    desc: {
      ca: "Pla d’exercici per a la rehabilitació cardíaca, adaptat a les indicacions del cardiòleg.",
      es: "Plan de ejercicio para la rehabilitación cardíaca, adaptado a las indicaciones del cardiólogo.",
      fr: "Programme d’exercices de réadaptation cardiaque, adapté aux consignes du cardiologue.",
      en: "Cardiac rehabilitation exercise plan, adapted to your cardiologist’s instructions.",
    },
  },
  {
    id: "menjarsa", cat: "salut", nom: "Xoriguer · Menjar més sa", icona: "img/menjarsa.png", salut: true,
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
    id: "gasolina", cat: "cotxe", nom: "Gasolina a prop", icona: "img/gasolina.png",
    windows: false,                    // app web (PWA) + APK d'Android
    web: "https://xorigu3r.github.io/gasolina/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/gasolina-apk-v1.0.0/XoriguerGasolina.apk",
    desc: {
      ca: "Les gasolineres més barates del teu voltant, amb preus oficials, i si val la pena desviar-se. Sense anuncis.",
      es: "Las gasolineras más baratas a tu alrededor, con precios oficiales, y si vale la pena desviarse. Sin anuncios.",
      fr: "Les stations les moins chères autour de vous, aux prix officiels, et si le détour vaut le coup. Sans publicité.",
      en: "The cheapest petrol stations around you, with official prices, and whether a detour is worth it. No ads.",
    },
  },
  {
    id: "aparcament", cat: "cotxe", nom: "Xoriguer Aparcament", icona: "img/aparcament.png",
    windows: false,                    // app web (PWA) + APK d'Android
    web: "https://xorigu3r.github.io/xoriguer-aparcament/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/aparcament-apk-v1.0.0/XoriguerAparcament.apk",
    desc: {
      ca: "On has aparcat el cotxe? Guarda la posició, torna-hi a peu i controla el temps del parquímetre.",
      es: "¿Dónde has aparcado el coche? Guarda la posición, vuelve a pie y controla el tiempo del parquímetro.",
      fr: "Où est garée ta voiture ? Enregistre la position, retrouve-la à pied et surveille le temps du parcmètre.",
      en: "Where did you park? Save the spot, walk back to it and keep track of the parking meter.",
    },
  },
  {
    id: "sos", cat: "salut", nom: "Xoriguer SOS", icona: "img/sos.png", beta: true,
    windows: false,                    // app web (PWA, també per a iPhone) + APK d'Android (sos/versio.json)
    versio: "sos/versio.json",
    web: "https://xorigu3r.github.io/xoriguer-sos/",
    desc: {
      ca: "Botó d’emergència per a gent gran: mantén-lo premut i envia la teva ubicació per SMS als contactes i truca al 112. Compte enrere per cancel·lar, mode prova, fitxa mèdica i sirena. No substitueix els serveis d’emergència.",
      es: "Botón de emergencia para personas mayores: mantenlo pulsado y envía tu ubicación por SMS a los contactos y llama al 112. Cuenta atrás para cancelar, modo prueba, ficha médica y sirena. No sustituye a los servicios de emergencia.",
      fr: "Bouton d’urgence pour les personnes âgées : maintenez-le appuyé pour envoyer votre position par SMS à vos contacts et appeler le 112. Compte à rebours pour annuler, mode essai, fiche médicale et sirène. Ne remplace pas les services d’urgence.",
      en: "An emergency button for older people: hold it down to text your location to your contacts and call 112. Countdown to cancel, test mode, medical card and siren. Does not replace the emergency services.",
    },
  },
  {
    id: "radars", cat: "cotxe", nom: "Xoriguer Radars", icona: "img/radars.png", beta: true,
    windows: false,                    // app web (PWA) + APK d'Android
    web: "https://xorigu3r.github.io/xoriguer-radars/",
    apk: "https://github.com/Xorigu3r/xoriguer-radars/releases/download/v1.4/XoriguerRadars.apk",
    desc: {
      ca: "T’avisa per veu dels radars fixos i trams que tens al davant (DGT, Trànsit i França), també pel Bluetooth del cotxe i amb la pantalla apagada. Velocitat mitjana als trams, incidències de trànsit i mapa sense connexió.",
      es: "Te avisa por voz de los radares fijos y de tramo que tienes delante (DGT, Tráfico de Cataluña y Francia), también por el Bluetooth del coche y con la pantalla apagada. Velocidad media en tramos, incidencias de tráfico y mapa sin conexión.",
      fr: "Vous prévient à voix haute des radars fixes et tronçons devant vous (Espagne, Catalogne ; en France, zones de danger uniquement), aussi par le Bluetooth de la voiture et écran éteint. Vitesse moyenne, trafic et carte hors ligne.",
      en: "Spoken alerts for the fixed and average-speed cameras ahead of you (Spain, Catalonia, and danger zones in France), also over the car’s Bluetooth and with the screen off. Average-speed tracking, traffic incidents and offline maps.",
    },
  },
  {
    id: "notificacions", cat: "utils", nom: "Xoriguer Notificacions", icona: "img/notificacions.png", beta: true,
    windows: false,                    // APK d'Android (la web només ensenya l'app: no pot llegir notificacions)
    web: "https://xorigu3r.github.io/xoriguer-notificacions/",
    apk: "https://github.com/Xorigu3r/xoriguer-notificacions/releases/download/v1.3/XoriguerNotificacions.apk",
    desc: {
      ca: "Gestiona les notificacions del mòbil amb regles: ignora les que no vols, silencia les ràfegues de missatges, posposa-les en lots, alerta pròpia per a una persona, resposta automàtica, recordatori, alarma i mode secret. Desfer i historial. Sense Internet: res surt del mòbil.",
      es: "Gestiona las notificaciones del móvil con reglas: ignora las que no quieres, silencia las ráfagas de mensajes, posponlas en lotes, alerta propia para una persona, respuesta automática, recordatorio, alarma y modo secreto. Deshacer e historial. Sin Internet: nada sale del móvil.",
      fr: "Gérez les notifications du téléphone avec des règles : ignorez celles que vous ne voulez pas, calmez les rafales de messages, recevez-les par lots, alerte propre pour une personne, réponse automatique, rappel, alarme et mode secret. Annuler et historique. Sans Internet : rien ne quitte le téléphone.",
      en: "Manage your phone’s notifications with rules: ignore the ones you don’t want, quiet message bursts, batch them, custom alerts for a person, auto-reply, reminders, alarms and secret mode. Undo and history. No Internet access: nothing leaves your phone.",
    },
  },
  {
    id: "onsoc", cat: "utils", nom: "Xoriguer On Sóc", icona: "img/onsoc.png", beta: true,
    windows: false,                    // app web (PWA, també per a iPhone) + APK d'Android
    web: "https://xorigu3r.github.io/xoriguer-onsoc/",
    apk: "https://github.com/Xorigu3r/xoriguer-onsoc/releases/download/v1.4/XoriguerOnSoc.apk",
    desc: {
      ca: "On és la família? Ubicació compartida i xifrada, avís quan arriben o surten d’un lloc, «acompanya’m» amb SOS automàtic, recorregut de 7 dies, fitxa mèdica i botó SOS. Sense comptes: només un codi de família.",
      es: "¿Dónde está la familia? Ubicación compartida y cifrada, aviso cuando llegan o salen de un lugar, «acompáñame» con SOS automático, recorrido de 7 días, ficha médica y botón SOS. Sin cuentas: solo un código de familia.",
      fr: "Où est la famille ? Position partagée et chiffrée, alerte quand ils arrivent ou quittent un lieu, « accompagne-moi » avec SOS automatique, trajet sur 7 jours, fiche médicale et bouton SOS. Sans compte : juste un code de famille.",
      en: "Where’s the family? Encrypted location sharing, alerts when they arrive at or leave a place, “walk me home” with automatic SOS, 7-day route history, medical card and an SOS button. No accounts: just a family code.",
    },
  },
  {
    id: "compactador", cat: "utils", nom: "Xoriguer Compactador", icona: "img/compactador.png", beta: true,
    windows: "https://github.com/Xorigu3r/xoriguer-compactador/releases/download/v1.0/XoriguerCompactador-Instalador.exe",
    web: "https://xorigu3r.github.io/xoriguer-compactador/",
    apk: "https://github.com/Xorigu3r/xoriguer-compactador/releases/download/v1.0/XoriguerCompactador.apk",
    desc: {
      ca: "Comprimeix i descomprimeix ZIP, RAR, 7Z, TAR, GZ, ISO i 40 formats més, amb contrasenya i en parts. Vista prèvia, prova i conversió. Gratuït, sense anuncis i sense Internet: res surt del teu aparell.",
      es: "Comprime y descomprime ZIP, RAR, 7Z, TAR, GZ, ISO y 40 formatos más, con contraseña y en partes. Vista previa, prueba y conversión. Gratis, sin anuncios y sin Internet: nada sale de tu dispositivo.",
      fr: "Compressez et décompressez ZIP, RAR, 7Z, TAR, GZ, ISO et 40 autres formats, avec mot de passe et en plusieurs parties. Aperçu, test et conversion. Gratuit, sans publicité et sans Internet : rien ne quitte votre appareil.",
      en: "Compress and extract ZIP, RAR, 7Z, TAR, GZ, ISO and 40 more formats, with passwords and split archives. Preview, test and convert. Free, no ads and no Internet: nothing leaves your device.",
    },
  },
  {
    id: "pdf", cat: "utils", nom: "Xoriguer PDF", icona: "img/pdf.png", beta: true,
    versio: "pdf/versio.json",          // instal·lador de Windows, AppImage de Linux i APK (xoriguer.dev)
    web: "https://xorigu3r.github.io/xoriguer-pdf/",
    desc: {
      ca: "Lector i editor de PDF complet: ressalta, anota, omple formularis, signa, organitza pàgines, combina, divideix, redueix la mida, posa contrasenya i tapa dades. Gratuït, sense anuncis i sense Internet: res surt del teu aparell.",
      es: "Lector y editor de PDF completo: resalta, anota, rellena formularios, firma, organiza páginas, combina, divide, reduce el tamaño, pone contraseña y tapa datos. Gratis, sin anuncios y sin Internet: nada sale de tu dispositivo.",
      fr: "Lecteur et éditeur PDF complet : surlignez, annotez, remplissez des formulaires, signez, organisez les pages, fusionnez, divisez, réduisez la taille, protégez par mot de passe et caviardez. Gratuit, sans publicité et sans Internet : rien ne quitte votre appareil.",
      en: "A complete PDF reader and editor: highlight, annotate, fill in forms, sign, organise pages, merge, split, reduce size, add passwords and redact. Free, no ads and no Internet: nothing leaves your device.",
    },
    notaLinux: {
      ca: "Linux: AppImage (dona-li permís d’execució i obre-la). També hi ha el paquet .deb a xoriguer.dev.",
      es: "Linux: AppImage (dale permiso de ejecución y ábrela). También está el paquete .deb en xoriguer.dev.",
      fr: "Linux : AppImage (rendez-la exécutable et ouvrez-la). Le paquet .deb est aussi sur xoriguer.dev.",
      en: "Linux: AppImage (make it executable and open it). A .deb package is also available on xoriguer.dev.",
    },
  },
  {
    id: "musica", cat: "utils", nom: "Xoriguer Música", icona: "img/musica.png", beta: true,
    versio: "musica/versio.json",       // instal·lador de Windows + APK (xoriguer.dev)
    web: "https://xorigu3r.github.io/xoriguer-musica/",
    desc: {
      ca: "Reproductor de música senzill però complet: àlbums, artistes, carpetes i llistes, cua, aleatori, fosa entre cançons, equalitzador de 10 bandes, lletres sincronitzades, temporitzador per dormir i controls a la pantalla de bloqueig. Gratuït, sense anuncis i sense comptes.",
      es: "Reproductor de música sencillo pero completo: álbumes, artistas, carpetas y listas, cola, aleatorio, fundido entre canciones, ecualizador de 10 bandas, letras sincronizadas, temporizador para dormir y controles en la pantalla de bloqueo. Gratis, sin anuncios y sin cuentas.",
      fr: "Un lecteur de musique simple mais complet : albums, artistes, dossiers et playlists, file d’attente, aléatoire, fondu enchaîné, égaliseur 10 bandes, paroles synchronisées, minuterie de sommeil et commandes sur l’écran de verrouillage. Gratuit, sans publicité et sans compte.",
      en: "A simple yet complete music player: albums, artists, folders and playlists, queue, shuffle, crossfade, a 10-band equaliser, synced lyrics, a sleep timer and lock-screen controls. Free, no ads and no accounts.",
    },
  },
  {
    id: "arxius", cat: "utils", nom: "Xoriguer Arxius", icona: "img/arxius.png", beta: true,
    windows: false,                    // APK d'Android (arxius/versio.json); la web és una demostració amb arxius d'exemple
    versio: "arxius/versio.json",
    web: "https://xorigu3r.github.io/xoriguer-arxius/",
    desc: {
      ca: "Explorador d’arxius per a Android: copia, mou, comprimeix (ZIP amb contrasenya, RAR, 7z), veu fotos, vídeos i textos, allibera espai, troba duplicats, carpeta segura xifrada i passa arxius a l’ordinador per wifi. Gratuït, sense anuncis i res surt del mòbil.",
      es: "Explorador de archivos para Android: copia, mueve, comprime (ZIP con contraseña, RAR, 7z), ve fotos, vídeos y textos, libera espacio, encuentra duplicados, carpeta segura cifrada y pasa archivos al ordenador por wifi. Gratis, sin anuncios y nada sale del móvil.",
      fr: "Explorateur de fichiers pour Android : copiez, déplacez, compressez (ZIP avec mot de passe, RAR, 7z), voyez photos, vidéos et textes, libérez de l’espace, trouvez les doublons, dossier sécurisé chiffré et transfert vers l’ordinateur par wifi. Gratuit, sans publicité, rien ne quitte le téléphone.",
      en: "A file explorer for Android: copy, move, compress (password ZIP, RAR, 7z), view photos, videos and text, free up space, find duplicates, an encrypted secure folder and Wi-Fi transfer to your computer. Free, no ads and nothing leaves your phone.",
    },
  },
  {
    id: "temps", cat: "utils", nom: "Xoriguer Temps", icona: "img/temps.png", beta: true,
    windows: false,                    // APK d'Android (temps/versio.json)
    versio: "temps/versio.json",
    desc: {
      ca: "La previsió del temps clara i completa: ara, per hores i 16 dies, pluja dels pròxims minuts, consells pràctics, qualitat de l’aire i pol·len, radar de pluja animat i comparativa dels millors models (ECMWF, ICON, Météo-France, Met Office, GFS) amb índex de fiabilitat. Sense comptes ni anuncis.",
      es: "La previsión del tiempo clara y completa: ahora, por horas y 16 días, lluvia de los próximos minutos, consejos prácticos, calidad del aire y polen, radar de lluvia animado y comparativa de los mejores modelos (ECMWF, ICON, Météo-France, Met Office, GFS) con índice de fiabilidad. Sin cuentas ni anuncios.",
      fr: "La météo claire et complète : maintenant, heure par heure et sur 16 jours, pluie des prochaines minutes, conseils pratiques, qualité de l’air et pollen, radar de pluie animé et comparaison des meilleurs modèles (ECMWF, ICON, Météo-France, Met Office, GFS) avec indice de fiabilité. Sans compte ni publicité.",
      en: "A clear, complete weather forecast: now, hourly and 16 days, rain in the next minutes, practical tips, air quality and pollen, an animated rain radar and a comparison of the best models (ECMWF, ICON, Météo-France, Met Office, GFS) with a confidence rating. No accounts, no ads.",
    },
  },
  {
    id: "esport", cat: "esport", nom: "Xoriguer Esport", icona: "img/esport.png", beta: true,
    windows: false,                    // APK d'Android (esport/versio.json)
    versio: "esport/versio.json",
    desc: {
      ca: "Registra les teves sortides de córrer, bici, caminar, muntanya, natació i més: GPS amb la pantalla apagada, mapa del recorregut, pulsòmetre i sensors de velocitat, cadència i potència Bluetooth, parcials, zones, millors marques, progrés setmanal i exportació GPX. Sense comptes ni anuncis: tot queda al mòbil.",
      es: "Registra tus salidas de correr, bici, caminar, montaña, natación y más: GPS con la pantalla apagada, mapa del recorrido, pulsómetro y sensores de velocidad, cadencia y potencia Bluetooth, parciales, zonas, mejores marcas, progreso semanal y exportación GPX. Sin cuentas ni anuncios: todo queda en el móvil.",
      fr: "Enregistrez vos sorties course, vélo, marche, montagne, natation et plus : GPS écran éteint, carte du parcours, capteurs Bluetooth de fréquence cardiaque, vitesse, cadence et puissance, splits, zones, records, progression hebdomadaire et export GPX. Sans compte ni publicité : tout reste sur le téléphone.",
      en: "Record your runs, rides, walks, hikes, swims and more: GPS with the screen off, route map, Bluetooth heart rate, speed, cadence and power sensors, splits, zones, personal records, weekly progress and GPX export. No accounts, no ads: everything stays on your phone.",
    },
  },
  {
    id: "receptes", cat: "utils", nom: "Xoriguer Receptes", icona: "img/receptes.png", beta: true,
    versio: "receptes/versio.json",     // instal·lador de Windows + APK (xoriguer.dev); sense versió web
    desc: {
      ca: "Les teves receptes amb fotos, ingredients que s’ajusten a les racions, mode cuina pas a pas amb temporitzadors, menú de la setmana i llista de la compra. Importa receptes de webs o de text enganxat. Sense comptes ni anuncis: res surt del teu aparell.",
      es: "Tus recetas con fotos, ingredientes que se ajustan a las raciones, modo cocina paso a paso con temporizadores, menú de la semana y lista de la compra. Importa recetas de webs o de texto pegado. Sin cuentas ni anuncios: nada sale de tu dispositivo.",
      fr: "Vos recettes avec photos, ingrédients ajustés au nombre de portions, mode cuisine étape par étape avec minuteries, menu de la semaine et liste de courses. Importez des recettes depuis un site ou un texte collé. Sans compte ni publicité : rien ne quitte votre appareil.",
      en: "Your recipes with photos, ingredients that scale to the servings, step-by-step cook mode with timers, a weekly menu and a shopping list. Import recipes from websites or pasted text. No accounts, no ads: nothing leaves your device.",
    },
  },
  {
    id: "papers", cat: "utils", nom: "Xoriguer Papers", icona: "img/papers.png", beta: true,
    windows: false,                    // app web (PWA) + APK d'Android
    web: "https://xorigu3r.github.io/xoriguer-papers/",
    apk: "https://github.com/Xorigu3r/xoriguer-versions/releases/download/papers-apk-v1.0.0/XoriguerPapers.apk",
    desc: {
      ca: "Entén la teva nòmina línia a línia: comprova els càlculs, l’IRPF segons el model 145 i simula canvis. Tot al teu dispositiu.",
      es: "Entiende tu nómina línea a línea: comprueba los cálculos, el IRPF según el modelo 145 y simula cambios. Todo en tu dispositivo.",
      fr: "Comprenez votre fiche de paie ligne par ligne : vérifiez les calculs et l’impôt retenu, et simulez des changements. Tout reste sur votre appareil.",
      en: "Understand your Spanish payslip line by line: check the maths, the income-tax withholding and simulate changes. Everything stays on your device.",
    },
  },
  {
    id: "qr", cat: "utils", nom: "Xoriguer QR", icona: "img/qr.png",
    versio: "qr/versio.json",          // instal·lador de Windows + APK (Release qr-v…)
    web: "https://xorigu3r.github.io/xoriguer-qr/",
    desc: {
      ca: "Codis QR de la família: emergència i dades mèdiques (fons de pantalla i adhesiu), contactes, negoci, adreces, WiFi i contrasenyes xifrades. Amb el teu logo, estils i lector. Sense Internet: res surt de l’aparell.",
      es: "Códigos QR de la familia: emergencia y datos médicos (fondo de pantalla y adhesivo), contactos, negocio, direcciones, WiFi y contraseñas cifradas. Con tu logo, estilos y lector. Sin Internet: nada sale del dispositivo.",
      fr: "Codes QR pour la famille : urgence et données médicales (fond d’écran et autocollant), contacts, entreprise, adresses, WiFi et mots de passe chiffrés. Avec votre logo, des styles et un lecteur. Sans Internet : rien ne quitte l’appareil.",
      en: "QR codes for the family: emergency and medical info (lock-screen wallpaper and sticker), contacts, business, addresses, WiFi and encrypted passwords. With your own logo, styles and a scanner. No Internet: nothing leaves your device.",
    },
  },
];
