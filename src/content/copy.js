export const EXPERIENCE_START = 2017

export function yearsOfExperience(date = new Date()) {
  return Math.max(1, date.getFullYear() - EXPERIENCE_START)
}

function yearsLabel(lang, date = new Date()) {
  const years = yearsOfExperience(date)
  if (lang === 'fr') return years <= 1 ? '1 an' : `${years} ans`
  return years <= 1 ? '1 year' : `${years} years`
}

export function getCopy(lang, date = new Date()) {
  const label = yearsLabel(lang, date)
  const base = copy[lang]
  return {
    ...base,
    home2: {
      ...base.home2,
      proof: base.home2.proof.replaceAll('{years}', label),
    },
    about: {
      ...base.about,
      p1: base.about.p1.replaceAll('{years}', label),
    },
  }
}

export const copy = {
  fr: {
    meta: {
      title: 'Mathieu Boucher — Développeur & designer',
      description:
        'Du développement web et des applications mobiles à l’imprimé et au numérique.',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      print: 'Imprimé',
      digital: 'Numérique',
      web: 'Web',
      apps: 'Applications',
      drone: 'Drone',
      video: 'Vidéo',
      estimate: 'Estimation',
      contact: 'Contact',
      blog: 'Blog',
      faq: 'FAQ',
      portfolio: 'Portfolio',
      home2: 'Accueil 2',
      open: 'Ouvrir le menu',
      close: 'Fermer le menu',
      themeLight: 'Passer en mode clair',
      themeDark: 'Passer en mode sombre',
      langEn: 'Switch to English',
      langFr: 'Passer en français',
    },
    home: {
      name: 'Mathieu Boucher',
      role: 'Développeur & designer',
      intro:
        'Du développement web et des applications mobiles à l’imprimé et au numérique, je propose une gamme complète de services pour donner vie à vos projets et renforcer votre image, en ligne comme hors ligne.',
      ctaServices: 'Voir mes services',
      ctaContact: 'Contactez-moi',
      marquee:
        'MODERN LOOK • SCROLLING BANNER • S-SHAPE DESIGN • CHARCOAL & BLACK • CRUNCHY DESIGN TRENDS • UNIQUE WAVE • ',
      servicesEyebrow: 'Mes services',
      servicesLead:
        'Découvrez l’ensemble de mes services professionnels en développement web, design et solutions numériques adaptées à vos besoins.',
      servicesMore: 'En savoir plus',
      services: [
        {
          slug: 'applications',
          title: 'Application',
          text: 'Développement d’applications sur mesure pour iOS et Android. Des solutions mobiles innovantes pour votre entreprise.',
          cta: 'Application web',
        },
        {
          slug: 'web',
          title: 'Web',
          text: 'Création de sites web modernes et performants. Du design à l’intégration, je développe votre présence en ligne.',
          cta: 'Services web',
        },
        {
          slug: 'imprime',
          title: 'Imprimé',
          text: 'Design graphique et solutions d’impression professionnelles. De la conception à la production, je crée des supports visuels impactants.',
          cta: 'Services imprimé',
        },
        {
          slug: 'numerique',
          title: 'Numérique',
          text: 'Solutions numériques innovantes pour votre entreprise. Stratégie numérique, marketing automation et expérience utilisateur optimale.',
          cta: 'Services numériques',
        },
        {
          slug: 'video',
          title: 'Vidéo',
          text: 'Vidéo publicitaire, bannières web et créatifs pour les réseaux — du concept au livrable prêt à diffuser.',
          cta: 'Services vidéo',
        },
      ],
      projectsEyebrow: 'Derniers projets',
      projectsLead: 'Découvrez les derniers projets que j’ai réalisés pour mes clients.',
      projectsCta: 'Voir tous les projets',
      lightboxClose: 'Fermer',
      lightboxPrev: 'Projet précédent',
      lightboxNext: 'Projet suivant',
      projects: [
        'Projet 1',
        'Projet 2',
        'Projet 3',
        'Projet 4',
        'Projet 5',
        'Projet 6',
        'Projet 7',
        'Projet 8',
        'Projet 9',
        'Projet 10',
        'Projet 11',
        'Projet 12',
        'Projet 13',
        'Projet 14',
      ],
      ctaTitle: 'Prêt à démarrer votre projet ?',
      ctaText:
        'Donnons vie à votre vision. Soumettez les détails de votre projet et je vous aiderai à créer quelque chose d’exceptionnel.',
      ctaButton: 'Soumettre votre projet',
      quotesEyebrow: 'Témoignages',
      quotesTitle: 'Ce que les gens disent de moi',
      quotesPrev: 'Témoignage précédent',
      quotesNext: 'Témoignage suivant',
      quotes: [
        {
          name: 'Jean Dupont',
          role: 'CEO, Tech Solutions',
          text: 'Mathieu a transformé notre présence en ligne avec un site web exceptionnel. Son expertise technique et sa créativité ont dépassé nos attentes.',
        },
        {
          name: 'Marie Lambert',
          role: 'Directrice Marketing, InnovCorp',
          text: 'Un professionnel talentueux qui comprend parfaitement les besoins de ses clients. Le résultat final était exactement ce que nous recherchions.',
        },
        {
          name: 'Pierre Martin',
          role: 'Fondateur, StartupX',
          text: 'Grâce à Mathieu, notre application a connu un succès immédiat. Son approche méthodique et sa créativité ont fait toute la différence.',
        },
        {
          name: 'Sophie Tremblay',
          role: 'Directrice Artistique, DesignLab',
          text: 'La collaboration avec Mathieu a été exceptionnelle. Son sens du design et sa capacité à traduire nos idées en réalité ont été déterminants pour notre succès.',
        },
        {
          name: 'Alexandre Roy',
          role: 'CTO, Numeric Innovations',
          text: 'Mathieu a développé une solution technique complexe qui a considérablement amélioré notre efficacité opérationnelle. Un vrai expert en développement.',
        },
        {
          name: 'Isabelle Bouchard',
          role: 'Propriétaire, Boutique Élégance',
          text: 'Notre boutique en ligne a connu une augmentation de 200% des ventes grâce au travail de Mathieu. Son expertise en e-commerce est remarquable.',
        },
        {
          name: 'Marc-André Gagnon',
          role: 'Directeur, Agence Marketing Plus',
          text: 'Mathieu a créé une plateforme marketing qui a révolutionné notre façon de travailler. Son approche innovante et sa maîtrise technique sont impressionnantes.',
        },
        {
          name: 'Julie Fortin',
          role: 'Fondatrice, ÉcoSolutions',
          text: 'Le site web développé par Mathieu reflète parfaitement notre engagement environnemental. Son attention aux détails et sa créativité sont exceptionnelles.',
        },
      ],
    },
    home2: {
      badge: 'Proposition de design',
      kicker: 'Développeur & designer',
      title: 'Mathieu Boucher',
      titleAccent: '',
      lead:
        'Du développement web et des applications mobiles à l’imprimé et au numérique, je propose une gamme complète de services pour donner vie à vos projets et renforcer votre image, en ligne comme hors ligne.',
      ctaPrimary: 'Voir les services',
      ctaSecondary: 'Me contacter',
      proof: 'Plus de {years} d’expérience — 25 entreprises accompagnées.',
      galleryEyebrow: 'Travail récent',
      pitchEyebrow: 'Une pratique complète',
      pitchTitle: 'De l’idée au livrable.',
      pitchLead:
        'Kickstart, affiner, livrer. React, design et imprimé — le même niveau d’exigence, en ligne comme hors ligne.',
      pillars: [
        {
          title: 'Créer',
          text: 'Sites, applications et identités pensés pour durer. Du pixel à l’architecture.',
        },
        {
          title: 'Affiner',
          text: 'Chaque détail compte. Je pousse jusqu’à ce que ça vous ressemble vraiment.',
        },
        {
          title: 'Livrer',
          text: 'Des projets qui marquent vos utilisateurs — et qui tiennent la route.',
        },
      ],
      servicesTitle: 'Cinq expertises, une direction.',
      quoteLabel: 'Témoignage',
      back: 'Voir l’accueil actuel',
      footerTitle: 'Travaillons ensemble',
      footerText: 'Pas de brief trop petit, pas d’attente. Un message, et on démarre.',
      footerCta: 'Lancer un projet',
      colServices: 'Services',
      colWork: 'Projets',
      colResources: 'Ressources',
      colStudio: 'Freelance',
      colConnect: 'Connect',
      notice:
        'Les projets présentés sur ce site le sont à titre illustratif. Ils restent la propriété de leurs clients et créateurs. Logos et contenus de marque appartiennent à leurs détenteurs. Pour une mention différente ou un retrait, écrivez-moi.',
      formTitle: 'Écrivez-moi.',
      formPending: 'Envoi...',
      formError: 'Remplissez ce champ.',
    },
    about: {
      eyebrow: 'À propos',
      name: 'Mathieu Boucher',
      role: 'Développeur & designer',
      title: 'Qui suis-je?',
      values: 'Créativité – Passion – Authenticité',
      p1: 'Développeur & designer web freelance passionné, je cumule plus de {years} d’expérience en agence et en entreprise. Spécialisé en React et React Native, je crée des solutions web et mobiles sur mesure qui transforment vos idées en expériences digitales exceptionnelles.',
      p2: 'Entrepreneur dans l’âme, j’ai fondé ma propre agence à 20 ans et accompagné plus de 25 entreprises canadiennes vers le succès digital. Mon approche unique allie créativité, expertise technique et vision stratégique pour livrer des projets qui dépassent vos attentes et marquent durablement vos utilisateurs.',
    },
    services: {
      imprime: {
        eyebrow: 'Services',
        title: 'Imprimé',
        titleAccent: 'Hors écran.',
        subtitle: 'Solutions d’impression professionnelles pour valoriser votre image',
        banner:
          'IMPRIMÉ • CARTES DE VISITE • FLYERS • AFFICHES • PACKAGING • SIGNALÉTIQUE • GRAND FORMAT • PAPETERIE • ',
        intro:
          'Un écran s’éteint, mais une carte de visite qu’on garde en main, un flyer qu’on feuillette ou un packaging qu’on touche laisse une impression durable. Je vous accompagne dans tous vos projets d’impression, de la première idée jusqu’à la livraison des fichiers finaux.',
        metaTitle: 'Impression professionnelle au Québec — Cartes, flyers & packaging | Mathieu Boucher',
        metaDescription:
          'Conception graphique et fichiers prêts à imprimer au Centre-du-Québec : cartes de visite, flyers, affiches et packaging. De la maquette au BAT.',
        body: [
          'Basé à Saint-Valère, près de Victoriaville, j’accompagne les commerces, entreprises et organisations partout au Québec. Format, choix du papier, finitions, fonds perdus ou tons directs : je prépare des fichiers propres et rigoureux pour que votre imprimeur puisse travailler sans mauvaise surprise.',
        ],
        processTitle: 'Comment se passe un projet d’impression ?',
        process: [
          'On commence par définir l’usage réel : qui reçoit le support, où va-t-il vivre et en quelle quantité ? Ensuite, je conçois la maquette, j’ajuste les détails avec vous, puis je valide le Bon à Tirer (BAT) et les fichiers finaux. Si vous avez déjà un imprimeur, je m’adapte à ses spécifications techniques. Sinon, je peux vous guider vers les bons contacts.',
        ],
        faq: [
          {
            q: 'Fournissez-vous les fichiers pour l’imprimeur ?',
            a: 'Oui, je livre des PDF haute résolution avec fonds perdus, traits de coupe et profils de couleur adaptés.',
          },
          {
            q: 'Puis-je commander uniquement la conception sans l’impression ?',
            a: 'Tout à fait. De nombreux clients s’arrêtent au fichier prêt à produire et impriment auprès de leur fournisseur habituel.',
          },
          {
            q: 'Quels sont les délais ?',
            a: 'La conception prend généralement quelques jours selon la complexité. L’impression dépend ensuite de l’atelier choisi et des finitions (pelliculage, dorure, etc.).',
          },
        ],
        sectionTitle: 'Services d’Impression',
        sectionLead: 'Des solutions d’impression sur mesure pour donner vie à votre image',
        groups: [
          {
            title: 'Supports de Communication',
            text: 'Je crée des supports imprimés qui renforcent l’identité de votre marque avec une mise en page claire et percutante.',
            items: [
              'Cartes de visite professionnelles',
              'Flyers, dépliants et brochures',
              'Affiches, bannières et catalogues',
              'Plaquettes commerciales et papeterie',
            ],
          },
          {
            title: 'Packaging & Étiquetage',
            text: 'Je conçois des emballages qui valorisent vos produits dès le premier regard, en pensant le volume, le papier et la fermeture dans l’ensemble du design.',
            items: [
              'Étiquettes personnalisées',
              'Boîtes, sachets et pochettes sur mesure',
              'Solutions de packaging écoresponsable',
            ],
          },
          {
            title: 'Événementiel & Signalétique',
            text: 'Pour vos événements ou vos locaux, je réalise des supports pensés pour être visibles à distance et faciles à installer.',
            items: [
              'Roll-ups et kakémonos',
              'Signalétique intérieure et extérieure',
              'Supports d’exposition et badges',
            ],
          },
        ],
        ctaTitle: 'Donnez vie à vos projets d’impression !',
        ctaText:
          'Discutons de vos besoins et créons ensemble des supports imprimés qui marquent les esprits.',
      },
      numerique: {
        eyebrow: 'Services',
        title: 'Numérique',
        titleAccent: 'En image.',
        subtitle: 'Des solutions numériques innovantes pour propulser votre entreprise',
        banner:
          'NUMÉRIQUE • IDENTITÉ VISUELLE • MOTION DESIGN • RÉSEAUX SOCIAUX • STRATÉGIE DIGITALE • ILLUSTRATION • ',
        intro:
          'Une présence numérique forte ne repose pas sur la quantité de publications, mais sur la cohérence de votre image. Je vous aide à construire un système visuel solide : un logo lisible en tout format, une palette de couleurs maîtrisée et des gabarits que votre équipe pourra réutiliser facilement.',
        metaTitle: 'Identité visuelle, logo et design numérique au Québec | Mathieu Boucher',
        metaDescription:
          'Création de logo, identité visuelle, visuels pour réseaux sociaux et motion design au Québec. Donnez une image cohérente à votre marque.',
        body: [
          'Entrepreneurs, startups et PME au Québec : je conçois aussi bien vos outils graphiques de base (logo, icônes) que vos contenus quotidiens (carrousels, infographies, infolettres) pour qu’on vous reconnaisse instantanément.',
        ],
        processTitle: 'Comment se passe un projet numérique ?',
        process: [
          'On analyse d’abord ce qui existe déjà (fichiers de logos, couleurs actuelles, inspirations). Ensuite, je vous propose des pistes créatives. Une fois la direction validée, je vous livre un pack complet et structuré : fichiers vectoriels, gabarits et guides d’utilisation clairs.',
        ],
        faq: [
          {
            q: 'Est-ce que vous créez des logos vectoriels ?',
            a: 'Oui, le fichier maître est toujours vectoriel (AI / SVG / PDF) pour garantir une netteté parfaite, du petit écran au grand panneau publicitaire.',
          },
          {
            q: 'Faites-vous du motion design ?',
            a: 'Oui, pour animer un logo, dynamiser une vidéo promotionnelle ou créer des encarts publicitaires percutants.',
          },
          {
            q: 'Travaillez-vous à distance ?',
            a: 'Tout à fait, les échanges se font facilement en visio ou par écrit partout au Québec, avec la possibilité de se rencontrer en personne près de Victoriaville.',
          },
        ],
        actions: ['Estimation', 'Contactez-moi'],
        sectionTitle: 'Services numériques',
        sectionLead: 'Une identité claire, des visuels qui durent, une marque qu’on reconnaît',
        groups: [
          {
            title: 'Design & Identité visuelle',
            items: [
              'Création de logo et refonte d’identité',
              'Charte graphique et déclinaisons de marque',
              'Templates personnalisés (infolettres, documents)',
              'Visuels pour réseaux sociaux et infographies',
            ],
          },
          {
            title: 'Design interactif & web',
            items: [
              'Design UX/UI (interfaces web et applications)',
              'Maquettes et parcours utilisateurs optimisés pour mobile',
              'Présentations interactives',
            ],
          },
          {
            title: 'Contenus visuels & Animation',
            items: [
              'Animation graphique (motion design) pour dynamiser vos messages',
              'Visuels pour podcasts, vidéos et événements virtuels',
            ],
          },
        ],
        ctaTitle: 'Transformez votre présence numérique !',
        ctaText: 'Discutons de votre projet et créons une image de marque qui se démarque.',
      },
      web: {
        eyebrow: 'Services',
        title: 'Web',
        titleAccent: 'En ligne.',
        subtitle: 'Développement web moderne et sur mesure pour votre présence en ligne',
        banner:
          'WEB • WORDPRESS • E-COMMERCE • REACT • SEO • SITES VITRINES • PERFORMANCE • MAINTENANCE • ',
        intro:
          'Votre site web a un rôle précis : informer, instaurer la confiance et convertir vos visiteurs en clients. Je conçois des sites vitrines, des pages d’atterrissage et des boutiques en ligne qui chargent rapidement, s’affichent parfaitement sur mobile et reflètent fidèlement votre expertise.',
        metaTitle: 'Création de site web WordPress, e-commerce et SEO | Mathieu Boucher',
        metaDescription:
          'Sites vitrines, boutiques WooCommerce/Shopify et optimisation SEO au Québec. Des sites rapides, clairs et pensés pour convertir vos visiteurs.',
        body: [
          'Qu’il s’agisse de WordPress (Divi, Elementor), de plateformes e-commerce (WooCommerce, Shopify) ou d’une solution sur mesure en React, je choisis l’outil adapté à vos besoins réels et à votre autonomie future. Le référencement naturel (SEO) est intégré dès la structure de base.',
        ],
        processTitle: 'Comment se passe un projet web ?',
        process: [
          'Nous clarifions d’abord vos objectifs, le nombre de pages nécessaires et les fonctionnalités clés. Je produis ensuite les maquettes, développe le site, intègre vos contenus et m’assure de la mise en ligne (hébergement, domaine, formulaires). Je vous forme également à la gestion quotidienne de vos pages.',
        ],
        faq: [
          {
            q: 'Le site sera-t-il optimisé pour Google (SEO) ?',
            a: 'Oui, je pose des fondations techniques solides : structure des balises, vitesse de chargement, adaptation mobile et contenus propres.',
          },
          {
            q: 'Pourrai-je modifier le site moi-même après la livraison ?',
            a: 'Tout à fait, avec WordPress, vous pourrez modifier facilement vos textes et images au quotidien sans compétences techniques.',
          },
          {
            q: 'Créez-vous des boutiques en ligne ?',
            a: 'Oui, sur WooCommerce et Shopify, en structurant l’ensemble du catalogue, des taxes et des modes de livraison.',
          },
        ],
        sectionTitle: 'Services Web',
        sectionLead: 'Des sites web performants, pensés pour convertir',
        groups: [
          {
            title: 'Sites web sur mesure',
            items: [
              'Sites WordPress personnalisés (Divi, Elementor)',
              'Sites vitrines et portfolios artistiques ou professionnels',
              'Landing pages optimisées pour la conversion',
            ],
          },
          {
            title: 'E-commerce',
            items: [
              'Boutiques en ligne WooCommerce et Shopify',
              'Catalogues produits, gestion des stocks et paiements sécurisés',
              'Optimisation du parcours d’achat mobile',
            ],
          },
          {
            title: 'Maintenance & SEO',
            items: [
              'Optimisation de la vitesse et SEO technique',
              'Mises à jour de sécurité et sauvegardes régulières',
              'Support technique et formation à l’autonomie',
            ],
          },
        ],
        ctaTitle: 'Créez votre présence web de demain !',
        ctaText: 'Discutons de votre projet et construisons un site qui vous ressemble.',
      },
      applications: {
        eyebrow: 'Services',
        title: 'Applications',
        titleAccent: 'Sur mesure.',
        subtitle: 'Applications React et React Native modernes sur mesure',
        banner:
          'APPLICATIONS • REACT • REACT NATIVE • ANDROID • NEXT.JS • TYPESCRIPT • API • ',
        intro:
          'Une application n’est pas un simple site web complexe : c’est un outil fonctionnel conçu pour répondre à des besoins précis (gestion de données, comptes utilisateurs, outils internes). Je développe des applications modernes en React (pour le web) et React Native (pour iOS et Android) pour vous offrir une base solide, rapide et facile à maintenir.',
        metaTitle: 'Développement d’applications web et mobiles React / React Native | Mathieu Boucher',
        metaDescription:
          'Applications web et mobiles sur mesure en React, React Native et TypeScript au Québec. Conception, développement et accompagnement technique.',
        body: [
          'De la définition des parcours utilisateurs jusqu’au déploiement, je vous accompagne avec une approche pragmatique. TypeScript, intégration d’API, tests rigoureux : chaque ligne de code est pensée pour faire grandir votre produit sur le long terme.',
        ],
        processTitle: 'Comment se passe un projet d’application ?',
        process: [
          'Nous cadrons ensemble le périmètre fonctionnel (web, mobile ou les deux) et les parcours utilisateurs essentiels grâce à des prototypes. Le développement s’effectue ensuite par étapes régulières, avec des démonstrations fréquentes jusqu’à la publication sur les stores ou en ligne.',
        ],
        faq: [
          {
            q: 'Est-ce que React Native convient pour iOS et Android ?',
            a: 'Oui, cela permet de développer une seule base de code performante pour les deux systèmes d’exploitation, tout en réduisant les coûts de développement.',
          },
          {
            q: 'Gérez-vous la publication sur les stores ?',
            a: 'Oui, je peux préparer les fichiers de configuration, les fiches descriptives et le dépôt sur l’App Store et Google Play.',
          },
        ],
        sectionTitle: 'Services d’Applications',
        sectionLead: 'Transformez vos idées en applications performantes et évolutives',
        groups: [
          {
            title: 'Applications Web (React / Next.js)',
            items: [
              'Applications web sur mesure et Single Page Applications (SPA)',
              'Tableaux de bord et interfaces de gestion internes',
              'Optimisation des performances et intégration d’API',
            ],
          },
          {
            title: 'Applications Mobiles (React Native)',
            items: [
              'Applications mobiles multiplateformes (iOS et Android)',
              'Interfaces fluides et ergonomie pensée pour le tactile',
            ],
          },
          {
            title: 'Évolution & Suivi',
            items: [
              'Refonte, modernisation et reprise de code existant',
              'Maintenance évolutive, correction de bugs et mises à jour',
            ],
          },
        ],
        ctaTitle: 'Donnez vie à votre projet d’application !',
        ctaText: 'Discutons de votre vision et bâtissons une solution technique taillée pour réussir.',
      },
      drone: {
        eyebrow: 'Services',
        title: 'Drone',
        titleAccent: 'En vol.',
        subtitle: 'Services de photographie et vidéographie aériennes professionnelles',
        banner:
          'DRONE • PHOTO AÉRIENNE • VIDÉO AÉRIENNE • INSPECTION • CARTOGRAPHIE 3D • IMMOBILIER • ',
        intro:
          'Le drone permet de révéler ce que le sol ne montre pas : l’envergure d’un terrain, la géométrie d’une toiture, l’avancement d’un chantier ou la beauté d’un paysage. Je réalise des prises de vue aériennes en photo et en vidéo pour l’immobilier, la promotion commerciale et le suivi de projets.',
        metaTitle: 'Photo et vidéo par drone au Québec — Inspection & cartographie | Mathieu Boucher',
        metaDescription:
          'Photographie aérienne, vidéo par drone, inspection de toitures et cartographie 3D au Centre-du-Québec. Immobilier, chantiers et web.',
        body: [
          'Au-delà de l’image esthétique, j’interviens pour des missions techniques d’inspection visuelle et de cartographie 3D. Chaque vol est préparé en amont dans le respect des règles de sécurité et de l’espace aérien, puis suivi d’une post-production soignée (étalonnage, assemblage, formats adaptés au web).',
        ],
        processTitle: 'Comment se passe une prestation drone ?',
        process: [
          'Nous définissons ensemble le lieu, l’objectif exact des images et les contraintes réglementaires. Je valide la météo et planifie le vol. Après la captation, je réalise le tri, le montage et la correction des couleurs pour vous livrer des fichiers prêts à l’emploi.',
        ],
        faq: [
          {
            q: 'Intervenez-vous partout au Québec ?',
            a: 'Le Centre-du-Québec est ma base principale, mais les déplacements dans d’autres régions sont tout à fait possibles selon les projets.',
          },
          {
            q: 'Que se passe-t-il en cas de mauvaise météo ?',
            a: 'La sécurité et la qualité d’image primant, le vol est simplement reporté en cas de vent fort, de pluie ou de nuages trop bas.',
          },
          {
            q: 'Faites-vous de l’inspection technique ?',
            a: 'Oui, je réalise des relevés visuels précis pour documenter l’état de structures difficiles d’accès sans échafaudage.',
          },
        ],
        sectionTitle: 'Services Drone',
        sectionLead: 'Prenez de la hauteur avec des images aériennes saisissantes',
        groups: [
          {
            title: 'Photographie & Vidéo Aérienne',
            items: [
              'Photographie immobilière, architecturale et paysagère',
              'Vidéos promotionnelles cinématiques pour le web et les réseaux',
              'Couverture aérienne d’événements',
            ],
          },
          {
            title: 'Inspection & Cartographie 3D',
            items: [
              'Inspection visuelle de toitures et de structures',
              'Suivi de chantiers et surveillance de sites',
              'Modélisation 3D, orthophotos et photogrammétrie',
            ],
          },
        ],
        ctaTitle: 'Capturez vos projets sous un nouvel angle !',
        ctaText:
          'Discutons de vos besoins et valorisez vos projets grâce à l’imagerie aérienne.',
      },
      video: {
        eyebrow: 'Services',
        title: 'Vidéo',
        titleAccent: 'Publicité.',
        subtitle: 'Vidéo publicitaire, bannières et créatifs pour le web et les réseaux',
        banner:
          'VIDÉO • PUBLICITÉ • BANNIÈRES • DISPLAY • MOTION • SOCIAL ADS • THIRD-PARTY • SPOTS • ',
        intro:
          'Sur les réseaux sociaux et le web, une bonne vidéo ou une bannière publicitaire doit accomplir deux missions : arrêter le regard du public, puis générer une action immédiate. Je conçois et réalise des spots, des animations en motion design et des kits publicitaires multi-formats (Google, Meta, LinkedIn) parfaitement calibrés pour vos campagnes.',
        metaTitle: 'Vidéo publicitaire, motion design et bannières web au Québec | Mathieu Boucher',
        metaDescription:
          'Spots publicitaires, motion design et créatifs display pour Google, Meta et LinkedIn. Production vidéo professionnelle au Québec.',
        body: [
          'Du storyboard initial jusqu’aux déclinaisons de formats (9:16, 1:1, 16:9) et au respect des poids techniques des régies, je m’assure que vos messages visuels soient prêts à diffuser sans friction.',
        ],
        processTitle: 'Comment se passe un projet vidéo ou publicitaire ?',
        process: [
          'Nous ciblons d’abord l’audience, les canaux de diffusion et le message clé. Je rédige ensuite le storyboard pour valider le concept avant de lancer la production ou l’animation. Enfin, je vous livre les exports finaux proprement nommés et optimisés pour chaque plateforme.',
        ],
        faq: [
          {
            q: 'Livrez-vous les formats adaptés pour Google Ads et Meta ?',
            a: 'Oui, je fournis des kits complets multi-formats respectant scrupuleusement les contraintes de poids et de dimensions des différentes régies publicitaires.',
          },
          {
            q: 'Pouvez-vous décliner une vidéo longue en formats courts ?',
            a: 'Oui, c’est même recommandé : je prévois des coupes dès le storyboard pour que vos messages tiennent aussi bien en 6 secondes qu’en 30 secondes.',
          },
          {
            q: 'Travaillez-vous directement ou avec des agences ?',
            a: 'Je collabore avec les deux, en m’intégrant parfaitement dans vos équipes ou en prenant en charge le projet de A à Z.',
          },
        ],
        sectionTitle: 'Services Vidéo & Publicité',
        sectionLead: 'Des formats publicitaires percutants pour capter l’attention en ligne',
        groups: [
          {
            title: 'Vidéo Publicitaire & Social Ads',
            items: [
              'Spots publicitaires et vidéos de présentation de produits',
              'Formats courts pour les réseaux sociaux (Reels, Shorts, carrousels)',
              'Montage, étalonnage et habillage visuel',
            ],
          },
          {
            title: 'Bannières Web & Display',
            items: [
              'Bannières statiques et animées (HTML5 / GIF, formats IAB)',
              'Habillage de sites web (takeover) et bannières publicitaires',
              'Variantes de créatifs pour vos tests A/B',
            ],
          },
          {
            title: 'Stratégie & Production complète',
            items: [
              'Écriture de scripts, conception de storyboards et direction artistique',
              'Captation vidéo et production de contenus sur mesure',
            ],
          },
        ],
        ctaTitle: 'Faites parler votre marque à l’écran !',
        ctaText:
          'Discutons de votre prochaine campagne vidéo et créons des contenus qui convertissent.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      addressLabel: 'Adresse',
      address: '1041 4e rue Croteau, St-Valère, QC',
      postal: 'G0P 1M0',
      phoneLabel: 'Téléphone',
      phone: '+1 (819) 302-8781',
      emailLabel: 'Email',
      email: 'mrboucher95@gmail.com',
      name: 'Votre nom',
      namePh: 'Entrez votre nom complet',
      emailField: 'Votre email',
      emailPh: 'Entrez votre adresse email',
      subject: 'Sujet',
      subjectPh: 'Quel est le sujet de votre message?',
      message: 'Votre message',
      messagePh: 'Écrivez votre message ici...',
      prev: 'Précédent',
      next: 'Suivant',
      send: 'Envoyer',
      sent: 'Merci. Votre message a été envoyé — je vous répondrai rapidement.',
      sendError: 'L’envoi a échoué. Réessayez dans un instant.',
      activate:
        'Ouvrez le courriel « Activate Form » envoyé à mrboucher95@gmail.com (vérifiez les indésirables), cliquez le lien, puis renvoyez votre message.',
      mapLabel: 'Victoriaville',
      mapOpen: 'Ouvrir dans Google Maps',
      ctaTitle: 'Un projet en tête ?',
      ctaText: 'Répondez à quelques questions pour obtenir une estimation indicative.',
      ctaEstimate: 'Estimer mon projet',
    },
    estimate: {
      title: 'Estimateur de projet',
      lead: 'Répondez à quelques questions pour obtenir une estimation indicative de votre projet.',
      which: 'Quel service vous intéresse?',
      from: 'À partir de',
      included: 'Inclus',
      step: 'Étape',
      selectAll: 'Sélectionnez toutes les options qui s’appliquent.',
      prev: 'Précédent',
      next: 'Suivant',
      see: 'Voir l’estimation',
      yours: 'Votre estimation',
      total: 'Total estimé',
      disclaimer:
        'Cette estimation est indicative et peut varier selon la complexité réelle du projet. Un devis détaillé sera fourni après discussion.',
      discuss: 'Discuter de mon projet',
      again: 'Nouvelle estimation',
    },
    footer: '© 2026 m-boucher. Tous droits réservés.',
    blog: {
      eyebrow: 'Blog',
      title: 'Le blog',
      lead: 'Guides pratiques sur le logo, l’identité visuelle, le design web et l’intégration — pour les entreprises et startups qui veulent une image claire, en ligne comme hors ligne.',
      read: 'Lire l’article',
      imageSlot: 'Image',
      back: 'Tous les articles',
      prev: 'Article précédent',
      next: 'Article suivant',
      pager: 'Autres articles',
      faq: 'Questions fréquentes',
      ctaTitle: 'Un projet en tête ?',
      ctaText: 'Logo, site, identité : parlons de ce dont vous avez besoin.',
      metaTitle: 'Blog — design, web et marque | Mathieu Boucher',
      metaDescription:
        'Articles sur le logo vectoriel, l’identité visuelle, le design web et l’intégration. Conseils concrets pour entreprises et startups au Québec.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Les projets',
      lead: 'Une sélection de travaux en design, web et identité — les mêmes pièces que sur l’accueil, et d’autres à venir.',
      metaTitle: 'Portfolio — Mathieu Boucher',
      metaDescription:
        'Portfolio de Mathieu Boucher : sites, identité visuelle et projets numériques pour entreprises au Québec.',
      ctaTitle: 'Un projet en tête ?',
      ctaText: 'Parlons de ce dont vous avez besoin. Logo, site, identité.',
    },
    faq: {
      eyebrow: 'FAQ',
      tag: 'Les réponses',
      title: 'Questions fréquentes',
      lead: 'Localisation, web, design, drone et pub — ce qu’il faut savoir avant de démarrer.',
      metaTitle: 'FAQ — Mathieu Boucher',
      metaDescription:
        'Questions fréquentes : zone desservie au Québec, SEO, WordPress, React Native, fichiers d’impression, logos vectoriels, formats Ads et vols drone.',
      ctaTitle: 'Il reste une question ?',
      ctaText: 'Écrivez-moi. Un brief, et on clarifie la suite.',
      groups: [
        {
          id: 'general',
          title: 'Localisation et fonctionnement général',
          items: [
            {
              q: 'Où êtes-vous situé et quelle zone géographique desservez-vous ?',
              a: 'Je suis basé à Saint-Valère, près de Victoriaville, au Centre-du-Québec. J’accompagne les entreprises, commerces et organisations partout au Québec. La grande majorité des mandats (web, applications, design, montage vidéo) se gère très efficacement à distance en visio ou par écrit. Pour les services sur le terrain — comme les prises de vue par drone —, les déplacements se planifient selon la localisation du projet.',
            },
            {
              q: 'Travaillez-vous directement en solo ou avec des agences ?',
              a: 'Je m’adapte aux deux réalités. Je travaille en direct avec les entrepreneurs et PME pour structurer leur projet de A à Z, ou en collaboration avec des agences en m’alignant directement sur leur direction artistique, leurs spécifications techniques et leurs échéanciers.',
            },
            {
              q: 'Comment se déroule un projet avec vous ?',
              a: 'Chaque collaboration commence par un brief pour cadrer vos besoins réels, votre public et vos objectifs. On valide ensuite les étapes clés (architecture, maquettes, prototypes ou storyboards) de façon transparente avant la production finale. Vous savez toujours où l’on s’en va, sans mauvaise surprise.',
            },
          ],
        },
        {
          id: 'dev',
          title: 'Web, Applications & Développement',
          items: [
            {
              q: 'Le site web ou l’application sera-t-il optimisé pour Google (SEO) ?',
              a: 'Oui. Le référencement naturel ne s’ajoute pas à la dernière minute : il s’intègre dès la structure de base. Pour le web, je m’occupe de la hiérarchie des balises, de la vitesse de chargement, de l’optimisation mobile et de la propreté du code (WordPress, React, etc.) pour donner de solides fondations à votre visibilité.',
            },
            {
              q: 'Pourrai-je modifier mon site web moi-même après la mise en ligne ?',
              a: 'Absolument. Si nous optons pour une solution WordPress, je configure le site pour que vous puissiez modifier vos textes, images et pages simples en toute autonomie, sans avoir à coder.',
            },
            {
              q: 'React Native suffit-il vraiment pour une application mobile (iOS et Android) ?',
              a: 'Pour la grande majorité des applications d’entreprise, des outils métiers et des produits numériques, oui. Une seule base de code performante permet d’alimenter les deux stores tout en réduisant considérablement les coûts de développement initiaux.',
            },
          ],
        },
        {
          id: 'design',
          title: 'Design, Imprimé & Numérique',
          items: [
            {
              q: 'Fournissez-vous les fichiers sources et prêts pour l’impression (BAT) ?',
              a: 'Oui. Pour l’imprimé, je livre des PDF haute résolution rigoureux (fonds perdus, traits de coupe, profils de couleur). Pour le design graphique et l’identité visuelle, vous récupérez les fichiers maîtres vectoriels (AI, SVG, PDF) ainsi que les formats d’export adaptés pour être totalement propriétaires de votre marque.',
            },
            {
              q: 'Créez-vous des logos vectoriels ?',
              a: 'Toujours. Le fichier maître d’un logo doit être vectoriel pour garantir une netteté parfaite, qu’il soit affiché en minuscule sur une carte de visite ou en grand format sur une enseigne extérieure.',
            },
            {
              q: 'Puis-je commander uniquement de la conception sans l’impression ?',
              a: 'Oui. De nombreux clients me confient la création des maquettes et des fichiers prêts à produire, puis impriment les supports auprès de leur atelier habituel. Je reste disponible si votre imprimeur a des questions techniques.',
            },
          ],
        },
        {
          id: 'media',
          title: 'Drone, Vidéo & Publicité',
          items: [
            {
              q: 'Livrez-vous les formats adaptés pour Google Ads, Meta et LinkedIn ?',
              a: 'Oui. Pour vos campagnes publicitaires, je fournis des kits multi-formats complets (ratios 9:16, 1:1, 16:9, bannières HTML5/IAB) qui respectent scrupuleusement les contraintes de poids et de dimensions exigées par chaque régie. Vous pouvez diffuser sans perdre de temps en reconversion.',
            },
            {
              q: 'Que se passe-t-il en cas de mauvaise météo pour un vol de drone ?',
              a: 'La sécurité et la qualité d’image passent avant tout. Si la météo s’annonce défavorable (vent fort, pluie, nuages trop bas), nous décalons simplement la fenêtre de vol pour garantir des images nettes et exploitables.',
            },
            {
              q: 'Pouvez-vous décliner une longue vidéo publicitaire en formats courts ?',
              a: 'C’est même recommandé. Je prévois des coupes dès l’étape du storyboard pour que votre message clé percute tout aussi bien en format 6 secondes qu’en 15 ou 30 secondes sur les réseaux sociaux.',
            },
          ],
        },
      ],
    },
    notFound: {
      code: '404',
      title: 'Page non trouvée',
      text: 'La page que vous recherchez n’existe pas.',
      back: 'Retour à l’accueil',
    },
  },
  en: {
    meta: {
      title: 'Mathieu Boucher — Developer & designer',
      description:
        'From web development and mobile apps to print and digital solutions.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      print: 'Print',
      digital: 'Digital',
      web: 'Web',
      apps: 'Applications',
      drone: 'Drone',
      video: 'Video',
      estimate: 'Estimate',
      contact: 'Contact',
      blog: 'Blog',
      faq: 'FAQ',
      portfolio: 'Portfolio',
      home2: 'Home 2',
      open: 'Open menu',
      close: 'Close menu',
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
      langEn: 'Switch to English',
      langFr: 'Switch to French',
    },
    home: {
      name: 'Mathieu Boucher',
      role: 'Freelance Web Developer & Designer',
      intro:
        'From web development and mobile applications to print and digital solutions — I offer a complete range of services to bring your projects to life and strengthen your brand, online and offline.',
      ctaServices: 'View my services',
      ctaContact: 'Contact me',
      marquee:
        'MODERN LOOK • SCROLLING BANNER • S-SHAPE DESIGN • CHARCOAL & BLACK • CRUNCHY DESIGN TRENDS • UNIQUE WAVE • ',
      servicesEyebrow: 'My Services',
      servicesLead:
        'Discover all my professional services in web development, design and numeric solutions adapted to your needs.',
      servicesMore: 'Learn More',
      services: [
        {
          slug: 'applications',
          title: 'Application',
          text: 'Custom application development for iOS and Android. Innovative mobile solutions for your business.',
          cta: 'Web Application',
        },
        {
          slug: 'web',
          title: 'Web',
          text: 'Creation of modern and high-performance websites. From design to integration, I develop your online presence.',
          cta: 'Web Services',
        },
        {
          slug: 'imprime',
          title: 'Print',
          text: 'Graphic design and professional printing solutions. From conception to production, I create impactful visual materials.',
          cta: 'Print Services',
        },
        {
          slug: 'numerique',
          title: 'Digital',
          text: 'Innovative numeric solutions for your business. Numeric strategy, marketing automation and optimal user experience.',
          cta: 'Digital Services',
        },
        {
          slug: 'video',
          title: 'Video',
          text: 'Ad video, web banners and network creatives — from concept to assets ready to run.',
          cta: 'Video services',
        },
      ],
      projectsEyebrow: 'Latest Projects',
      projectsLead: 'Discover the latest projects I have completed for my clients.',
      projectsCta: 'View All Projects',
      lightboxClose: 'Close',
      lightboxPrev: 'Previous project',
      lightboxNext: 'Next project',
      projects: [
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4',
        'Project 5',
        'Project 6',
        'Project 7',
        'Project 8',
        'Project 9',
        'Project 10',
        'Project 11',
        'Project 12',
        'Project 13',
        'Project 14',
      ],
      ctaTitle: 'Ready to Start Your Project?',
      ctaText:
        'Let’s bring your vision to life. Submit your project details and I’ll help you create something amazing.',
      ctaButton: 'Submit Your Project',
      quotesEyebrow: 'Testimonials',
      quotesTitle: 'What People Say About Me',
      quotesPrev: 'Previous testimonial',
      quotesNext: 'Next testimonial',
      quotes: [
        {
          name: 'Jean Dupont',
          role: 'CEO, Tech Solutions',
          text: 'Mathieu transformed our online presence with an exceptional website. His technical expertise and creativity exceeded our expectations.',
        },
        {
          name: 'Marie Lambert',
          role: 'Marketing Director, InnovCorp',
          text: 'A talented professional who truly understands his clients’ needs. The final result was exactly what we were looking for.',
        },
        {
          name: 'Pierre Martin',
          role: 'Founder, StartupX',
          text: 'Thanks to Mathieu, our app was an immediate success. His methodical approach and creativity made all the difference.',
        },
        {
          name: 'Sophie Tremblay',
          role: 'Art Director, DesignLab',
          text: 'Working with Mathieu was exceptional. His design sense and ability to turn ideas into reality were decisive for our success.',
        },
        {
          name: 'Alexandre Roy',
          role: 'CTO, Numeric Innovations',
          text: 'Mathieu built a complex technical solution that significantly improved our operational efficiency. A true development expert.',
        },
        {
          name: 'Isabelle Bouchard',
          role: 'Owner, Boutique Élégance',
          text: 'Our online store saw a 200% increase in sales thanks to Mathieu’s work. His e-commerce expertise is remarkable.',
        },
        {
          name: 'Marc-André Gagnon',
          role: 'Director, Agence Marketing Plus',
          text: 'Mathieu created a marketing platform that changed how we work. His innovative approach and technical mastery are impressive.',
        },
        {
          name: 'Julie Fortin',
          role: 'Founder, ÉcoSolutions',
          text: 'The website Mathieu developed perfectly reflects our environmental commitment. His attention to detail and creativity are exceptional.',
        },
      ],
    },
    home2: {
      badge: 'Design proposal',
      kicker: 'Developer & designer',
      title: 'Mathieu Boucher',
      titleAccent: '',
      lead:
        'From web development and mobile apps to print and digital, I offer a full range of services to bring your projects to life and strengthen your brand — online and offline.',
      ctaPrimary: 'See services',
      ctaSecondary: 'Contact me',
      proof: '{years} of experience — 25 companies shipped with.',
      galleryEyebrow: 'Recent work',
      pitchEyebrow: 'A complete practice',
      pitchTitle: 'From idea to delivery.',
      pitchLead:
        'Kickstart, refine, ship. React, design and print — the same standard, online and off.',
      pillars: [
        {
          title: 'Create',
          text: 'Sites, apps and identities built to last. From the pixel to the architecture.',
        },
        {
          title: 'Refine',
          text: 'Every detail counts. I push until it actually feels like you.',
        },
        {
          title: 'Deliver',
          text: 'Work that stays with your users — and holds up in production.',
        },
      ],
      servicesTitle: 'Five crafts, one direction.',
      quoteLabel: 'Testimonial',
      back: 'See the current home',
      footerTitle: 'Let’s work together',
      footerText: 'No brief too small, no waiting. Send a note and we start.',
      footerCta: 'Start a project',
      colServices: 'Services',
      colWork: 'Work',
      colResources: 'Resources',
      colStudio: 'Freelance',
      colConnect: 'Connect',
      notice:
        'Featured work on this site is shown for illustration. Projects remain the property of their clients and makers. Logos and branded content belong to their owners. For a different credit or a takedown, get in touch.',
      formTitle: 'Write to me.',
      formPending: 'Sending...',
      formError: 'Please fill in this field.',
    },
    about: {
      eyebrow: 'About',
      name: 'Mathieu Boucher',
      role: 'Developer & designer',
      title: 'Who am I?',
      values: 'Creativity – Passion – Authenticity',
      p1: 'Passionate freelance web developer & designer with over {years} of experience in agencies and companies. Specialized in React and React Native, I create custom web and mobile solutions that transform your ideas into exceptional digital experiences.',
      p2: 'Entrepreneur at heart, I founded my own agency at 20 and guided over 25 Canadian companies to digital success. My unique approach combines creativity, technical expertise, and strategic vision to deliver projects that exceed expectations and leave a lasting mark on your users.',
    },
    services: {
      imprime: {
        eyebrow: 'Services',
        title: 'Print',
        titleAccent: 'Off screen.',
        subtitle: 'Professional print solutions to elevate your image',
        banner:
          'PRINT • BUSINESS CARDS • FLYERS • POSTERS • PACKAGING • SIGNAGE • LARGE FORMAT • STATIONERY • ',
        intro:
          'Screens turn off, but a business card people keep in hand, a flyer they flip through, or packaging they touch leaves a lasting impression. I support you through every print project, from the initial idea to the delivery of the final files.',
        metaTitle: 'Professional print design in Quebec — Cards, flyers & packaging | Mathieu Boucher',
        metaDescription:
          'Print-ready graphic design in Centre-du-Québec: business cards, flyers, posters, and packaging. From layout to press file.',
        body: [
          'Based in Saint-Valère, near Victoriaville, I work with shops, businesses, and organizations all across Quebec. Format, paper stock, finishes, bleeds, or spot colors: I prepare clean, rigorous files so your printer can run production without any surprises.',
        ],
        processTitle: 'How a Print Project Works',
        process: [
          'We start by defining the real-world use: who receives the item, where will it live, and in what quantity? Next, I design the layout, fine-tune the details with you, and then finalize the Press-Ready Proof (BAT) and final files. If you already work with a printer, I match their technical specs. Otherwise, I can point you toward the right local providers.',
        ],
        faq: [
          {
            q: 'Do you provide the files for the printer?',
            a: 'Yes, I deliver high-resolution PDFs with bleeds, crop marks, and matching color profiles.',
          },
          {
            q: 'Can I order just the design without printing?',
            a: 'Absolutely. Many clients stop at the production-ready file and print through their regular supplier.',
          },
          {
            q: 'What are the turnaround times?',
            a: 'Design usually takes a few days depending on complexity. Printing depends on the chosen print shop and finishes (lamination, foil stamping, etc.).',
          },
        ],
        sectionTitle: 'Print Services',
        sectionLead: 'Custom print solutions to bring your brand to life',
        groups: [
          {
            title: 'Communication Materials',
            text: 'I create printed materials that reinforce your brand identity with a clear and striking layout.',
            items: [
              'Professional business cards',
              'Flyers, leaflets, and brochures',
              'Posters, banners, and catalogs',
              'Sales sheets and corporate stationery',
            ],
          },
          {
            title: 'Packaging & Labeling',
            text: 'I design packaging that showcases your products from first glance, factoring volume, stock, and closure into the overall design.',
            items: [
              'Custom labels',
              'Custom boxes, pouches, and sleeves',
              'Eco-friendly packaging solutions',
            ],
          },
          {
            title: 'Events & Signage',
            text: 'For your events or premises, I produce materials designed to be visible from a distance and easy to set up.',
            items: [
              'Roll-ups and pull-up banners',
              'Indoor and outdoor signage',
              'Exhibition displays and name badges',
            ],
          },
        ],
        ctaTitle: 'Bring your print projects to life!',
        ctaText: 'Let’s discuss your needs and create printed materials that leave a mark.',
      },
      numerique: {
        eyebrow: 'Services',
        title: 'Digital',
        titleAccent: 'In pictures.',
        subtitle: 'Innovative digital solutions to propel your business',
        banner:
          'DIGITAL • VISUAL IDENTITY • MOTION DESIGN • SOCIAL MEDIA • DIGITAL STRATEGY • ILLUSTRATION • ',
        intro:
          'A strong digital presence isn’t about posting more often; it’s about visual consistency. I help you build a solid visual system: a logo that reads clearly at any size, a controlled color palette, and templates your team can actually reuse.',
        metaTitle: 'Brand identity, logo and digital design in Quebec | Mathieu Boucher',
        metaDescription:
          'Logo design, visual identity, social media visuals, and motion design in Quebec. Give your brand a cohesive image.',
        body: [
          'Entrepreneurs, startups, and SMBs in Quebec: I handle both your foundational graphic elements (logo, icons) and your daily content (carousels, infographics, newsletters) so people recognize you instantly.',
        ],
        processTitle: 'How a Digital Project Works',
        process: [
          'We first analyze what already exists (logo files, current colors, inspirations). Then, I propose creative directions. Once we lock in a direction, I deliver a complete, organized pack: vector files, templates, and clear usage guidelines.',
        ],
        faq: [
          {
            q: 'Do you create vector logos?',
            a: 'Yes, the master file is always vector-based (AI / SVG / PDF) to ensure a crisp look from tiny screens to large billboards.',
          },
          {
            q: 'Do you do motion design?',
            a: 'Yes, to animate a logo, boost a promotional video, or create eye-catching ad inserts.',
          },
          {
            q: 'Do you work remotely?',
            a: 'Absolutely, meetings happen smoothly via video or email anywhere in Quebec, with options to meet in person near Victoriaville.',
          },
        ],
        actions: ['Estimate', 'Contact me'],
        sectionTitle: 'Digital Services',
        sectionLead: 'A clear identity, lasting visuals, a brand people recognize',
        groups: [
          {
            title: 'Design & Visual Identity',
            items: [
              'Logo design and brand identity redesign',
              'Brand guidelines and design system rollouts',
              'Custom templates (newsletters, documents)',
              'Social media visuals and infographics',
            ],
          },
          {
            title: 'Interactive & Web Design',
            items: [
              'UI/UX design (web interfaces and applications)',
              'Wireframes and user journeys optimized for mobile',
              'Interactive presentations',
            ],
          },
          {
            title: 'Visual Content & Motion',
            items: [
              'Motion design to bring your messages to life',
              'Visuals for podcasts, videos, and virtual events',
            ],
          },
        ],
        ctaTitle: 'Transform your digital presence!',
        ctaText: 'Let’s discuss your project and build a brand image that stands out.',
      },
      web: {
        eyebrow: 'Services',
        title: 'Web',
        titleAccent: 'Online.',
        subtitle: 'Modern, custom web development for your online presence',
        banner:
          'WEB • WORDPRESS • E-COMMERCE • REACT • SEO • SHOWCASE SITES • PERFORMANCE • MAINTENANCE • ',
        intro:
          'Your website has a specific job: inform, build trust, and turn visitors into clients. I design showcase sites, landing pages, and online stores that load quickly, look great on mobile, and accurately reflect your expertise.',
        metaTitle: 'WordPress website creation, e-commerce & SEO | Mathieu Boucher',
        metaDescription:
          'Showcase websites, WooCommerce/Shopify stores, and SEO optimization in Quebec. Fast, clear sites built to convert visitors.',
        body: [
          'Whether it’s WordPress (Divi, Elementor), e-commerce platforms (WooCommerce, Shopify), or a custom React setup, I choose the tool that fits your actual needs and future autonomy. Search Engine Optimization (SEO) is built right into the core structure.',
        ],
        processTitle: 'How a Web Project Works',
        process: [
          'We first clarify your goals, the number of pages needed, and key features. Next, I produce mockups, build the site, integrate your content, and handle launch tasks (hosting, domain, forms). I also train you on how to manage your pages day-to-day.',
        ],
        faq: [
          {
            q: 'Will the site be optimized for Google (SEO)?',
            a: 'Yes, I build solid technical foundations: tag hierarchy, loading speed, mobile responsiveness, and clean content.',
          },
          {
            q: 'Can I update the site myself afterward?',
            a: 'Yes, with WordPress, you can easily update text, images, and simple pages on your own without technical skills.',
          },
          {
            q: 'Do you build online stores?',
            a: 'Yes, on WooCommerce and Shopify, setting up the complete catalog, taxes, and shipping options.',
          },
        ],
        sectionTitle: 'Web Services',
        sectionLead: 'High-performing websites built to convert',
        groups: [
          {
            title: 'Custom Websites',
            items: [
              'Custom WordPress websites (Divi, Elementor)',
              'Showcase websites and artistic or business portfolios',
              'Conversion-optimized landing pages',
            ],
          },
          {
            title: 'E-commerce',
            items: [
              'WooCommerce and Shopify online stores',
              'Product catalogs, inventory management, and secure checkouts',
              'Optimized mobile shopping experiences',
            ],
          },
          {
            title: 'Maintenance & SEO',
            items: [
              'Speed optimization and technical SEO',
              'Security updates and regular backups',
              'Technical support and training for self-management',
            ],
          },
        ],
        ctaTitle: 'Create your web presence of tomorrow!',
        ctaText: 'Let’s discuss your project and build a site that fits you.',
      },
      applications: {
        eyebrow: 'Services',
        title: 'Applications',
        titleAccent: 'Custom.',
        subtitle: 'Modern custom React and React Native applications',
        banner:
          'APPLICATIONS • REACT • REACT NATIVE • ANDROID • NEXT.JS • TYPESCRIPT • API • ',
        intro:
          'An app is not just a complex website: it’s a functional tool built to solve specific tasks (data management, user accounts, internal tools). I develop modern applications using React (for web) and React Native (for iOS and Android) to give you a solid, fast, and easy-to-maintain foundation.',
        metaTitle: 'Web and mobile app development (React / React Native) | Mathieu Boucher',
        metaDescription:
          'Custom web and mobile applications using React, React Native, and TypeScript in Quebec. Design, development, and ongoing support.',
        body: [
          'From mapping user journeys to final deployment, I approach your project pragmatically. TypeScript, API integration, rigorous testing—every line of code is written to help your product grow long-term.',
        ],
        processTitle: 'How an App Project Works',
        process: [
          'We outline the scope (web, mobile, or both) and essential user pathways using prototypes. Development then proceeds through regular milestones, with frequent walkthroughs until the app is published to the app stores or deployed online.',
        ],
        faq: [
          {
            q: 'Is React Native enough for both iOS and Android?',
            a: 'Yes, it allows for a single, performant codebase across both operating systems while reducing initial development costs.',
          },
          {
            q: 'Do you handle app store publication?',
            a: 'Yes, I can prepare build configurations, store listings, and handle submissions to the App Store and Google Play.',
          },
        ],
        sectionTitle: 'App Services',
        sectionLead: 'Turn your ideas into high-performing, scalable apps',
        groups: [
          {
            title: 'Web Applications (React / Next.js)',
            items: [
              'Custom web apps and Single Page Applications (SPAs)',
              'Dashboards and internal management interfaces',
              'Performance optimization and API integration',
            ],
          },
          {
            title: 'Mobile Applications (React Native)',
            items: [
              'Cross-platform mobile apps (iOS and Android)',
              'Fluid interfaces and touch-first ergonomics',
            ],
          },
          {
            title: 'Evolution & Support',
            items: [
              'Redesigns, modernization, and legacy code takeovers',
              'Evolutionary maintenance, bug fixes, and dependency updates',
            ],
          },
        ],
        ctaTitle: 'Bring your app project to life!',
        ctaText: 'Let’s discuss your vision and build a technical solution tailored for success.',
      },
      drone: {
        eyebrow: 'Services',
        title: 'Drone',
        titleAccent: 'In flight.',
        subtitle: 'Professional aerial photography and videography services',
        banner:
          'DRONE • AERIAL PHOTO • AERIAL VIDEO • INSPECTION • 3D MAPPING • REAL ESTATE • ',
        intro:
          'Drones reveal what the ground misses: the scale of a land lot, the geometry of a roof, progress on a construction site, or the sweep of a landscape. I capture aerial photos and videos for real estate, commercial marketing, and project tracking.',
        metaTitle: 'Aerial photo and video in Quebec — Inspection & mapping | Mathieu Boucher',
        metaDescription:
          'Aerial photography, drone video, roof inspection, and 3D mapping in Centre-du-Québec. Real estate, construction sites, and web content.',
        body: [
          'Beyond aesthetics, I handle technical missions like visual inspections and 3D mapping. Each flight is meticulously planned in compliance with safety regulations and airspace rules, followed by careful post-production (color grading, stitching, web-ready formatting).',
        ],
        processTitle: 'How a Drone Shoot Works',
        process: [
          'We define the location, exact use for the images (real estate listing, promo, inspection), and any constraints. I check the weather window and plan the flight. After capture, I handle sorting, editing, and color grading to deliver ready-to-use files.',
        ],
        faq: [
          {
            q: 'Do you travel outside of Victoriaville?',
            a: 'Centre-du-Québec is my main base, but travel to other regions is entirely possible depending on the project.',
          },
          {
            q: 'What happens if the weather is bad?',
            a: 'Safety and image quality come first—flights are simply postponed in high winds, rain, or low cloud ceilings.',
          },
          {
            q: 'Do you perform technical inspections?',
            a: 'Yes, I capture precise visual surveys to check the condition of hard-to-reach structures without unnecessary scaffolding.',
          },
        ],
        sectionTitle: 'Drone Services',
        sectionLead: 'Get a fresh perspective with striking aerial imagery',
        groups: [
          {
            title: 'Aerial Photography & Video',
            items: [
              'Real estate, architectural, and landscape photography',
              'Cinematic promotional videos for the web and social media',
              'Aerial event coverage',
            ],
          },
          {
            title: 'Inspection & 3D Mapping',
            items: [
              'Visual inspection of roofs and structures',
              'Construction progress tracking and site surveillance',
              '3D modeling, orthophotos, and photogrammetry',
            ],
          },
        ],
        ctaTitle: 'Capture your projects from a new angle!',
        ctaText: 'Let’s discuss your needs and elevate your projects through aerial imaging.',
      },
      video: {
        eyebrow: 'Services',
        title: 'Video',
        titleAccent: 'Advertising.',
        subtitle: 'Video ads, banners, and creatives for the web and social media',
        banner:
          'VIDEO • ADVERTISING • BANNERS • DISPLAY • MOTION • SOCIAL ADS • THIRD-PARTY • SPOTS • ',
        intro:
          'On social media and across the web, a great video or ad banner has two jobs: stop the user’s scroll, then drive immediate action. I design and produce spots, motion design animations, and multi-format ad kits (Google, Meta, LinkedIn) perfectly optimized for your campaigns.',
        metaTitle: 'Video advertising, motion design, and web banners | Mathieu Boucher',
        metaDescription:
          'Advertising spots, motion design, and display creatives for Google, Meta, and LinkedIn. Professional video production in Quebec.',
        body: [
          'From the initial storyboard to format variations (9:16, 1:1, 16:9) and adherence to platform file limits, I ensure your visual messages are ready to deploy friction-free.',
        ],
        processTitle: 'How a Video or Ad Project Works',
        process: [
          'We first target your audience, distribution channels, and key message. I then write the storyboard to validate the concept before shooting or animating. Finally, I deliver the final exports neatly labeled and optimized for each platform.',
        ],
        faq: [
          {
            q: 'Do you deliver formats tailored for Google Ads and Meta?',
            a: 'Yes, I supply complete multi-format kits strictly respecting the weight and dimension constraints of each ad network.',
          },
          {
            q: 'Can you break down a long video into short cuts?',
            a: 'Yes, that’s standard practice: I plan cuts right into the storyboard so your message reads just as well in 6 seconds as it does in 30.',
          },
          {
            q: 'Do you work directly or with agencies?',
            a: 'Both. Working with agencies, I match their art direction and media specs. Working directly, I set the framework (message, channels, deliverables) so you know exactly what ships.',
          },
        ],
        sectionTitle: 'Video & Advertising Services',
        sectionLead: 'High-impact ad formats to capture attention online',
        groups: [
          {
            title: 'Video Ads & Social Ads',
            items: [
              'Advertising spots and product demo videos',
              'Short-form formats for social media (Reels, Shorts, carousels)',
              'Editing, color grading, and visual branding',
            ],
          },
          {
            title: 'Web Banners & Display',
            items: [
              'Static and animated banners (HTML5 / GIF, IAB formats)',
              'Website takeovers and display ad placements',
              'Creative variants for A/B testing',
            ],
          },
          {
            title: 'Strategy & Full Production',
            items: [
              'Scriptwriting, storyboard design, and art direction',
              'Video shooting and custom content production',
            ],
          },
        ],
        ctaTitle: 'Make your brand speak on screen!',
        ctaText:
          'Let’s discuss your next video campaign or set of banners and create converting creatives.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      addressLabel: 'Address',
      address: '1041 4e rue Croteau, St-Valère, QC',
      postal: 'G0P 1M0',
      phoneLabel: 'Phone',
      phone: '+1 (819) 302-8781',
      emailLabel: 'Email',
      email: 'mrboucher95@gmail.com',
      name: 'Your name',
      namePh: 'Enter your full name',
      emailField: 'Your email',
      emailPh: 'Enter your email address',
      subject: 'Subject',
      subjectPh: 'What is the subject of your message?',
      message: 'Your message',
      messagePh: 'Write your message here...',
      prev: 'Previous',
      next: 'Next',
      send: 'Send',
      sent: 'Thank you. Your message was sent — I will get back to you shortly.',
      sendError: 'Sending failed. Please try again in a moment.',
      activate:
        'Open the “Activate Form” email sent to mrboucher95@gmail.com (check spam), click the link, then send your message again.',
      mapLabel: 'Victoriaville',
      mapOpen: 'Open in Google Maps',
      ctaTitle: 'A project in mind?',
      ctaText: 'Answer a few questions to get an indicative estimate.',
      ctaEstimate: 'Estimate my project',
    },
    estimate: {
      title: 'Project estimator',
      lead: 'Answer a few questions to get an indicative estimate for your project.',
      which: 'Which service are you interested in?',
      from: 'From',
      included: 'Included',
      step: 'Step',
      selectAll: 'Select all options that apply.',
      prev: 'Previous',
      next: 'Next',
      see: 'See estimate',
      yours: 'Your estimate',
      total: 'Estimated total',
      disclaimer:
        'This estimate is indicative and may vary based on actual project complexity. A detailed quote will be provided after discussion.',
      discuss: 'Discuss my project',
      again: 'New estimate',
    },
    footer: '© 2026 m-boucher. All Rights Reserved.',
    blog: {
      eyebrow: 'Blog',
      title: 'The blog',
      lead: 'Practical guides on logos, visual identity, web design and front-end — for businesses and startups that want a clear image, online and off.',
      read: 'Read the article',
      imageSlot: 'Image',
      back: 'All articles',
      prev: 'Previous article',
      next: 'Next article',
      pager: 'More articles',
      faq: 'Frequently asked questions',
      ctaTitle: 'A project in mind?',
      ctaText: 'Logo, site, identity: let’s talk about what you need.',
      metaTitle: 'Blog — design, web and brand | Mathieu Boucher',
      metaDescription:
        'Articles on vector logos, visual identity, web design and front-end. Practical notes for businesses and startups in Quebec.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'The work',
      lead: 'A selection of design, web and identity pieces — the same set as on the home page, with more to come.',
      metaTitle: 'Portfolio — Mathieu Boucher',
      metaDescription:
        'Portfolio of Mathieu Boucher: websites, visual identity and digital work for businesses in Quebec.',
      ctaTitle: 'A project in mind?',
      ctaText: 'Let’s talk about what you need. Logo, site, identity.',
    },
    faq: {
      eyebrow: 'FAQ',
      tag: 'The answers',
      title: 'Frequently asked questions',
      lead: 'Location, web, design, drone and ads — what to know before we start.',
      metaTitle: 'FAQ — Mathieu Boucher',
      metaDescription:
        'FAQ: service area in Quebec, SEO, WordPress, React Native, print-ready files, vector logos, ad formats and drone flights.',
      ctaTitle: 'Still have a question?',
      ctaText: 'Write to me. A brief, and we sort out the next step.',
      groups: [
        {
          id: 'general',
          title: 'Location & General Workflow',
          items: [
            {
              q: 'Where are you located, and what areas do you serve?',
              a: 'I am based in Saint-Valère, near Victoriaville, in Centre-du-Québec. I work with businesses, shops, and organizations all across Quebec. The vast majority of projects (web, apps, design, video editing) are handled efficiently remotely via video calls or email. For field services—like aerial drone shoots—travel logistics are planned based on the project’s location.',
            },
            {
              q: 'Do you work solo or with agencies?',
              a: 'I adapt to both realities. I work directly with entrepreneurs and SMEs to structure their projects from A to Z, or in collaboration with agencies, aligning directly with their art direction, technical specifications, and deadlines.',
            },
            {
              q: 'How does a project work with you?',
              a: 'Every collaboration starts with a brief to outline your real needs, target audience, and goals. We then validate key milestones (architecture, mockups, prototypes, or storyboards) step-by-step before final production. You always know where the project is heading, with no nasty surprises.',
            },
          ],
        },
        {
          id: 'dev',
          title: 'Web, Apps & Development',
          items: [
            {
              q: 'Will my website or app be optimized for Google (SEO)?',
              a: 'Yes. Search engine optimization isn’t an afterthought tacked on at the end; it’s built right into the core structure. For websites, I handle tag hierarchies, loading speeds, mobile responsiveness, and clean code (WordPress, React, etc.) to give your visibility a solid foundation.',
            },
            {
              q: 'Will I be able to update my website myself after launch?',
              a: 'Absolutely. If we choose a WordPress solution, I configure the site so you can easily update your texts, images, and simple pages on your own without needing to touch any code.',
            },
            {
              q: 'Is React Native enough for a mobile app (iOS and Android)?',
              a: 'For the vast majority of business applications, operational tools, and digital products, yes. A single performant codebase can power both app stores while significantly reducing initial development costs.',
            },
          ],
        },
        {
          id: 'design',
          title: 'Design, Print & Digital',
          items: [
            {
              q: 'Do you provide source files and print-ready files (BAT)?',
              a: 'Yes. For print, I deliver rigorous high-resolution PDFs (bleeds, crop marks, color profiles). For graphic design and visual identity, you receive the master vector files (AI, SVG, PDF) along with appropriate export formats, ensuring you maintain complete ownership of your brand.',
            },
            {
              q: 'Do you create vector logos?',
              a: 'Always. A logo’s master file must be vector-based to guarantee absolute crispness, whether it’s displayed tiny on a business card or large on an outdoor sign.',
            },
            {
              q: 'Can I order just the design without the printing?',
              a: 'Yes. Many clients trust me to design the layouts and production-ready files, and then print the materials through their preferred local print shop. I remain available if your printer has any technical questions.',
            },
          ],
        },
        {
          id: 'media',
          title: 'Drone, Video & Advertising',
          items: [
            {
              q: 'Do you deliver formats optimized for Google Ads, Meta, and LinkedIn?',
              a: 'Yes. For your advertising campaigns, I supply complete multi-format kits (9:16, 1:1, 16:9 ratios, HTML5/IAB banners) that strictly respect the weight and dimension constraints required by each ad network. You can launch your campaigns without wasting time on reconversion.',
            },
            {
              q: 'What happens if the weather is bad for a drone flight?',
              a: 'Safety and image quality come first. If the weather looks unfavorable (high winds, rain, low cloud ceilings), we simply reschedule the flight window to ensure sharp, usable footage.',
            },
            {
              q: 'Can you break down a long video ad into short formats?',
              a: 'That’s actually recommended. I plan the cuts right at the storyboard stage so your core message hits just as hard in a 6-second format as it does in 15 or 30 seconds on social media.',
            },
          ],
        },
      ],
    },
    notFound: {
      code: '404',
      title: 'Page Not Found',
      text: 'The page you are looking for does not exist.',
      back: 'Back to Home',
    },
  },
}

export const estimatorConfig = {
  print: {
    labelKey: 'print',
    from: 800,
    questions: [
      {
        id: 'type',
        multi: false,
        title: { fr: 'Type de projet', en: 'Project type' },
        options: [
          { id: 'logo', label: { fr: 'Logo', en: 'Logo' }, price: 800 },
          {
            id: 'brand',
            label: { fr: 'Image de marque complète', en: 'Full branding' },
            price: 2500,
          },
          {
            id: 'pack',
            label: { fr: 'Pack imprimé (cartes, dépliants…)', en: 'Print pack (cards, brochures…)' },
            price: 1200,
          },
          {
            id: 'sign',
            label: { fr: 'Signalisation / affichage', en: 'Signage / display' },
            price: 900,
          },
        ],
      },
      {
        id: 'extras',
        multi: true,
        title: { fr: 'Livrables additionnels', en: 'Additional deliverables' },
        options: [
          { id: 'cards', label: { fr: 'Cartes d’affaires (50 cartes)', en: 'Business cards (50 cards)' }, price: 80 },
          { id: 'brochure', label: { fr: 'Brochure / dépliant (100 exemplaires)', en: 'Brochure / flyer (100 copies)' }, price: 150 },
          { id: 'poster', label: { fr: 'Affiche (25 exemplaires)', en: 'Poster (25 copies)' }, price: 120 },
          { id: 'packaging', label: { fr: 'Emballage (1 concept)', en: 'Packaging (1 concept)' }, price: 400 },
        ],
      },
      {
        id: 'revisions',
        multi: false,
        title: { fr: 'Rondes de révisions', en: 'Revision rounds' },
        options: [
          { id: 'r2', label: { fr: '2 rondes (inclus)', en: '2 rounds (included)' }, price: 0, included: true },
          { id: 'r4', label: { fr: '4 rondes', en: '4 rounds' }, price: 200 },
          { id: 'unlimited', label: { fr: 'Révisions illimitées', en: 'Unlimited revisions' }, price: 500 },
        ],
      },
    ],
  },
  digital: {
    labelKey: 'digital',
    from: 600,
    questions: [
      {
        id: 'scope',
        multi: false,
        title: { fr: 'Portée du projet', en: 'Project scope' },
        options: [
          { id: 'social', label: { fr: 'Réseaux sociaux', en: 'Social media' }, price: 600 },
          { id: 'ads', label: { fr: 'Campagne publicitaire', en: 'Advertising campaign' }, price: 1500 },
          { id: 'strategy', label: { fr: 'Stratégie numérique complète', en: 'Full digital strategy' }, price: 3500 },
        ],
      },
      {
        id: 'platforms',
        multi: true,
        title: { fr: 'Plateformes', en: 'Platforms' },
        options: [
          { id: 'meta', label: { fr: 'Facebook / Instagram', en: 'Facebook / Instagram' }, price: 200 },
          { id: 'linkedin', label: { fr: 'LinkedIn', en: 'LinkedIn' }, price: 200 },
          { id: 'google', label: { fr: 'Google Ads', en: 'Google Ads' }, price: 250 },
          { id: 'email', label: { fr: 'Infolettre / email', en: 'Newsletter / email' }, price: 180 },
        ],
      },
      {
        id: 'duration',
        multi: false,
        title: { fr: 'Durée d’accompagnement', en: 'Support duration' },
        options: [
          { id: 'm1', label: { fr: '1 mois', en: '1 month' }, price: 800 },
          { id: 'm3', label: { fr: '3 mois', en: '3 months' }, price: 2000 },
          { id: 'm6', label: { fr: '6 mois', en: '6 months' }, price: 3600 },
          { id: 'm12', label: { fr: '12 mois', en: '12 months' }, price: 6000 },
        ],
      },
    ],
  },
  web: {
    labelKey: 'web',
    from: 1500,
    questions: [
      {
        id: 'type',
        multi: false,
        title: { fr: 'Type de site', en: 'Site type' },
        options: [
          { id: 'showcase', label: { fr: 'Site vitrine', en: 'Showcase website' }, price: 1500 },
          { id: 'blog', label: { fr: 'Site avec blog', en: 'Website with blog' }, price: 2500 },
          { id: 'shop', label: { fr: 'Boutique en ligne', en: 'Online store' }, price: 4500 },
          { id: 'app', label: { fr: 'Application web sur mesure', en: 'Custom web application' }, price: 8000 },
        ],
      },
      {
        id: 'pages',
        multi: false,
        title: { fr: 'Nombre de pages', en: 'Number of pages' },
        options: [
          { id: 'p5', label: { fr: '1 à 5 pages', en: '1 to 5 pages' }, price: 0, included: true },
          { id: 'p10', label: { fr: '6 à 10 pages', en: '6 to 10 pages' }, price: 800 },
          { id: 'p20', label: { fr: '11 à 20 pages', en: '11 to 20 pages' }, price: 1800 },
          { id: 'p21', label: { fr: 'Plus de 20 pages', en: 'More than 20 pages' }, price: 3500 },
        ],
      },
      {
        id: 'features',
        multi: true,
        title: { fr: 'Fonctionnalités', en: 'Features' },
        options: [
          { id: 'cms', label: { fr: 'CMS (gestion de contenu)', en: 'CMS (content management)' }, price: 400 },
          { id: 'i18n', label: { fr: 'Multilingue', en: 'Multilingual' }, price: 600 },
          { id: 'seo', label: { fr: 'SEO avancé', en: 'Advanced SEO' }, price: 500 },
          { id: 'booking', label: { fr: 'Réservation en ligne', en: 'Online booking' }, price: 700 },
          { id: 'members', label: { fr: 'Espace membres', en: 'Member area' }, price: 800 },
        ],
      },
    ],
  },
  apps: {
    labelKey: 'apps',
    from: 5000,
    questions: [
      {
        id: 'platform',
        multi: false,
        title: { fr: 'Plateforme cible', en: 'Target platform' },
        options: [
          { id: 'ios', label: { fr: 'iOS uniquement', en: 'iOS only' }, price: 5000 },
          { id: 'android', label: { fr: 'Android uniquement', en: 'Android only' }, price: 5000 },
          { id: 'both', label: { fr: 'iOS et Android', en: 'iOS and Android' }, price: 8000 },
          { id: 'rn', label: { fr: 'Cross-platform (React Native)', en: 'Cross-platform (React Native)' }, price: 7000 },
        ],
      },
      {
        id: 'complexity',
        multi: false,
        title: { fr: 'Complexité', en: 'Complexity' },
        options: [
          { id: 'simple', label: { fr: 'Simple (5-8 écrans)', en: 'Simple (5-8 screens)' }, price: 0, included: true },
          { id: 'medium', label: { fr: 'Moyenne (9-15 écrans)', en: 'Medium (9-15 screens)' }, price: 4000 },
          { id: 'complex', label: { fr: 'Complexe (16+ écrans)', en: 'Complex (16+ screens)' }, price: 9000 },
        ],
      },
      {
        id: 'features',
        multi: true,
        title: { fr: 'Fonctionnalités', en: 'Features' },
        options: [
          { id: 'auth', label: { fr: 'Authentification utilisateurs', en: 'User authentication' }, price: 800 },
          { id: 'pay', label: { fr: 'Paiements in-app', en: 'In-app payments' }, price: 1200 },
          { id: 'push', label: { fr: 'Notifications push', en: 'Push notifications' }, price: 600 },
          { id: 'offline', label: { fr: 'Mode hors-ligne', en: 'Offline mode' }, price: 900 },
          { id: 'api', label: { fr: 'API / backend sur mesure', en: 'Custom API / backend' }, price: 2500 },
        ],
      },
    ],
  },
  video: {
    labelKey: 'video',
    from: 500,
    questions: [
      {
        id: 'type',
        multi: false,
        title: { fr: 'Type de projet', en: 'Project type' },
        options: [
          { id: 'spot', label: { fr: 'Vidéo publicitaire', en: 'Advertising video' }, price: 1200 },
          { id: 'banners', label: { fr: 'Bannières web', en: 'Web banners' }, price: 500 },
          { id: 'third', label: { fr: 'Bannières tiers / réseaux', en: 'Third-party / network banners' }, price: 650 },
          { id: 'pack', label: { fr: 'Pack vidéo + bannières', en: 'Video + banners pack' }, price: 1800 },
        ],
      },
      {
        id: 'scope',
        multi: false,
        title: { fr: 'Envergure', en: 'Scope' },
        options: [
          { id: 'simple', label: { fr: 'Simple (1–3 formats)', en: 'Simple (1–3 formats)' }, price: 0, selected: true },
          { id: 'medium', label: { fr: 'Moyen (kit multi-formats)', en: 'Medium (multi-format kit)' }, price: 400 },
          { id: 'full', label: { fr: 'Campagne complète', en: 'Full campaign' }, price: 1200 },
        ],
      },
      {
        id: 'extras',
        multi: true,
        title: { fr: 'Options', en: 'Options' },
        options: [
          { id: 'motion', label: { fr: 'Motion design', en: 'Motion design' }, price: 350 },
          { id: 'shoot', label: { fr: 'Tournage', en: 'Shoot' }, price: 600 },
          { id: 'ab', label: { fr: 'Variantes A/B', en: 'A/B variants' }, price: 250 },
          { id: 'rush', label: { fr: 'Livraison express', en: 'Rush delivery' }, price: 200 },
        ],
      },
    ],
  },
}
