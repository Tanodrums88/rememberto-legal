(() => {
	"use strict";

	const STORAGE_KEY = "rememberto.language";
	const DEFAULT_LANG = "it";

	const languages = [
		{ code: "it", htmlLang: "it", label: "Italiano", dir: "ltr" },
		{ code: "en", htmlLang: "en", label: "English", dir: "ltr" },
		{ code: "fr", htmlLang: "fr", label: "Français", dir: "ltr" },
		{ code: "de", htmlLang: "de", label: "Deutsch", dir: "ltr" },
		{ code: "es", htmlLang: "es", label: "Español", dir: "ltr" },
		{ code: "pt", htmlLang: "pt", label: "Português", dir: "ltr" },
		{ code: "sr", htmlLang: "sr-Cyrl", label: "Српски", dir: "ltr" },
		{ code: "zh", htmlLang: "zh-Hans", label: "中文（简体）", dir: "ltr" },
		{ code: "ja", htmlLang: "ja", label: "日本語", dir: "ltr" },
		{ code: "ar", htmlLang: "ar", label: "العربية", dir: "rtl" },
	];

	const languageByCode = Object.fromEntries(
		languages.map((language) => [language.code, language])
	);

	const pageTargets = {
		privacy: { href: "privacy.html", icon: "🔒" },
		terms: { href: "terms.html", icon: "📄" },
		delete: { href: "delete-account.html", icon: "×" },
	};

	const translations = {
		it: {
			ui: {
				languageLabel: "Lingua",
				backHome: "Torna alla home",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Legal",
					title: "RememberTo",
					description:
						"Applicazione per la gestione di promemoria, terapie farmacologiche, appuntamenti sanitari e diario clinico personale.",
					cards: {
						privacy: "Privacy Policy",
						terms: "Termini e Condizioni",
						delete: "Eliminazione account",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Privacy Policy - RememberTo",
					title: "Privacy Policy - RememberTo",
					updatedLabel: "Ultimo aggiornamento:",
					updated: "Giugno 2026",
					blocks: [
						{
							type: "p",
							text: "RememberTo è un'app dedicata alla gestione di promemoria, terapie farmacologiche, appuntamenti sanitari e monitoraggio personale tramite diario clinico.",
						},
						{ type: "h2", text: "Dati raccolti" },
						{
							type: "ul",
							items: [
								"Dati di account: nome, email, password, data di nascita, sesso, nazionalità, lingua",
								"Dati opzionali: numero di telefono",
								"Dati sanitari: farmaci, terapie, promemoria, appuntamenti sanitari, diario clinico personale, parametri vitali, sintomi, effetti collaterali, dati glicemici e note sanitarie",
								"Dati tecnici: identificatori del dispositivo necessari al funzionamento delle notifiche, dati di diagnostica, informazioni su dispositivo, sistema operativo, versione dell'app, eventi di errore, crash e performance",
								"Dati diagnostici: errori, crash, stack trace, schermata o area dell'app coinvolta, timestamp, versione dell'app, sistema operativo, modello del dispositivo e altre informazioni tecniche necessarie a individuare e correggere malfunzionamenti. Non inviamo intenzionalmente contenuti sanitari a Sentry.",
							],
						},
						{ type: "h2", text: "Finalità del trattamento" },
						{
							type: "ul",
							items: [
								"funzionamento dell'app",
								"gestione promemoria e terapie",
								"notifiche push",
								"monitoraggio sanitario personale tramite diario clinico",
								"esportazione PDF dei dati sanitari",
								"gestione caregiver e condivisione dati tra utenti autorizzati",
								"visualizzazione di annunci pubblicitari tramite Google Mobile Ads",
								"gestione delle preferenze privacy e consenso per gli annunci",
								"monitoraggio di errori, crash e prestazioni tramite Sentry per sicurezza, manutenzione e miglioramento dell'app",
							],
						},
						{ type: "h2", text: "Base giuridica" },
						{
							type: "p",
							text: "Il trattamento dei dati si basa sul consenso esplicito dell'utente per le funzionalità che richiedono dati sanitari e, per i dati tecnici necessari a sicurezza, diagnostica e manutenzione dell'app, sull'esecuzione del servizio e/o sul legittimo interesse del titolare, nei limiti previsti dal GDPR.",
						},
						{ type: "h2", text: "Condivisione dati" },
						{
							type: "p",
							text: "I dati non vengono venduti. Alcuni dati possono essere trattati da fornitori tecnici necessari al funzionamento, alla sicurezza, alla diagnostica, alle notifiche e alla pubblicità dell'app.",
						},
						{
							type: "p",
							text: "I dati possono essere condivisi solo tra utenti tramite il sistema caregiver, previo consenso esplicito dell'utente.",
						},
						{
							type: "p",
							text: "Il caregiver può esclusivamente visualizzare i dati che l'utente decide di condividere e non può modificarli o accedere ad altri dati non autorizzati.",
						},
						{
							type: "p",
							text: "I fornitori tecnici includono, a seconda delle funzionalità usate, Expo, Google Mobile Ads (AdMob), Sentry e servizi infrastrutturali. Tali fornitori trattano i dati secondo le rispettive informative, termini e garanzie applicabili.",
						},
						{ type: "h2", text: "Sicurezza" },
						{
							type: "p",
							text: "I dati sono salvati su server AWS in Germania (eu-central-1) e protetti tramite misure tecniche e organizzative adeguate, inclusa la crittografia dei dati ove applicabile.",
						},
						{
							type: "p",
							text: "Le comunicazioni tra l'app RememberTo e il server avvengono tramite connessione sicura HTTPS.",
						},
						{ type: "h2", text: "Trasferimento dati" },
						{
							type: "p",
							text: "I dati principali dell'app sono trattati su server situati nell'Unione Europea. Alcuni servizi tecnici di terze parti, come notifiche push, pubblicità, diagnostica degli errori o servizi infrastrutturali, possono comportare trattamenti da parte dei rispettivi fornitori, anche fuori dallo Spazio Economico Europeo quando necessario, secondo le loro informative privacy, termini di servizio e garanzie applicabili.",
						},
						{ type: "h2", text: "Servizi esterni" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications per l'invio delle notifiche push;",
								"Google Mobile Ads (AdMob) per la visualizzazione di annunci pubblicitari;",
								"servizi infrastrutturali necessari al funzionamento dell'app e del backend;",
								"Sentry (Functional Software, Inc.) per monitoraggio di errori, crash e prestazioni dell'app.",
							],
						},
						{ type: "h2", text: "Pubblicità e consenso annunci" },
						{
							type: "p",
							text: "L'app può mostrare annunci pubblicitari tramite Google Mobile Ads (AdMob). Per il funzionamento degli annunci possono essere trattati dati tecnici, identificatori del dispositivo o identificatori pubblicitari, secondo le impostazioni del dispositivo, le preferenze espresse dall'utente e le regole applicabili.",
						},
						{
							type: "p",
							text: "Gli annunci possono essere personalizzati o non personalizzati in base alle preferenze espresse dall'utente. Per gli utenti nello Spazio Economico Europeo, Regno Unito e Svizzera, RememberTo utilizza i meccanismi di consenso previsti da Google, inclusa la piattaforma User Messaging Platform (UMP), per raccogliere o aggiornare le preferenze relative agli annunci.",
						},
						{
							type: "p",
							text: "L'utente può modificare le preferenze relative agli annunci tramite le impostazioni disponibili nell'app, quando previste.",
						},
						{ type: "h2", text: "Conservazione dei dati" },
						{
							type: "p",
							text: "I dati vengono conservati per tutta la durata dell'account e cancellati alla sua eliminazione.",
						},
						{
							type: "p",
							text: "L'utente può richiedere la cancellazione definitiva dell'account e dei dati direttamente dall'app oppure contattando rememberto.info@gmail.com.",
						},
						{ type: "h2", text: "Disclaimer medico" },
						{
							type: "p",
							text: "RememberTo non fornisce consulenza medica e non sostituisce il parere di un medico o professionista sanitario.",
						},
						{ type: "h2", text: "Diagnostica, crash e performance" },
						{
							type: "p",
							text: "RememberTo utilizza Sentry per rilevare errori, crash e problemi di performance, migliorare stabilità e sicurezza dell'app e intervenire più rapidamente sui malfunzionamenti.",
						},
						{
							type: "p",
							text: "Gli eventi diagnostici possono includere informazioni tecniche come modello del dispositivo, sistema operativo, versione dell'app, timestamp, stack trace, tipo di errore, area o schermata coinvolta e breadcrumb tecnici utili alla ricostruzione del problema.",
						},
						{
							type: "p",
							text: "Sentry è configurato con sendDefaultPii: false e con filtri lato app per non inviare automaticamente nome, email, ID utente, cookie, header, corpo delle richieste o query string. Non sono abilitati Session Replay, screenshot o invio intenzionale di contenuti sanitari.",
						},
						{
							type: "p",
							text: "Gli eventi diagnostici sono conservati solo per finalità tecniche, sicurezza, manutenzione e assistenza, secondo le impostazioni di conservazione applicabili al progetto Sentry e alle esigenze operative.",
						},
						{ type: "h2", text: "Diritti dell'utente" },
						{
							type: "ul",
							items: [
								"accedere ai propri dati",
								"modificarli",
								"cancellarli",
								"revocare il consenso",
								"opporsi al trattamento",
								"richiedere la limitazione del trattamento",
								"richiedere la portabilità dei dati",
							],
						},
						{ type: "h2", text: "Età minima" },
						{ type: "p", text: "L'app è destinata a utenti di età pari o superiore a 16 anni." },
						{ type: "h2", text: "Titolare del trattamento" },
						{
							type: "contact",
							lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"],
						},
						{ type: "h2", text: "Modifiche" },
						{
							type: "p",
							text: "La presente informativa può essere aggiornata nel tempo. Gli utenti saranno informati in caso di modifiche rilevanti.",
						},
					],
				},
				terms: {
					documentTitle: "Termini e Condizioni - RememberTo",
					title: "Termini e Condizioni - RememberTo",
					updatedLabel: "Ultimo aggiornamento:",
					updated: "Giugno 2026",
					blocks: [
						{ type: "p", text: "Utilizzando RememberTo accetti i seguenti termini." },
						{ type: "h2", text: "Uso dell'app" },
						{ type: "p", text: "L'app è fornita “così com'è”. L'utente è responsabile dell'utilizzo." },
						{ type: "h2", text: "Servizio" },
						{ type: "p", text: "Le notifiche possono non essere sempre affidabili, puntuali o garantite." },
						{ type: "h2", text: "Contenuti sanitari" },
						{ type: "p", text: "L'app non sostituisce medici o professionisti sanitari." },
						{ type: "h2", text: "Responsabilità dell'utente" },
						{
							type: "p",
							text: "L'utente è responsabile della corretta gestione delle proprie terapie e dell'assunzione dei farmaci.",
						},
						{ type: "h2", text: "Caregiver" },
						{
							type: "p",
							text: "L'accesso ai dati da parte del caregiver avviene solo con consenso esplicito dell'utente.",
						},
						{
							type: "p",
							text: "Il caregiver può esclusivamente visualizzare i dati condivisi dall'utente e non può modificarli.",
						},
						{ type: "p", text: "L'utente può revocare in qualsiasi momento l'accesso ai propri dati." },
						{ type: "h2", text: "Limitazione di responsabilità" },
						{
							type: "p",
							text: "Lo sviluppatore non è responsabile per errori, interruzioni del servizio, ritardi nelle notifiche o perdita di dati.",
						},
						{ type: "h2", text: "Esportazione PDF" },
						{ type: "p", text: "L'app può consentire l'esportazione dei dati sanitari in formato PDF." },
						{
							type: "p",
							text: "L'utente è responsabile della conservazione e dell'eventuale condivisione dei documenti esportati.",
						},
						{ type: "h2", text: "Dati sanitari e consenso" },
						{
							type: "p",
							text: "L'utilizzo delle funzionalità sanitarie dell'app richiede il consenso esplicito dell'utente al trattamento dei dati sanitari necessari al funzionamento di RememberTo, inclusi farmaci, terapie, promemoria, appuntamenti sanitari e dati inseriti nel diario clinico personale.",
						},
						{
							type: "p",
							text: "Tali dati sono necessari per l'utilizzo delle funzionalità sanitarie dell'app. L'utente può revocare il consenso o eliminare il proprio account secondo le modalità indicate nella Privacy Policy e nella pagina dedicata all'eliminazione account.",
						},
						{ type: "h2", text: "Pubblicità" },
						{
							type: "p",
							text: "L'app può mostrare annunci pubblicitari tramite Google Mobile Ads (AdMob). Gli annunci personalizzati vengono mostrati solo secondo le preferenze espresse dall'utente e tramite i meccanismi di consenso disponibili nell'app.",
						},
						{
							type: "p",
							text: "L'utente può modificare le preferenze relative agli annunci dalle impostazioni dell'app, quando disponibili.",
						},
						{ type: "h2", text: "Diagnostica e stabilità" },
						{
							type: "p",
							text: "L'app può utilizzare strumenti tecnici come Sentry per registrare errori, crash e problemi di performance al fine di mantenere, proteggere e migliorare il servizio.",
						},
						{ type: "p", text: "Il trattamento dei dati diagnostici è descritto nella Privacy Policy." },
						{ type: "h2", text: "Contatti" },
						{
							type: "contact",
							lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"],
						},
					],
				},
				delete: {
					documentTitle: "Eliminazione Account - RememberTo",
					title: "Eliminazione Account - RememberTo",
					updatedLabel: "Ultimo aggiornamento:",
					updated: "Giugno 2026",
					blocks: [
						{
							type: "p",
							text: "In questa pagina sono indicate le modalità con cui un utente può eliminare il proprio account RememberTo e i dati associati.",
						},
						{
							type: "p",
							text: "Questa pagina è fornita come risorsa web pubblica per le richieste di eliminazione dell'account e dei dati associati, anche ai fini dei requisiti previsti da Google Play.",
						},
						{ type: "h2", text: "Come eliminare l'account" },
						{
							type: "p",
							text: "L'utente può eliminare autonomamente il proprio account direttamente dall'app RememberTo seguendo questo percorso:",
						},
						{ type: "p", strong: "Impostazioni → Eliminazione Account" },
						{ type: "h2", text: "Conferma dell'eliminazione" },
						{
							type: "p",
							text: "Per evitare eliminazioni accidentali, RememberTo richiede una conferma esplicita prima di procedere con l'eliminazione definitiva dell'account.",
						},
						{
							type: "p",
							text: "L'utente deve inserire il testo di conferma richiesto dall'app. Solo dopo questa conferma, l'eliminazione dell'account e dei dati associati viene eseguita automaticamente.",
						},
						{ type: "h2", text: "Tempi di eliminazione" },
						{ type: "p", text: "L'eliminazione dell'account è istantanea dopo la conferma dell'utente." },
						{ type: "h2", text: "Dati eliminati" },
						{
							type: "p",
							text: "Con l'eliminazione dell'account vengono eliminati tutti i dati associati all'ID dell'utente che richiede l'eliminazione.",
						},
						{ type: "p", text: "I dati eliminati possono includere, a titolo esemplificativo:" },
						{
							type: "ul",
							items: [
								"dati dell'account utente;",
								"dati del profilo;",
								"farmaci, terapie e promemoria;",
								"appuntamenti sanitari;",
								"dati inseriti nel diario clinico personale;",
								"dati relativi ai caregiver collegati all'account;",
								"token utilizzati per l'invio delle notifiche push;",
								"altri dati associati all'ID utente all'interno del servizio.",
							],
						},
						{ type: "h2", text: "Dati conservati" },
						{ type: "p", text: "RememberTo non conserva dati associati all'account dopo l'eliminazione." },
						{ type: "h2", text: "PDF esportati" },
						{
							type: "p",
							text: "L'app può consentire l'esportazione dei dati sanitari in formato PDF. Eventuali documenti PDF già esportati, salvati o condivisi dall'utente non possono essere eliminati dall'app, poiché si trovano fuori dal controllo di RememberTo.",
						},
						{ type: "h2", text: "Caregiver" },
						{
							type: "p",
							text: "In caso di eliminazione dell'account, vengono eliminati anche i dati e i collegamenti associati alla condivisione con eventuali caregiver, limitatamente ai dati associati all'ID dell'utente eliminato.",
						},
						{ type: "h2", text: "Assistenza e richiesta via email" },
						{
							type: "p",
							text: "Se l'utente non riesce ad accedere all'app o non può completare la procedura di eliminazione dall'interno di RememberTo, può contattare l'assistenza all'indirizzo email indicato di seguito.",
						},
						{
							type: "p",
							text: "La richiesta deve essere inviata dall'indirizzo email associato all'account RememberTo, oppure deve contenere informazioni sufficienti per consentire la verifica dell'identità dell'utente prima di procedere con l'eliminazione.",
						},
						{ type: "h2", text: "Contatti" },
						{
							type: "contact",
							lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"],
						},
					],
				},
			},
		},

		en: {
			ui: {
				languageLabel: "Language",
				backHome: "Back to home",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Legal",
					title: "RememberTo",
					description:
						"App for managing reminders, medication therapies, healthcare appointments and a personal clinical journal.",
					cards: {
						privacy: "Privacy Policy",
						terms: "Terms & Conditions",
						delete: "Account deletion",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Privacy Policy - RememberTo",
					title: "Privacy Policy - RememberTo",
					updatedLabel: "Last updated:",
					updated: "June 2026",
					blocks: [
						{
							type: "p",
							text: "RememberTo is an app dedicated to managing reminders, medication therapies, healthcare appointments and personal monitoring through a clinical journal.",
						},
						{ type: "h2", text: "Data collected" },
						{
							type: "ul",
							items: [
								"Account data: name, email, password, date of birth, sex, nationality, language",
								"Optional data: phone number",
								"Health data: medicines, therapies, reminders, healthcare appointments, personal clinical journal, vital parameters, symptoms, side effects, glucose data and health notes",
								"Technical data: device identifiers required for notifications, diagnostic data, information about device, operating system, app version, error events, crashes and performance",
								"Diagnostic data: errors, crashes, stack traces, screen or app area involved, timestamp, app version, operating system, device model and other technical information needed to identify and fix malfunctions. We do not intentionally send health content to Sentry.",
							],
						},
						{ type: "h2", text: "Purposes of processing" },
						{
							type: "ul",
							items: [
								"operation of the app",
								"management of reminders and therapies",
								"push notifications",
								"personal health monitoring through the clinical journal",
								"PDF export of health data",
								"caregiver management and data sharing between authorized users",
								"display of advertising through Google Mobile Ads",
								"management of privacy preferences and ad consent",
								"monitoring of errors, crashes and performance through Sentry for security, maintenance and improvement of the app",
							],
						},
						{ type: "h2", text: "Legal basis" },
						{
							type: "p",
							text: "Data processing is based on the user's explicit consent for features that require health data and, for technical data needed for app security, diagnostics and maintenance, on the performance of the service and/or the controller's legitimate interest, within the limits provided by the GDPR.",
						},
						{ type: "h2", text: "Data sharing" },
						{
							type: "p",
							text: "Data is not sold. Some data may be processed by technical providers required for the operation, security, diagnostics, notifications and advertising of the app.",
						},
						{
							type: "p",
							text: "Data may be shared only between users through the caregiver system, with the user's explicit consent.",
						},
						{
							type: "p",
							text: "The caregiver can only view the data that the user decides to share and cannot modify it or access other unauthorized data.",
						},
						{
							type: "p",
							text: "Technical providers include, depending on the features used, Expo, Google Mobile Ads (AdMob), Sentry and infrastructure services. These providers process data according to their respective policies, terms and applicable safeguards.",
						},
						{ type: "h2", text: "Security" },
						{
							type: "p",
							text: "Data is stored on AWS servers in Germany (eu-central-1) and protected through appropriate technical and organizational measures, including data encryption where applicable.",
						},
						{ type: "p", text: "Communications between the RememberTo app and the server take place over a secure HTTPS connection." },
						{ type: "h2", text: "Data transfer" },
						{
							type: "p",
							text: "The app's main data is processed on servers located in the European Union. Some third-party technical services, such as push notifications, advertising, error diagnostics or infrastructure services, may involve processing by their respective providers, including outside the European Economic Area when necessary, according to their privacy policies, terms of service and applicable safeguards.",
						},
						{ type: "h2", text: "External services" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications for sending push notifications;",
								"Google Mobile Ads (AdMob) for displaying advertisements;",
								"infrastructure services needed for the app and backend to operate;",
								"Sentry (Functional Software, Inc.) for monitoring errors, crashes and app performance.",
							],
						},
						{ type: "h2", text: "Advertising and ad consent" },
						{
							type: "p",
							text: "The app may display advertisements through Google Mobile Ads (AdMob). Technical data, device identifiers or advertising identifiers may be processed for ads to work, according to device settings, the preferences expressed by the user and applicable rules.",
						},
						{
							type: "p",
							text: "Ads may be personalized or non-personalized based on the preferences expressed by the user. For users in the European Economic Area, the United Kingdom and Switzerland, RememberTo uses Google's consent mechanisms, including the User Messaging Platform (UMP), to collect or update ad preferences.",
						},
						{ type: "p", text: "The user can change ad preferences through the settings available in the app, when provided." },
						{ type: "h2", text: "Data retention" },
						{ type: "p", text: "Data is kept for the lifetime of the account and deleted when the account is deleted." },
						{
							type: "p",
							text: "The user can request permanent deletion of the account and data directly from the app or by contacting rememberto.info@gmail.com.",
						},
						{ type: "h2", text: "Medical disclaimer" },
						{ type: "p", text: "RememberTo does not provide medical advice and does not replace the opinion of a doctor or healthcare professional." },
						{ type: "h2", text: "Diagnostics, crashes and performance" },
						{
							type: "p",
							text: "RememberTo uses Sentry to detect errors, crashes and performance issues, improve the app's stability and security, and respond more quickly to malfunctions.",
						},
						{
							type: "p",
							text: "Diagnostic events may include technical information such as device model, operating system, app version, timestamp, stack trace, error type, area or screen involved and technical breadcrumbs useful for reconstructing the issue.",
						},
						{
							type: "p",
							text: "Sentry is configured with sendDefaultPii: false and app-side filters so that name, email, user ID, cookies, headers, request body or query strings are not sent automatically. Session Replay, screenshots and intentional sending of health content are not enabled.",
						},
						{
							type: "p",
							text: "Diagnostic events are retained only for technical, security, maintenance and support purposes, according to the retention settings applicable to the Sentry project and operational needs.",
						},
						{ type: "h2", text: "User rights" },
						{
							type: "ul",
							items: [
								"access their data",
								"modify it",
								"delete it",
								"withdraw consent",
								"object to processing",
								"request restriction of processing",
								"request data portability",
							],
						},
						{ type: "h2", text: "Minimum age" },
						{ type: "p", text: "The app is intended for users aged 16 or older." },
						{ type: "h2", text: "Data controller" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italy", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Changes" },
						{ type: "p", text: "This policy may be updated over time. Users will be informed in case of significant changes." },
					],
				},
				terms: {
					documentTitle: "Terms & Conditions - RememberTo",
					title: "Terms & Conditions - RememberTo",
					updatedLabel: "Last updated:",
					updated: "June 2026",
					blocks: [
						{ type: "p", text: "By using RememberTo, you accept the following terms." },
						{ type: "h2", text: "Use of the app" },
						{ type: "p", text: "The app is provided “as is”. The user is responsible for its use." },
						{ type: "h2", text: "Service" },
						{ type: "p", text: "Notifications may not always be reliable, timely or guaranteed." },
						{ type: "h2", text: "Health content" },
						{ type: "p", text: "The app does not replace doctors or healthcare professionals." },
						{ type: "h2", text: "User responsibility" },
						{ type: "p", text: "The user is responsible for correctly managing their therapies and taking their medicines." },
						{ type: "h2", text: "Caregiver" },
						{ type: "p", text: "Caregiver access to data takes place only with the user's explicit consent." },
						{ type: "p", text: "The caregiver can only view the data shared by the user and cannot modify it." },
						{ type: "p", text: "The user can revoke access to their data at any time." },
						{ type: "h2", text: "Limitation of liability" },
						{ type: "p", text: "The developer is not responsible for errors, service interruptions, notification delays or data loss." },
						{ type: "h2", text: "PDF export" },
						{ type: "p", text: "The app may allow health data to be exported in PDF format." },
						{ type: "p", text: "The user is responsible for storing and possibly sharing exported documents." },
						{ type: "h2", text: "Health data and consent" },
						{
							type: "p",
							text: "Use of the app's health features requires the user's explicit consent to process the health data needed for RememberTo to operate, including medicines, therapies, reminders, healthcare appointments and data entered in the personal clinical journal.",
						},
						{
							type: "p",
							text: "Such data is necessary to use the app's health features. The user can withdraw consent or delete their account according to the methods described in the Privacy Policy and on the account deletion page.",
						},
						{ type: "h2", text: "Advertising" },
						{
							type: "p",
							text: "The app may display advertisements through Google Mobile Ads (AdMob). Personalized ads are shown only according to the preferences expressed by the user and through the consent mechanisms available in the app.",
						},
						{ type: "p", text: "The user can change ad preferences from the app settings, when available." },
						{ type: "h2", text: "Diagnostics and stability" },
						{
							type: "p",
							text: "The app may use technical tools such as Sentry to record errors, crashes and performance issues in order to maintain, protect and improve the service.",
						},
						{ type: "p", text: "Processing of diagnostic data is described in the Privacy Policy." },
						{ type: "h2", text: "Contacts" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italy", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Account Deletion - RememberTo",
					title: "Account Deletion - RememberTo",
					updatedLabel: "Last updated:",
					updated: "June 2026",
					blocks: [
						{ type: "p", text: "This page explains how a user can delete their RememberTo account and associated data." },
						{
							type: "p",
							text: "This page is provided as a public web resource for account and associated data deletion requests, including for Google Play requirements.",
						},
						{ type: "h2", text: "How to delete the account" },
						{ type: "p", text: "The user can delete their account independently directly from the RememberTo app by following this path:" },
						{ type: "p", strong: "Settings → Account Deletion" },
						{ type: "h2", text: "Deletion confirmation" },
						{
							type: "p",
							text: "To avoid accidental deletions, RememberTo requires explicit confirmation before proceeding with permanent account deletion.",
						},
						{
							type: "p",
							text: "The user must enter the confirmation text requested by the app. Only after this confirmation is the account and associated data deleted automatically.",
						},
						{ type: "h2", text: "Deletion timing" },
						{ type: "p", text: "Account deletion is immediate after the user's confirmation." },
						{ type: "h2", text: "Deleted data" },
						{ type: "p", text: "Deleting the account deletes all data associated with the ID of the user requesting deletion." },
						{ type: "p", text: "Deleted data may include, by way of example:" },
						{
							type: "ul",
							items: [
								"user account data;",
								"profile data;",
								"medicines, therapies and reminders;",
								"healthcare appointments;",
								"data entered in the personal clinical journal;",
								"data relating to caregivers linked to the account;",
								"tokens used to send push notifications;",
								"other data associated with the user ID within the service.",
							],
						},
						{ type: "h2", text: "Retained data" },
						{ type: "p", text: "RememberTo does not retain data associated with the account after deletion." },
						{ type: "h2", text: "Exported PDFs" },
						{
							type: "p",
							text: "The app may allow health data to be exported in PDF format. Any PDF documents already exported, saved or shared by the user cannot be deleted by the app because they are outside RememberTo's control.",
						},
						{ type: "h2", text: "Caregiver" },
						{
							type: "p",
							text: "If the account is deleted, the data and links associated with sharing with any caregivers are also deleted, limited to the data associated with the deleted user's ID.",
						},
						{ type: "h2", text: "Support and email request" },
						{
							type: "p",
							text: "If the user cannot access the app or cannot complete the deletion procedure inside RememberTo, they can contact support at the email address below.",
						},
						{
							type: "p",
							text: "The request must be sent from the email address associated with the RememberTo account, or must contain enough information to verify the user's identity before deletion proceeds.",
						},
						{ type: "h2", text: "Contacts" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italy", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		fr: {
			ui: {
				languageLabel: "Langue",
				backHome: "Retour à l'accueil",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Mentions légales",
					title: "RememberTo",
					description:
						"Application pour gérer les rappels, les traitements médicamenteux, les rendez-vous de santé et un journal clinique personnel.",
					cards: {
						privacy: "Politique de confidentialité",
						terms: "Conditions générales",
						delete: "Suppression du compte",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Politique de confidentialité - RememberTo",
					title: "Politique de confidentialité - RememberTo",
					updatedLabel: "Dernière mise à jour :",
					updated: "Juin 2026",
					blocks: [
						{
							type: "p",
							text: "RememberTo est une application dédiée à la gestion des rappels, des traitements médicamenteux, des rendez-vous de santé et du suivi personnel au moyen d'un journal clinique.",
						},
						{ type: "h2", text: "Données collectées" },
						{
							type: "ul",
							items: [
								"Données de compte : nom, e-mail, mot de passe, date de naissance, sexe, nationalité, langue",
								"Données facultatives : numéro de téléphone",
								"Données de santé : médicaments, traitements, rappels, rendez-vous de santé, journal clinique personnel, paramètres vitaux, symptômes, effets indésirables, données glycémiques et notes de santé",
								"Données techniques : identifiants de l'appareil nécessaires au fonctionnement des notifications, données de diagnostic, informations sur l'appareil, le système d'exploitation, la version de l'application, les événements d'erreur, les crashs et les performances",
								"Données de diagnostic : erreurs, crashs, stack traces, écran ou zone de l'application concernée, horodatage, version de l'application, système d'exploitation, modèle de l'appareil et autres informations techniques nécessaires pour identifier et corriger les dysfonctionnements. Nous n'envoyons pas intentionnellement de contenus de santé à Sentry.",
							],
						},
						{ type: "h2", text: "Finalités du traitement" },
						{
							type: "ul",
							items: [
								"fonctionnement de l'application",
								"gestion des rappels et des traitements",
								"notifications push",
								"suivi personnel de santé au moyen du journal clinique",
								"export PDF des données de santé",
								"gestion des aidants et partage de données entre utilisateurs autorisés",
								"affichage de publicités via Google Mobile Ads",
								"gestion des préférences de confidentialité et du consentement aux annonces",
								"surveillance des erreurs, crashs et performances via Sentry pour la sécurité, la maintenance et l'amélioration de l'application",
							],
						},
						{ type: "h2", text: "Base juridique" },
						{
							type: "p",
							text: "Le traitement des données repose sur le consentement explicite de l'utilisateur pour les fonctionnalités qui nécessitent des données de santé et, pour les données techniques nécessaires à la sécurité, au diagnostic et à la maintenance de l'application, sur l'exécution du service et/ou l'intérêt légitime du responsable du traitement, dans les limites prévues par le RGPD.",
						},
						{ type: "h2", text: "Partage des données" },
						{
							type: "p",
							text: "Les données ne sont pas vendues. Certaines données peuvent être traitées par des fournisseurs techniques nécessaires au fonctionnement, à la sécurité, au diagnostic, aux notifications et à la publicité de l'application.",
						},
						{ type: "p", text: "Les données peuvent être partagées uniquement entre utilisateurs via le système d'aidant, avec le consentement explicite de l'utilisateur." },
						{
							type: "p",
							text: "L'aidant peut uniquement consulter les données que l'utilisateur décide de partager et ne peut pas les modifier ni accéder à d'autres données non autorisées.",
						},
						{
							type: "p",
							text: "Les fournisseurs techniques incluent, selon les fonctionnalités utilisées, Expo, Google Mobile Ads (AdMob), Sentry et des services d'infrastructure. Ces fournisseurs traitent les données selon leurs propres politiques, conditions et garanties applicables.",
						},
						{ type: "h2", text: "Sécurité" },
						{
							type: "p",
							text: "Les données sont stockées sur des serveurs AWS en Allemagne (eu-central-1) et protégées par des mesures techniques et organisationnelles appropriées, y compris le chiffrement des données lorsque cela s'applique.",
						},
						{ type: "p", text: "Les communications entre l'application RememberTo et le serveur s'effectuent via une connexion sécurisée HTTPS." },
						{ type: "h2", text: "Transfert des données" },
						{
							type: "p",
							text: "Les données principales de l'application sont traitées sur des serveurs situés dans l'Union européenne. Certains services techniques tiers, comme les notifications push, la publicité, le diagnostic des erreurs ou les services d'infrastructure, peuvent impliquer des traitements par leurs fournisseurs respectifs, y compris hors de l'Espace économique européen lorsque cela est nécessaire, selon leurs politiques de confidentialité, conditions de service et garanties applicables.",
						},
						{ type: "h2", text: "Services externes" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications pour l'envoi des notifications push ;",
								"Google Mobile Ads (AdMob) pour l'affichage de publicités ;",
								"services d'infrastructure nécessaires au fonctionnement de l'application et du backend ;",
								"Sentry (Functional Software, Inc.) pour la surveillance des erreurs, crashs et performances de l'application.",
							],
						},
						{ type: "h2", text: "Publicité et consentement aux annonces" },
						{
							type: "p",
							text: "L'application peut afficher des publicités via Google Mobile Ads (AdMob). Pour le fonctionnement des annonces, des données techniques, des identifiants d'appareil ou des identifiants publicitaires peuvent être traités selon les paramètres de l'appareil, les préférences exprimées par l'utilisateur et les règles applicables.",
						},
						{
							type: "p",
							text: "Les annonces peuvent être personnalisées ou non personnalisées selon les préférences exprimées par l'utilisateur. Pour les utilisateurs de l'Espace économique européen, du Royaume-Uni et de la Suisse, RememberTo utilise les mécanismes de consentement prévus par Google, y compris la plateforme User Messaging Platform (UMP), afin de collecter ou de mettre à jour les préférences relatives aux annonces.",
						},
						{ type: "p", text: "L'utilisateur peut modifier les préférences relatives aux annonces dans les paramètres disponibles dans l'application, lorsqu'ils sont prévus." },
						{ type: "h2", text: "Conservation des données" },
						{ type: "p", text: "Les données sont conservées pendant toute la durée du compte et supprimées lors de sa suppression." },
						{ type: "p", text: "L'utilisateur peut demander la suppression définitive du compte et des données directement depuis l'application ou en contactant rememberto.info@gmail.com." },
						{ type: "h2", text: "Avertissement médical" },
						{ type: "p", text: "RememberTo ne fournit pas de conseil médical et ne remplace pas l'avis d'un médecin ou d'un professionnel de santé." },
						{ type: "h2", text: "Diagnostic, crashs et performances" },
						{
							type: "p",
							text: "RememberTo utilise Sentry pour détecter les erreurs, crashs et problèmes de performance, améliorer la stabilité et la sécurité de l'application et intervenir plus rapidement en cas de dysfonctionnement.",
						},
						{
							type: "p",
							text: "Les événements de diagnostic peuvent inclure des informations techniques telles que le modèle de l'appareil, le système d'exploitation, la version de l'application, l'horodatage, la stack trace, le type d'erreur, la zone ou l'écran concerné et des breadcrumbs techniques utiles à la reconstitution du problème.",
						},
						{
							type: "p",
							text: "Sentry est configuré avec sendDefaultPii: false et avec des filtres côté application afin de ne pas envoyer automatiquement le nom, l'e-mail, l'ID utilisateur, les cookies, les en-têtes, le corps des requêtes ou les query strings. Session Replay, les captures d'écran et l'envoi intentionnel de contenus de santé ne sont pas activés.",
						},
						{
							type: "p",
							text: "Les événements de diagnostic sont conservés uniquement à des fins techniques, de sécurité, de maintenance et d'assistance, selon les paramètres de conservation applicables au projet Sentry et les besoins opérationnels.",
						},
						{ type: "h2", text: "Droits de l'utilisateur" },
						{
							type: "ul",
							items: [
								"accéder à ses données",
								"les modifier",
								"les supprimer",
								"retirer son consentement",
								"s'opposer au traitement",
								"demander la limitation du traitement",
								"demander la portabilité des données",
							],
						},
						{ type: "h2", text: "Âge minimum" },
						{ type: "p", text: "L'application est destinée aux utilisateurs âgés de 16 ans ou plus." },
						{ type: "h2", text: "Responsable du traitement" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italie", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Modifications" },
						{ type: "p", text: "La présente politique peut être mise à jour au fil du temps. Les utilisateurs seront informés en cas de modifications importantes." },
					],
				},
				terms: {
					documentTitle: "Conditions générales - RememberTo",
					title: "Conditions générales - RememberTo",
					updatedLabel: "Dernière mise à jour :",
					updated: "Juin 2026",
					blocks: [
						{ type: "p", text: "En utilisant RememberTo, vous acceptez les conditions suivantes." },
						{ type: "h2", text: "Utilisation de l'application" },
						{ type: "p", text: "L'application est fournie « telle quelle ». L'utilisateur est responsable de son utilisation." },
						{ type: "h2", text: "Service" },
						{ type: "p", text: "Les notifications peuvent ne pas toujours être fiables, ponctuelles ou garanties." },
						{ type: "h2", text: "Contenus de santé" },
						{ type: "p", text: "L'application ne remplace pas les médecins ni les professionnels de santé." },
						{ type: "h2", text: "Responsabilité de l'utilisateur" },
						{ type: "p", text: "L'utilisateur est responsable de la bonne gestion de ses traitements et de la prise de ses médicaments." },
						{ type: "h2", text: "Aidant" },
						{ type: "p", text: "L'accès aux données par l'aidant n'a lieu qu'avec le consentement explicite de l'utilisateur." },
						{ type: "p", text: "L'aidant peut uniquement consulter les données partagées par l'utilisateur et ne peut pas les modifier." },
						{ type: "p", text: "L'utilisateur peut révoquer à tout moment l'accès à ses données." },
						{ type: "h2", text: "Limitation de responsabilité" },
						{ type: "p", text: "Le développeur n'est pas responsable des erreurs, interruptions du service, retards de notification ou pertes de données." },
						{ type: "h2", text: "Export PDF" },
						{ type: "p", text: "L'application peut permettre l'exportation des données de santé au format PDF." },
						{ type: "p", text: "L'utilisateur est responsable de la conservation et du partage éventuel des documents exportés." },
						{ type: "h2", text: "Données de santé et consentement" },
						{
							type: "p",
							text: "L'utilisation des fonctionnalités de santé de l'application requiert le consentement explicite de l'utilisateur au traitement des données de santé nécessaires au fonctionnement de RememberTo, notamment les médicaments, traitements, rappels, rendez-vous de santé et données saisies dans le journal clinique personnel.",
						},
						{
							type: "p",
							text: "Ces données sont nécessaires à l'utilisation des fonctionnalités de santé de l'application. L'utilisateur peut retirer son consentement ou supprimer son compte selon les modalités indiquées dans la Politique de confidentialité et sur la page dédiée à la suppression du compte.",
						},
						{ type: "h2", text: "Publicité" },
						{
							type: "p",
							text: "L'application peut afficher des publicités via Google Mobile Ads (AdMob). Les annonces personnalisées sont affichées uniquement selon les préférences exprimées par l'utilisateur et au moyen des mécanismes de consentement disponibles dans l'application.",
						},
						{ type: "p", text: "L'utilisateur peut modifier ses préférences relatives aux annonces depuis les paramètres de l'application, lorsqu'ils sont disponibles." },
						{ type: "h2", text: "Diagnostic et stabilité" },
						{
							type: "p",
							text: "L'application peut utiliser des outils techniques comme Sentry pour enregistrer les erreurs, crashs et problèmes de performance afin de maintenir, protéger et améliorer le service.",
						},
						{ type: "p", text: "Le traitement des données de diagnostic est décrit dans la Politique de confidentialité." },
						{ type: "h2", text: "Contacts" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italie", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Suppression du compte - RememberTo",
					title: "Suppression du compte - RememberTo",
					updatedLabel: "Dernière mise à jour :",
					updated: "Juin 2026",
					blocks: [
						{ type: "p", text: "Cette page indique comment un utilisateur peut supprimer son compte RememberTo et les données associées." },
						{
							type: "p",
							text: "Cette page est fournie comme ressource web publique pour les demandes de suppression de compte et des données associées, y compris aux fins des exigences prévues par Google Play.",
						},
						{ type: "h2", text: "Comment supprimer le compte" },
						{ type: "p", text: "L'utilisateur peut supprimer lui-même son compte directement depuis l'application RememberTo en suivant ce chemin :" },
						{ type: "p", strong: "Paramètres → Suppression du compte" },
						{ type: "h2", text: "Confirmation de la suppression" },
						{ type: "p", text: "Pour éviter les suppressions accidentelles, RememberTo demande une confirmation explicite avant de procéder à la suppression définitive du compte." },
						{
							type: "p",
							text: "L'utilisateur doit saisir le texte de confirmation demandé par l'application. Ce n'est qu'après cette confirmation que la suppression du compte et des données associées est effectuée automatiquement.",
						},
						{ type: "h2", text: "Délai de suppression" },
						{ type: "p", text: "La suppression du compte est immédiate après la confirmation de l'utilisateur." },
						{ type: "h2", text: "Données supprimées" },
						{ type: "p", text: "La suppression du compte entraîne la suppression de toutes les données associées à l'ID de l'utilisateur qui demande la suppression." },
						{ type: "p", text: "Les données supprimées peuvent inclure, à titre d'exemple :" },
						{
							type: "ul",
							items: [
								"données du compte utilisateur ;",
								"données du profil ;",
								"médicaments, traitements et rappels ;",
								"rendez-vous de santé ;",
								"données saisies dans le journal clinique personnel ;",
								"données relatives aux aidants liés au compte ;",
								"jetons utilisés pour l'envoi des notifications push ;",
								"autres données associées à l'ID utilisateur dans le service.",
							],
						},
						{ type: "h2", text: "Données conservées" },
						{ type: "p", text: "RememberTo ne conserve pas de données associées au compte après sa suppression." },
						{ type: "h2", text: "PDF exportés" },
						{
							type: "p",
							text: "L'application peut permettre l'exportation des données de santé au format PDF. Les documents PDF déjà exportés, enregistrés ou partagés par l'utilisateur ne peuvent pas être supprimés par l'application, car ils se trouvent hors du contrôle de RememberTo.",
						},
						{ type: "h2", text: "Aidant" },
						{
							type: "p",
							text: "En cas de suppression du compte, les données et les liens associés au partage avec d'éventuels aidants sont également supprimés, dans la limite des données associées à l'ID de l'utilisateur supprimé.",
						},
						{ type: "h2", text: "Assistance et demande par e-mail" },
						{
							type: "p",
							text: "Si l'utilisateur ne parvient pas à accéder à l'application ou ne peut pas terminer la procédure de suppression depuis RememberTo, il peut contacter l'assistance à l'adresse e-mail indiquée ci-dessous.",
						},
						{
							type: "p",
							text: "La demande doit être envoyée depuis l'adresse e-mail associée au compte RememberTo, ou contenir suffisamment d'informations pour permettre la vérification de l'identité de l'utilisateur avant de procéder à la suppression.",
						},
						{ type: "h2", text: "Contacts" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italie", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		de: {
			ui: {
				languageLabel: "Sprache",
				backHome: "Zurück zur Startseite",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Rechtliches",
					title: "RememberTo",
					description:
						"App zur Verwaltung von Erinnerungen, medikamentösen Therapien, Gesundheitsterminen und einem persönlichen klinischen Tagebuch.",
					cards: {
						privacy: "Datenschutzerklärung",
						terms: "Allgemeine Geschäftsbedingungen",
						delete: "Konto löschen",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Datenschutzerklärung - RememberTo",
					title: "Datenschutzerklärung - RememberTo",
					updatedLabel: "Letzte Aktualisierung:",
					updated: "Juni 2026",
					blocks: [
						{
							type: "p",
							text: "RememberTo ist eine App zur Verwaltung von Erinnerungen, medikamentösen Therapien, Gesundheitsterminen und persönlicher Überwachung über ein klinisches Tagebuch.",
						},
						{ type: "h2", text: "Erhobene Daten" },
						{
							type: "ul",
							items: [
								"Kontodaten: Name, E-Mail, Passwort, Geburtsdatum, Geschlecht, Nationalität, Sprache",
								"Optionale Daten: Telefonnummer",
								"Gesundheitsdaten: Medikamente, Therapien, Erinnerungen, Gesundheitstermine, persönliches klinisches Tagebuch, Vitalparameter, Symptome, Nebenwirkungen, Blutzuckerwerte und Gesundheitsnotizen",
								"Technische Daten: Gerätekennungen, die für Benachrichtigungen erforderlich sind, Diagnosedaten, Informationen zu Gerät, Betriebssystem, App-Version, Fehlerereignissen, Abstürzen und Leistung",
								"Diagnosedaten: Fehler, Abstürze, Stacktraces, betroffener Bildschirm oder App-Bereich, Zeitstempel, App-Version, Betriebssystem, Gerätemodell und weitere technische Informationen, die zur Erkennung und Behebung von Fehlfunktionen erforderlich sind. Wir senden Sentry nicht absichtlich Gesundheitsinhalte.",
							],
						},
						{ type: "h2", text: "Zwecke der Verarbeitung" },
						{
							type: "ul",
							items: [
								"Betrieb der App",
								"Verwaltung von Erinnerungen und Therapien",
								"Push-Benachrichtigungen",
								"persönliche Gesundheitsüberwachung über das klinische Tagebuch",
								"PDF-Export von Gesundheitsdaten",
								"Caregiver-Verwaltung und Datenaustausch zwischen autorisierten Nutzern",
								"Anzeige von Werbung über Google Mobile Ads",
								"Verwaltung von Datenschutzeinstellungen und Einwilligung für Anzeigen",
								"Überwachung von Fehlern, Abstürzen und Leistung über Sentry zur Sicherheit, Wartung und Verbesserung der App",
							],
						},
						{ type: "h2", text: "Rechtsgrundlage" },
						{
							type: "p",
							text: "Die Datenverarbeitung beruht auf der ausdrücklichen Einwilligung des Nutzers für Funktionen, die Gesundheitsdaten erfordern, und bei technischen Daten, die für Sicherheit, Diagnose und Wartung der App erforderlich sind, auf der Erfüllung des Dienstes und/oder dem berechtigten Interesse des Verantwortlichen im Rahmen der DSGVO.",
						},
						{ type: "h2", text: "Datenweitergabe" },
						{
							type: "p",
							text: "Daten werden nicht verkauft. Einige Daten können von technischen Anbietern verarbeitet werden, die für Betrieb, Sicherheit, Diagnose, Benachrichtigungen und Werbung der App erforderlich sind.",
						},
						{ type: "p", text: "Daten können nur zwischen Nutzern über das Caregiver-System geteilt werden, mit ausdrücklicher Einwilligung des Nutzers." },
						{
							type: "p",
							text: "Der Caregiver kann ausschließlich die Daten einsehen, die der Nutzer freigibt, und kann sie nicht ändern oder auf andere nicht autorisierte Daten zugreifen.",
						},
						{
							type: "p",
							text: "Technische Anbieter umfassen je nach genutzten Funktionen Expo, Google Mobile Ads (AdMob), Sentry und Infrastrukturdienste. Diese Anbieter verarbeiten Daten gemäß ihren jeweiligen Richtlinien, Bedingungen und anwendbaren Schutzmaßnahmen.",
						},
						{ type: "h2", text: "Sicherheit" },
						{
							type: "p",
							text: "Daten werden auf AWS-Servern in Deutschland (eu-central-1) gespeichert und durch geeignete technische und organisatorische Maßnahmen geschützt, einschließlich Datenverschlüsselung, soweit anwendbar.",
						},
						{ type: "p", text: "Die Kommunikation zwischen der RememberTo-App und dem Server erfolgt über eine sichere HTTPS-Verbindung." },
						{ type: "h2", text: "Datenübertragung" },
						{
							type: "p",
							text: "Die Hauptdaten der App werden auf Servern in der Europäischen Union verarbeitet. Einige technische Dienste Dritter, wie Push-Benachrichtigungen, Werbung, Fehlerdiagnose oder Infrastrukturdienste, können eine Verarbeitung durch die jeweiligen Anbieter auch außerhalb des Europäischen Wirtschaftsraums erforderlich machen, wenn dies notwendig ist, gemäß deren Datenschutzrichtlinien, Nutzungsbedingungen und anwendbaren Garantien.",
						},
						{ type: "h2", text: "Externe Dienste" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications zum Senden von Push-Benachrichtigungen;",
								"Google Mobile Ads (AdMob) zur Anzeige von Werbung;",
								"Infrastrukturdienste, die für den Betrieb der App und des Backends erforderlich sind;",
								"Sentry (Functional Software, Inc.) zur Überwachung von Fehlern, Abstürzen und App-Leistung.",
							],
						},
						{ type: "h2", text: "Werbung und Anzeigen-Einwilligung" },
						{
							type: "p",
							text: "Die App kann Werbung über Google Mobile Ads (AdMob) anzeigen. Für den Betrieb der Anzeigen können technische Daten, Gerätekennungen oder Werbekennungen gemäß Geräteeinstellungen, den vom Nutzer geäußerten Präferenzen und den anwendbaren Regeln verarbeitet werden.",
						},
						{
							type: "p",
							text: "Anzeigen können je nach Präferenzen des Nutzers personalisiert oder nicht personalisiert sein. Für Nutzer im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz verwendet RememberTo die von Google vorgesehenen Einwilligungsmechanismen, einschließlich der User Messaging Platform (UMP), um Anzeigenpräferenzen zu erfassen oder zu aktualisieren.",
						},
						{ type: "p", text: "Der Nutzer kann die Anzeigenpräferenzen über die in der App verfügbaren Einstellungen ändern, sofern vorgesehen." },
						{ type: "h2", text: "Datenspeicherung" },
						{ type: "p", text: "Daten werden für die Dauer des Kontos gespeichert und bei dessen Löschung gelöscht." },
						{ type: "p", text: "Der Nutzer kann die endgültige Löschung des Kontos und der Daten direkt in der App oder durch Kontaktaufnahme mit rememberto.info@gmail.com anfordern." },
						{ type: "h2", text: "Medizinischer Hinweis" },
						{ type: "p", text: "RememberTo bietet keine medizinische Beratung und ersetzt nicht die Einschätzung eines Arztes oder medizinischen Fachpersonals." },
						{ type: "h2", text: "Diagnose, Abstürze und Leistung" },
						{
							type: "p",
							text: "RememberTo verwendet Sentry, um Fehler, Abstürze und Leistungsprobleme zu erkennen, Stabilität und Sicherheit der App zu verbessern und schneller auf Fehlfunktionen zu reagieren.",
						},
						{
							type: "p",
							text: "Diagnoseereignisse können technische Informationen enthalten, etwa Gerätemodell, Betriebssystem, App-Version, Zeitstempel, Stacktrace, Fehlertyp, betroffener Bereich oder Bildschirm sowie technische Breadcrumbs, die zur Rekonstruktion des Problems nützlich sind.",
						},
						{
							type: "p",
							text: "Sentry ist mit sendDefaultPii: false und App-seitigen Filtern konfiguriert, damit Name, E-Mail, Nutzer-ID, Cookies, Header, Request Body oder Query Strings nicht automatisch gesendet werden. Session Replay, Screenshots und das absichtliche Senden von Gesundheitsinhalten sind nicht aktiviert.",
						},
						{
							type: "p",
							text: "Diagnoseereignisse werden nur für technische Zwecke, Sicherheit, Wartung und Support aufbewahrt, gemäß den für das Sentry-Projekt geltenden Aufbewahrungseinstellungen und betrieblichen Erfordernissen.",
						},
						{ type: "h2", text: "Rechte des Nutzers" },
						{
							type: "ul",
							items: [
								"auf die eigenen Daten zugreifen",
								"sie ändern",
								"sie löschen",
								"die Einwilligung widerrufen",
								"der Verarbeitung widersprechen",
								"die Einschränkung der Verarbeitung verlangen",
								"Datenübertragbarkeit verlangen",
							],
						},
						{ type: "h2", text: "Mindestalter" },
						{ type: "p", text: "Die App richtet sich an Nutzer ab 16 Jahren." },
						{ type: "h2", text: "Verantwortlicher" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italien", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Änderungen" },
						{ type: "p", text: "Diese Erklärung kann im Laufe der Zeit aktualisiert werden. Nutzer werden bei wesentlichen Änderungen informiert." },
					],
				},
				terms: {
					documentTitle: "Allgemeine Geschäftsbedingungen - RememberTo",
					title: "Allgemeine Geschäftsbedingungen - RememberTo",
					updatedLabel: "Letzte Aktualisierung:",
					updated: "Juni 2026",
					blocks: [
						{ type: "p", text: "Durch die Nutzung von RememberTo akzeptierst du die folgenden Bedingungen." },
						{ type: "h2", text: "Nutzung der App" },
						{ type: "p", text: "Die App wird „wie sie ist“ bereitgestellt. Der Nutzer ist für die Nutzung verantwortlich." },
						{ type: "h2", text: "Dienst" },
						{ type: "p", text: "Benachrichtigungen sind möglicherweise nicht immer zuverlässig, pünktlich oder garantiert." },
						{ type: "h2", text: "Gesundheitsinhalte" },
						{ type: "p", text: "Die App ersetzt keine Ärzte oder medizinisches Fachpersonal." },
						{ type: "h2", text: "Verantwortung des Nutzers" },
						{ type: "p", text: "Der Nutzer ist für die korrekte Verwaltung seiner Therapien und die Einnahme seiner Medikamente verantwortlich." },
						{ type: "h2", text: "Caregiver" },
						{ type: "p", text: "Der Zugriff des Caregivers auf Daten erfolgt nur mit ausdrücklicher Einwilligung des Nutzers." },
						{ type: "p", text: "Der Caregiver kann ausschließlich die vom Nutzer freigegebenen Daten einsehen und sie nicht ändern." },
						{ type: "p", text: "Der Nutzer kann den Zugriff auf seine Daten jederzeit widerrufen." },
						{ type: "h2", text: "Haftungsbeschränkung" },
						{ type: "p", text: "Der Entwickler haftet nicht für Fehler, Dienstunterbrechungen, Verzögerungen bei Benachrichtigungen oder Datenverlust." },
						{ type: "h2", text: "PDF-Export" },
						{ type: "p", text: "Die App kann den Export von Gesundheitsdaten im PDF-Format ermöglichen." },
						{ type: "p", text: "Der Nutzer ist für die Aufbewahrung und mögliche Weitergabe exportierter Dokumente verantwortlich." },
						{ type: "h2", text: "Gesundheitsdaten und Einwilligung" },
						{
							type: "p",
							text: "Die Nutzung der Gesundheitsfunktionen der App erfordert die ausdrückliche Einwilligung des Nutzers zur Verarbeitung der Gesundheitsdaten, die für den Betrieb von RememberTo erforderlich sind, einschließlich Medikamente, Therapien, Erinnerungen, Gesundheitstermine und Daten im persönlichen klinischen Tagebuch.",
						},
						{
							type: "p",
							text: "Diese Daten sind für die Nutzung der Gesundheitsfunktionen der App erforderlich. Der Nutzer kann die Einwilligung widerrufen oder sein Konto gemäß den in der Datenschutzerklärung und auf der Seite zur Kontolöschung angegebenen Verfahren löschen.",
						},
						{ type: "h2", text: "Werbung" },
						{
							type: "p",
							text: "Die App kann Werbung über Google Mobile Ads (AdMob) anzeigen. Personalisierte Anzeigen werden nur gemäß den vom Nutzer geäußerten Präferenzen und über die in der App verfügbaren Einwilligungsmechanismen angezeigt.",
						},
						{ type: "p", text: "Der Nutzer kann die Anzeigenpräferenzen in den App-Einstellungen ändern, sofern verfügbar." },
						{ type: "h2", text: "Diagnose und Stabilität" },
						{
							type: "p",
							text: "Die App kann technische Tools wie Sentry verwenden, um Fehler, Abstürze und Leistungsprobleme zu erfassen, damit der Dienst gewartet, geschützt und verbessert werden kann.",
						},
						{ type: "p", text: "Die Verarbeitung von Diagnosedaten ist in der Datenschutzerklärung beschrieben." },
						{ type: "h2", text: "Kontakt" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italien", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Konto löschen - RememberTo",
					title: "Konto löschen - RememberTo",
					updatedLabel: "Letzte Aktualisierung:",
					updated: "Juni 2026",
					blocks: [
						{ type: "p", text: "Diese Seite beschreibt, wie ein Nutzer sein RememberTo-Konto und die zugehörigen Daten löschen kann." },
						{
							type: "p",
							text: "Diese Seite wird als öffentliche Webressource für Anfragen zur Löschung des Kontos und der zugehörigen Daten bereitgestellt, auch im Hinblick auf die Anforderungen von Google Play.",
						},
						{ type: "h2", text: "So löschst du das Konto" },
						{ type: "p", text: "Der Nutzer kann sein Konto direkt in der RememberTo-App selbst löschen, indem er diesem Pfad folgt:" },
						{ type: "p", strong: "Einstellungen → Konto löschen" },
						{ type: "h2", text: "Bestätigung der Löschung" },
						{ type: "p", text: "Um versehentliche Löschungen zu vermeiden, verlangt RememberTo eine ausdrückliche Bestätigung, bevor die endgültige Kontolöschung durchgeführt wird." },
						{
							type: "p",
							text: "Der Nutzer muss den von der App angeforderten Bestätigungstext eingeben. Erst nach dieser Bestätigung werden das Konto und die zugehörigen Daten automatisch gelöscht.",
						},
						{ type: "h2", text: "Zeitpunkt der Löschung" },
						{ type: "p", text: "Die Kontolöschung erfolgt unmittelbar nach der Bestätigung durch den Nutzer." },
						{ type: "h2", text: "Gelöschte Daten" },
						{ type: "p", text: "Mit der Kontolöschung werden alle Daten gelöscht, die mit der ID des Nutzers verbunden sind, der die Löschung anfordert." },
						{ type: "p", text: "Gelöschte Daten können beispielsweise umfassen:" },
						{
							type: "ul",
							items: [
								"Nutzerkontodaten;",
								"Profildaten;",
								"Medikamente, Therapien und Erinnerungen;",
								"Gesundheitstermine;",
								"Daten, die im persönlichen klinischen Tagebuch eingegeben wurden;",
								"Daten zu Caregivern, die mit dem Konto verbunden sind;",
								"Tokens, die zum Senden von Push-Benachrichtigungen verwendet werden;",
								"andere Daten, die innerhalb des Dienstes mit der Nutzer-ID verbunden sind.",
							],
						},
						{ type: "h2", text: "Aufbewahrte Daten" },
						{ type: "p", text: "RememberTo bewahrt nach der Löschung keine mit dem Konto verbundenen Daten auf." },
						{ type: "h2", text: "Exportierte PDFs" },
						{
							type: "p",
							text: "Die App kann den Export von Gesundheitsdaten im PDF-Format ermöglichen. Bereits exportierte, gespeicherte oder vom Nutzer geteilte PDF-Dokumente können von der App nicht gelöscht werden, da sie sich außerhalb der Kontrolle von RememberTo befinden.",
						},
						{ type: "h2", text: "Caregiver" },
						{
							type: "p",
							text: "Bei Löschung des Kontos werden auch die Daten und Verknüpfungen gelöscht, die mit der Freigabe für etwaige Caregiver verbunden sind, beschränkt auf die Daten, die der ID des gelöschten Nutzers zugeordnet sind.",
						},
						{ type: "h2", text: "Support und Anfrage per E-Mail" },
						{
							type: "p",
							text: "Wenn der Nutzer nicht auf die App zugreifen oder den Löschvorgang innerhalb von RememberTo nicht abschließen kann, kann er den Support unter der unten angegebenen E-Mail-Adresse kontaktieren.",
						},
						{
							type: "p",
							text: "Die Anfrage muss von der mit dem RememberTo-Konto verbundenen E-Mail-Adresse gesendet werden oder genügend Informationen enthalten, um die Identität des Nutzers vor der Löschung zu überprüfen.",
						},
						{ type: "h2", text: "Kontakt" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italien", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		es: {
			ui: {
				languageLabel: "Idioma",
				backHome: "Volver al inicio",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Legal",
					title: "RememberTo",
					description:
						"Aplicación para gestionar recordatorios, tratamientos farmacológicos, citas sanitarias y un diario clínico personal.",
					cards: {
						privacy: "Política de privacidad",
						terms: "Términos y condiciones",
						delete: "Eliminación de cuenta",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Política de privacidad - RememberTo",
					title: "Política de privacidad - RememberTo",
					updatedLabel: "Última actualización:",
					updated: "Junio de 2026",
					blocks: [
						{
							type: "p",
							text: "RememberTo es una aplicación dedicada a gestionar recordatorios, tratamientos farmacológicos, citas sanitarias y seguimiento personal mediante un diario clínico.",
						},
						{ type: "h2", text: "Datos recopilados" },
						{
							type: "ul",
							items: [
								"Datos de cuenta: nombre, correo electrónico, contraseña, fecha de nacimiento, sexo, nacionalidad, idioma",
								"Datos opcionales: número de teléfono",
								"Datos de salud: medicamentos, tratamientos, recordatorios, citas sanitarias, diario clínico personal, parámetros vitales, síntomas, efectos secundarios, datos glucémicos y notas de salud",
								"Datos técnicos: identificadores del dispositivo necesarios para el funcionamiento de las notificaciones, datos de diagnóstico, información sobre dispositivo, sistema operativo, versión de la aplicación, eventos de error, bloqueos y rendimiento",
								"Datos de diagnóstico: errores, bloqueos, stack traces, pantalla o área de la aplicación involucrada, marca de tiempo, versión de la aplicación, sistema operativo, modelo del dispositivo y otra información técnica necesaria para identificar y corregir fallos. No enviamos intencionalmente contenido sanitario a Sentry.",
							],
						},
						{ type: "h2", text: "Finalidades del tratamiento" },
						{
							type: "ul",
							items: [
								"funcionamiento de la aplicación",
								"gestión de recordatorios y tratamientos",
								"notificaciones push",
								"seguimiento personal de salud mediante el diario clínico",
								"exportación en PDF de los datos de salud",
								"gestión de cuidadores y uso compartido de datos entre usuarios autorizados",
								"visualización de anuncios publicitarios mediante Google Mobile Ads",
								"gestión de preferencias de privacidad y consentimiento para anuncios",
								"seguimiento de errores, bloqueos y rendimiento mediante Sentry para seguridad, mantenimiento y mejora de la aplicación",
							],
						},
						{ type: "h2", text: "Base jurídica" },
						{
							type: "p",
							text: "El tratamiento de datos se basa en el consentimiento explícito del usuario para las funcionalidades que requieren datos de salud y, para los datos técnicos necesarios para la seguridad, el diagnóstico y el mantenimiento de la aplicación, en la ejecución del servicio y/o en el interés legítimo del responsable, dentro de los límites previstos por el RGPD.",
						},
						{ type: "h2", text: "Compartición de datos" },
						{ type: "p", text: "Los datos no se venden. Algunos datos pueden ser tratados por proveedores técnicos necesarios para el funcionamiento, la seguridad, el diagnóstico, las notificaciones y la publicidad de la aplicación." },
						{ type: "p", text: "Los datos solo pueden compartirse entre usuarios mediante el sistema de cuidadores, con el consentimiento explícito del usuario." },
						{ type: "p", text: "El cuidador solo puede ver los datos que el usuario decide compartir y no puede modificarlos ni acceder a otros datos no autorizados." },
						{ type: "p", text: "Los proveedores técnicos incluyen, según las funcionalidades utilizadas, Expo, Google Mobile Ads (AdMob), Sentry y servicios de infraestructura. Estos proveedores tratan los datos según sus respectivas políticas, términos y garantías aplicables." },
						{ type: "h2", text: "Seguridad" },
						{ type: "p", text: "Los datos se almacenan en servidores AWS en Alemania (eu-central-1) y se protegen mediante medidas técnicas y organizativas adecuadas, incluido el cifrado de datos cuando corresponda." },
						{ type: "p", text: "Las comunicaciones entre la aplicación RememberTo y el servidor se realizan mediante conexión segura HTTPS." },
						{ type: "h2", text: "Transferencia de datos" },
						{ type: "p", text: "Los datos principales de la aplicación se tratan en servidores situados en la Unión Europea. Algunos servicios técnicos de terceros, como notificaciones push, publicidad, diagnóstico de errores o servicios de infraestructura, pueden implicar tratamientos por parte de sus respectivos proveedores, incluso fuera del Espacio Económico Europeo cuando sea necesario, según sus políticas de privacidad, términos de servicio y garantías aplicables." },
						{ type: "h2", text: "Servicios externos" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications para el envío de notificaciones push;",
								"Google Mobile Ads (AdMob) para la visualización de anuncios publicitarios;",
								"servicios de infraestructura necesarios para el funcionamiento de la aplicación y del backend;",
								"Sentry (Functional Software, Inc.) para el seguimiento de errores, bloqueos y rendimiento de la aplicación.",
							],
						},
						{ type: "h2", text: "Publicidad y consentimiento de anuncios" },
						{ type: "p", text: "La aplicación puede mostrar anuncios publicitarios mediante Google Mobile Ads (AdMob). Para el funcionamiento de los anuncios pueden tratarse datos técnicos, identificadores del dispositivo o identificadores publicitarios, según la configuración del dispositivo, las preferencias expresadas por el usuario y las reglas aplicables." },
						{ type: "p", text: "Los anuncios pueden ser personalizados o no personalizados según las preferencias expresadas por el usuario. Para los usuarios del Espacio Económico Europeo, Reino Unido y Suiza, RememberTo utiliza los mecanismos de consentimiento previstos por Google, incluida la plataforma User Messaging Platform (UMP), para recopilar o actualizar las preferencias relativas a los anuncios." },
						{ type: "p", text: "El usuario puede modificar las preferencias relativas a los anuncios mediante los ajustes disponibles en la aplicación, cuando estén previstos." },
						{ type: "h2", text: "Conservación de datos" },
						{ type: "p", text: "Los datos se conservan durante toda la vida de la cuenta y se eliminan cuando esta se elimina." },
						{ type: "p", text: "El usuario puede solicitar la eliminación definitiva de la cuenta y los datos directamente desde la aplicación o contactando a rememberto.info@gmail.com." },
						{ type: "h2", text: "Aviso médico" },
						{ type: "p", text: "RememberTo no proporciona asesoramiento médico y no sustituye la opinión de un médico o profesional sanitario." },
						{ type: "h2", text: "Diagnóstico, bloqueos y rendimiento" },
						{ type: "p", text: "RememberTo utiliza Sentry para detectar errores, bloqueos y problemas de rendimiento, mejorar la estabilidad y seguridad de la aplicación e intervenir más rápidamente ante fallos." },
						{ type: "p", text: "Los eventos de diagnóstico pueden incluir información técnica como modelo del dispositivo, sistema operativo, versión de la aplicación, marca de tiempo, stack trace, tipo de error, área o pantalla involucrada y breadcrumbs técnicos útiles para reconstruir el problema." },
						{ type: "p", text: "Sentry está configurado con sendDefaultPii: false y con filtros del lado de la aplicación para no enviar automáticamente nombre, correo electrónico, ID de usuario, cookies, encabezados, cuerpo de solicitudes o query strings. No están habilitados Session Replay, capturas de pantalla ni el envío intencional de contenidos de salud." },
						{ type: "p", text: "Los eventos de diagnóstico se conservan solo con finalidades técnicas, de seguridad, mantenimiento y asistencia, según los ajustes de conservación aplicables al proyecto Sentry y las necesidades operativas." },
						{ type: "h2", text: "Derechos del usuario" },
						{
							type: "ul",
							items: [
								"acceder a sus datos",
								"modificarlos",
								"eliminarlos",
								"retirar el consentimiento",
								"oponerse al tratamiento",
								"solicitar la limitación del tratamiento",
								"solicitar la portabilidad de los datos",
							],
						},
						{ type: "h2", text: "Edad mínima" },
						{ type: "p", text: "La aplicación está destinada a usuarios de 16 años o más." },
						{ type: "h2", text: "Responsable del tratamiento" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Cambios" },
						{ type: "p", text: "La presente política puede actualizarse con el tiempo. Los usuarios serán informados en caso de cambios relevantes." },
					],
				},
				terms: {
					documentTitle: "Términos y condiciones - RememberTo",
					title: "Términos y condiciones - RememberTo",
					updatedLabel: "Última actualización:",
					updated: "Junio de 2026",
					blocks: [
						{ type: "p", text: "Al usar RememberTo aceptas los siguientes términos." },
						{ type: "h2", text: "Uso de la aplicación" },
						{ type: "p", text: "La aplicación se proporciona “tal cual”. El usuario es responsable de su uso." },
						{ type: "h2", text: "Servicio" },
						{ type: "p", text: "Las notificaciones pueden no ser siempre fiables, puntuales o garantizadas." },
						{ type: "h2", text: "Contenidos de salud" },
						{ type: "p", text: "La aplicación no sustituye a médicos ni profesionales sanitarios." },
						{ type: "h2", text: "Responsabilidad del usuario" },
						{ type: "p", text: "El usuario es responsable de la correcta gestión de sus tratamientos y de la toma de sus medicamentos." },
						{ type: "h2", text: "Cuidador" },
						{ type: "p", text: "El acceso a los datos por parte del cuidador se produce solo con el consentimiento explícito del usuario." },
						{ type: "p", text: "El cuidador solo puede ver los datos compartidos por el usuario y no puede modificarlos." },
						{ type: "p", text: "El usuario puede revocar en cualquier momento el acceso a sus datos." },
						{ type: "h2", text: "Limitación de responsabilidad" },
						{ type: "p", text: "El desarrollador no es responsable de errores, interrupciones del servicio, retrasos en las notificaciones o pérdida de datos." },
						{ type: "h2", text: "Exportación PDF" },
						{ type: "p", text: "La aplicación puede permitir la exportación de datos de salud en formato PDF." },
						{ type: "p", text: "El usuario es responsable de conservar y, en su caso, compartir los documentos exportados." },
						{ type: "h2", text: "Datos de salud y consentimiento" },
						{ type: "p", text: "El uso de las funcionalidades de salud de la aplicación requiere el consentimiento explícito del usuario para el tratamiento de los datos de salud necesarios para el funcionamiento de RememberTo, incluidos medicamentos, tratamientos, recordatorios, citas sanitarias y datos introducidos en el diario clínico personal." },
						{ type: "p", text: "Dichos datos son necesarios para usar las funcionalidades de salud de la aplicación. El usuario puede retirar el consentimiento o eliminar su cuenta según las modalidades indicadas en la Política de privacidad y en la página dedicada a la eliminación de cuenta." },
						{ type: "h2", text: "Publicidad" },
						{ type: "p", text: "La aplicación puede mostrar anuncios publicitarios mediante Google Mobile Ads (AdMob). Los anuncios personalizados se muestran solo según las preferencias expresadas por el usuario y mediante los mecanismos de consentimiento disponibles en la aplicación." },
						{ type: "p", text: "El usuario puede modificar las preferencias relativas a los anuncios desde los ajustes de la aplicación, cuando estén disponibles." },
						{ type: "h2", text: "Diagnóstico y estabilidad" },
						{ type: "p", text: "La aplicación puede utilizar herramientas técnicas como Sentry para registrar errores, bloqueos y problemas de rendimiento con el fin de mantener, proteger y mejorar el servicio." },
						{ type: "p", text: "El tratamiento de los datos de diagnóstico se describe en la Política de privacidad." },
						{ type: "h2", text: "Contactos" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Eliminación de cuenta - RememberTo",
					title: "Eliminación de cuenta - RememberTo",
					updatedLabel: "Última actualización:",
					updated: "Junio de 2026",
					blocks: [
						{ type: "p", text: "Esta página indica cómo un usuario puede eliminar su cuenta RememberTo y los datos asociados." },
						{ type: "p", text: "Esta página se proporciona como recurso web público para las solicitudes de eliminación de cuenta y de los datos asociados, también a efectos de los requisitos previstos por Google Play." },
						{ type: "h2", text: "Cómo eliminar la cuenta" },
						{ type: "p", text: "El usuario puede eliminar su cuenta de forma autónoma directamente desde la aplicación RememberTo siguiendo esta ruta:" },
						{ type: "p", strong: "Ajustes → Eliminación de cuenta" },
						{ type: "h2", text: "Confirmación de eliminación" },
						{ type: "p", text: "Para evitar eliminaciones accidentales, RememberTo requiere una confirmación explícita antes de proceder con la eliminación definitiva de la cuenta." },
						{ type: "p", text: "El usuario debe introducir el texto de confirmación solicitado por la aplicación. Solo después de esta confirmación se elimina automáticamente la cuenta y los datos asociados." },
						{ type: "h2", text: "Plazos de eliminación" },
						{ type: "p", text: "La eliminación de la cuenta es instantánea después de la confirmación del usuario." },
						{ type: "h2", text: "Datos eliminados" },
						{ type: "p", text: "Con la eliminación de la cuenta se eliminan todos los datos asociados al ID del usuario que solicita la eliminación." },
						{ type: "p", text: "Los datos eliminados pueden incluir, a modo de ejemplo:" },
						{
							type: "ul",
							items: [
								"datos de la cuenta de usuario;",
								"datos del perfil;",
								"medicamentos, tratamientos y recordatorios;",
								"citas sanitarias;",
								"datos introducidos en el diario clínico personal;",
								"datos relativos a cuidadores vinculados a la cuenta;",
								"tokens utilizados para el envío de notificaciones push;",
								"otros datos asociados al ID de usuario dentro del servicio.",
							],
						},
						{ type: "h2", text: "Datos conservados" },
						{ type: "p", text: "RememberTo no conserva datos asociados a la cuenta después de la eliminación." },
						{ type: "h2", text: "PDF exportados" },
						{ type: "p", text: "La aplicación puede permitir la exportación de datos de salud en formato PDF. Los documentos PDF ya exportados, guardados o compartidos por el usuario no pueden ser eliminados por la aplicación, ya que se encuentran fuera del control de RememberTo." },
						{ type: "h2", text: "Cuidador" },
						{ type: "p", text: "En caso de eliminación de la cuenta, también se eliminan los datos y vínculos asociados al uso compartido con posibles cuidadores, limitados a los datos asociados al ID del usuario eliminado." },
						{ type: "h2", text: "Asistencia y solicitud por email" },
						{ type: "p", text: "Si el usuario no puede acceder a la aplicación o no puede completar el procedimiento de eliminación dentro de RememberTo, puede contactar con asistencia en la dirección de correo indicada a continuación." },
						{ type: "p", text: "La solicitud debe enviarse desde la dirección de correo electrónico asociada a la cuenta RememberTo, o debe contener información suficiente para permitir la verificación de la identidad del usuario antes de proceder con la eliminación." },
						{ type: "h2", text: "Contactos" },
						{ type: "contact", lines: ["Gaetano Gelo", "Italia", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		pt: {
			ui: {
				languageLabel: "Idioma",
				backHome: "Voltar ao início",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Legal",
					title: "RememberTo",
					description:
						"App para gerir lembretes, terapias medicamentosas, consultas de saúde e um diário clínico pessoal.",
					cards: {
						privacy: "Política de privacidade",
						terms: "Termos e Condições",
						delete: "Eliminação da conta",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Política de privacidade - RememberTo",
					title: "Política de privacidade - RememberTo",
					updatedLabel: "Última atualização:",
					updated: "Junho de 2026",
					blocks: [
						{ type: "p", text: "RememberTo é uma app dedicada à gestão de lembretes, terapias medicamentosas, consultas de saúde e monitorização pessoal através de um diário clínico." },
						{ type: "h2", text: "Dados recolhidos" },
						{
							type: "ul",
							items: [
								"Dados da conta: nome, email, palavra-passe, data de nascimento, sexo, nacionalidade, idioma",
								"Dados opcionais: número de telefone",
								"Dados de saúde: medicamentos, terapias, lembretes, consultas de saúde, diário clínico pessoal, parâmetros vitais, sintomas, efeitos secundários, dados glicémicos e notas de saúde",
								"Dados técnicos: identificadores do dispositivo necessários ao funcionamento das notificações, dados de diagnóstico, informações sobre dispositivo, sistema operativo, versão da app, eventos de erro, falhas e desempenho",
								"Dados de diagnóstico: erros, falhas, stack traces, ecrã ou área da app envolvida, carimbo de data/hora, versão da app, sistema operativo, modelo do dispositivo e outras informações técnicas necessárias para identificar e corrigir avarias. Não enviamos intencionalmente conteúdos de saúde para a Sentry.",
							],
						},
						{ type: "h2", text: "Finalidades do tratamento" },
						{
							type: "ul",
							items: [
								"funcionamento da app",
								"gestão de lembretes e terapias",
								"notificações push",
								"monitorização pessoal de saúde através do diário clínico",
								"exportação em PDF dos dados de saúde",
								"gestão de cuidador e partilha de dados entre pessoas autorizadas",
								"apresentação de anúncios através do Google Mobile Ads",
								"gestão das preferências de privacidade e consentimento para anúncios",
								"monitorização de erros, falhas e desempenho através da Sentry para segurança, manutenção e melhoria da app",
							],
						},
						{ type: "h2", text: "Base jurídica" },
						{ type: "p", text: "O tratamento dos dados baseia-se no consentimento explícito da pessoa utilizadora para as funcionalidades que exigem dados de saúde e, para os dados técnicos necessários à segurança, diagnóstico e manutenção da app, na execução do serviço e/ou no interesse legítimo do responsável pelo tratamento, dentro dos limites previstos pelo RGPD." },
						{ type: "h2", text: "Partilha de dados" },
						{ type: "p", text: "Os dados não são vendidos. Alguns dados podem ser tratados por fornecedores técnicos necessários ao funcionamento, segurança, diagnóstico, notificações e publicidade da app." },
						{ type: "p", text: "Os dados só podem ser partilhados entre pessoas utilizadoras através do sistema de cuidador, mediante consentimento explícito." },
						{ type: "p", text: "O cuidador pode apenas visualizar os dados que a pessoa utilizadora decide partilhar e não pode modificá-los nem aceder a outros dados não autorizados." },
						{ type: "p", text: "Os fornecedores técnicos incluem, consoante as funcionalidades utilizadas, Expo, Google Mobile Ads (AdMob), Sentry e serviços de infraestrutura. Estes fornecedores tratam os dados segundo as respetivas políticas, termos e garantias aplicáveis." },
						{ type: "h2", text: "Segurança" },
						{ type: "p", text: "Os dados são guardados em servidores AWS na Alemanha (eu-central-1) e protegidos por medidas técnicas e organizativas adequadas, incluindo encriptação dos dados quando aplicável." },
						{ type: "p", text: "As comunicações entre a app RememberTo e o servidor são realizadas através de ligação segura HTTPS." },
						{ type: "h2", text: "Transferência de dados" },
						{ type: "p", text: "Os dados principais da app são tratados em servidores situados na União Europeia. Alguns serviços técnicos de terceiros, como notificações push, publicidade, diagnóstico de erros ou serviços de infraestrutura, podem envolver tratamento pelos respetivos fornecedores, também fora do Espaço Económico Europeu quando necessário, segundo as suas políticas de privacidade, termos de serviço e garantias aplicáveis." },
						{ type: "h2", text: "Serviços externos" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications para o envio de notificações push;",
								"Google Mobile Ads (AdMob) para a apresentação de anúncios publicitários;",
								"serviços de infraestrutura necessários ao funcionamento da app e do backend;",
								"Sentry (Functional Software, Inc.) para monitorização de erros, falhas e desempenho da app.",
							],
						},
						{ type: "h2", text: "Publicidade e consentimento para anúncios" },
						{ type: "p", text: "A app pode apresentar anúncios publicitários através do Google Mobile Ads (AdMob). Para o funcionamento dos anúncios podem ser tratados dados técnicos, identificadores do dispositivo ou identificadores publicitários, segundo as definições do dispositivo, as preferências expressas pela pessoa utilizadora e as regras aplicáveis." },
						{ type: "p", text: "Os anúncios podem ser personalizados ou não personalizados com base nas preferências expressas. Para pessoas no Espaço Económico Europeu, Reino Unido e Suíça, RememberTo utiliza os mecanismos de consentimento previstos pela Google, incluindo a User Messaging Platform (UMP), para recolher ou atualizar as preferências relativas aos anúncios." },
						{ type: "p", text: "A pessoa utilizadora pode modificar as preferências relativas aos anúncios através das definições disponíveis na app, quando previstas." },
						{ type: "h2", text: "Conservação dos dados" },
						{ type: "p", text: "Os dados são conservados durante toda a duração da conta e eliminados quando a conta é eliminada." },
						{ type: "p", text: "A pessoa utilizadora pode solicitar a eliminação definitiva da conta e dos dados diretamente pela app ou contactando rememberto.info@gmail.com." },
						{ type: "h2", text: "Aviso médico" },
						{ type: "p", text: "RememberTo não fornece aconselhamento médico e não substitui a opinião de um médico ou profissional de saúde." },
						{ type: "h2", text: "Diagnóstico, falhas e desempenho" },
						{ type: "p", text: "RememberTo utiliza a Sentry para detetar erros, falhas e problemas de desempenho, melhorar a estabilidade e segurança da app e intervir mais rapidamente em caso de avarias." },
						{ type: "p", text: "Os eventos de diagnóstico podem incluir informações técnicas como modelo do dispositivo, sistema operativo, versão da app, carimbo de data/hora, stack trace, tipo de erro, área ou ecrã envolvido e breadcrumbs técnicos úteis para reconstruir o problema." },
						{ type: "p", text: "A Sentry está configurada com sendDefaultPii: false e com filtros do lado da app para não enviar automaticamente nome, email, ID de pessoa utilizadora, cookies, cabeçalhos, corpo dos pedidos ou query strings. Session Replay, capturas de ecrã e envio intencional de conteúdos de saúde não estão ativados." },
						{ type: "p", text: "Os eventos de diagnóstico são conservados apenas para finalidades técnicas, segurança, manutenção e assistência, segundo as definições de conservação aplicáveis ao projeto Sentry e as necessidades operacionais." },
						{ type: "h2", text: "Direitos da pessoa utilizadora" },
						{
							type: "ul",
							items: [
								"aceder aos seus dados",
								"modificá-los",
								"eliminá-los",
								"retirar o consentimento",
								"opor-se ao tratamento",
								"solicitar a limitação do tratamento",
								"solicitar a portabilidade dos dados",
							],
						},
						{ type: "h2", text: "Idade mínima" },
						{ type: "p", text: "A app destina-se a pessoas com idade igual ou superior a 16 anos." },
						{ type: "h2", text: "Responsável pelo tratamento" },
						{ type: "contact", lines: ["Gaetano Gelo", "Itália", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Alterações" },
						{ type: "p", text: "A presente política pode ser atualizada ao longo do tempo. As pessoas utilizadoras serão informadas em caso de alterações relevantes." },
					],
				},
				terms: {
					documentTitle: "Termos e Condições - RememberTo",
					title: "Termos e Condições - RememberTo",
					updatedLabel: "Última atualização:",
					updated: "Junho de 2026",
					blocks: [
						{ type: "p", text: "Ao utilizar RememberTo, aceita os seguintes termos." },
						{ type: "h2", text: "Uso da app" },
						{ type: "p", text: "A app é fornecida “tal como está”. A pessoa utilizadora é responsável pelo uso." },
						{ type: "h2", text: "Serviço" },
						{ type: "p", text: "As notificações podem nem sempre ser fiáveis, pontuais ou garantidas." },
						{ type: "h2", text: "Conteúdos de saúde" },
						{ type: "p", text: "A app não substitui médicos nem profissionais de saúde." },
						{ type: "h2", text: "Responsabilidade da pessoa utilizadora" },
						{ type: "p", text: "A pessoa utilizadora é responsável pela gestão correta das suas terapias e pela toma dos medicamentos." },
						{ type: "h2", text: "Cuidador" },
						{ type: "p", text: "O acesso aos dados pelo cuidador ocorre apenas com consentimento explícito da pessoa utilizadora." },
						{ type: "p", text: "O cuidador pode apenas visualizar os dados partilhados pela pessoa utilizadora e não pode modificá-los." },
						{ type: "p", text: "A pessoa utilizadora pode revogar a qualquer momento o acesso aos seus dados." },
						{ type: "h2", text: "Limitação de responsabilidade" },
						{ type: "p", text: "O programador não é responsável por erros, interrupções do serviço, atrasos nas notificações ou perda de dados." },
						{ type: "h2", text: "Exportação PDF" },
						{ type: "p", text: "A app pode permitir a exportação dos dados de saúde em formato PDF." },
						{ type: "p", text: "A pessoa utilizadora é responsável pela conservação e eventual partilha dos documentos exportados." },
						{ type: "h2", text: "Dados de saúde e consentimento" },
						{ type: "p", text: "A utilização das funcionalidades de saúde da app exige consentimento explícito para o tratamento dos dados de saúde necessários ao funcionamento de RememberTo, incluindo medicamentos, terapias, lembretes, consultas de saúde e dados inseridos no diário clínico pessoal." },
						{ type: "p", text: "Esses dados são necessários para utilizar as funcionalidades de saúde da app. A pessoa utilizadora pode retirar o consentimento ou eliminar a própria conta segundo as modalidades indicadas na Política de privacidade e na página dedicada à eliminação da conta." },
						{ type: "h2", text: "Publicidade" },
						{ type: "p", text: "A app pode apresentar anúncios publicitários através do Google Mobile Ads (AdMob). Os anúncios personalizados são apresentados apenas segundo as preferências expressas e através dos mecanismos de consentimento disponíveis na app." },
						{ type: "p", text: "A pessoa utilizadora pode modificar as preferências relativas aos anúncios nas definições da app, quando disponíveis." },
						{ type: "h2", text: "Diagnóstico e estabilidade" },
						{ type: "p", text: "A app pode utilizar ferramentas técnicas como a Sentry para registar erros, falhas e problemas de desempenho, a fim de manter, proteger e melhorar o serviço." },
						{ type: "p", text: "O tratamento dos dados de diagnóstico é descrito na Política de privacidade." },
						{ type: "h2", text: "Contactos" },
						{ type: "contact", lines: ["Gaetano Gelo", "Itália", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Eliminação da conta - RememberTo",
					title: "Eliminação da conta - RememberTo",
					updatedLabel: "Última atualização:",
					updated: "Junho de 2026",
					blocks: [
						{ type: "p", text: "Esta página indica as modalidades pelas quais uma pessoa utilizadora pode eliminar a sua conta RememberTo e os dados associados." },
						{ type: "p", text: "Esta página é fornecida como recurso web público para pedidos de eliminação da conta e dos dados associados, também para efeitos dos requisitos previstos pela Google Play." },
						{ type: "h2", text: "Como eliminar a conta" },
						{ type: "p", text: "A pessoa utilizadora pode eliminar autonomamente a sua conta diretamente na app RememberTo seguindo este percurso:" },
						{ type: "p", strong: "Definições → Eliminação da conta" },
						{ type: "h2", text: "Confirmação da eliminação" },
						{ type: "p", text: "Para evitar eliminações acidentais, RememberTo exige uma confirmação explícita antes de proceder à eliminação definitiva da conta." },
						{ type: "p", text: "A pessoa utilizadora deve inserir o texto de confirmação solicitado pela app. Só depois desta confirmação a eliminação da conta e dos dados associados é executada automaticamente." },
						{ type: "h2", text: "Tempo de eliminação" },
						{ type: "p", text: "A eliminação da conta é instantânea após a confirmação da pessoa utilizadora." },
						{ type: "h2", text: "Dados eliminados" },
						{ type: "p", text: "Com a eliminação da conta, são eliminados todos os dados associados ao ID da pessoa utilizadora que solicita a eliminação." },
						{ type: "p", text: "Os dados eliminados podem incluir, a título de exemplo:" },
						{
							type: "ul",
							items: [
								"dados da conta;",
								"dados do perfil;",
								"medicamentos, terapias e lembretes;",
								"consultas de saúde;",
								"dados inseridos no diário clínico pessoal;",
								"dados relativos a cuidadores ligados à conta;",
								"tokens utilizados para o envio de notificações push;",
								"outros dados associados ao ID da pessoa utilizadora dentro do serviço.",
							],
						},
						{ type: "h2", text: "Dados conservados" },
						{ type: "p", text: "RememberTo não conserva dados associados à conta após a eliminação." },
						{ type: "h2", text: "PDF exportados" },
						{ type: "p", text: "A app pode permitir a exportação dos dados de saúde em formato PDF. Documentos PDF já exportados, guardados ou partilhados pela pessoa utilizadora não podem ser eliminados pela app, pois encontram-se fora do controlo de RememberTo." },
						{ type: "h2", text: "Cuidador" },
						{ type: "p", text: "Em caso de eliminação da conta, são eliminados também os dados e ligações associados à partilha com eventuais cuidadores, limitadamente aos dados associados ao ID da pessoa utilizadora eliminada." },
						{ type: "h2", text: "Assistência e pedido por email" },
						{ type: "p", text: "Se a pessoa utilizadora não conseguir aceder à app ou não puder concluir o procedimento de eliminação dentro de RememberTo, pode contactar a assistência no endereço de email indicado abaixo." },
						{ type: "p", text: "O pedido deve ser enviado a partir do endereço de email associado à conta RememberTo, ou deve conter informações suficientes para permitir a verificação da identidade antes de proceder à eliminação." },
						{ type: "h2", text: "Contactos" },
						{ type: "contact", lines: ["Gaetano Gelo", "Itália", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		sr: {
			ui: {
				languageLabel: "Језик",
				backHome: "Назад на почетну",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - Правне информације",
					title: "RememberTo",
					description:
						"Апликација за управљање подсетницима, терапијама лековима, здравственим терминима и личним клиничким дневником.",
					cards: {
						privacy: "Политика приватности",
						terms: "Услови коришћења",
						delete: "Брисање налога",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "Политика приватности - RememberTo",
					title: "Политика приватности - RememberTo",
					updatedLabel: "Последње ажурирање:",
					updated: "јун 2026.",
					blocks: [
						{ type: "p", text: "RememberTo је апликација намењена управљању подсетницима, терапијама лековима, здравственим терминима и личном праћењу путем клиничког дневника." },
						{ type: "h2", text: "Подаци који се прикупљају" },
						{
							type: "ul",
							items: [
								"Подаци о налогу: име, email, лозинка, датум рођења, пол, држављанство, језик",
								"Опциони подаци: број телефона",
								"Здравствени подаци: лекови, терапије, подсетници, здравствени термини, лични клинички дневник, витални параметри, симптоми, нежељени ефекти, подаци о гликемији и здравствене белешке",
								"Технички подаци: идентификатори уређаја неопходни за рад обавештења, дијагностички подаци, информације о уређају, оперативном систему, верзији апликације, догађајима грешке, падовима и перформансама",
								"Дијагностички подаци: грешке, падови, stack trace, екран или део апликације који је укључен, временска ознака, верзија апликације, оперативни систем, модел уређаја и друге техничке информације неопходне за откривање и исправљање неисправности. Не шаљемо намерно здравствене садржаје у Sentry.",
							],
						},
						{ type: "h2", text: "Сврхе обраде" },
						{
							type: "ul",
							items: [
								"рад апликације",
								"управљање подсетницима и терапијама",
								"push обавештења",
								"лично здравствено праћење путем клиничког дневника",
								"PDF извоз здравствених података",
								"управљање неговатељима и дељење података између овлашћених корисника",
								"приказивање огласа преко Google Mobile Ads",
								"управљање подешавањима приватности и пристанком за огласе",
								"праћење грешака, падова и перформанси преко Sentry ради безбедности, одржавања и побољшања апликације",
							],
						},
						{ type: "h2", text: "Правни основ" },
						{ type: "p", text: "Обрада података заснива се на изричитом пристанку корисника за функције које захтевају здравствене податке и, за техничке податке неопходне за безбедност, дијагностику и одржавање апликације, на извршењу услуге и/или легитимном интересу руковаоца, у границама предвиђеним GDPR-ом." },
						{ type: "h2", text: "Дељење података" },
						{ type: "p", text: "Подаци се не продају. Неке податке могу обрађивати технички добављачи неопходни за рад, безбедност, дијагностику, обавештења и оглашавање апликације." },
						{ type: "p", text: "Подаци се могу делити само између корисника путем система неговатеља, уз изричит пристанак корисника." },
						{ type: "p", text: "Неговатељ може само да прегледа податке које корисник одлучи да подели и не може да их мења нити да приступа другим неовлашћеним подацима." },
						{ type: "p", text: "Технички добављачи укључују, у зависности од коришћених функција, Expo, Google Mobile Ads (AdMob), Sentry и инфраструктурне услуге. Ови добављачи обрађују податке у складу са својим политикама, условима и применљивим гаранцијама." },
						{ type: "h2", text: "Безбедност" },
						{ type: "p", text: "Подаци се чувају на AWS серверима у Немачкој (eu-central-1) и заштићени су одговарајућим техничким и организационим мерама, укључујући шифровање података када је применљиво." },
						{ type: "p", text: "Комуникација између апликације RememberTo и сервера одвија се преко безбедне HTTPS везе." },
						{ type: "h2", text: "Пренос података" },
						{ type: "p", text: "Главни подаци апликације обрађују се на серверима који се налазе у Европској унији. Неке техничке услуге трећих страна, као што су push обавештења, оглашавање, дијагностика грешака или инфраструктурне услуге, могу подразумевати обраду од стране њихових добављача, укључујући и ван Европског економског простора када је то потребно, у складу са њиховим политикама приватности, условима услуге и применљивим гаранцијама." },
						{ type: "h2", text: "Спољне услуге" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications за слање push обавештења;",
								"Google Mobile Ads (AdMob) за приказивање огласа;",
								"инфраструктурне услуге неопходне за рад апликације и backend-а;",
								"Sentry (Functional Software, Inc.) за праћење грешака, падова и перформанси апликације.",
							],
						},
						{ type: "h2", text: "Оглашавање и пристанак за огласе" },
						{ type: "p", text: "Апликација може приказивати огласе преко Google Mobile Ads (AdMob). За рад огласа могу се обрађивати технички подаци, идентификатори уређаја или рекламни идентификатори, у складу са подешавањима уређаја, преференцијама корисника и применљивим правилима." },
						{ type: "p", text: "Огласи могу бити персонализовани или неперсонализовани на основу преференција корисника. За кориснике у Европском економском простору, Уједињеном Краљевству и Швајцарској, RememberTo користи механизме пристанка које предвиђа Google, укључујући User Messaging Platform (UMP), ради прикупљања или ажурирања преференција у вези са огласима." },
						{ type: "p", text: "Корисник може изменити преференције у вези са огласима кроз подешавања доступна у апликацији, када су предвиђена." },
						{ type: "h2", text: "Чување података" },
						{ type: "p", text: "Подаци се чувају током трајања налога и бришу се када се налог избрише." },
						{ type: "p", text: "Корисник може затражити трајно брисање налога и података директно из апликације или контактирањем rememberto.info@gmail.com." },
						{ type: "h2", text: "Медицинско одрицање од одговорности" },
						{ type: "p", text: "RememberTo не пружа медицинске савете и не замењује мишљење лекара или здравственог радника." },
						{ type: "h2", text: "Дијагностика, падови и перформансе" },
						{ type: "p", text: "RememberTo користи Sentry за откривање грешака, падова и проблема са перформансама, побољшање стабилности и безбедности апликације и брже реаговање на неисправности." },
						{ type: "p", text: "Дијагностички догађаји могу садржати техничке информације као што су модел уређаја, оперативни систем, верзија апликације, временска ознака, stack trace, тип грешке, укључена област или екран и технички breadcrumbs корисни за реконструкцију проблема." },
						{ type: "p", text: "Sentry је конфигурисан са sendDefaultPii: false и филтерима на страни апликације како се име, email, ID корисника, cookies, header-и, тело захтева или query strings не би аутоматски слали. Session Replay, screenshot-ови и намерно слање здравствених садржаја нису омогућени." },
						{ type: "p", text: "Дијагностички догађаји се чувају само у техничке сврхе, ради безбедности, одржавања и подршке, у складу са подешавањима чувања применљивим на Sentry пројекат и оперативним потребама." },
						{ type: "h2", text: "Права корисника" },
						{
							type: "ul",
							items: [
								"приступи својим подацима",
								"измени их",
								"избрише их",
								"повуче пристанак",
								"уложи приговор на обраду",
								"затражи ограничење обраде",
								"затражи преносивост података",
							],
						},
						{ type: "h2", text: "Минимална старост" },
						{ type: "p", text: "Апликација је намењена корисницима узраста од 16 година или више." },
						{ type: "h2", text: "Руковалац подацима" },
						{ type: "contact", lines: ["Gaetano Gelo", "Италија", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "Измене" },
						{ type: "p", text: "Ова политика може бити ажурирана током времена. Корисници ће бити обавештени у случају значајних измена." },
					],
				},
				terms: {
					documentTitle: "Услови коришћења - RememberTo",
					title: "Услови коришћења - RememberTo",
					updatedLabel: "Последње ажурирање:",
					updated: "јун 2026.",
					blocks: [
						{ type: "p", text: "Коришћењем RememberTo прихватате следеће услове." },
						{ type: "h2", text: "Коришћење апликације" },
						{ type: "p", text: "Апликација се пружа „таква каква јесте“. Корисник је одговоран за њено коришћење." },
						{ type: "h2", text: "Услуга" },
						{ type: "p", text: "Обавештења можда неће увек бити поуздана, правовремена или загарантована." },
						{ type: "h2", text: "Здравствени садржаји" },
						{ type: "p", text: "Апликација не замењује лекаре или здравствене раднике." },
						{ type: "h2", text: "Одговорност корисника" },
						{ type: "p", text: "Корисник је одговоран за правилно управљање својим терапијама и узимање лекова." },
						{ type: "h2", text: "Неговатељ" },
						{ type: "p", text: "Приступ подацима од стране неговатеља врши се само уз изричит пристанак корисника." },
						{ type: "p", text: "Неговатељ може само да прегледа податке које је корисник поделио и не може да их мења." },
						{ type: "p", text: "Корисник може у било ком тренутку опозвати приступ својим подацима." },
						{ type: "h2", text: "Ограничење одговорности" },
						{ type: "p", text: "Програмер није одговоран за грешке, прекиде услуге, кашњења обавештења или губитак података." },
						{ type: "h2", text: "PDF извоз" },
						{ type: "p", text: "Апликација може омогућити извоз здравствених података у PDF формату." },
						{ type: "p", text: "Корисник је одговоран за чување и евентуално дељење извезених докумената." },
						{ type: "h2", text: "Здравствени подаци и пристанак" },
						{ type: "p", text: "Коришћење здравствених функција апликације захтева изричит пристанак корисника на обраду здравствених података неопходних за рад RememberTo, укључујући лекове, терапије, подсетнике, здравствене термине и податке унете у лични клинички дневник." },
						{ type: "p", text: "Ти подаци су неопходни за коришћење здравствених функција апликације. Корисник може повући пристанак или избрисати свој налог на начин наведен у Политици приватности и на страници посвећеној брисању налога." },
						{ type: "h2", text: "Оглашавање" },
						{ type: "p", text: "Апликација може приказивати огласе преко Google Mobile Ads (AdMob). Персонализовани огласи се приказују само у складу са преференцијама корисника и преко механизама пристанка доступних у апликацији." },
						{ type: "p", text: "Корисник може изменити преференције у вези са огласима у подешавањима апликације, када су доступна." },
						{ type: "h2", text: "Дијагностика и стабилност" },
						{ type: "p", text: "Апликација може користити техничке алате као што је Sentry за бележење грешака, падова и проблема са перформансама ради одржавања, заштите и побољшања услуге." },
						{ type: "p", text: "Обрада дијагностичких података описана је у Политици приватности." },
						{ type: "h2", text: "Контакти" },
						{ type: "contact", lines: ["Gaetano Gelo", "Италија", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "Брисање налога - RememberTo",
					title: "Брисање налога - RememberTo",
					updatedLabel: "Последње ажурирање:",
					updated: "јун 2026.",
					blocks: [
						{ type: "p", text: "Ова страница објашњава како корисник може да избрише свој RememberTo налог и повезане податке." },
						{ type: "p", text: "Ова страница је јавни веб ресурс за захтеве за брисање налога и повезаних података, укључујући и потребе услова Google Play-а." },
						{ type: "h2", text: "Како избрисати налог" },
						{ type: "p", text: "Корисник може самостално избрисати свој налог директно из апликације RememberTo следећи овај пут:" },
						{ type: "p", strong: "Подешавања → Брисање налога" },
						{ type: "h2", text: "Потврда брисања" },
						{ type: "p", text: "Да би се избегла случајна брисања, RememberTo захтева изричиту потврду пре трајног брисања налога." },
						{ type: "p", text: "Корисник мора унети текст потврде који апликација захтева. Тек након ове потврде налог и повезани подаци се аутоматски бришу." },
						{ type: "h2", text: "Време брисања" },
						{ type: "p", text: "Брисање налога је тренутно након потврде корисника." },
						{ type: "h2", text: "Избрисани подаци" },
						{ type: "p", text: "Брисањем налога бришу се сви подаци повезани са ID-јем корисника који захтева брисање." },
						{ type: "p", text: "Избрисани подаци могу, на пример, укључивати:" },
						{
							type: "ul",
							items: [
								"податке корисничког налога;",
								"податке профила;",
								"лекове, терапије и подсетнике;",
								"здравствене термине;",
								"податке унете у лични клинички дневник;",
								"податке о неговатељима повезаним са налогом;",
								"токене који се користе за слање push обавештења;",
								"друге податке повезане са корисничким ID-јем у оквиру услуге.",
							],
						},
						{ type: "h2", text: "Задржани подаци" },
						{ type: "p", text: "RememberTo не чува податке повезане са налогом након брисања." },
						{ type: "h2", text: "Извезени PDF документи" },
						{ type: "p", text: "Апликација може омогућити извоз здравствених података у PDF формату. Сви PDF документи које је корисник већ извезао, сачувао или поделио не могу се избрисати из апликације јер су ван контроле RememberTo." },
						{ type: "h2", text: "Неговатељ" },
						{ type: "p", text: "У случају брисања налога, бришу се и подаци и везе повезане са дељењем са евентуалним неговатељима, у границама података повезаних са ID-јем избрисаног корисника." },
						{ type: "h2", text: "Подршка и захтев путем email-а" },
						{ type: "p", text: "Ако корисник не може да приступи апликацији или не може да заврши поступак брисања унутар RememberTo, може контактирати подршку на email адресу наведену испод." },
						{ type: "p", text: "Захтев мора бити послат са email адресе повезане са RememberTo налогом или мора садржати довољно информација за проверу идентитета корисника пре брисања." },
						{ type: "h2", text: "Контакти" },
						{ type: "contact", lines: ["Gaetano Gelo", "Италија", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		zh: {
			ui: {
				languageLabel: "语言",
				backHome: "返回首页",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - 法律信息",
					title: "RememberTo",
					description:
						"用于管理提醒、药物治疗、医疗预约和个人临床日记的应用。",
					cards: {
						privacy: "隐私政策",
						terms: "条款与条件",
						delete: "删除账户",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "隐私政策 - RememberTo",
					title: "隐私政策 - RememberTo",
					updatedLabel: "最后更新：",
					updated: "2026 年 6 月",
					blocks: [
						{ type: "p", text: "RememberTo 是一款用于管理提醒、药物治疗、医疗预约，并通过临床日记进行个人监测的应用。" },
						{ type: "h2", text: "收集的数据" },
						{
							type: "ul",
							items: [
								"账户数据：姓名、电子邮箱、密码、出生日期、性别、国籍、语言",
								"可选数据：电话号码",
								"健康数据：药物、治疗、提醒、医疗预约、个人临床日记、生命体征、症状、副作用、血糖数据和健康备注",
								"技术数据：通知功能所需的设备标识符、诊断数据、设备信息、操作系统、应用版本、错误事件、崩溃和性能信息",
								"诊断数据：错误、崩溃、stack trace、涉及的应用屏幕或区域、时间戳、应用版本、操作系统、设备型号，以及识别和修复故障所需的其他技术信息。我们不会故意向 Sentry 发送健康内容。",
							],
						},
						{ type: "h2", text: "处理目的" },
						{
							type: "ul",
							items: [
								"应用运行",
								"提醒和治疗管理",
								"推送通知",
								"通过临床日记进行个人健康监测",
								"以 PDF 导出健康数据",
								"护理者管理，以及授权用户之间的数据共享",
								"通过 Google Mobile Ads 展示广告",
								"管理隐私偏好和广告同意",
								"通过 Sentry 监测错误、崩溃和性能，用于应用安全、维护和改进",
							],
						},
						{ type: "h2", text: "法律依据" },
						{ type: "p", text: "对于需要健康数据的功能，数据处理基于用户的明确同意；对于应用安全、诊断和维护所需的技术数据，处理基于服务履行和/或数据控制者的合法利益，并在 GDPR 规定的范围内进行。" },
						{ type: "h2", text: "数据共享" },
						{ type: "p", text: "数据不会被出售。部分数据可能由应用运行、安全、诊断、通知和广告所必需的技术服务提供商处理。" },
						{ type: "p", text: "数据只能在用户明确同意的情况下，通过护理者系统在用户之间共享。" },
						{ type: "p", text: "护理者只能查看用户决定共享的数据，不能修改这些数据，也不能访问其他未经授权的数据。" },
						{ type: "p", text: "根据使用的功能，技术服务提供商包括 Expo、Google Mobile Ads (AdMob)、Sentry 和基础设施服务。这些提供商按照其各自的政策、条款和适用保障处理数据。" },
						{ type: "h2", text: "安全" },
						{ type: "p", text: "数据存储在德国的 AWS 服务器（eu-central-1）上，并通过适当的技术和组织措施加以保护，包括在适用情况下进行数据加密。" },
						{ type: "p", text: "RememberTo 应用与服务器之间的通信通过安全的 HTTPS 连接进行。" },
						{ type: "h2", text: "数据传输" },
						{ type: "p", text: "应用的主要数据在位于欧盟的服务器上处理。某些第三方技术服务，例如推送通知、广告、错误诊断或基础设施服务，在必要时可能由各自提供商处理，包括在欧洲经济区以外处理，并遵循其隐私政策、服务条款和适用保障。" },
						{ type: "h2", text: "外部服务" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications，用于发送推送通知；",
								"Google Mobile Ads (AdMob)，用于展示广告；",
								"应用和后端运行所需的基础设施服务；",
								"Sentry (Functional Software, Inc.)，用于监测应用错误、崩溃和性能。",
							],
						},
						{ type: "h2", text: "广告和广告同意" },
						{ type: "p", text: "应用可能通过 Google Mobile Ads (AdMob) 展示广告。为了广告运行，可能会根据设备设置、用户表达的偏好和适用规则处理技术数据、设备标识符或广告标识符。" },
						{ type: "p", text: "广告可根据用户表达的偏好进行个性化或非个性化展示。对于欧洲经济区、英国和瑞士的用户，RememberTo 使用 Google 规定的同意机制，包括 User Messaging Platform (UMP)，以收集或更新广告相关偏好。" },
						{ type: "p", text: "用户可以在应用提供的设置中修改广告偏好。" },
						{ type: "h2", text: "数据保留" },
						{ type: "p", text: "数据会在账户存续期间保留，并在账户删除时删除。" },
						{ type: "p", text: "用户可以直接通过应用请求永久删除账户和数据，或联系 rememberto.info@gmail.com。" },
						{ type: "h2", text: "医疗免责声明" },
						{ type: "p", text: "RememberTo 不提供医疗建议，也不能替代医生或医疗专业人员的意见。" },
						{ type: "h2", text: "诊断、崩溃和性能" },
						{ type: "p", text: "RememberTo 使用 Sentry 检测错误、崩溃和性能问题，提高应用稳定性和安全性，并更快处理故障。" },
						{ type: "p", text: "诊断事件可能包括设备型号、操作系统、应用版本、时间戳、stack trace、错误类型、涉及的区域或屏幕，以及有助于重建问题的技术 breadcrumbs 等技术信息。" },
						{ type: "p", text: "Sentry 配置为 sendDefaultPii: false，并使用应用端过滤器，以免自动发送姓名、电子邮箱、用户 ID、cookie、header、请求正文或 query string。未启用 Session Replay、截图或有意发送健康内容。" },
						{ type: "p", text: "诊断事件仅为技术、安全、维护和支持目的保留，并按照 Sentry 项目适用的保留设置和运营需要进行处理。" },
						{ type: "h2", text: "用户权利" },
						{
							type: "ul",
							items: [
								"访问自己的数据",
								"修改数据",
								"删除数据",
								"撤回同意",
								"反对处理",
								"要求限制处理",
								"要求数据可携带性",
							],
						},
						{ type: "h2", text: "最低年龄" },
						{ type: "p", text: "本应用面向 16 岁及以上用户。" },
						{ type: "h2", text: "数据控制者" },
						{ type: "contact", lines: ["Gaetano Gelo", "意大利", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "变更" },
						{ type: "p", text: "本政策可能会不时更新。如有重大变更，将通知用户。" },
					],
				},
				terms: {
					documentTitle: "条款与条件 - RememberTo",
					title: "条款与条件 - RememberTo",
					updatedLabel: "最后更新：",
					updated: "2026 年 6 月",
					blocks: [
						{ type: "p", text: "使用 RememberTo 即表示你接受以下条款。" },
						{ type: "h2", text: "应用使用" },
						{ type: "p", text: "本应用按“现状”提供。用户对其使用负责。" },
						{ type: "h2", text: "服务" },
						{ type: "p", text: "通知可能并非始终可靠、及时或得到保证。" },
						{ type: "h2", text: "健康内容" },
						{ type: "p", text: "本应用不能替代医生或医疗专业人员。" },
						{ type: "h2", text: "用户责任" },
						{ type: "p", text: "用户负责正确管理自己的治疗并按要求服用药物。" },
						{ type: "h2", text: "护理者" },
						{ type: "p", text: "护理者访问数据仅在用户明确同意后进行。" },
						{ type: "p", text: "护理者只能查看用户共享的数据，不能修改这些数据。" },
						{ type: "p", text: "用户可以随时撤销对其数据的访问权限。" },
						{ type: "h2", text: "责任限制" },
						{ type: "p", text: "开发者不对错误、服务中断、通知延迟或数据丢失负责。" },
						{ type: "h2", text: "PDF 导出" },
						{ type: "p", text: "应用可以允许以 PDF 格式导出健康数据。" },
						{ type: "p", text: "用户负责保存并酌情共享导出的文件。" },
						{ type: "h2", text: "健康数据和同意" },
						{ type: "p", text: "使用应用的健康功能需要用户明确同意处理 RememberTo 运行所需的健康数据，包括药物、治疗、提醒、医疗预约以及输入个人临床日记的数据。" },
						{ type: "p", text: "这些数据是使用应用健康功能所必需的。用户可以按照隐私政策和账户删除页面中说明的方式撤回同意或删除自己的账户。" },
						{ type: "h2", text: "广告" },
						{ type: "p", text: "应用可能通过 Google Mobile Ads (AdMob) 展示广告。个性化广告仅根据用户表达的偏好，并通过应用中可用的同意机制展示。" },
						{ type: "p", text: "用户可以在应用设置中修改广告偏好，若该设置可用。" },
						{ type: "h2", text: "诊断和稳定性" },
						{ type: "p", text: "应用可能使用 Sentry 等技术工具记录错误、崩溃和性能问题，以维护、保护和改进服务。" },
						{ type: "p", text: "诊断数据的处理在隐私政策中说明。" },
						{ type: "h2", text: "联系方式" },
						{ type: "contact", lines: ["Gaetano Gelo", "意大利", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "删除账户 - RememberTo",
					title: "删除账户 - RememberTo",
					updatedLabel: "最后更新：",
					updated: "2026 年 6 月",
					blocks: [
						{ type: "p", text: "本页面说明用户如何删除自己的 RememberTo 账户及相关数据。" },
						{ type: "p", text: "本页面作为公开网页资源，用于账户及相关数据删除请求，也用于满足 Google Play 的相关要求。" },
						{ type: "h2", text: "如何删除账户" },
						{ type: "p", text: "用户可以直接在 RememberTo 应用中按照以下路径自行删除账户：" },
						{ type: "p", strong: "设置 → 删除账户" },
						{ type: "h2", text: "删除确认" },
						{ type: "p", text: "为避免误删，RememberTo 在永久删除账户前要求用户明确确认。" },
						{ type: "p", text: "用户必须输入应用要求的确认文本。只有在确认后，账户和相关数据才会被自动删除。" },
						{ type: "h2", text: "删除时间" },
						{ type: "p", text: "用户确认后，账户会立即删除。" },
						{ type: "h2", text: "删除的数据" },
						{ type: "p", text: "删除账户时，将删除与请求删除的用户 ID 关联的所有数据。" },
						{ type: "p", text: "删除的数据可包括但不限于：" },
						{
							type: "ul",
							items: [
								"用户账户数据；",
								"个人资料数据；",
								"药物、治疗和提醒；",
								"医疗预约；",
								"输入个人临床日记的数据；",
								"与账户关联的护理者相关数据；",
								"用于发送推送通知的 token；",
								"服务内与用户 ID 关联的其他数据。",
							],
						},
						{ type: "h2", text: "保留的数据" },
						{ type: "p", text: "账户删除后，RememberTo 不会保留与该账户关联的数据。" },
						{ type: "h2", text: "已导出的 PDF" },
						{ type: "p", text: "应用可以允许以 PDF 格式导出健康数据。用户已经导出、保存或共享的 PDF 文件无法由应用删除，因为它们已不在 RememberTo 的控制范围内。" },
						{ type: "h2", text: "护理者" },
						{ type: "p", text: "账户删除时，与任何护理者共享相关的数据和关联也会被删除，但仅限于与被删除用户 ID 相关的数据。" },
						{ type: "h2", text: "支持和电子邮件请求" },
						{ type: "p", text: "如果用户无法访问应用或无法在 RememberTo 内完成删除流程，可以通过以下电子邮箱联系支持。" },
						{ type: "p", text: "请求必须从与 RememberTo 账户关联的电子邮箱发送，或包含足够的信息以便在删除前验证用户身份。" },
						{ type: "h2", text: "联系方式" },
						{ type: "contact", lines: ["Gaetano Gelo", "意大利", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		ja: {
			ui: {
				languageLabel: "言語",
				backHome: "ホームへ戻る",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - 法的情報",
					title: "RememberTo",
					description:
						"リマインダー、服薬治療、医療予約、個人の臨床日記を管理するためのアプリです。",
					cards: {
						privacy: "プライバシーポリシー",
						terms: "利用規約",
						delete: "アカウント削除",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "プライバシーポリシー - RememberTo",
					title: "プライバシーポリシー - RememberTo",
					updatedLabel: "最終更新:",
					updated: "2026年6月",
					blocks: [
						{ type: "p", text: "RememberTo は、リマインダー、服薬治療、医療予約、臨床日記による個人モニタリングを管理するためのアプリです。" },
						{ type: "h2", text: "収集するデータ" },
						{
							type: "ul",
							items: [
								"アカウントデータ: 氏名、メールアドレス、パスワード、生年月日、性別、国籍、言語",
								"任意データ: 電話番号",
								"健康データ: 薬、治療、リマインダー、医療予約、個人の臨床日記、バイタル値、症状、副作用、血糖データ、健康メモ",
								"技術データ: 通知機能に必要なデバイス識別子、診断データ、デバイス、OS、アプリバージョン、エラーイベント、クラッシュ、パフォーマンスに関する情報",
								"診断データ: エラー、クラッシュ、stack trace、関連するアプリ画面または領域、タイムスタンプ、アプリバージョン、OS、デバイスモデル、および不具合の特定と修正に必要なその他の技術情報。健康に関する内容を意図的に Sentry に送信することはありません。",
							],
						},
						{ type: "h2", text: "処理の目的" },
						{
							type: "ul",
							items: [
								"アプリの動作",
								"リマインダーと治療の管理",
								"プッシュ通知",
								"臨床日記による個人の健康モニタリング",
								"健康データの PDF エクスポート",
								"介護者管理および許可された利用者間でのデータ共有",
								"Google Mobile Ads による広告表示",
								"プライバシー設定および広告同意の管理",
								"Sentry によるエラー、クラッシュ、パフォーマンスの監視。アプリの安全性、保守、改善のために行います",
							],
						},
						{ type: "h2", text: "法的根拠" },
						{ type: "p", text: "健康データを必要とする機能については利用者の明示的な同意に基づき、アプリの安全性、診断、保守に必要な技術データについてはサービスの履行および/または管理者の正当な利益に基づき、GDPR が定める範囲内でデータを処理します。" },
						{ type: "h2", text: "データ共有" },
						{ type: "p", text: "データは販売されません。一部のデータは、アプリの動作、安全性、診断、通知、広告に必要な技術提供者によって処理される場合があります。" },
						{ type: "p", text: "データは、利用者の明示的な同意がある場合に限り、介護者システムを通じて利用者間で共有されます。" },
						{ type: "p", text: "介護者は、利用者が共有すると決めたデータのみ閲覧でき、変更したり、許可されていない他のデータへアクセスしたりすることはできません。" },
						{ type: "p", text: "利用する機能に応じて、技術提供者には Expo、Google Mobile Ads (AdMob)、Sentry、インフラサービスが含まれます。これらの提供者は、それぞれのポリシー、規約、適用される保護措置に従ってデータを処理します。" },
						{ type: "h2", text: "セキュリティ" },
						{ type: "p", text: "データはドイツの AWS サーバー (eu-central-1) に保存され、適用される場合のデータ暗号化を含む適切な技術的および組織的措置により保護されます。" },
						{ type: "p", text: "RememberTo アプリとサーバー間の通信は、安全な HTTPS 接続を通じて行われます。" },
						{ type: "h2", text: "データ移転" },
						{ type: "p", text: "アプリの主要データは欧州連合内のサーバーで処理されます。プッシュ通知、広告、エラー診断、インフラサービスなど一部の第三者技術サービスは、必要に応じて欧州経済領域外を含む各提供者による処理を伴う場合があり、それぞれのプライバシーポリシー、利用規約、適用される保護措置に従います。" },
						{ type: "h2", text: "外部サービス" },
						{
							type: "ul",
							items: [
								"プッシュ通知送信用の Expo Push Notifications;",
								"広告表示用の Google Mobile Ads (AdMob);",
								"アプリおよびバックエンドの動作に必要なインフラサービス;",
								"アプリのエラー、クラッシュ、パフォーマンス監視用の Sentry (Functional Software, Inc.)。",
							],
						},
						{ type: "h2", text: "広告と広告同意" },
						{ type: "p", text: "アプリは Google Mobile Ads (AdMob) を通じて広告を表示する場合があります。広告の動作のため、デバイス設定、利用者の選択、適用される規則に従って、技術データ、デバイス識別子、広告識別子が処理されることがあります。" },
						{ type: "p", text: "広告は、利用者の選択に応じてパーソナライズまたは非パーソナライズされる場合があります。欧州経済領域、英国、スイスの利用者については、RememberTo は User Messaging Platform (UMP) を含む Google の同意メカニズムを使用して、広告に関する設定を収集または更新します。" },
						{ type: "p", text: "利用者は、アプリ内で提供される設定から広告に関する設定を変更できます。" },
						{ type: "h2", text: "データ保持" },
						{ type: "p", text: "データはアカウントが存在する期間保持され、アカウント削除時に削除されます。" },
						{ type: "p", text: "利用者は、アプリから直接、または rememberto.info@gmail.com に連絡することで、アカウントとデータの完全削除を依頼できます。" },
						{ type: "h2", text: "医療免責事項" },
						{ type: "p", text: "RememberTo は医療助言を提供せず、医師または医療専門家の意見に代わるものではありません。" },
						{ type: "h2", text: "診断、クラッシュ、パフォーマンス" },
						{ type: "p", text: "RememberTo は Sentry を使用してエラー、クラッシュ、パフォーマンス問題を検出し、アプリの安定性と安全性を向上させ、不具合へより迅速に対応します。" },
						{ type: "p", text: "診断イベントには、デバイスモデル、OS、アプリバージョン、タイムスタンプ、stack trace、エラー種別、関連する領域または画面、問題再現に役立つ技術的 breadcrumbs などの技術情報が含まれる場合があります。" },
						{ type: "p", text: "Sentry は sendDefaultPii: false とアプリ側フィルターで設定されており、氏名、メールアドレス、ユーザー ID、cookie、header、リクエスト本文、query string が自動送信されないようにしています。Session Replay、スクリーンショット、健康内容の意図的送信は有効化されていません。" },
						{ type: "p", text: "診断イベントは、Sentry プロジェクトに適用される保持設定および運用上の必要性に従い、技術、安全、保守、サポート目的に限って保持されます。" },
						{ type: "h2", text: "利用者の権利" },
						{
							type: "ul",
							items: [
								"自分のデータへアクセスする",
								"データを修正する",
								"データを削除する",
								"同意を撤回する",
								"処理に異議を唱える",
								"処理の制限を求める",
								"データポータビリティを求める",
							],
						},
						{ type: "h2", text: "最低年齢" },
						{ type: "p", text: "本アプリは 16 歳以上の利用者を対象としています。" },
						{ type: "h2", text: "データ管理者" },
						{ type: "contact", lines: ["Gaetano Gelo", "イタリア", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "変更" },
						{ type: "p", text: "本ポリシーは随時更新される場合があります。重要な変更がある場合、利用者に通知されます。" },
					],
				},
				terms: {
					documentTitle: "利用規約 - RememberTo",
					title: "利用規約 - RememberTo",
					updatedLabel: "最終更新:",
					updated: "2026年6月",
					blocks: [
						{ type: "p", text: "RememberTo を使用することで、以下の規約に同意したものとみなされます。" },
						{ type: "h2", text: "アプリの使用" },
						{ type: "p", text: "本アプリは「現状有姿」で提供されます。利用者はその使用について責任を負います。" },
						{ type: "h2", text: "サービス" },
						{ type: "p", text: "通知は常に信頼できる、時間通りである、または保証されるとは限りません。" },
						{ type: "h2", text: "健康コンテンツ" },
						{ type: "p", text: "本アプリは医師または医療専門家に代わるものではありません。" },
						{ type: "h2", text: "利用者の責任" },
						{ type: "p", text: "利用者は、自身の治療管理および薬の服用について責任を負います。" },
						{ type: "h2", text: "介護者" },
						{ type: "p", text: "介護者によるデータアクセスは、利用者の明示的な同意がある場合にのみ行われます。" },
						{ type: "p", text: "介護者は利用者が共有したデータのみ閲覧でき、変更することはできません。" },
						{ type: "p", text: "利用者はいつでも自身のデータへのアクセスを取り消すことができます。" },
						{ type: "h2", text: "責任の制限" },
						{ type: "p", text: "開発者は、エラー、サービス中断、通知遅延、データ損失について責任を負いません。" },
						{ type: "h2", text: "PDF エクスポート" },
						{ type: "p", text: "アプリは健康データを PDF 形式でエクスポートできる場合があります。" },
						{ type: "p", text: "利用者は、エクスポートした文書の保存および必要に応じた共有について責任を負います。" },
						{ type: "h2", text: "健康データと同意" },
						{ type: "p", text: "アプリの健康機能を使用するには、薬、治療、リマインダー、医療予約、個人の臨床日記に入力されたデータを含む、RememberTo の動作に必要な健康データの処理について、利用者の明示的な同意が必要です。" },
						{ type: "p", text: "これらのデータは、アプリの健康機能を使用するために必要です。利用者は、プライバシーポリシーおよびアカウント削除ページに記載された方法に従って、同意を撤回したりアカウントを削除したりできます。" },
						{ type: "h2", text: "広告" },
						{ type: "p", text: "アプリは Google Mobile Ads (AdMob) を通じて広告を表示する場合があります。パーソナライズ広告は、利用者の選択およびアプリ内で利用可能な同意メカニズムに従ってのみ表示されます。" },
						{ type: "p", text: "利用者は、利用可能な場合、アプリ設定から広告に関する設定を変更できます。" },
						{ type: "h2", text: "診断と安定性" },
						{ type: "p", text: "アプリは、サービスの保守、保護、改善のため、Sentry などの技術ツールを使用してエラー、クラッシュ、パフォーマンス問題を記録する場合があります。" },
						{ type: "p", text: "診断データの処理はプライバシーポリシーに記載されています。" },
						{ type: "h2", text: "連絡先" },
						{ type: "contact", lines: ["Gaetano Gelo", "イタリア", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "アカウント削除 - RememberTo",
					title: "アカウント削除 - RememberTo",
					updatedLabel: "最終更新:",
					updated: "2026年6月",
					blocks: [
						{ type: "p", text: "このページでは、利用者が RememberTo アカウントおよび関連データを削除する方法を説明します。" },
						{ type: "p", text: "このページは、Google Play の要件への対応を含め、アカウントおよび関連データの削除リクエスト用の公開ウェブリソースとして提供されます。" },
						{ type: "h2", text: "アカウントの削除方法" },
						{ type: "p", text: "利用者は、RememberTo アプリ内で次の手順に従って、自分でアカウントを削除できます。" },
						{ type: "p", strong: "設定 → アカウント削除" },
						{ type: "h2", text: "削除の確認" },
						{ type: "p", text: "誤削除を防ぐため、RememberTo はアカウントを完全に削除する前に明示的な確認を求めます。" },
						{ type: "p", text: "利用者はアプリが求める確認テキストを入力する必要があります。この確認後にのみ、アカウントおよび関連データが自動的に削除されます。" },
						{ type: "h2", text: "削除のタイミング" },
						{ type: "p", text: "アカウント削除は利用者の確認後すぐに実行されます。" },
						{ type: "h2", text: "削除されるデータ" },
						{ type: "p", text: "アカウントを削除すると、削除を要求した利用者 ID に関連するすべてのデータが削除されます。" },
						{ type: "p", text: "削除されるデータには、例として以下が含まれる場合があります。" },
						{
							type: "ul",
							items: [
								"利用者アカウントデータ;",
								"プロフィールデータ;",
								"薬、治療、リマインダー;",
								"医療予約;",
								"個人の臨床日記に入力されたデータ;",
								"アカウントに紐づく介護者に関するデータ;",
								"プッシュ通知送信に使用される token;",
								"サービス内で利用者 ID に関連するその他のデータ。",
							],
						},
						{ type: "h2", text: "保持されるデータ" },
						{ type: "p", text: "RememberTo は、削除後にアカウントに関連するデータを保持しません。" },
						{ type: "h2", text: "エクスポート済み PDF" },
						{ type: "p", text: "アプリは健康データを PDF 形式でエクスポートできる場合があります。利用者がすでにエクスポート、保存、共有した PDF 文書は RememberTo の管理外にあるため、アプリから削除することはできません。" },
						{ type: "h2", text: "介護者" },
						{ type: "p", text: "アカウントを削除すると、介護者との共有に関連するデータおよび関連付けも、削除された利用者 ID に関連する範囲で削除されます。" },
						{ type: "h2", text: "サポートとメールでの依頼" },
						{ type: "p", text: "利用者がアプリにアクセスできない、または RememberTo 内で削除手続きを完了できない場合は、下記のメールアドレスでサポートへ連絡できます。" },
						{ type: "p", text: "依頼は RememberTo アカウントに関連付けられたメールアドレスから送信するか、削除前に利用者の本人確認ができる十分な情報を含める必要があります。" },
						{ type: "h2", text: "連絡先" },
						{ type: "contact", lines: ["Gaetano Gelo", "イタリア", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},

		ar: {
			ui: {
				languageLabel: "اللغة",
				backHome: "العودة إلى الصفحة الرئيسية",
			},
			pages: {
				home: {
					documentTitle: "RememberTo - المعلومات القانونية",
					title: "RememberTo",
					description:
						"تطبيق لإدارة التذكيرات والعلاجات الدوائية والمواعيد الصحية واليوميات السريرية الشخصية.",
					cards: {
						privacy: "سياسة الخصوصية",
						terms: "الشروط والأحكام",
						delete: "حذف الحساب",
					},
					footer: "© 2026 RememberTo - Gaetano Gelo",
				},
				privacy: {
					documentTitle: "سياسة الخصوصية - RememberTo",
					title: "سياسة الخصوصية - RememberTo",
					updatedLabel: "آخر تحديث:",
					updated: "يونيو 2026",
					blocks: [
						{ type: "p", text: "RememberTo هو تطبيق مخصص لإدارة التذكيرات والعلاجات الدوائية والمواعيد الصحية والمتابعة الشخصية من خلال يوميات سريرية." },
						{ type: "h2", text: "البيانات التي يتم جمعها" },
						{
							type: "ul",
							items: [
								"بيانات الحساب: الاسم، البريد الإلكتروني، كلمة المرور، تاريخ الميلاد، الجنس، الجنسية، اللغة",
								"بيانات اختيارية: رقم الهاتف",
								"بيانات صحية: الأدوية، العلاجات، التذكيرات، المواعيد الصحية، اليوميات السريرية الشخصية، المؤشرات الحيوية، الأعراض، الآثار الجانبية، بيانات السكر في الدم والملاحظات الصحية",
								"بيانات تقنية: معرفات الجهاز اللازمة لعمل الإشعارات، بيانات التشخيص، معلومات عن الجهاز ونظام التشغيل وإصدار التطبيق وأحداث الأخطاء والأعطال والأداء",
								"بيانات تشخيصية: الأخطاء، الأعطال، stack trace، الشاشة أو منطقة التطبيق المعنية، الطابع الزمني، إصدار التطبيق، نظام التشغيل، طراز الجهاز ومعلومات تقنية أخرى لازمة لتحديد الأعطال وتصحيحها. لا نرسل عمدا محتوى صحيا إلى Sentry.",
							],
						},
						{ type: "h2", text: "أغراض المعالجة" },
						{
							type: "ul",
							items: [
								"تشغيل التطبيق",
								"إدارة التذكيرات والعلاجات",
								"الإشعارات الفورية",
								"المتابعة الصحية الشخصية من خلال اليوميات السريرية",
								"تصدير بيانات الصحة بصيغة PDF",
								"إدارة مقدم الرعاية ومشاركة البيانات بين المستخدمين المصرح لهم",
								"عرض الإعلانات عبر Google Mobile Ads",
								"إدارة تفضيلات الخصوصية والموافقة على الإعلانات",
								"مراقبة الأخطاء والأعطال والأداء عبر Sentry لأغراض الأمان والصيانة وتحسين التطبيق",
							],
						},
						{ type: "h2", text: "الأساس القانوني" },
						{ type: "p", text: "تعتمد معالجة البيانات على موافقة المستخدم الصريحة بالنسبة للوظائف التي تتطلب بيانات صحية، وبالنسبة للبيانات التقنية اللازمة لأمان التطبيق وتشخيصه وصيانته، على تنفيذ الخدمة و/أو المصلحة المشروعة لمراقب البيانات، ضمن الحدود التي ينص عليها GDPR." },
						{ type: "h2", text: "مشاركة البيانات" },
						{ type: "p", text: "لا يتم بيع البيانات. قد تتم معالجة بعض البيانات بواسطة مزودين تقنيين لازمين لتشغيل التطبيق وأمانه وتشخيصه وإشعاراته وإعلاناته." },
						{ type: "p", text: "لا يمكن مشاركة البيانات إلا بين المستخدمين من خلال نظام مقدم الرعاية، وبموافقة صريحة من المستخدم." },
						{ type: "p", text: "يمكن لمقدم الرعاية فقط عرض البيانات التي يقرر المستخدم مشاركتها، ولا يمكنه تعديلها أو الوصول إلى بيانات أخرى غير مصرح بها." },
						{ type: "p", text: "يشمل المزودون التقنيون، بحسب الوظائف المستخدمة، Expo وGoogle Mobile Ads (AdMob) وSentry وخدمات البنية التحتية. يعالج هؤلاء المزودون البيانات وفقا لسياساتهم وشروطهم وضماناتهم المعمول بها." },
						{ type: "h2", text: "الأمان" },
						{ type: "p", text: "تخزن البيانات على خوادم AWS في ألمانيا (eu-central-1) وتحمى من خلال تدابير تقنية وتنظيمية مناسبة، بما في ذلك تشفير البيانات حيثما ينطبق." },
						{ type: "p", text: "تتم الاتصالات بين تطبيق RememberTo والخادم عبر اتصال HTTPS آمن." },
						{ type: "h2", text: "نقل البيانات" },
						{ type: "p", text: "تعالج البيانات الرئيسية للتطبيق على خوادم تقع داخل الاتحاد الأوروبي. قد تنطوي بعض الخدمات التقنية التابعة لأطراف ثالثة، مثل الإشعارات الفورية أو الإعلانات أو تشخيص الأخطاء أو خدمات البنية التحتية، على معالجة من قبل مزوديها، بما في ذلك خارج المنطقة الاقتصادية الأوروبية عند الضرورة، وفقا لسياسات الخصوصية وشروط الخدمة والضمانات المعمول بها لديهم." },
						{ type: "h2", text: "الخدمات الخارجية" },
						{
							type: "ul",
							items: [
								"Expo Push Notifications لإرسال الإشعارات الفورية؛",
								"Google Mobile Ads (AdMob) لعرض الإعلانات؛",
								"خدمات البنية التحتية اللازمة لتشغيل التطبيق والواجهة الخلفية؛",
								"Sentry (Functional Software, Inc.) لمراقبة أخطاء التطبيق وأعطاله وأدائه.",
							],
						},
						{ type: "h2", text: "الإعلانات والموافقة عليها" },
						{ type: "p", text: "قد يعرض التطبيق إعلانات عبر Google Mobile Ads (AdMob). ولتشغيل الإعلانات، قد تتم معالجة بيانات تقنية أو معرفات الجهاز أو معرفات الإعلانات، وفقا لإعدادات الجهاز والتفضيلات التي يعبر عنها المستخدم والقواعد المعمول بها." },
						{ type: "p", text: "قد تكون الإعلانات مخصصة أو غير مخصصة بناء على تفضيلات المستخدم. بالنسبة للمستخدمين في المنطقة الاقتصادية الأوروبية والمملكة المتحدة وسويسرا، يستخدم RememberTo آليات الموافقة التي توفرها Google، بما في ذلك User Messaging Platform (UMP)، لجمع أو تحديث التفضيلات المتعلقة بالإعلانات." },
						{ type: "p", text: "يمكن للمستخدم تعديل تفضيلات الإعلانات من خلال الإعدادات المتاحة في التطبيق، عند توفرها." },
						{ type: "h2", text: "الاحتفاظ بالبيانات" },
						{ type: "p", text: "يتم الاحتفاظ بالبيانات طوال مدة الحساب وتحذف عند حذف الحساب." },
						{ type: "p", text: "يمكن للمستخدم طلب الحذف النهائي للحساب والبيانات مباشرة من التطبيق أو عبر التواصل مع rememberto.info@gmail.com." },
						{ type: "h2", text: "إخلاء مسؤولية طبية" },
						{ type: "p", text: "لا يقدم RememberTo استشارات طبية ولا يحل محل رأي الطبيب أو أخصائي الرعاية الصحية." },
						{ type: "h2", text: "التشخيص والأعطال والأداء" },
						{ type: "p", text: "يستخدم RememberTo خدمة Sentry لاكتشاف الأخطاء والأعطال ومشكلات الأداء وتحسين استقرار التطبيق وأمانه والتدخل بسرعة أكبر عند حدوث الأعطال." },
						{ type: "p", text: "قد تتضمن أحداث التشخيص معلومات تقنية مثل طراز الجهاز ونظام التشغيل وإصدار التطبيق والطابع الزمني وstack trace ونوع الخطأ والمنطقة أو الشاشة المعنية وbreadcrumbs تقنية مفيدة لإعادة بناء المشكلة." },
						{ type: "p", text: "تم تكوين Sentry باستخدام sendDefaultPii: false ومع فلاتر على جانب التطبيق حتى لا يتم إرسال الاسم أو البريد الإلكتروني أو معرف المستخدم أو ملفات تعريف الارتباط أو الرؤوس أو جسم الطلبات أو query strings تلقائيا. لم يتم تمكين Session Replay أو لقطات الشاشة أو الإرسال المتعمد لمحتوى صحي." },
						{ type: "p", text: "تحتفظ أحداث التشخيص فقط لأغراض تقنية وأمنية وصيانة ودعم، وفقا لإعدادات الاحتفاظ المطبقة على مشروع Sentry والاحتياجات التشغيلية." },
						{ type: "h2", text: "حقوق المستخدم" },
						{
							type: "ul",
							items: [
								"الوصول إلى بياناته",
								"تعديلها",
								"حذفها",
								"سحب الموافقة",
								"الاعتراض على المعالجة",
								"طلب تقييد المعالجة",
								"طلب قابلية نقل البيانات",
							],
						},
						{ type: "h2", text: "الحد الأدنى للعمر" },
						{ type: "p", text: "التطبيق مخصص للمستخدمين الذين تبلغ أعمارهم 16 عاما أو أكثر." },
						{ type: "h2", text: "مراقب البيانات" },
						{ type: "contact", lines: ["Gaetano Gelo", "إيطاليا", "Email: rememberto.info@gmail.com"] },
						{ type: "h2", text: "التغييرات" },
						{ type: "p", text: "قد يتم تحديث هذه السياسة بمرور الوقت. سيتم إبلاغ المستخدمين في حالة حدوث تغييرات مهمة." },
					],
				},
				terms: {
					documentTitle: "الشروط والأحكام - RememberTo",
					title: "الشروط والأحكام - RememberTo",
					updatedLabel: "آخر تحديث:",
					updated: "يونيو 2026",
					blocks: [
						{ type: "p", text: "باستخدام RememberTo فإنك تقبل الشروط التالية." },
						{ type: "h2", text: "استخدام التطبيق" },
						{ type: "p", text: "يقدم التطبيق “كما هو”. يتحمل المستخدم مسؤولية استخدامه." },
						{ type: "h2", text: "الخدمة" },
						{ type: "p", text: "قد لا تكون الإشعارات دائما موثوقة أو في الوقت المناسب أو مضمونة." },
						{ type: "h2", text: "المحتوى الصحي" },
						{ type: "p", text: "لا يحل التطبيق محل الأطباء أو أخصائيي الرعاية الصحية." },
						{ type: "h2", text: "مسؤولية المستخدم" },
						{ type: "p", text: "يتحمل المستخدم مسؤولية الإدارة الصحيحة لعلاجاته وتناول أدويته." },
						{ type: "h2", text: "مقدم الرعاية" },
						{ type: "p", text: "لا يتم وصول مقدم الرعاية إلى البيانات إلا بموافقة صريحة من المستخدم." },
						{ type: "p", text: "يمكن لمقدم الرعاية فقط عرض البيانات التي شاركها المستخدم ولا يمكنه تعديلها." },
						{ type: "p", text: "يمكن للمستخدم إلغاء الوصول إلى بياناته في أي وقت." },
						{ type: "h2", text: "تحديد المسؤولية" },
						{ type: "p", text: "لا يكون المطور مسؤولا عن الأخطاء أو انقطاع الخدمة أو تأخر الإشعارات أو فقدان البيانات." },
						{ type: "h2", text: "تصدير PDF" },
						{ type: "p", text: "قد يتيح التطبيق تصدير البيانات الصحية بصيغة PDF." },
						{ type: "p", text: "يتحمل المستخدم مسؤولية حفظ المستندات المصدرة ومشاركتها عند الاقتضاء." },
						{ type: "h2", text: "البيانات الصحية والموافقة" },
						{ type: "p", text: "يتطلب استخدام الوظائف الصحية في التطبيق موافقة صريحة من المستخدم على معالجة البيانات الصحية اللازمة لتشغيل RememberTo، بما في ذلك الأدوية والعلاجات والتذكيرات والمواعيد الصحية والبيانات المدخلة في اليوميات السريرية الشخصية." },
						{ type: "p", text: "هذه البيانات ضرورية لاستخدام الوظائف الصحية في التطبيق. يمكن للمستخدم سحب الموافقة أو حذف حسابه وفقا للطرق الموضحة في سياسة الخصوصية وصفحة حذف الحساب." },
						{ type: "h2", text: "الإعلانات" },
						{ type: "p", text: "قد يعرض التطبيق إعلانات عبر Google Mobile Ads (AdMob). تعرض الإعلانات المخصصة فقط وفقا لتفضيلات المستخدم ومن خلال آليات الموافقة المتاحة في التطبيق." },
						{ type: "p", text: "يمكن للمستخدم تعديل تفضيلات الإعلانات من إعدادات التطبيق، عند توفرها." },
						{ type: "h2", text: "التشخيص والاستقرار" },
						{ type: "p", text: "قد يستخدم التطبيق أدوات تقنية مثل Sentry لتسجيل الأخطاء والأعطال ومشكلات الأداء بهدف صيانة الخدمة وحمايتها وتحسينها." },
						{ type: "p", text: "توضح سياسة الخصوصية معالجة بيانات التشخيص." },
						{ type: "h2", text: "جهات الاتصال" },
						{ type: "contact", lines: ["Gaetano Gelo", "إيطاليا", "Email: rememberto.info@gmail.com"] },
					],
				},
				delete: {
					documentTitle: "حذف الحساب - RememberTo",
					title: "حذف الحساب - RememberTo",
					updatedLabel: "آخر تحديث:",
					updated: "يونيو 2026",
					blocks: [
						{ type: "p", text: "توضح هذه الصفحة الطرق التي يمكن من خلالها للمستخدم حذف حساب RememberTo والبيانات المرتبطة به." },
						{ type: "p", text: "تقدم هذه الصفحة كمورد ويب عام لطلبات حذف الحساب والبيانات المرتبطة به، بما في ذلك لأغراض المتطلبات التي تنص عليها Google Play." },
						{ type: "h2", text: "كيفية حذف الحساب" },
						{ type: "p", text: "يمكن للمستخدم حذف حسابه بنفسه مباشرة من تطبيق RememberTo باتباع هذا المسار:" },
						{ type: "p", strong: "الإعدادات → حذف الحساب" },
						{ type: "h2", text: "تأكيد الحذف" },
						{ type: "p", text: "لتجنب الحذف العرضي، يطلب RememberTo تأكيدا صريحا قبل المتابعة إلى الحذف النهائي للحساب." },
						{ type: "p", text: "يجب على المستخدم إدخال نص التأكيد الذي يطلبه التطبيق. فقط بعد هذا التأكيد يتم حذف الحساب والبيانات المرتبطة به تلقائيا." },
						{ type: "h2", text: "مدة الحذف" },
						{ type: "p", text: "يتم حذف الحساب فوريا بعد تأكيد المستخدم." },
						{ type: "h2", text: "البيانات المحذوفة" },
						{ type: "p", text: "عند حذف الحساب، يتم حذف جميع البيانات المرتبطة بمعرف المستخدم الذي يطلب الحذف." },
						{ type: "p", text: "قد تشمل البيانات المحذوفة، على سبيل المثال:" },
						{
							type: "ul",
							items: [
								"بيانات حساب المستخدم؛",
								"بيانات الملف الشخصي؛",
								"الأدوية والعلاجات والتذكيرات؛",
								"المواعيد الصحية؛",
								"البيانات المدخلة في اليوميات السريرية الشخصية؛",
								"البيانات المتعلقة بمقدمي الرعاية المرتبطين بالحساب؛",
								"الرموز المستخدمة لإرسال الإشعارات الفورية؛",
								"بيانات أخرى مرتبطة بمعرف المستخدم داخل الخدمة.",
							],
						},
						{ type: "h2", text: "البيانات المحتفظ بها" },
						{ type: "p", text: "لا يحتفظ RememberTo ببيانات مرتبطة بالحساب بعد الحذف." },
						{ type: "h2", text: "ملفات PDF المصدرة" },
						{ type: "p", text: "قد يتيح التطبيق تصدير البيانات الصحية بصيغة PDF. لا يمكن حذف أي مستندات PDF سبق أن صدرها المستخدم أو حفظها أو شاركها من داخل التطبيق، لأنها خارج سيطرة RememberTo." },
						{ type: "h2", text: "مقدم الرعاية" },
						{ type: "p", text: "في حالة حذف الحساب، يتم أيضا حذف البيانات والروابط المرتبطة بالمشاركة مع أي مقدمي رعاية، في حدود البيانات المرتبطة بمعرف المستخدم المحذوف." },
						{ type: "h2", text: "الدعم والطلب عبر البريد الإلكتروني" },
						{ type: "p", text: "إذا لم يتمكن المستخدم من الوصول إلى التطبيق أو لم يتمكن من إكمال إجراء الحذف داخل RememberTo، فيمكنه التواصل مع الدعم على عنوان البريد الإلكتروني الموضح أدناه." },
						{ type: "p", text: "يجب إرسال الطلب من عنوان البريد الإلكتروني المرتبط بحساب RememberTo، أو يجب أن يحتوي على معلومات كافية تسمح بالتحقق من هوية المستخدم قبل المتابعة إلى الحذف." },
						{ type: "h2", text: "جهات الاتصال" },
						{ type: "contact", lines: ["Gaetano Gelo", "إيطاليا", "Email: rememberto.info@gmail.com"] },
					],
				},
			},
		},
	};

	function getStoredLanguage() {
		try {
			return window.localStorage.getItem(STORAGE_KEY);
		} catch (_error) {
			return null;
		}
	}

	function setStoredLanguage(language) {
		try {
			window.localStorage.setItem(STORAGE_KEY, language);
		} catch (_error) {
			// localStorage can be unavailable for local files in some browsers.
		}
	}

	function normalizeLanguage(value) {
		if (!value) {
			return "";
		}

		const lowered = String(value).toLowerCase();

		if (translations[lowered]) {
			return lowered;
		}

		const base = lowered.split("-")[0];
		return translations[base] ? base : "";
	}

	function getInitialLanguage() {
		const queryLanguage = normalizeLanguage(
			new URLSearchParams(window.location.search).get("lang")
		);

		if (queryLanguage) {
			return queryLanguage;
		}

		const storedLanguage = normalizeLanguage(getStoredLanguage());
		if (storedLanguage) {
			return storedLanguage;
		}

		const browserLanguages = navigator.languages || [navigator.language];
		for (const browserLanguage of browserLanguages) {
			const normalized = normalizeLanguage(browserLanguage);
			if (normalized) {
				return normalized;
			}
		}

		return DEFAULT_LANG;
	}

	function localizedHref(href, language) {
		return `${href}?lang=${encodeURIComponent(language)}`;
	}

	function updateUrlLanguage(language) {
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("lang", language);
			window.history.replaceState(null, "", url);
		} catch (_error) {
			// Non-critical for static file previews.
		}
	}

	function clearElement(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	}

	function renderBlock(block) {
		if (block.type === "h2") {
			const heading = document.createElement("h2");
			heading.textContent = block.text;
			return heading;
		}

		if (block.type === "ul") {
			const list = document.createElement("ul");
			block.items.forEach((item) => {
				const listItem = document.createElement("li");
				listItem.textContent = item;
				list.appendChild(listItem);
			});
			return list;
		}

		if (block.type === "contact") {
			const paragraph = document.createElement("p");
			block.lines.forEach((line, index) => {
				if (index > 0) {
					paragraph.appendChild(document.createElement("br"));
				}
				paragraph.append(line);
			});
			return paragraph;
		}

		const paragraph = document.createElement("p");
		if (block.strong) {
			const strong = document.createElement("strong");
			strong.textContent = block.strong;
			paragraph.appendChild(strong);
		} else {
			paragraph.textContent = block.text;
		}

		return paragraph;
	}

	function renderHome(page, language) {
		const fragment = document.createDocumentFragment();
		const description = document.createElement("p");
		description.textContent = page.description;
		fragment.appendChild(description);

		const links = document.createElement("div");
		links.className = "links";

		Object.entries(pageTargets).forEach(([key, target]) => {
			const link = document.createElement("a");
			link.className = "card";
			link.href = localizedHref(target.href, language);

			const icon = document.createElement("span");
			icon.className = "card-icon";
			icon.setAttribute("aria-hidden", "true");
			icon.textContent = target.icon;

			const text = document.createElement("span");
			text.textContent = page.cards[key];

			link.append(icon, text);
			links.appendChild(link);
		});

		fragment.appendChild(links);
		return fragment;
	}

	function renderLegalPage(page, ui, language) {
		const fragment = document.createDocumentFragment();

		const updated = document.createElement("p");
		updated.className = "updated";
		const label = document.createElement("strong");
		label.textContent = page.updatedLabel;
		updated.append(label, " ", page.updated);
		fragment.appendChild(updated);

		page.blocks.forEach((block) => {
			fragment.appendChild(renderBlock(block));
		});

		const back = document.createElement("a");
		back.className = "back";
		back.href = localizedHref("index.html", language);
		back.textContent = `${languageByCode[language].dir === "rtl" ? "→" : "←"} ${
			ui.backHome
		}`;
		fragment.appendChild(back);

		return fragment;
	}

	function updateLanguageSelector(language, ui) {
		const label = document.getElementById("language-label");
		const select = document.getElementById("language-select");

		label.textContent = ui.languageLabel;
		select.setAttribute("aria-label", ui.languageLabel);

		if (!select.options.length) {
			languages.forEach((availableLanguage) => {
				const option = document.createElement("option");
				option.value = availableLanguage.code;
				option.textContent = availableLanguage.label;
				select.appendChild(option);
			});
		}

		select.value = language;
	}

	function render(language, shouldUpdateUrl = false) {
		const safeLanguage = translations[language] ? language : DEFAULT_LANG;
		const languageInfo = languageByCode[safeLanguage];
		const bundle = translations[safeLanguage];
		const pageKey = document.body.dataset.page || "home";
		const page = bundle.pages[pageKey] || bundle.pages.home;
		const title = document.getElementById("page-title");
		const content = document.getElementById("page-content");
		const footer = document.getElementById("page-footer");

		document.documentElement.lang = languageInfo.htmlLang;
		document.documentElement.dir = languageInfo.dir;
		document.title = page.documentTitle;
		title.textContent = page.title;
		updateLanguageSelector(safeLanguage, bundle.ui);
		clearElement(content);

		if (pageKey === "home") {
			content.appendChild(renderHome(page, safeLanguage));
		} else {
			content.appendChild(renderLegalPage(page, bundle.ui, safeLanguage));
		}

		footer.textContent = page.footer || "";

		if (shouldUpdateUrl) {
			updateUrlLanguage(safeLanguage);
		}
	}

	function init() {
		const initialLanguage = getInitialLanguage();
		render(initialLanguage);

		document
			.getElementById("language-select")
			.addEventListener("change", (event) => {
				const nextLanguage = normalizeLanguage(event.target.value) || DEFAULT_LANG;
				setStoredLanguage(nextLanguage);
				render(nextLanguage, true);
			});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
