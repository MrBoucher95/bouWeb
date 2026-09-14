const t = (fr, en) => ({ fr, en })

const COVER_FILES = import.meta.glob('../assets/img/blog/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

function coverFor(slug) {
  const hit = Object.entries(COVER_FILES).find(([path]) => {
    const file = path.replace(/\\/g, '/').split('/').pop()
    return file.startsWith(`${slug}.`)
  })
  return hit ? hit[1] : null
}

export const posts = [
  {
    slug: 'logo-vectoriel',
    date: '2026-05-06',
    audience: t('Entreprises, startups, freelances', 'Businesses, startups, freelancers'),
    title: t(
      'Pourquoi un logo vectoriel est indispensable pour votre marque',
      'Why a vector logo is essential for your brand',
    ),
    metaTitle: t(
      'Logo vectoriel : indispensable pour votre marque — Mathieu Boucher',
      'Vector logo: why it is essential for your brand — Mathieu Boucher',
    ),
    description: t(
      'Un logo vectoriel reste net à toutes les tailles. SVG, AI, EPS : formats, usages et pack de marque pour une identité durable.',
      'A vector logo stays sharp at every size. SVG, AI, EPS: formats, uses, and the brand pack that keeps identity durable.',
    ),
    sections: [
      {
        heading: t('Qu’est-ce qu’un logo vectoriel ?', 'What is a vector logo?'),
        paragraphs: [
          t(
            'Un logo vectoriel (SVG, AI, EPS) décrit des courbes et des points, pas une grille de pixels. Vous pouvez l’agrandir sur une bâche de dix mètres ou le réduire en favicon : le trait reste net. Un PNG exporté à 400 px, lui, se casse dès qu’on l’agrandit.',
            'A vector logo (SVG, AI, EPS) describes curves and points, not a grid of pixels. Scale it onto a ten-metre banner or down to a favicon: the line stays sharp. A 400 px PNG falls apart as soon as you enlarge it.',
          ),
          t(
            'C’est la base d’une identité visuelle sérieuse : une seule source, plusieurs formats. Carte d’affaires, site web, broderie, signalétique — le dessin ne change pas, seule l’échelle change. Pour une entreprise, une startup ou un freelance, c’est aussi une question de coût : un fichier maître évite de redessiner le logo à chaque nouveau support.',
            'That is the base of a serious visual identity: one source, many formats. Business card, website, embroidery, signage — the drawing stays the same, only the scale changes. For a business, startup or freelancer, it is also a cost issue: a master file means you do not redraw the logo for every new surface.',
          ),
        ],
      },
      {
        heading: t('Pourquoi un PNG ou un JPEG ne suffisent pas', 'Why a PNG or JPEG is not enough'),
        paragraphs: [
          t(
            'Les bitmaps (PNG, JPEG, WebP) figent une résolution. Ils conviennent aux photos, pas au signe de marque. Dès qu’un imprimeur, un partenaire ou un stagiaire « agrandit le fichier », la qualité chute et quelqu’un retrace le logo dans Canva.',
            'Bitmaps (PNG, JPEG, WebP) freeze a resolution. They suit photos, not a brand mark. The moment a printer, partner or intern “makes the file bigger”, quality drops and someone traces the logo in Canva.',
          ),
          t(
            'Le vectoriel se recolorie sans perte, s’exporte en version claire ou sombre, et s’intègre proprement au web. Vous n’êtes plus prisonnier d’un JPEG compressé trouvé dans un vieux mail.',
            'Vector art recolors without loss, exports for light or dark grounds, and sits cleanly on the web. You are no longer stuck with a compressed JPEG from an old email.',
          ),
        ],
      },
      {
        heading: t('SVG, AI, EPS : quel format pour quel usage', 'SVG, AI, EPS: which format for which use'),
        paragraphs: [
          t(
            'Le format suit le support. Un pack de logo vectoriel n’est pas « un fichier magique » : c’est une petite famille de livrables, chacun avec un rôle.',
            'Format follows the surface. A vector logo pack is not “one magic file”: it is a small family of deliverables, each with a role.',
          ),
        ],
        list: t(
          [
            'AI (Illustrator) : fichier maître, calques nommés, versions pleine et simplifiée.',
            'SVG : web, icônes, animation légère, favicon. Léger et net sur tous les écrans.',
            'EPS ou PDF vectoriel : imprimeurs, papeterie, signalétique.',
            'PNG haute densité : réseaux sociaux et présentations, toujours exporté depuis le maître.',
          ],
          [
            'AI (Illustrator): master file, named layers, full and simplified versions.',
            'SVG: web, icons, light motion, favicon. Light and sharp on every screen.',
            'EPS or vector PDF: printers, stationery, signage.',
            'High-density PNG: social and decks, always exported from the master.',
          ],
        ),
      },
      {
        heading: t('Ce qu’un pack de marque devrait toujours inclure', 'What a brand pack should always include'),
        paragraphs: [
          t(
            'Sans fichier maître, l’identité se dilue. Un partenaire « refait le logo », une couleur dérive, la version mobile devient illisible. Le pack évite ça.',
            'Without a master file, identity melts. A partner “rebuilds the logo”, a colour drifts, the mobile version becomes unreadable. The pack prevents that.',
          ),
          t(
            'Je livre le vectoriel maître, des exports PNG/SVG, une version simplifiée pour les petits formats, et des règles d’usage (fond, dégagement, interdits). C’est ce qui rend un logo utilisable — pas seulement « joli sur la maquette ».',
            'I deliver the master vector, PNG/SVG exports, a simplified mark for small sizes, and usage rules (ground, clear space, don’ts). That is what makes a logo usable — not only “pretty on the mockup”.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quelle est la différence entre un logo vectoriel et un PNG ?', 'What is the difference between a vector logo and a PNG?'),
        a: t(
          'Le vectoriel décrit des courbes : il reste net à n’importe quelle taille. Le PNG est une image pixelisée, liée à une résolution. Pour une marque, le maître doit être vectoriel ; le PNG n’est qu’un export.',
          'Vector art describes curves: it stays sharp at any size. PNG is a pixel image tied to a resolution. For a brand, the master should be vector; PNG is only an export.',
        ),
      },
      {
        q: t('Le SVG suffit-il comme fichier maître ?', 'Is SVG enough as a master file?'),
        a: t(
          'Le SVG est excellent pour le web. Pour l’imprimé, la broderie et les variantes, un fichier AI (ou PDF vectoriel) reste le maître : calques, fonds perdus, versions pleine et icône.',
          'SVG is excellent for the web. For print, embroidery and variants, an AI file (or vector PDF) remains the master: layers, bleeds, full and icon versions.',
        ),
      },
      {
        q: t('Combien coûte un logo vectoriel professionnel ?', 'How much does a professional vector logo cost?'),
        a: t(
          'Le prix dépend du nombre de pistes, des déclinaisons et de la charte. L’investissement réel, c’est d’éviter de le refaire à chaque support. Un devis clair vaut mieux qu’un logo « pas cher » à retracer six mois plus tard.',
          'Price depends on directions, variants and the guidelines. The real spend is avoiding a redraw for every surface. A clear quote beats a “cheap” logo you have to trace six months later.',
        ),
      },
    ],
  },
  {
    slug: 'tendances-graphiques-2026',
    date: '2026-09-08',
    audience: t('Entrepreneurs, marketeurs', 'Entrepreneurs, marketers'),
    title: t(
      'Les tendances graphiques 2026 à adopter pour votre site web',
      'Graphic design trends 2026 to adopt for your website',
    ),
    metaTitle: t(
      'Tendances graphiques 2026 pour votre site web — Mathieu Boucher',
      'Graphic design trends 2026 for your website — Mathieu Boucher',
    ),
    description: t(
      'Typo forte, contrastes francs, motion sobre : les tendances design web 2026 à adopter — et celles à laisser si elles ne servent pas votre offre.',
      'Strong type, hard contrast, quiet motion: web design trends 2026 worth adopting — and which to skip if they do not serve your offer.',
    ),
    sections: [
      {
        heading: t('Moins de décor, plus de caractère', 'Less decoration, more character'),
        paragraphs: [
          t(
            'Les sites web qui retiennent l’attention en 2026 misent sur une typographie forte, un rythme de scroll clair, et quelques images très travaillées — pas sur dix animations. Le visiteur scanne ; il ne « découvre » pas une pièce de théâtre.',
            'Websites that hold attention in 2026 use strong type, a clear scroll rhythm, and a few carefully made images — not ten animations. Visitors scan; they do not “discover” a stage play.',
          ),
          t(
            'Le crunchy design — contrastes francs, formes imparfaites, motion sobre — donne une présence. Un template Bootstrap relooké, lui, se fond dans le fil. La tendance graphique n’est utile que si elle rend votre offre plus lisible.',
            'Crunchy design — hard contrast, imperfect shapes, quiet motion — reads as presence. A restyled Bootstrap template melts into the feed. A graphic trend is only useful if it makes the offer more readable.',
          ),
        ],
      },
      {
        heading: t('Typographie, contraste et rythme', 'Type, contrast, and rhythm'),
        paragraphs: [
          t(
            'La typo porte plus que l’illustration cette année : une famille display assumée, des intertitres nets, du corps lisible. Les sites « tout en une police système » ont l’air d’un document, pas d’une marque.',
            'Type is carrying more than illustration this year: a committed display family, clean subheads, readable body. Sites that use “one system font for everything” look like a document, not a brand.',
          ),
          t(
            'Le rythme compte autant que le style : sections aérées, CTA évident après chaque bloc d’offre, pas de carrousel qui cache le message. Une tendance graphique ne convertit pas si le bouton est introuvable.',
            'Rhythm matters as much as style: airy sections, an obvious CTA after each offer block, no carousel hiding the message. A graphic trend does not convert if the button is missing.',
          ),
        ],
      },
      {
        heading: t('Couleur, matière et motion', 'Colour, material, and motion'),
        paragraphs: [
          t(
            'Les palettes sombres restent, mais le blanc n’est plus le défaut. On mélange des accents saturés avec des noirs profonds, et on laisse la photo porter la texture. Le grain, le papier scanné, le 3D sobre : de la matière, pas un filtre Instagram sur tout le site.',
            'Dark palettes stay, but white is no longer the default. Saturated accents sit on deep blacks, and photography carries the texture. Grain, scanned paper, quiet 3D: material, not an Instagram filter on the whole site.',
          ),
        ],
        list: t(
          [
            'À adopter si ça sert l’offre : typo display, contrastes francs, micro-interactions.',
            'À tester : fonds sombres, images plein cadre, formes irrégulières.',
            'À laisser si ça nuit : parallaxe lourde, autoplay, dix polices, tendances déjà usées dans votre secteur.',
          ],
          [
            'Adopt if it serves the offer: display type, hard contrast, micro-interactions.',
            'Test: dark grounds, full-bleed images, irregular shapes.',
            'Skip if it hurts: heavy parallax, autoplay, ten typefaces, trends already worn out in your sector.',
          ],
        ),
      },
      {
        heading: t('Ce qui convertit encore (tendance ou pas)', 'What still converts (trend or not)'),
        paragraphs: [
          t(
            'Une clinique n’a pas besoin du même grain qu’un studio créatif. La tendance est un outil, pas une obligation. Hiérarchie lisible, boutons évidents, pages rapides : ça reste le meilleur investissement marketing sur un site web.',
            'A clinic does not need the same grain as a creative studio. A trend is a tool, not a duty. Readable hierarchy, obvious buttons, fast pages: still the best marketing spend on a website.',
          ),
          t(
            'Si vous refondez en 2026, partez de votre offre et d’un ou deux gestes visuels forts — pas d’une liste Pinterest. C’est comme ça qu’un site a une date, sans avoir l’air daté dans dix-huit mois.',
            'If you redesign in 2026, start from the offer and one or two strong visual moves — not a Pinterest list. That is how a site has a date, without looking dated in eighteen months.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quelles sont les tendances design web en 2026 ?', 'What are the web design trends in 2026?'),
        a: t(
          'Typographie forte, contrastes francs, palettes sombres avec accents saturés, motion sobre et images très travaillées. Moins d’effets décoratifs, plus de caractère et de clarté.',
          'Strong typography, hard contrast, dark palettes with saturated accents, quiet motion and carefully made images. Fewer decorative effects, more character and clarity.',
        ),
      },
      {
        q: t('Faut-il suivre toutes les tendances graphiques ?', 'Should you follow every graphic trend?'),
        a: t(
          'Non. Une tendance qui n’aide pas à comprendre l’offre ou à convertir est du décor. Adoptez ce qui renforce votre marque ; ignorez le reste.',
          'No. A trend that does not help people understand the offer or convert is decoration. Adopt what strengthens the brand; ignore the rest.',
        ),
      },
      {
        q: t('Les tendances 2026 marchent-elles pour une PME ?', 'Do 2026 trends work for an SME?'),
        a: t(
          'Oui, si on les dose. Une PME gagne souvent plus à une typo distinctive, un contraste lisible et un site rapide qu’à un effet 3D. Le caractère se construit avec peu d’éléments, bien tenus.',
          'Yes, if you dose them. An SME often gains more from distinctive type, readable contrast and a fast site than from a 3D effect. Character is built with a few elements, held well.',
        ),
      },
    ],
  },
  {
    slug: 'palette-couleurs-marque',
    date: '2026-07-09',
    audience: t('Startups, PME', 'Startups, SMEs'),
    title: t(
      'Comment choisir la palette de couleurs parfaite pour votre marque',
      'How to choose the perfect colour palette for your brand',
    ),
    metaTitle: t(
      'Palette de couleurs de marque : le guide pratique — Mathieu Boucher',
      'Brand colour palette: a practical guide — Mathieu Boucher',
    ),
    description: t(
      'Méthode simple pour choisir une palette de couleurs de marque : rôles, contrastes WCAG, print vs écran, et règles d’usage pour rester cohérent.',
      'A simple method to choose a brand colour palette: roles, WCAG contrast, print vs screen, and usage rules so the system stays coherent.',
    ),
    sections: [
      {
        heading: t('Partir du rôle, pas de la mode', 'Start from the role, not the fashion'),
        paragraphs: [
          t(
            'Une palette de couleurs de marque n’est pas « joli / pas joli ». Elle doit porter un métier : confiance, énergie, luxe, proximité. Notez trois mots avant d’ouvrir un nuancier. Sans ça, vous choisissez une tendance, pas une identité.',
            'A brand colour palette is not pretty vs not pretty. It has to carry a trade: trust, energy, luxury, closeness. Write three words before you open a swatch book. Without that, you pick a trend, not an identity.',
          ),
          t(
            'Regardez aussi le secteur — pour vous en écarter un peu. Si toutes les cliniques sont bleu-blanc, un bleu légèrement plus chaud ou un charcoal bien tenu suffit à vous reconnaître, sans jouer les originaux hors sujet.',
            'Look at the sector too — to step slightly aside. If every clinic is blue-and-white, a slightly warmer blue or a well-held charcoal is enough to be recognised, without being original for the sake of it.',
          ),
        ],
      },
      {
        heading: t('Une base, un accent, un neutre', 'One base, one accent, one neutral'),
        paragraphs: [
          t(
            'Trois rôles suffisent pour commencer : une couleur de fond, une couleur de texte, un accent pour les actions (boutons, liens, points forts). Au-delà, le système se casse — boutons, graphiques, états d’erreur, réseaux sociaux.',
            'Three roles are enough to start: a ground, a text colour, an accent for actions (buttons, links, highlights). Beyond that the system breaks — buttons, charts, error states, social.',
          ),
          t(
            'Vous pouvez ajouter une teinte secondaire plus tard. Ce n’est pas un nuancier Pantone de vingt pastilles. Une startup n’a pas besoin d’une bible chromatique : elle a besoin de savoir quelle couleur clique, et laquelle ne clique pas.',
            'You can add a secondary hue later. This is not a twenty-chip Pantone book. A startup does not need a chromatic bible: it needs to know which colour clicks, and which does not.',
          ),
        ],
        list: t(
          [
            'Fond : la surface la plus vue (site, papier, application).',
            'Texte : contraste réel avec le fond, pas un gris « presque ok ».',
            'Accent : réservé aux CTA et aux temps forts, jamais au long paragraphe.',
            'Neutre : gris, crème ou charcoal pour aérer sans inventer une nouvelle teinte.',
          ],
          [
            'Ground: the most-seen surface (site, paper, app).',
            'Text: real contrast with the ground, not a “almost fine” grey.',
            'Accent: reserved for CTAs and peaks, never a long paragraph.',
            'Neutral: grey, cream or charcoal to give air without inventing a new hue.',
          ],
        ),
      },
      {
        heading: t('Contraste, accessibilité, print et écran', 'Contrast, accessibility, print and screen'),
        paragraphs: [
          t(
            'Vérifiez le contraste (WCAG) : texte et boutons doivent rester lisibles. Une teinte qui claque sur noir peut disparaître sur papier crème. Testez clair / sombre, et imprimez un essai avant de graver la charte.',
            'Check contrast (WCAG): text and buttons have to stay readable. A hue that pops on black can vanish on cream paper. Test light / dark, and print a trial before you lock the guidelines.',
          ),
          t(
            'L’écran et l’imprimé ne parlent pas la même langue. Un neon RGB n’existe pas en offset. Si vous avez un packaging ou de la papeterie, ancrez la palette sur des teintes reproductibles (Pantone ou CMJN), puis dérivez le web.',
            'Screen and print do not speak the same language. An RGB neon does not exist in offset. If you have packaging or stationery, anchor the palette on printable hues (Pantone or CMYK), then derive the web.',
          ),
        ],
      },
      {
        heading: t('Documenter pour que la marque tienne', 'Write it down so the brand holds'),
        paragraphs: [
          t(
            'Notez les hex, CMJN, RVB, et surtout les règles : accent = CTA, jamais le fond d’un long paragraphe. Quand chaque page invente une nouvelle teinte, la palette de couleurs ne sert plus et la marque s’efface.',
            'Write down hex, CMYK, RGB, and especially the rules: accent = CTA, never the background of a long paragraph. When every page invents a new hue, the colour palette stops working and the brand fades.',
          ),
          t(
            'Une page dans la charte, un fichier Figma partagé, des exemples oui / non : c’est assez pour une PME. La palette parfaite n’est pas la plus originale — c’est celle que tout le monde arrive à utiliser sans poser de question.',
            'One page in the guidelines, a shared Figma file, yes / no examples: enough for an SME. The perfect palette is not the most original — it is the one everyone can use without asking.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Combien de couleurs faut-il dans une palette de marque ?', 'How many colours belong in a brand palette?'),
        a: t(
          'Trois rôles suffisent : fond, texte, accent, plus un neutre. On peut ajouter une secondaire plus tard. Une palette trop longue se casse dès qu’on dessine un bouton ou un graphique.',
          'Three roles are enough: ground, text, accent, plus a neutral. You can add a secondary later. A palette that is too long breaks as soon as you draw a button or a chart.',
        ),
      },
      {
        q: t('Comment savoir si une couleur de marque est accessible ?', 'How do you know if a brand colour is accessible?'),
        a: t(
          'Mesurez le contraste texte/fond (WCAG AA au minimum). Un accent saturé peut servir au bouton, pas au long texte. Testez aussi en daltonisme simulé et sur un vrai téléphone en plein soleil.',
          'Measure text/ground contrast (WCAG AA at least). A saturated accent can serve the button, not long text. Also test with simulated colour blindness and on a real phone in full sun.',
        ),
      },
      {
        q: t('Doit-on choisir les couleurs avant le logo ?', 'Should you choose colours before the logo?'),
        a: t(
          'Les deux se parlent. On part souvent d’un sens (confiance, énergie) puis on esquisse le signe et la palette ensemble. Verrouiller 12 teintes avant le dessin, c’est se lier les mains.',
          'The two talk to each other. You often start from a sense (trust, energy) then sketch the mark and the palette together. Locking 12 hues before the drawing ties your hands.',
        ),
      },
    ],
  },
  {
    slug: 'integration-web-bonnes-pratiques',
    date: '2026-06-18',
    audience: t('Développeurs, chefs de projet', 'Developers, project leads'),
    title: t(
      'Intégration web : les bonnes pratiques pour un site rapide et responsive',
      'Web integration: best practices for a fast, responsive site',
    ),
    metaTitle: t(
      'Intégration web : site rapide et responsive — Mathieu Boucher',
      'Web integration: a fast, responsive site — Mathieu Boucher',
    ),
    description: t(
      'Bonnes pratiques d’intégration HTML, CSS et JS : sémantique, CSS fluide, JS léger, images modernes et mesures LCP pour un site rapide et responsive.',
      'HTML, CSS and JS integration habits: semantics, fluid CSS, light JS, modern images and LCP measurements for a fast, responsive site.',
    ),
    sections: [
      {
        heading: t('Le HTML d’abord (SEO et accessibilité)', 'HTML first (SEO and accessibility)'),
        paragraphs: [
          t(
            'L’intégration web commence avant le framework. Titres dans l’ordre (un h1, puis h2), boutons qui sont des boutons, liens qui sont des liens, images avec largeur, hauteur et texte alternatif. Google et les lecteurs d’écran lisent cette structure ; le CSS ne la rattrape pas.',
            'Web integration starts before the framework. Headings in order (one h1, then h2), buttons that are buttons, links that are links, images with width, height and alt text. Google and screen readers read that structure; CSS will not rescue it.',
          ),
          t(
            'Un site « tout en div » avec des clics JavaScript est plus lent à maintenir, plus fragile au clavier, et plus opaque pour le référencement. La bonne pratique la plus rentable reste un HTML honnête.',
            'A “all divs” site with JavaScript clicks is slower to maintain, more fragile on keyboard, and more opaque for search. The highest-return habit is still honest HTML.',
          ),
        ],
      },
      {
        heading: t('CSS fluide, mobile-first, peu de breakpoints', 'Fluid CSS, mobile-first, few breakpoints'),
        paragraphs: [
          t(
            'Clamp, grilles, et quelques breakpoints valent mieux que des dizaines de media queries. Le responsive n’est pas « une version mobile » : c’est une mise en page qui plie. Le JS ne devrait pas construire le layout — il l’enrichit.',
            'Clamp, grids, and a few breakpoints beat dozens of media queries. Responsive is not “a mobile version”: it is a layout that bends. JS should not build the layout — it should enrich it.',
          ),
        ],
        list: t(
          [
            'Mobile-first : le CSS de base tient sur un téléphone, les min-width ajoutent de l’air.',
            'Unités fluides (%, clamp, svh) plutôt que des largeurs magiques en pixels.',
            'Composants réutilisables plutôt que des pages « spéciales » à 1400 px.',
            'Moins de polices, fichiers variables, subset pour le latin.',
          ],
          [
            'Mobile-first: the base CSS holds on a phone, min-width adds air.',
            'Fluid units (%, clamp, svh) instead of magic pixel widths.',
            'Reusable components instead of “special” 1400 px pages.',
            'Fewer typefaces, variable files, a Latin subset.',
          ],
        ),
      },
      {
        heading: t('JavaScript léger, images modernes', 'Light JavaScript, modern images'),
        paragraphs: [
          t(
            'Coupez ce qui n’est pas vu. Un carrousel n’est pas obligatoire si une grille suffit. Les images : AVIF ou WebP, SVG pour les logos, dimensions réservées pour éviter le saut de layout (CLS).',
            'Cut what is not seen. A carousel is not mandatory if a grid will do. Images: AVIF or WebP, SVG for logos, reserved dimensions to avoid layout shift (CLS).',
          ),
          t(
            'Chaque kilo de JS se paie sur un réseau cellulaire. Chargez ce qui est critique d’abord ; le reste en différé. L’intégration soignée se sent au premier tap, pas dans le fichier de spec.',
            'Every kilo of JS is paid for on a cellular network. Load what is critical first; defer the rest. Careful integration is felt on the first tap, not in the spec file.',
          ),
        ],
      },
      {
        heading: t('Mesurer : LCP, CLS, vrai téléphone', 'Measure: LCP, CLS, a real phone'),
        paragraphs: [
          t(
            'Lighthouse n’est pas la vérité, mais un LCP lent se voit. Testez un vrai téléphone, pas seulement le mode responsive du desktop. Le « site rapide » n’est pas un score : c’est une page qui s’affiche avant que le visiteur parte.',
            'Lighthouse is not the truth, but a slow LCP shows. Test a real phone, not only desktop responsive mode. A “fast site” is not a score: it is a page that paints before the visitor leaves.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Qu’est-ce qu’une bonne intégration web ?', 'What is good web integration?'),
        a: t(
          'Un HTML sémantique, un CSS fluide qui tient sur mobile, un JS qui enrichit sans bloquer, des images au bon format, et des pages mesurées (LCP, CLS) sur un vrai appareil.',
          'Semantic HTML, fluid CSS that holds on mobile, JS that enriches without blocking, images in the right format, and pages measured (LCP, CLS) on a real device.',
        ),
      },
      {
        q: t('Comment rendre un site plus rapide sans tout refaire ?', 'How do you make a site faster without rebuilding it?'),
        a: t(
          'Réduire les images, couper les scripts inutiles, précharger la police critique, réserver les dimensions média, et reporter le JS non essentiel. Souvent 80 % du gain vient de là.',
          'Shrink images, cut unused scripts, preload the critical font, reserve media dimensions, and defer non-essential JS. Often 80% of the gain is there.',
        ),
      },
      {
        q: t('Responsive et mobile-first, est-ce la même chose ?', 'Are responsive and mobile-first the same thing?'),
        a: t(
          'Non. Responsive = la mise en page s’adapte. Mobile-first = on écrit d’abord pour le petit écran, puis on enrichit. Les deux ensemble évitent un site desktop « tassé » sur téléphone.',
          'No. Responsive = the layout adapts. Mobile-first = you write for the small screen first, then enrich. Together they avoid a desktop site “crushed” onto a phone.',
        ),
      },
    ],
  },
  {
    slug: 'freelance-vs-agence',
    date: '2026-03-25',
    audience: t('Clients potentiels', 'Prospective clients'),
    title: t(
      'Freelance vs agence : quel choix pour votre projet graphique ?',
      'Freelance vs agency: which choice for your graphic project?',
    ),
    metaTitle: t(
      'Freelance vs agence pour un projet graphique — Mathieu Boucher',
      'Freelance vs agency for a graphic project — Mathieu Boucher',
    ),
    description: t(
      'Freelance ou agence pour un logo, un site, une identité ? Comparatif clair : budget, délais, contact, volume — pour choisir le bon partenaire.',
      'Freelance or agency for a logo, site, or identity? A clear comparison: budget, timeline, contact, volume — so you pick the right partner.',
    ),
    sections: [
      {
        heading: t('Quand le freelance gagne', 'When freelance wins'),
        paragraphs: [
          t(
            'Contact direct, décisions rapides, tarif souvent plus lisible. Idéal pour un logo, un site vitrine, une campagne bornée — surtout si vous voulez une personne accountable du brief à la livraison. Moins de réunions, moins de retransmission du message.',
            'Direct contact, fast decisions, a clearer fee. Ideal for a logo, a brochure site, a bounded campaign — especially if you want one person accountable from brief to delivery. Fewer meetings, less message-passing.',
          ),
          t(
            'Un freelance senior en design graphique ou en web porte souvent plusieurs métiers (direction artistique, intégration, print). Vous payez le jugement, pas la structure. Ça convient aux startups et PME qui veulent avancer sans comité.',
            'A senior freelance in graphic design or web often carries several trades (art direction, integration, print). You pay for judgement, not structure. That suits startups and SMEs that want to move without a committee.',
          ),
        ],
      },
      {
        heading: t('Quand l’agence a du sens', 'When an agency makes sense'),
        paragraphs: [
          t(
            'Gros volumes, plusieurs métiers en parallèle (pub, social, tournage, dev), besoin de backup pendant les vacances. Vous payez la structure : plus de mains, plus de process, plus de réunions. Utile quand le risque d’une seule personne est trop élevé.',
            'High volume, several trades in parallel (ads, social, shoot, dev), need for backup during holidays. You pay for the structure: more hands, more process, more meetings. Useful when the risk of one person is too high.',
          ),
        ],
      },
      {
        heading: t('Budget, délais, responsabilité', 'Budget, timeline, ownership'),
        paragraphs: [
          t(
            'Ce n’est pas « pas cher vs premium ». Un freelance senior peut valoir une équipe junior — et l’inverse aussi. Posez trois questions : qui porte le projet, à quelle vitesse, avec quelle clarté sur les livrables.',
            'It is not “cheap vs premium”. A senior freelancer can outrun a junior team — and the reverse is also true. Ask three questions: who owns the work, how fast, how clearly the deliverables are defined.',
          ),
        ],
        list: t(
          [
            'Un livrable unique et un interlocuteur : le freelance est souvent plus fluide.',
            'Cinq métiers et une date de campagne nationale : l’agence absorbe mieux.',
            'Budget serré et besoin de conseil : un senior solo évite de payer trois juniors.',
            'Gouvernance complexe (plusieurs départements) : l’agence a l’habitude du process.',
          ],
          [
            'One deliverable and one contact: freelance is often smoother.',
            'Five trades and a national campaign date: an agency absorbs it better.',
            'Tight budget and a need for advice: one senior avoids paying three juniors.',
            'Complex governance (several departments): agencies are used to the process.',
          ],
        ),
      },
      {
        heading: t('Comment décider sans se tromper', 'How to decide without getting it wrong'),
        paragraphs: [
          t(
            'Demandez des projets comparables, un calendrier, et ce qui est inclus (fichiers sources, révisions, mise en ligne). Le bon choix, c’est celui qui portera vraiment le travail — pas le plus beau deck.',
            'Ask for comparable work, a calendar, and what is included (source files, rounds, go-live). The right choice is the one that will actually own the work — not the prettiest deck.',
          ),
          t(
            'Je travaille en freelance : un interlocuteur, du design à l’intégration. Si votre projet dépasse ce cadre, je le dis. Mieux vaut un non clair qu’une agence déguisée à une personne.',
            'I work freelance: one contact, from design through integration. If the project is beyond that frame, I say so. A clear no beats a one-person agency in disguise.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Freelance ou agence : qui est moins cher ?', 'Freelance or agency: which is cheaper?'),
        a: t(
          'Le tarif horaire d’un freelance est souvent plus bas, mais un senior n’est pas « discount ». L’agence facture la structure. Comparez le coût total du livrable, pas le taux affiché.',
          'A freelancer’s hourly rate is often lower, but a senior is not “discount”. An agency bills for structure. Compare the total cost of the deliverable, not the sticker rate.',
        ),
      },
      {
        q: t('Un freelance peut-il livrer un site et une identité ?', 'Can a freelancer deliver a site and an identity?'),
        a: t(
          'Oui, si le périmètre est borné et que la personne maîtrise design et intégration. Pour un écosystème de dix métiers, une équipe reste plus sûre.',
          'Yes, if the scope is bounded and the person owns design and integration. For a ten-trade ecosystem, a team is safer.',
        ),
      },
      {
        q: t('Comment choisir un graphiste freelance ?', 'How do you choose a freelance graphic designer?'),
        a: t(
          'Regardez des projets dans votre registre, demandez les fichiers livrés (vectoriel, charte), les délais réels, et qui fera les retours. Un appel de trente minutes révèle plus qu’un concours de logos.',
          'Look at work in your register, ask what files are delivered (vector, guidelines), real timelines, and who handles feedback. A thirty-minute call reveals more than a logo contest.',
        ),
      },
    ],
  },
  {
    slug: 'erreurs-logo',
    date: '2026-04-15',
    audience: t('Entreprises, créateurs de contenu', 'Businesses, content creators'),
    title: t(
      'Les erreurs à éviter dans la création d’un logo',
      'Mistakes to avoid when creating a logo',
    ),
    metaTitle: t(
      'Erreurs de logo à éviter (guide pratique) — Mathieu Boucher',
      'Logo mistakes to avoid (practical guide) — Mathieu Boucher',
    ),
    description: t(
      'Trop de détails, mauvais fichiers, police non licenciée, copie d’une tendance : les erreurs de création de logo les plus fréquentes — et comment les éviter.',
      'Too much detail, weak files, an unlicensed font, copying a trend: the most common logo-creation mistakes — and how to avoid them.',
    ),
    sections: [
      {
        heading: t('Trop d’idées dans un pictogramme', 'Too many ideas in one pictogram'),
        paragraphs: [
          t(
            'Un logo n’a pas à raconter toute l’entreprise. S’il contient un globe, une flèche, un sourire et le nom en script, il ne survivra pas à 16 px. La création d’un logo, c’est de l’édition : on enlève jusqu’à ce que le signe tienne.',
            'A logo does not have to tell the whole company story. If it holds a globe, an arrow, a smile and a script name, it will not survive at 16 px. Logo creation is editing: you remove until the mark holds.',
          ),
          t(
            'Testez en petit, en un seul ton, sur fond clair et foncé. Si le dessin a besoin d’une légende, ce n’est pas encore un logo.',
            'Test small, in one colour, on light and dark grounds. If the drawing needs a caption, it is not a logo yet.',
          ),
        ],
      },
      {
        heading: t('Fichiers faibles, effets et polices risquées', 'Weak files, effects, and risky type'),
        paragraphs: [
          t(
            'Ombres portées, dégradés irreproductibles, police non licenciée : le logo devient inutilisable dès qu’on change de support. Travaillez en aplats, testez en un seul ton, livrez du vectoriel.',
            'Drop shadows, unprintable gradients, an unlicensed font: the mark dies the moment the surface changes. Work in flats, test in one colour, deliver vector.',
          ),
        ],
        list: t(
          [
            'Éviter les effets Photoshop comme identité (ombre, bevel, filtre).',
            'Vérifier la licence de la typo — y compris pour le web et l’app.',
            'Prévoir une version simplifiée (icône) en plus du wordmark.',
            'Ne jamais livrer seulement un PNG « haute qualité ».',
          ],
          [
            'Avoid Photoshop effects as identity (shadow, bevel, filter).',
            'Check the type licence — including web and app.',
            'Plan a simplified icon as well as the wordmark.',
            'Never deliver only a “high quality” PNG.',
          ],
        ),
      },
      {
        heading: t('Copier une tendance ou un concurrent', 'Copying a trend or a competitor'),
        paragraphs: [
          t(
            'Le wordmark « sans-serif ultra-géométrique » de 2021 se confond déjà. Mieux vaut une forme un peu trop personnelle qu’une forme déjà vue dix fois dans votre secteur. L’erreur n’est pas d’être simple — c’est d’être interchangeable.',
            'The ultra-geometric sans wordmark of 2021 already blurs together. A slightly too-personal shape beats a shape already seen ten times in your sector. The mistake is not being simple — it is being interchangeable.',
          ),
          t(
            'Même chose pour l’IA : une piste de départ, oui ; un logo « sorti du modèle », non. Les mêmes prompts produisent les mêmes signes. Le client paie le jugement.',
            'Same for AI: a starting direction, yes; a logo “out of the model”, no. The same prompts produce the same marks. The client pays for judgement.',
          ),
        ],
      },
      {
        heading: t('Oublier l’usage réel', 'Forgetting real use'),
        paragraphs: [
          t(
            'Un logo réussi tient sur une app, une broderie, un tampon, un fond photo. Si vous ne testez que la maquette Instagram, vous découvrirez les erreurs trop tard. Listez cinq supports avant de valider.',
            'A successful logo holds on an app, embroidery, a stamp, a photo ground. If you only test the Instagram mockup, you will find the mistakes too late. List five surfaces before you sign off.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quelle est l’erreur la plus fréquente sur un logo ?', 'What is the most common logo mistake?'),
        a: t(
          'En vouloir trop : trop de détails, trop de couleurs, trop de messages. Un signe simple, vectoriel, testé petit, survit mieux qu’une illustration miniature.',
          'Wanting too much: too much detail, too many colours, too many messages. A simple, vector mark, tested small, outlives a miniature illustration.',
        ),
      },
      {
        q: t('Peut-on créer un logo soi-même ?', 'Can you create a logo yourself?'),
        a: t(
          'On peut esquisser. Le piège, c’est de figer un PNG Canva sans maître vectoriel ni licence de police. Au premier imprimeur, ça casse. Un pro sert surtout à ça : usage, fichiers, durée.',
          'You can sketch. The trap is freezing a Canva PNG with no vector master or type licence. It breaks at the first printer. A pro is mostly for that: use, files, lifespan.',
        ),
      },
      {
        q: t('Faut-il déposer son logo ?', 'Should you trademark your logo?'),
        a: t(
          'Le dépôt (marque) est une question juridique, pas graphique. Avant ça, assurez-vous que le signe est distinctif, lisible, et que vous possédez les fichiers et les licences. Un avocat complémentaire un designer, il ne le remplace pas.',
          'Registration (trademark) is a legal question, not a graphic one. Before that, make sure the mark is distinctive, readable, and that you own the files and licences. A lawyer complements a designer; they do not replace one.',
        ),
      },
    ],
  },
  {
    slug: 'identite-visuelle-coherente',
    date: '2026-05-27',
    audience: t('Startups, entrepreneurs', 'Startups, entrepreneurs'),
    title: t(
      'Comment créer une identité visuelle cohérente pour votre marque',
      'How to build a coherent visual identity for your brand',
    ),
    metaTitle: t(
      'Identité visuelle cohérente : étapes clés — Mathieu Boucher',
      'Coherent visual identity: key steps — Mathieu Boucher',
    ),
    description: t(
      'Logo, typo, couleurs, images, règles d’usage : les étapes pour créer une identité visuelle cohérente, mémorable et utilisable au quotidien.',
      'Logo, type, colour, imagery, usage rules: the steps to build a coherent visual identity that is memorable and usable day to day.',
    ),
    sections: [
      {
        heading: t('Plus qu’un logo', 'More than a logo'),
        paragraphs: [
          t(
            'L’identité visuelle, c’est le logo, la typographie, la couleur, l’espace, le ton des photos. Si seul le logo est défini, chaque stagiaire réinvente le reste — et la marque ne tient plus en une seconde.',
            'Visual identity is the logo, type, colour, space, and the tone of photos. If only the logo is defined, every intern invents the rest — and the brand no longer holds in a second.',
          ),
          t(
            'Une image de marque forte n’est pas un moodboard. C’est un système : des choix assez clairs pour qu’un devis, un Instagram et un site aient l’air de la même entreprise.',
            'A strong brand image is not a moodboard. It is a system: choices clear enough that a quote, an Instagram post and a site look like the same company.',
          ),
        ],
      },
      {
        heading: t('Les piliers d’un système simple', 'The pillars of a simple system'),
        paragraphs: [
          t(
            'Deux polices, une palette courte, des règles d’image, des exemples de oui / non. Un PDF de 8 pages bien tenu bat une charte de 80 pages que personne n’ouvre. La cohérence se construit dans les détails ennuyeux.',
            'Two typefaces, a short palette, image rules, yes / no examples. An 8-page PDF that people use beats an 80-page book nobody opens. Coherence is built in the boring details.',
          ),
        ],
        list: t(
          [
            'Logo : versions pleine, icône, clair / sombre, dégagement.',
            'Typo : une display, une pour le texte, tailles et interlignage.',
            'Couleur : fond, texte, accent, neutre — avec codes print et web.',
            'Images : lumière, cadrage, ce qu’on ne photographie pas.',
            'Mise en page : marges, grilles, exemples de posts et de pages.',
          ],
          [
            'Logo: full, icon, light / dark, clear space.',
            'Type: one display, one for text, sizes and leading.',
            'Colour: ground, text, accent, neutral — with print and web codes.',
            'Images: light, crop, what you do not photograph.',
            'Layout: margins, grids, sample posts and pages.',
          ],
        ),
      },
      {
        heading: t('L’appliquer partout', 'Apply it everywhere'),
        paragraphs: [
          t(
            'Site, devis, Instagram, signature mail, slides. Tant que l’identité reste dans un dossier Figma, elle n’existe pas pour le client. La reconnaissance se joue dans la répétition, pas dans le lancement.',
            'Site, quote, Instagram, email signature, slides. Until the identity leaves a Figma folder, it does not exist for the client. Recognition is repetition, not the launch.',
          ),
          t(
            'Pour une startup, commencez par les cinq supports les plus vus. Vous élargirez. Une identité cohérente, c’est moins « tout relooker » que « arrêter d’improviser ».',
            'For a startup, start with the five most-seen surfaces. You will widen later. A coherent identity is less “rebrand everything” than “stop improvising”.',
          ),
        ],
      },
      {
        heading: t('Faire vivre la charte', 'Keep the guidelines alive'),
        paragraphs: [
          t(
            'Nommez un gardien (vous, ou le designer). Ajoutez un exemple quand un cas nouveau apparaît. Une charte morte se contourne ; une charte courte et à jour se respecte.',
            'Name a guardian (you, or the designer). Add an example when a new case appears. A dead brand book gets worked around; a short, current one gets followed.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quelle est la différence entre logo et identité visuelle ?', 'What is the difference between a logo and a visual identity?'),
        a: t(
          'Le logo est le signe. L’identité visuelle est le système : typo, couleurs, images, règles. Sans système, le logo ne suffit pas à faire reconnaître la marque.',
          'The logo is the mark. Visual identity is the system: type, colour, imagery, rules. Without a system, the logo is not enough for the brand to be recognised.',
        ),
      },
      {
        q: t('Combien de temps pour créer une identité visuelle ?', 'How long does it take to create a visual identity?'),
        a: t(
          'Quelques semaines pour une base (logo, palette, typo, règles courtes), davantage si le pack print et le site partent en même temps. Mieux vaut une base solide qu’un rebrand éternel.',
          'A few weeks for a base (logo, palette, type, short rules), longer if print and the site ship at the same time. A solid base beats an endless rebrand.',
        ),
      },
      {
        q: t('A-t-on besoin d’une charte graphique de 80 pages ?', 'Do you need an 80-page brand book?'),
        a: t(
          'Rarement. Une charte courte, avec des exemples oui / non et des fichiers prêts, est plus utilisée. On allonge seulement quand les équipes et les supports se multiplient.',
          'Rarely. A short guide, with yes / no examples and ready files, gets used more. You lengthen only when teams and surfaces multiply.',
        ),
      },
    ],
  },
  {
    slug: 'outils-graphiste-freelance-2026',
    date: '2026-08-21',
    audience: t('Graphistes, designers', 'Graphic designers'),
    title: t(
      'Les outils indispensables pour un graphiste freelance en 2026',
      'Essential tools for a freelance graphic designer in 2026',
    ),
    metaTitle: t(
      'Outils graphiste freelance 2026 — Mathieu Boucher',
      'Freelance graphic designer tools 2026 — Mathieu Boucher',
    ),
    description: t(
      'Figma, Adobe (Illustrator, Photoshop), typos, facturation, IA : la stack réellement utile pour un graphiste freelance en 2026 — sans gadgets.',
      'Figma, Adobe (Illustrator, Photoshop), type, invoicing, AI: the stack that actually earns its seat for a freelance graphic designer in 2026.',
    ),
    sections: [
      {
        heading: t('Le duo Figma + Adobe', 'The Figma + Adobe pair'),
        paragraphs: [
          t(
            'Figma pour l’UI, les composants, le partage client, le design system léger. Illustrator reste incontournable pour le logo vectoriel et le print complexe. Photoshop pour la retouche et le photomontage. En 2026, ce n’est plus « Figma a tué Adobe » : chacun a son terrain.',
            'Figma for UI, components, client sharing, a light design system. Illustrator still matters for vector logos and complex print. Photoshop for retouching and compositing. In 2026 this is not “Figma killed Adobe”: each has its ground.',
          ),
          t(
            'InDesign tient encore la papeterie longue, les rapports, les livres. Affinity ou Photoline peuvent remplacer une licence si le budget est serré — à condition que vos imprimeurs acceptent les PDF que vous sortez.',
            'InDesign still holds long stationery, reports, books. Affinity or Photoline can replace a licence if the budget is tight — provided your printers accept the PDFs you export.',
          ),
        ],
      },
      {
        heading: t('Autour du dessin : typos, fichiers, admin', 'Around the drawing: type, files, admin'),
        paragraphs: [
          t(
            'Le design ne paie pas si l’admin est un chaos. Une bibliothèque de polices licenciées, un dossier clair (maître / exports / archives), un outil de facturation et un calendrier suffisent à beaucoup de studios solo.',
            'Design does not pay if admin is chaos. A licensed type library, a clear folder (master / exports / archive), an invoicing tool and a calendar are enough for many solo studios.',
          ),
        ],
        list: t(
          [
            'Figma — UI, prototypage, commentaires client.',
            'Illustrator + Photoshop — vectoriel, print, retouche.',
            'Gestionnaire de typos (et licences webfont).',
            'Facturation / contrats (même simple) et sauvegarde cloud versionnée.',
            'Navigateur + un vrai téléphone pour tester les sites.',
          ],
          [
            'Figma — UI, prototyping, client comments.',
            'Illustrator + Photoshop — vector, print, retouching.',
            'Type manager (and webfont licences).',
            'Invoicing / contracts (even simple) and versioned cloud backup.',
            'A browser + a real phone to test sites.',
          ],
        ),
      },
      {
        heading: t('IA : utile, pas magique', 'AI: useful, not magic'),
        paragraphs: [
          t(
            'Générer des pistes, détourer, résumer un brief, traduire une charte : oui. Livrer un logo ou une identité « sortie du modèle » : non. Les clients reconnaissent déjà le style générique. Le logiciel accélère ; il ne signe pas.',
            'Generate directions, cut out, summarise a brief, translate guidelines: yes. Deliver a logo or identity “out of the model”: no. Clients already recognise the generic look. Software speeds you up; it does not sign the work.',
          ),
        ],
      },
      {
        heading: t('La stack minimale', 'The minimum stack'),
        paragraphs: [
          t(
            'Si vous démarrez : un outil vectoriel, Figma, un gestionnaire de fichiers, une facture propre. Ajoutez le reste quand un projet le force. Les « 40 outils indispensables » sont du contenu ; votre temps, lui, se facture.',
            'If you are starting: one vector tool, Figma, a file system, a clean invoice. Add the rest when a project forces it. “40 essential tools” is content; your time is what you bill.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Figma suffit-il pour un graphiste freelance ?', 'Is Figma enough for a freelance graphic designer?'),
        a: t(
          'Pour l’UI et beaucoup de digital, oui. Pour un logo vectoriel complexe, du print délicat ou de la retouche photo, Illustrator et Photoshop restent plus à l’aise.',
          'For UI and a lot of digital, yes. For a complex vector logo, delicate print or photo retouching, Illustrator and Photoshop are still more at ease.',
        ),
      },
      {
        q: t('Quels outils d’IA un designer devrait-il utiliser en 2026 ?', 'Which AI tools should a designer use in 2026?'),
        a: t(
          'Ceux qui accélèrent une étape (détourage, variation, résumé de brief), pas ceux qui remplacent le jugement. Documentez ce qui est généré si le contrat ou la licence l’exige.',
          'Those that speed up a step (cut-out, variation, brief summary), not those that replace judgement. Document what is generated if the contract or licence requires it.',
        ),
      },
      {
        q: t('Faut-il encore payer Adobe en 2026 ?', 'Do you still need to pay for Adobe in 2026?'),
        a: t(
          'Pas forcément toute la suite. Beaucoup n’ont besoin que d’Illustrator + Photoshop, ou d’une alternative. Choisissez selon les fichiers que vos clients et imprimeurs vous renvoient.',
          'Not necessarily the whole suite. Many only need Illustrator + Photoshop, or an alternative. Choose according to the files your clients and printers send back.',
        ),
      },
    ],
  },
  {
    slug: 'ux-ui-conversion',
    date: '2026-07-30',
    audience: t('E-commerçants, marketeurs', 'E-commerce, marketers'),
    title: t(
      'Pourquoi l’UX/UI design est crucial pour convertir vos visiteurs',
      'Why UX/UI design is crucial to converting visitors',
    ),
    metaTitle: t(
      'UX/UI design et conversion : ce qui fait vendre — Mathieu Boucher',
      'UX/UI design and conversion: what actually sells — Mathieu Boucher',
    ),
    description: t(
      'L’UX/UI design ne « rend pas joli » : il réduit la friction. Parcours, clarté des boutons, confiance et tests — comment convertir plus de visiteurs.',
      'UX/UI design is not “making it pretty”: it cuts friction. Path, button clarity, trust and tests — how to convert more visitors.',
    ),
    sections: [
      {
        heading: t('La conversion est un parcours, pas une palette', 'Conversion is a path, not a palette'),
        paragraphs: [
          t(
            'Un visiteur n’achète pas un dégradé. Il enchaîne des micro-décisions : est-ce que je comprends, est-ce que je fais confiance, est-ce que je peux payer sans friction. L’UX (expérience) oriente ce parcours ; l’UI (interface) le rend lisible.',
            'A visitor does not buy a gradient. They chain micro-decisions: do I understand, do I trust, can I pay without friction. UX (experience) shapes that path; UI (interface) makes it readable.',
          ),
          t(
            'Un site e-commerce lent, un CTA flou, un formulaire hostile : le design a déjà perdu la vente, même avec une belle photo produit. Convertir, c’est enlever les doutes dans le bon ordre.',
            'A slow e-commerce site, a vague CTA, a hostile form: design has already lost the sale, even with a beautiful product shot. Conversion is removing doubts in the right order.',
          ),
        ],
      },
      {
        heading: t('UI = clarté (pas décoration)', 'UI = clarity (not decoration)'),
        paragraphs: [
          t(
            'Contraste, taille de cible, labels explicites, états d’erreur lisibles. Un bouton « joli » mais trop petit sur mobile coûte plus cher qu’une photo de stock. L’UI qui convertit se voit sans mode d’emploi.',
            'Contrast, hit size, explicit labels, readable errors. A pretty button that is too small on mobile costs more than a stock photo. UI that converts is visible without a manual.',
          ),
        ],
        list: t(
          [
            'Un objectif par écran (acheter, écrire, réserver).',
            'Bouton principal évident, secondaire discret.',
            'Preuve sociale près de la décision, pas en bas de page oubliée.',
            'Formulaires courts, erreurs en langage humain.',
            'Prix, délais, livraison visibles avant le tunnel.',
          ],
          [
            'One goal per screen (buy, write, book).',
            'Obvious primary button, quiet secondary.',
            'Social proof near the decision, not in a forgotten footer.',
            'Short forms, errors in human language.',
            'Price, timing, shipping visible before the tunnel.',
          ],
        ),
      },
      {
        heading: t('Confiance et contenu', 'Trust and content'),
        paragraphs: [
          t(
            'L’UX ne sauve pas une offre confuse. Textes vagues, stock flou, absence de contact : l’interface peut être parfaite, le visiteur part. Design et copy travaillent ensemble — surtout au-dessus de la ligne de flottaison.',
            'UX does not save a confused offer. Vague copy, fuzzy stock, no contact: the interface can be perfect, the visitor leaves. Design and copy work together — especially above the fold.',
          ),
        ],
      },
      {
        heading: t('Mesurer après le lancement', 'Measure after launch'),
        paragraphs: [
          t(
            'Heatmaps et taux de rebond aident, mais un test avec cinq vrais clients révèle souvent le blocage en une heure. Le UX/UI qui convertit s’ajuste : on change un libellé, un ordre, un champ — pas toute la charte à chaque fois.',
            'Heatmaps and bounce rate help, but a test with five real customers often finds the block in an hour. UX/UI that converts gets adjusted: you change a label, an order, a field — not the whole brand each time.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quelle est la différence entre UX et UI ?', 'What is the difference between UX and UI?'),
        a: t(
          'L’UX, c’est le parcours et les décisions (trouver, comprendre, payer). L’UI, c’est l’apparence et les composants qui rendent ce parcours lisible. Les deux sont nécessaires pour convertir.',
          'UX is the path and the decisions (find, understand, pay). UI is the look and the components that make that path readable. Both are needed to convert.',
        ),
      },
      {
        q: t('Comment le design UX/UI augmente-t-il les ventes ?', 'How does UX/UI design increase sales?'),
        a: t(
          'En réduisant la friction : pages plus claires, moins d’abandons de panier, plus de confiance, des CTA visibles. Ce n’est pas « plus joli = plus de ventes », c’est « plus évident = plus d’actions ».',
          'By cutting friction: clearer pages, fewer cart abandons, more trust, visible CTAs. It is not “prettier = more sales”, it is “more obvious = more actions”.',
        ),
      },
      {
        q: t('Par quoi commencer pour améliorer la conversion ?', 'Where should you start to improve conversion?'),
        a: t(
          'La page d’arrivée et le tunnel : titre clair, offre visible, bouton, paiement. Testez sur mobile. Corrigez ce qui bloque cinq utilisateurs avant d’ajouter une animation.',
          'The landing page and the tunnel: clear title, visible offer, button, payment. Test on mobile. Fix what blocks five users before you add an animation.',
        ),
      },
    ],
  },
  {
    slug: 'optimiser-images-web',
    date: '2026-03-04',
    audience: t('Intégrateurs web, blogueurs', 'Web integrators, bloggers'),
    title: t(
      'Comment optimiser vos images pour le web sans perdre en qualité',
      'How to optimize images for the web without losing quality',
    ),
    metaTitle: t(
      'Optimiser les images web sans perdre en qualité — Mathieu Boucher',
      'Optimize web images without losing quality — Mathieu Boucher',
    ),
    description: t(
      'Redimensionner, WebP/AVIF, SVG, lazy-load et dimensions : comment alléger vos images web tout en gardant un piqué suffisant à l’écran.',
      'Resize, WebP/AVIF, SVG, lazy-load and dimensions: how to cut image weight while keeping enough sharpness on screen.',
    ),
    sections: [
      {
        heading: t('La bonne taille d’abord', 'The right size first'),
        paragraphs: [
          t(
            'Une photo de 5000 px dans une colonne de 720 px est du poids mort. Exportez à la taille d’affichage (et 2× pour les écrans denses), pas « au cas où ». L’optimisation d’image commence par le cadrage et le redimensionnement, pas par un curseur de compression.',
            'A 5000 px photo in a 720 px column is dead weight. Export at display size (and 2× for dense screens), not “just in case”. Image optimization starts with crop and resize, not a compression slider.',
          ),
          t(
            'Visez le poids, pas un score abstrait : un héros à 150–250 Ko, des miniatures à 20–50 Ko, un logo en SVG. La « qualité » perçue dépend de la taille d’affichage, pas du fichier studio.',
            'Aim at weight, not an abstract score: a hero at 150–250 KB, thumbs at 20–50 KB, a logo as SVG. Perceived “quality” depends on display size, not the studio file.',
          ),
        ],
      },
      {
        heading: t('Le bon format : WebP, AVIF, SVG, JPEG', 'The right format: WebP, AVIF, SVG, JPEG'),
        paragraphs: [
          t(
            'Photos : AVIF ou WebP, avec JPEG en repli si besoin. Logos et pictos : SVG. Évitez le PNG 32 bits pour une photo de héros — c’est le classique qui fait un site « lourd pour rien ».',
            'Photos: AVIF or WebP, with JPEG fallback if needed. Logos and icons: SVG. Skip 32-bit PNG for a hero photo — that is the classic that makes a site “heavy for nothing”.',
          ),
        ],
        list: t(
          [
            'AVIF / WebP — photos, bannières, blog.',
            'JPEG — repli, e-mails, certains CMS anciens.',
            'SVG — logo, icônes, illustrations plates.',
            'PNG — transparence simple, captures d’UI, pas les photos.',
          ],
          [
            'AVIF / WebP — photos, banners, blog.',
            'JPEG — fallback, email, some older CMS.',
            'SVG — logo, icons, flat illustration.',
            'PNG — simple transparency, UI captures, not photos.',
          ],
        ),
      },
      {
        heading: t('Lazy-load, srcset et dimensions', 'Lazy-load, srcset, and dimensions'),
        paragraphs: [
          t(
            'loading="lazy" sous la ligne de flottaison, width et height pour éviter le saut de layout (CLS), srcset pour servir le bon fichier selon l’écran. La qualité perçue dépend autant de la stabilité que du piqué.',
            'loading="lazy" below the fold, width and height to avoid layout shift (CLS), srcset to serve the right file per screen. Perceived quality depends as much on stability as on sharpness.',
          ),
          t(
            'Le LCP (plus grand élément visible) est souvent une image. Priorisez le héros : fetchpriority="high", pas de lazy sur cette image-là, fichier déjà à la bonne taille. C’est le geste qui change un site « qui met trois secondes à apparaître ».',
            'LCP (largest visible element) is often an image. Prioritise the hero: fetchpriority="high", no lazy on that image, file already at the right size. That is the move that changes a site that “takes three seconds to appear”.',
          ),
        ],
      },
      {
        heading: t('Sans perdre en qualité : le vrai critère', 'Without losing quality: the real test'),
        paragraphs: [
          t(
            'Comparez à l’échelle réelle, sur un téléphone. Un léger grain de compression invisible à 1× vaut mieux qu’un PNG de 4 Mo. Si le visage ou le produit « casse », remontez un peu la qualité ou changez de format — ne renvoyez pas le TIFF.',
            'Compare at real scale, on a phone. A slight compression grain invisible at 1× beats a 4 MB PNG. If a face or product “breaks”, nudge quality up or change format — do not send the TIFF back.',
          ),
        ],
      },
    ],
    faq: [
      {
        q: t('Quel format d’image est le plus léger pour le web ?', 'Which image format is lightest for the web?'),
        a: t(
          'Pour les photos, AVIF est souvent le plus léger à qualité égale, puis WebP. Pour les logos, le SVG gagne. Le « plus léger » dépend du sujet : une illu plate n’a pas besoin d’AVIF.',
          'For photos, AVIF is often lightest at equal quality, then WebP. For logos, SVG wins. “Lightest” depends on the subject: a flat illustration does not need AVIF.',
        ),
      },
      {
        q: t('Comment compresser une image sans la flouter ?', 'How do you compress an image without blurring it?'),
        a: t(
          'Redimensionnez d’abord à la taille d’affichage, puis compressez (WebP/AVIF). Le flou vient souvent d’un fichier trop petit agrandi, pas d’une compression raisonnable.',
          'Resize first to display size, then compress (WebP/AVIF). Blur often comes from a file that is too small and then enlarged, not from reasonable compression.',
        ),
      },
      {
        q: t('Faut-il lazy-loader toutes les images ?', 'Should you lazy-load every image?'),
        a: t(
          'Non. L’image du héros (LCP) doit charger tout de suite. Le lazy-load sert sous la ligne de flottaison. Mal placé, il ralentit le premier rendu.',
          'No. The hero image (LCP) should load at once. Lazy-load is for below the fold. Used wrong, it slows the first paint.',
        ),
      },
    ],
  },
]

export function blogPosts(lang) {
  return [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => localizePost(post, lang))
}

export function blogPost(slug, lang) {
  const post = posts.find((item) => item.slug === slug)
  return post ? localizePost(post, lang) : null
}

export function blogNeighbors(slug, lang) {
  const list = blogPosts(lang)
  const index = list.findIndex((item) => item.slug === slug)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: list[index + 1] ?? null,
    next: list[index - 1] ?? null,
  }
}

export function blogJsonLd(post, lang) {
  const article = {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: lang === 'fr' ? 'fr-CA' : 'en-CA',
    author: { '@type': 'Person', name: 'Mathieu Boucher' },
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    image:
      post.image && typeof window !== 'undefined'
        ? new URL(post.image, window.location.origin).href
        : undefined,
  }
  const graph = [article]
  if (post.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

function localizePost(post, lang) {
  return {
    slug: post.slug,
    date: post.date,
    audience: post.audience[lang],
    title: post.title[lang],
    metaTitle: post.metaTitle[lang],
    description: post.description[lang],
    image: post.image ?? coverFor(post.slug),
    sections: post.sections.map((section) => ({
      heading: section.heading[lang],
      paragraphs: section.paragraphs.map((paragraph) => paragraph[lang]),
      list: section.list ? section.list[lang] : undefined,
    })),
    faq: (post.faq || []).map((item) => ({ q: item.q[lang], a: item.a[lang] })),
  }
}
