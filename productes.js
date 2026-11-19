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
//  - cat:     categoria (jocs, utils, cuina, esport, salut, cotxe). Els noms i l'ordre són a CATEGORIES (index.html).
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
    versio: "lectura/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "gasolina/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "aparcament/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "radars/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "notificacions/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "onsoc/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    versio: "compactador/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
    id: "facturacio", cat: "utils", nom: "Xoriguer Facturació", icona: "img/facturacio.png", beta: true,
    versio: "facturacio/versio.json",     // instal·lador de Windows (xoriguer.dev)
    web: "https://xorigu3r.github.io/xoriguer-facturacio/",
    desc: {
      ca: "Fes factures i pressupostos en un moment: clients, productes, IVA per línia, descomptes i IRPF, PDF amb el teu logo, enviament per correu (també Hotmail), cobraments, factures recurrents, recordatoris i Excel per al gestor. VeriFactu preparat per activar-lo. Gratuït, sense anuncis i tot al teu ordinador.",
      es: "Haz facturas y presupuestos en un momento: clientes, productos, IVA por línea, descuentos e IRPF, PDF con tu logo, envío por correo (también Hotmail), cobros, facturas recurrentes, recordatorios y Excel para el gestor. VeriFactu preparado para activarlo. Gratis, sin anuncios y todo en tu ordenador.",
      fr: "Faites vos factures et devis en un instant : clients, produits, TVA par ligne, remises, PDF avec votre logo, envoi par e-mail (Hotmail aussi), encaissements, factures récurrentes, rappels et Excel pour le comptable. VeriFactu prêt à activer. Gratuit, sans publicité et tout sur votre ordinateur.",
      en: "Make invoices and quotes in no time: customers, products, VAT per line, discounts and IRPF, PDFs with your logo, e-mail sending (Hotmail too), payments, recurring invoices, reminders and Excel for your accountant. VeriFactu ready to turn on. Free, ad-free and all on your computer.",
    },
  },
  {
    id: "factures", cat: "utils", nom: "Xoriguer Factures", icona: "img/factures.png", beta: true,
    versio: "factures/versio.json",     // instal·lador de Windows + APK (xoriguer.dev)
    web: "https://xorigu3r.github.io/xoriguer-factures/",
    desc: {
      ca: "Busca al teu Hotmail o Outlook.com les factures entre dues dates, en llegeix la data, l’emissor, el NIF, la base, l’IVA i el total, i les envia al gestor en PDF o en ZIP amb un full resum en Excel. Recordatori dels trimestres i fotos de tiquets. Gratuït i sense anuncis.",
      es: "Busca en tu Hotmail u Outlook.com las facturas entre dos fechas, lee la fecha, el emisor, el NIF, la base, el IVA y el total, y las envía al gestor en PDF o en ZIP con una hoja resumen en Excel. Recordatorio de los trimestres y fotos de tiques. Gratis y sin anuncios.",
      fr: "Cherche dans votre Hotmail ou Outlook.com les factures entre deux dates, en lit la date, l’émetteur, le n° fiscal, le HT, la TVA et le TTC, et les envoie à votre comptable en PDF ou en ZIP avec un récapitulatif Excel. Rappel des trimestres et photos de tickets. Gratuit et sans publicité.",
      en: "Finds the invoices in your Hotmail or Outlook.com between two dates, reads the date, issuer, tax ID, net, VAT and total, and sends them to your accountant as PDFs or a ZIP with an Excel summary. Quarterly reminders and receipt photos. Free and ad-free.",
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
    id: "galeria", cat: "utils", nom: "Xoriguer Galeria", icona: "img/galeria.png", beta: true,
    windows: false,                    // APK d'Android (galeria/versio.json); la web és una demostració amb fotos d'exemple
    versio: "galeria/versio.json",
    web: "https://xorigu3r.github.io/xoriguer-galeria/",
    desc: {
      ca: "Galeria de fotos i vídeos ràpida i ben organitzada: per dies i mesos, àlbums, preferides, records («avui fa un any»), cerca, paperera, presentació, moure i copiar a àlbums, i la informació de cada foto amb el lloc al mapa. Gratuïta, sense anuncis i res surt del mòbil.",
      es: "Galería de fotos y vídeos rápida y bien organizada: por días y meses, álbumes, favoritas, recuerdos («hoy hace un año»), búsqueda, papelera, presentación, mover y copiar a álbumes, y la información de cada foto con el lugar en el mapa. Gratis, sin anuncios y nada sale del móvil.",
      fr: "Une galerie de photos et vidéos rapide et bien organisée : par jour et par mois, albums, favoris, souvenirs (« il y a un an aujourd’hui »), recherche, corbeille, diaporama, déplacer et copier vers des albums, et les infos de chaque photo avec le lieu sur la carte. Gratuite, sans publicité, rien ne quitte le téléphone.",
      en: "A fast, well-organised photo and video gallery: by day and month, albums, favourites, memories (“1 year ago today”), search, bin, slideshow, move and copy to albums, and each photo’s details with its location on a map. Free, no ads and nothing leaves your phone.",
    },
  },
  {
    id: "trucades", cat: "utils", nom: "Xoriguer Trucades", icona: "img/trucades.png", beta: true,
    windows: false,                    // APK d'Android (trucades/versio.json): telèfon predeterminat
    versio: "trucades/versio.json",
    desc: {
      ca: "Telèfon i contactes per substituir l’app de trucades del mòbil: teclat amb cerca de contactes, recents agrupades i perdudes, contactes (crear, editar, favorits), pantalla de trucada pròpia també amb el mòbil bloquejat, doble SIM, conferència i números bloquejats. Sense anuncis: res surt del mòbil.",
      es: "Teléfono y contactos para sustituir la app de llamadas del móvil: teclado con búsqueda de contactos, recientes agrupadas y perdidas, contactos (crear, editar, favoritos), pantalla de llamada propia también con el móvil bloqueado, doble SIM, conferencia y números bloqueados. Sin anuncios: nada sale del móvil.",
      fr: "Téléphone et contacts pour remplacer l’app d’appels du téléphone : clavier avec recherche de contacts, appels récents groupés et manqués, contacts (créer, modifier, favoris), écran d’appel propre même téléphone verrouillé, double SIM, conférence et numéros bloqués. Sans publicité : rien ne quitte le téléphone.",
      en: "Phone and contacts to replace your phone’s calling app: keypad with contact search, grouped recents and missed calls, contacts (create, edit, favourites), its own call screen even when the phone is locked, dual SIM, conference calls and blocked numbers. No ads: nothing leaves your phone.",
    },
  },
  {
    id: "xoriweb", cat: "utils", nom: "XoriWeb", icona: "img/xoriweb.png", beta: true,
    windows: false,                    // APK d'Android (xoriweb/versio.json; 92 MB, a baixades.xoriguer.dev)
    versio: "xoriweb/versio.json",
    desc: {
      ca: "Navegador web privat i segur amb el motor de Firefox: bloqueja rastrejadors i anuncis (i uBlock Origin amb un toc), protegeix l’empremta digital, només HTTPS, DNS xifrat, pestanyes privades, bloqueig amb empremta, traducció de pàgines dins el mòbil i barra a dalt o a baix. Sense telemetria, sense anuncis i sense comptes.",
      es: "Navegador web privado y seguro con el motor de Firefox: bloquea rastreadores y anuncios (y uBlock Origin con un toque), protege la huella digital, solo HTTPS, DNS cifrado, pestañas privadas, bloqueo con huella, traducción de páginas en el móvil y barra arriba o abajo. Sin telemetría, sin anuncios y sin cuentas.",
      fr: "Navigateur web privé et sûr avec le moteur de Firefox : bloque les traqueurs et les publicités (et uBlock Origin en un geste), protège contre l’empreinte numérique, HTTPS uniquement, DNS chiffré, onglets privés, verrouillage par empreinte, traduction des pages sur le téléphone et barre en haut ou en bas. Sans télémétrie, sans publicité et sans compte.",
      en: "A private, secure web browser built on the Firefox engine: blocks trackers and ads (plus uBlock Origin in one tap), fingerprinting protection, HTTPS-only, encrypted DNS, private tabs, fingerprint lock, on-device page translation and a top or bottom address bar. No telemetry, no ads and no accounts.",
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
    id: "calendari", cat: "utils", nom: "Xoriguer Calendari", icona: "img/calendari.png", beta: true,
    windows: false,                    // APK d'Android (calendari/versio.json)
    versio: "calendari/versio.json",
    desc: {
      ca: "Calendari clar i complet: mes, setmana, dia i agenda; esdeveniments que es repeteixen com vulguis, avisos, resum del dia, calendaris de colors, festius de Catalunya, edat dels aniversaris, cerca, giny per a l’escriptori i importar o exportar .ics (Google Calendar, Outlook, iPhone). Sense comptes ni anuncis: tot queda al mòbil.",
      es: "Calendario claro y completo: mes, semana, día y agenda; eventos que se repiten como quieras, avisos, resumen del día, calendarios de colores, festivos de Cataluña, edad en los cumpleaños, búsqueda, widget para el escritorio e importar o exportar .ics (Google Calendar, Outlook, iPhone). Sin cuentas ni anuncios: todo queda en el móvil.",
      fr: "Un calendrier clair et complet : mois, semaine, jour et agenda ; événements répétés à votre guise, rappels, résumé du jour, calendriers en couleurs, jours fériés, âge pour les anniversaires, recherche, widget d’écran d’accueil et import ou export .ics (Google Agenda, Outlook, iPhone). Sans compte ni publicité : tout reste sur le téléphone.",
      en: "A clear, complete calendar: month, week, day and agenda views; events that repeat however you like, reminders, a daily summary, colour-coded calendars, public holidays, ages on birthdays, search, a home-screen widget and .ics import/export (Google Calendar, Outlook, iPhone). No accounts, no ads: everything stays on your phone.",
    },
  },
  {
    id: "esport", cat: "esport", nom: "Xoriguer Esport", icona: "img/esport.png", beta: true,
    windows: false,                    // APK d'Android (esport/versio.json)
    versio: "esport/versio.json",
    desc: {
      ca: "Registra les teves sortides de córrer, bici, caminar, muntanya, natació i més: GPS amb la pantalla apagada, mapa del recorregut, pulsòmetre i sensors de velocitat, cadència i potència Bluetooth, pantalles de dades com un ciclocomputador, coldetector, rutes amb navegació pas a pas, entrenaments per intervals, corredor virtual, segments, mapes sense connexió, forma i VO₂ màx., plans d'entrenament, objectius, avís de seguretat per SMS i exportació GPX. Sense comptes ni anuncis: tot queda al mòbil.",
      es: "Registra tus salidas de correr, bici, caminar, montaña, natación y más: GPS con la pantalla apagada, mapa del recorrido, pulsómetro y sensores de velocidad, cadencia y potencia Bluetooth, pantallas de datos como un ciclocomputador, detector de puertos, rutas con navegación paso a paso, entrenamientos por intervalos, corredor virtual, segmentos, mapas sin conexión, forma y VO₂ máx., planes de entrenamiento, objetivos, aviso de seguridad por SMS y exportación GPX. Sin cuentas ni anuncios: todo queda en el móvil.",
      fr: "Enregistrez vos sorties course, vélo, marche, montagne, natation et plus : GPS écran éteint, carte du parcours, capteurs Bluetooth de fréquence cardiaque, vitesse, cadence et puissance, écrans de données comme un compteur GPS, détecteur de cols, itinéraires avec guidage pas à pas, séances fractionnées, partenaire virtuel, segments, cartes hors connexion, forme et VO₂ max, plans d'entraînement, objectifs, alerte de sécurité par SMS et export GPX. Sans compte ni publicité : tout reste sur le téléphone.",
      en: "Record your runs, rides, walks, hikes, swims and more: GPS with the screen off, route map, Bluetooth heart rate, speed, cadence and power sensors, bike-computer style data screens, climb detector, routes with turn-by-turn navigation, interval workouts, virtual partner, segments, offline maps, fitness and VO₂ max, training plans, goals, SMS safety alerts and GPX export. No accounts, no ads: everything stays on your phone.",
    },
  },
  {
    id: "cercador", cat: "utils", nom: "Xoriguer Cercador", icona: "img/cercador.png",
    versio: "cercador/versio.json",   // .exe portable (xoriguer.dev); codi: https://github.com/Xorigu3r/xoriguer-cercador
    desc: {
      ca: "Cerca fitxers per tipus en un disc dur (fotos, vídeos, música, documents, comprimits o les extensions que vulguis) i els copia a una carpeta, a un altre disc o a un pendrive. Un disc sencer en pocs segons; filtra per anys, ordena les fotos per any i mes, omet les carpetes del sistema i els duplicats, i avisa si no hi ha espai o si el pendrive és FAT32. No cal instal·lar-lo.",
      es: "Busca archivos por tipo en un disco duro (fotos, vídeos, música, documentos, comprimidos o las extensiones que quieras) y los copia a una carpeta, a otro disco o a un pendrive. Un disco entero en pocos segundos; filtra por años, ordena las fotos por año y mes, omite las carpetas del sistema y los duplicados, y avisa si no hay espacio o si el pendrive es FAT32. No hace falta instalarlo.",
      fr: "Recherche des fichiers par type sur un disque dur (photos, vidéos, musique, documents, archives ou les extensions de votre choix) et les copie vers un dossier, un autre disque ou une clé USB. Un disque entier en quelques secondes ; filtre par année, range les photos par année et mois, ignore les dossiers système et les doublons, et prévient s’il manque de place ou si la clé est en FAT32. Sans installation.",
      en: "Finds files by type on a hard drive (photos, videos, music, documents, archives or any extension you like) and copies them to a folder, another drive or a USB stick. A whole drive in a few seconds; filters by year, sorts photos by year and month, skips system folders and duplicates, and warns if there isn’t enough space or the USB stick is FAT32. No installation needed.",
    },
  },
  {
    id: "pconfigurador", cat: "utils", nom: "Xoriguer PConfigurador", icona: "img/pconfigurador.png", beta: true,
    versio: "pconfigurador/versio.json",   // .exe portable + AppImage de Linux + APK (xoriguer.dev); codi: https://github.com/Xorigu3r/xoriguer-pconfigurador
    web: "https://xorigu3r.github.io/xoriguer-pconfigurador/",
    desc: {
      ca: "Configurador de PC per pressupost: tria l’ús (gamer, streaming, oficina o navegar i correu) i quant vols gastar, i et munta un PC peça a peça compatible i equilibrat, sense colls d’ampolla. Preus reals d’Alternate i LDLC amb enllaç de compra, i pots canviar qualsevol peça. Sense anuncis ni enllaços d’afiliat.",
      es: "Configurador de PC por presupuesto: elige el uso (gaming, streaming, oficina o navegar y correo) y cuánto quieres gastar, y te monta un PC pieza a pieza compatible y equilibrado, sin cuellos de botella. Precios reales de Alternate y LDLC con enlace de compra, y puedes cambiar cualquier pieza. Sin anuncios ni enlaces de afiliado.",
      fr: "Configurateur de PC selon le budget : choisissez l’usage (gaming, streaming, bureautique ou navigation et e-mail) et combien vous voulez dépenser, et il monte un PC pièce par pièce compatible et équilibré, sans goulot d’étranglement. Prix réels d’Alternate et LDLC avec lien d’achat, et vous pouvez changer n’importe quelle pièce. Sans publicité ni liens d’affiliation.",
      en: "A budget PC builder: pick the use (gaming, streaming, office or browsing and email) and how much you want to spend, and it builds a compatible, balanced PC part by part, with no bottlenecks. Real prices from Alternate and LDLC with buy links, and you can swap any part. No ads and no affiliate links.",
    },
    notaLinux: {
      ca: "Linux: AppImage (dona-li permís d’execució i obre-la). A la web, sense preus en directe: fes servir l’app per tenir-los al dia.",
      es: "Linux: AppImage (dale permiso de ejecución y ábrela). En la web, sin precios en directo: usa la app para tenerlos al día.",
      fr: "Linux : AppImage (rendez-la exécutable et ouvrez-la). Sur le web, pas de prix en direct : utilisez l’appli pour les avoir à jour.",
      en: "Linux: AppImage (make it executable and open it). The web version has no live prices: use the app to keep them up to date.",
    },
  },
  {
    id: "gastro", cat: "cuina", nom: "Xoriguer Gastro", icona: "img/gastro.png", beta: true,
    versio: "gastro/versio.json",       // Windows + APK (tauletes) + Linux (xoriguer.dev); codi: https://github.com/Xorigu3r/xoriguer-gastro
    notaLinux: {
      ca: "Linux (Ubuntu, Mint, Debian, Fedora…): descomprimeix-lo i obre <b>xoriguer-gastro</b> (o <b>instal-la.sh</b> per posar-lo al menú). Cal Python 3. A Debian, Ubuntu i Mint també hi ha el <a href=\"https://baixades.xoriguer.dev/xoriguer-gastro_3.5_all.deb\" style=\"color:var(--or)\">paquet .deb</a>.",
      es: "Linux (Ubuntu, Mint, Debian, Fedora…): descomprímelo y abre <b>xoriguer-gastro</b> (o <b>instal-la.sh</b> para ponerlo en el menú). Necesita Python 3. Para Debian, Ubuntu y Mint también hay el <a href=\"https://baixades.xoriguer.dev/xoriguer-gastro_3.5_all.deb\" style=\"color:var(--or)\">paquete .deb</a>.",
      fr: "Linux (Ubuntu, Mint, Debian, Fedora…) : décompressez-le et ouvrez <b>xoriguer-gastro</b> (ou <b>instal-la.sh</b> pour l’ajouter au menu). Python 3 requis. Pour Debian, Ubuntu et Mint, il existe aussi le <a href=\"https://baixades.xoriguer.dev/xoriguer-gastro_3.5_all.deb\" style=\"color:var(--or)\">paquet .deb</a>.",
      en: "Linux (Ubuntu, Mint, Debian, Fedora…): extract it and open <b>xoriguer-gastro</b> (or run <b>instal-la.sh</b> to add it to the menu). Needs Python 3. For Debian, Ubuntu and Mint there’s also a <a href=\"https://baixades.xoriguer.dev/xoriguer-gastro_3.5_all.deb\" style=\"color:var(--or)\">.deb package</a>.",
    },
    desc: {
      ca: "Escandalls i gestió de cuina per a bars i restaurants: cost de cada plat amb sub-receptes, al·lèrgens i nutrició, compres que actualitzen preus i estoc, inventari, comandes per WhatsApp, vendes, enginyeria de menú, food cost real, carta digital amb QR, menú del dia i APPCC. Base de 70 plats i 124 ingredients. Per a PC (Windows i Linux) i tauletes Android.",
      es: "Escandallos y gestión de cocina para bares y restaurantes: coste de cada plato con sub-recetas, alérgenos y nutrición, compras que actualizan precios y stock, inventario, pedidos por WhatsApp, ventas, ingeniería de menú, food cost real, carta digital con QR, menú del día y APPCC. Base de 70 platos y 124 ingredientes. Para PC (Windows y Linux) y tabletas Android.",
      fr: "Fiches de coût et gestion de cuisine pour bars et restaurants : coût de chaque plat avec sous-recettes, allergènes et nutrition, achats qui mettent à jour prix et stock, inventaire, commandes par WhatsApp, ventes, ingénierie de menu, food cost réel, carte numérique avec QR, menu du jour et HACCP. Base de 70 plats et 124 ingrédients. Pour PC (Windows et Linux) et tablettes Android.",
      en: "Recipe costing and kitchen management for bars and restaurants: cost per dish with sub-recipes, allergens and nutrition, purchases that update prices and stock, stocktakes, WhatsApp orders, sales, menu engineering, actual food cost, digital QR menu, set menus and HACCP. Library of 70 dishes and 124 ingredients. For PC (Windows and Linux) and Android tablets.",
    },
  },
  {
    id: "receptes", cat: "cuina", nom: "Xoriguer Receptes", icona: "img/receptes.png", beta: true,
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
    versio: "papers/versio.json",      // versió (i baixades) des de xoriguer.dev/versions
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
  {
    id: "fotos", cat: "utils", nom: "Xoriguer Fotos", icona: "img/fotos.png",
    versio: "fotos/versio.json",      // instal·lador de Windows (xoriguer.dev); codi: https://github.com/Xorigu3r/xoriguer-fotos
    desc: {
      ca: "Visualitzador i editor de fotos ràpid per a Windows: miniatures instantànies, pantalla completa amb zoom i presentació, i passar a la foto següent sense esperes. Retalla, gira, canvia la mida, ajusta la llum i els colors i aplica efectes, conservant les dades EXIF. També converteix i redimensiona fotos per lots.",
      es: "Visor y editor de fotos rápido para Windows: miniaturas instantáneas, pantalla completa con zoom y presentación, y pasar a la foto siguiente sin esperas. Recorta, gira, cambia el tamaño, ajusta la luz y los colores y aplica efectos, conservando los datos EXIF. También convierte y redimensiona fotos por lotes.",
      fr: "Visionneuse et éditeur de photos rapide pour Windows : vignettes instantanées, plein écran avec zoom et diaporama, et passage à la photo suivante sans attente. Rognez, pivotez, redimensionnez, réglez la lumière et les couleurs et appliquez des effets, en conservant les données EXIF. Convertit et redimensionne aussi les photos par lots.",
      en: "A fast photo viewer and editor for Windows: instant thumbnails, full screen with zoom and slideshow, and no waiting when you move to the next photo. Crop, rotate, resize, adjust light and colours and apply effects while keeping the EXIF data. It also converts and resizes photos in batches.",
    },
  },
];
