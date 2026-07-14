import type { Metadata } from "next";

export type VilleFaqItem = { question: string; answer: string };
export type VilleSection = { titre: string; paragraphes: string[], image?: { url: string; alt: string } };
export type VilleDiagnostic = { nom: string; texte: string };

export type Ville = {
  slug: string;
  btnName: string;
  nom: string;
  codePostal: string;
  metaTitle: string;
  metaDescription: string;
  chapeau: string[];
  sections: VilleSection[];
  diagnosticsLocaux: VilleDiagnostic[];
  faq: VilleFaqItem[];
  communesVoisines: string[];
  geo: { latitude: number; longitude: number };
  autresVilles: string[];
};

export const villes: Record<string, Ville> = {
  lannion: {
    slug: "diagnostic-immobilier-lannion",
    btnName: "Diagnostic immobilier Lannion",
    nom: "Lannion",
    codePostal: "22300",
    metaTitle: "Diagnostic immobilier Lannion (22300) – DPE, amiante, plomb | Armorik Diagnostics",
    metaDescription:
      "Diagnostiqueur immobilier à Lannion : DPE, amiante, plomb, électricité, gaz, état parasitaire, loi Carrez. Cabinet certifié basé à Louannec, à 15 minutes. Devis gratuit.",
    chapeau: [
      "Vous vendez ou louez un appartement ou une maison à Lannion ? Armorik Diagnostics réalise l'ensemble de vos diagnostics immobiliers obligatoires : DPE, amiante, plomb, électricité, gaz, état parasitaire, ERP, loi Carrez et loi Boutin. Notre cabinet est basé à Louannec, à un quart d'heure du centre-ville : nous intervenons rapidement sur toute la commune, de Brélévenez à Servel en passant par Loguivy-lès-Lannion et Buhulien.",
      "Notre diagnostiqueuse certifiée établit des rapports précis, indépendants et conformes aux dernières réglementations, remis rapidement pour ne pas retarder votre compromis de vente ou votre mise en location.",
    ],
    sections: [
      {
        titre: "Un parc immobilier lannionnais très contrasté",
        paragraphes: [
          "Plus grande ville du Trégor et sous-préfecture des Côtes-d'Armor, Lannion compte environ 20 000 habitants et un bâti aux profils très variés. Le centre historique — la place du Général Leclerc et ses maisons à pans de bois, les ruelles qui grimpent vers l'église de Brélévenez — est composé de bâtiments presque tous antérieurs à 1949 : le constat de risque d'exposition au plomb (CREP) y est systématiquement exigé en cas de vente, en plus du repérage amiante.",
          "À l'inverse, l'essor des télécommunications à partir des années 1960 (le CNET devenu Orange Labs, puis la technopole Anticipa) a fait sortir de terre des quartiers pavillonnaires entiers à Servel, Ker-Uhel ou Saint-Marc. Construits pour la plupart avant le 1er juillet 1997, ces logements restent concernés par le diagnostic amiante, et leurs installations électriques ou de gaz de plus de 15 ans doivent être contrôlées avant toute transaction.",
        ],
        image: {
          url: "/assets/img/lannion.webp",
          alt: "Photo batiment centre de lannion."
        }
      },
      {
        titre: "Propriétaires bailleurs : un marché locatif exigeant",
        paragraphes: [
          "Avec les étudiants de l'IUT et de l'ENSSAT et les salariés de la technopole, la demande locative est soutenue à Lannion. Pour louer en toute légalité, votre dossier de diagnostic technique doit comporter un DPE, le constat de risque d'exposition au plomb (CREP) obligatoire pour les logements construits avant 1949, l'état des installations électriques et gaz de plus de 15 ans, l'ERP et, pour une location vide, la surface loi Boutin.",
          "Rappel important pour les bailleurs lannionnais : depuis le 1er janvier 2025, les logements classés G au DPE ne peuvent plus être mis en location. Un DPE récent vous permet d'anticiper, et un audit énergétique de planifier les travaux si votre bien est concerné.",
        ],
      },
      {
        titre: "Une intervention rapide, depuis Louannec",
        paragraphes: [
          "Notre cabinet est installé à Louannec, à moins de 15 minutes du centre de Lannion. Cette proximité nous permet de proposer des créneaux courts, y compris lorsque votre notaire ou votre agence attend un rapport pour finaliser un dossier.",
        ],
      },
    ],
    diagnosticsLocaux: [
      { nom: "DPE", texte: "Obligatoire pour toute vente ou location. Les logements classés G sont interdits à la location depuis le 1er janvier 2025." },
      { nom: "Plomb (CREP)", texte: "Quasi systématique dans le centre ancien de Lannion et à Brélévenez, où le bâti est antérieur à 1949." },
      { nom: "Amiante", texte: "Concerne tous les logements construits avant juillet 1997, y compris les pavillons des années 1960-1980 de Servel ou Ker-Uhel." },
      { nom: "Électricité & Gaz", texte: "Contrôle des installations de plus de 15 ans, très fréquent dans le parc lannionnais, en vente comme en location." },
      { nom: "État parasitaire", texte: "Demandé par les notaires pour les ventes du secteur : mérule, vrillettes, capricornes." },
      { nom: "Loi Carrez & Boutin", texte: "Mesurage certifié pour les appartements en copropriété du centre-ville et les locations vides." },
    ],
    faq: [
      {
        question: "Sous quel délai pouvez-vous intervenir à Lannion ?",
        answer:
          "Généralement sous quelques jours ouvrés. Nous sommes très réactifs sur la remise des rapports, transmis le jour même ou le lendemain de la visite, notamment lorsqu'un compromis de vente attend un rapport.",
      },
      {
        question: "Quels diagnostics pour vendre une maison ancienne à Brélévenez ou dans le centre historique ?",
        answer:
          "Pour un bien construit avant 1949 : DPE, plomb (CREP), amiante, état parasitaire, ERP et, si les installations ont plus de 15 ans, électricité et gaz. Nous confirmons la liste exacte lors du devis, selon l'année de construction et le type de transaction.",
      },
      {
        question: "Je loue un appartement à un étudiant près de l'IUT : quels diagnostics fournir ?",
        answer:
          "DPE, ERP, état de l'installation électrique (et gaz le cas échéant) si elle a plus de 15 ans, et surface loi Boutin pour une location vide. Le CREP est également requis pour les logements construits avant 1949.",
      },
      {
        question: "Combien coûte un diagnostic immobilier à Lannion ?",
        answer:
          "Le tarif dépend de la surface du bien et du nombre de diagnostics nécessaires. Le devis est gratuit et sans engagement : utilisez le formulaire en ligne ou appelez-nous au 02 96 13 27 79.",
      },
    ],
    communesVoisines: ["Ploubezre", "Rospez", "Ploulec'h", "Trédrez-Locquémeau", "Pleumeur-Bodou"],
    geo: { latitude: 48.732, longitude: -3.459 },
    autresVilles: ["perros-guirec", "tregastel"],
  },

  "perros-guirec": {
    slug: "diagnostic-immobilier-perros-guirec",
    btnName: "Diagnostic immobilier Perros-Guirec",
    nom: "Perros-Guirec",
    codePostal: "22700",
    metaTitle: "Diagnostic immobilier Perros-Guirec (22700) – DPE, loi Carrez | Armorik Diagnostics",
    metaDescription:
      "Diagnostics immobiliers à Perros-Guirec : DPE, amiante, plomb, loi Carrez, meublés de tourisme. Cabinet certifié à Louannec, la commune voisine. Devis gratuit.",
    chapeau: [
      "Vente d'une villa près de Trestraou, mise en location d'un appartement au port ou passage en meublé de tourisme à Ploumanac'h : Armorik Diagnostics réalise tous vos diagnostics immobiliers à Perros-Guirec. Notre cabinet est installé à Louannec, la commune voisine : nous sommes sur place en cinq minutes.",
      "DPE, amiante, plomb, électricité, gaz, état parasitaire, ERP, loi Carrez : des rapports certifiés, remis rapidement, pour sécuriser votre transaction.",
    ],
    sections: [
      {
        titre: "Résidences secondaires et copropriétés : les spécificités perrosiennes",
        paragraphes: [
          "Sur la côte de granit rose, près d'un logement sur deux est une résidence secondaire. Les ventes s'organisent donc souvent à distance, entre un propriétaire éloigné, une agence locale et un notaire. Nous avons l'habitude de ces situations : nous récupérons les clés auprès de votre intermédiaire et réalisons l'ensemble des diagnostics en une seule visite, avec un rapport transmis par email.",
          "Le front de mer de Trestraou et de Trestrignel, comme le centre et le port du Linkin, comptent de nombreux appartements en copropriété : le mesurage loi Carrez y est requis pour chaque vente. Quant aux villas balnéaires de la fin du XIXe et du début du XXe siècle, emblématiques de la station, elles imposent un repérage plomb et amiante particulièrement rigoureux.",
        ],
        image: {
          url: "/assets/img/trestraou.webp",
          alt: "Photo villa Trestraou"
        }
      },
      {
        titre: "Location saisonnière : une réglementation qui se durcit",
        paragraphes: [
          "Perros-Guirec vit au rythme de la location touristique, et la réglementation des meublés de tourisme se renforce : le DPE devient incontournable dans de nombreux cas et les logements les plus énergivores sont progressivement écartés du marché locatif.",
          "Anticiper un DPE — et, le cas échéant, un audit énergétique — vous évite les mauvaises surprises au moment de déclarer ou de poursuivre votre activité de loueur. Nous vous indiquons précisément ce qui s'applique à votre situation.",
        ],
      },
      {
        titre: "Un diagnostiqueur voisin, disponible toute l'année",
        paragraphes: [
          "Louannec et Perros-Guirec sont limitrophes : c'est notre secteur immédiat, que nous connaissons maison par maison. Nous intervenons aussi bien au centre-ville qu'à La Clarté ou Ploumanac'h, avec des créneaux rapides même en pleine saison.",
        ],
      },
    ],
    diagnosticsLocaux: [
      { nom: "Loi Carrez", texte: "Indispensable pour la vente des nombreux appartements en copropriété de Trestraou, Trestrignel et du port." },
      { nom: "Plomb & Amiante", texte: "Les villas balnéaires du début du XXe siècle exigent un repérage approfondi avant toute vente." },
      { nom: "DPE", texte: "Obligatoire en vente et en location, y compris, dans de nombreux cas, pour les meublés de tourisme." },
      { nom: "Audit énergétique", texte: "Obligatoire pour la vente des maisons classées E, F ou G : utile pour valoriser une résidence secondaire ancienne." },
      { nom: "État parasitaire", texte: "Demandé par les notaires pour les ventes du littoral : mérule et insectes à larves xylophages." },
      { nom: "ERP", texte: "L'état des risques reflète les particularités du littoral perrosien. Valable 6 mois." },
    ],
    faq: [
      {
        question: "Je vends ma résidence secondaire mais j'habite loin : comment se passe l'intervention ?",
        answer:
          "C'est une situation très courante à Perros-Guirec. Nous convenons d'un accès avec votre agence, votre notaire ou un voisin, réalisons tous les diagnostics en une visite et vous transmettons les rapports par email. Vous n'avez pas besoin de vous déplacer.",
      },
      {
        question: "Le mesurage loi Carrez est-il obligatoire pour mon appartement à Trestraou ?",
        answer:
          "Oui : la loi Carrez s'applique à la vente de tout lot de copropriété. Une villa individuelle hors copropriété n'est pas concernée, mais la surface habitable reste une information utile pour votre annonce.",
      },
      {
        question: "Faut-il un DPE pour un meublé de tourisme à Perros-Guirec ?",
        answer:
          "La réglementation récente rend le DPE incontournable dans de nombreux cas de location saisonnière, avec des exigences de performance progressives. Nous faisons le point avec vous selon votre situation exacte lors du devis.",
      },
      {
        question: "Pouvez-vous intervenir rapidement pour une vente déjà engagée ?",
        answer:
          "Oui. Louannec est la commune voisine : nous proposons des créneaux courts, y compris quand le notaire attend les rapports pour la signature du compromis.",
      },
    ],
    communesVoisines: ["Louannec", "Saint-Quay-Perros", "Trélévern", "Trégastel"],
    geo: { latitude: 48.815, longitude: -3.44 },
    autresVilles: ["lannion", "tregastel"],
  },

  tregastel: {
    slug: "diagnostic-immobilier-tregastel",
    btnName: "Diagnostic immobilier Trégastel",
    nom: "Trégastel",
    codePostal: "22730",
    metaTitle: "Diagnostic immobilier Trégastel (22730) – DPE, état parasitaire | Armorik Diagnostics",
    metaDescription:
      "Diagnostics immobiliers à Trégastel : DPE, amiante, état parasitaire (mérule), loi Carrez, ERP. Diagnostiqueur certifié basé à Louannec, à 15 minutes. Devis gratuit.",
    chapeau: [
      "Station familiale de la côte de granit rose, Trégastel séduit autant les résidents à l'année que les propriétaires de maisons de vacances. Que vous vendiez une maison en granit près du Coz-Pors ou mettiez en location un logement au bourg, Armorik Diagnostics réalise tous vos diagnostics immobiliers obligatoires.",
      "Basés à Louannec, à un quart d'heure de Trégastel, nous intervenons toute l'année avec des rapports certifiés remis le jour même ou au plus tard le lendemain.",
    ],
    sections: [
      {
        titre: "Un bâti littoral aux enjeux particuliers",
        paragraphes: [
          "Le charme de Trégastel tient à ses maisons en granit, souvent anciennes, exposées à un climat littoral humide. Cette exposition favorise le développement de la mérule et des insectes à larves xylophages : l'état parasitaire est systématiquement demandé par les notaires pour les ventes du secteur, et nous y apportons une attention particulière (charpentes, planchers, caves).",
          "L'état des risques et pollutions (ERP) fait également partie du dossier de vente ou de location, et reflète les spécificités d'une commune littorale.",
        ],
        image: {
          url: "/assets/img/tregastel.webp",
          alt: "Photo plage Trégastel"
        }
      },
      {
        titre: "Résidences secondaires et logements de vacances",
        paragraphes: [
          "Plus de la moitié des logements de Trégastel sont des résidences secondaires. Beaucoup datent des années 1960 et 1970, l'âge d'or de la construction balnéaire : le repérage amiante (obligatoire pour tout bien construit avant juillet 1997) y est presque toujours nécessaire, et les installations électriques d'origine doivent être contrôlées.",
          "Les studios et petits appartements de vacances en copropriété, autour du Coz-Pors ou de la plage de Tourony, nécessitent quant à eux un mesurage loi Carrez pour être vendus. Pour les propriétaires éloignés, nous organisons l'accès au bien avec votre agence ou votre notaire : inutile de faire la route.",
        ],
      },
      {
        titre: "À un quart d'heure de notre cabinet",
        paragraphes: [
          "Depuis Louannec, nous rejoignons Trégastel en une quinzaine de minutes par la côte. Nous couvrons également les communes voisines.",
        ],
      },
    ],
    diagnosticsLocaux: [
      { nom: "État parasitaire", texte: "Incontournable sur le littoral trégastellois : recherche de mérule, pourritures et insectes xylophages. Validité 6 mois." },
      { nom: "Amiante", texte: "Presque toujours requis : une grande partie du bâti balnéaire date des années 1960-1970, avant l'interdiction de 1997." },
      { nom: "DPE", texte: "Obligatoire pour toute vente ou location, résidences secondaires comprises." },
      { nom: "Loi Carrez", texte: "Pour la vente des studios et appartements de vacances en copropriété." },
      { nom: "Électricité", texte: "Les installations d'origine des maisons de vacances ont souvent plus de 15 ans : le contrôle est alors obligatoire." },
      { nom: "ERP", texte: "État des risques adapté aux particularités d'une commune littorale. Valable 6 mois." },
    ],
    faq: [
      {
        question: "L'état parasitaire est-il vraiment nécessaire à Trégastel ?",
        answer:
          "Oui, en pratique. Le climat humide du littoral favorise la mérule et les insectes xylophages, et les notaires du secteur le demandent systématiquement pour les ventes. Il est valable 6 mois et renouvelable une fois gratuitement chez nous.",
      },
      {
        question: "Je vends un petit logement de vacances : quels diagnostics prévoir ?",
        answer:
          "Selon le bien : loi Carrez s'il est en copropriété, amiante s'il date d'avant juillet 1997, plomb s'il est antérieur à 1949, plus DPE, ERP, état parasitaire et le contrôle des installations de plus de 15 ans. Le devis gratuit précise la liste exacte.",
      },
      {
        question: "Je n'habite pas la région : comment organisez-vous la visite ?",
        answer:
          "Nous convenons d'un accès avec votre agence, votre notaire ou une personne de confiance sur place. Les rapports vous sont ensuite envoyés par email dans la journée ou le lendemain de la visite.",
      },
      {
        question: "Intervenez-vous aussi autour de Trégastel ?",
        answer:
          "Oui, notre cabinet se situe à 15 minutes de toutes ces communes : Pleumeur-Bodou, l'Île-Grande, Trébeurden, Perros-Guirec et tout le reste du Trégor.",
      },
    ],
    communesVoisines: ["Pleumeur-Bodou", "L'Île-Grande", "Trébeurden", "Perros-Guirec"],
    geo: { latitude: 48.824, longitude: -3.507 },
    autresVilles: ["lannion", "perros-guirec"],
  },
};

const BASE_URL = "https://armorik-diagnostics.fr";

export function getVilleMetadata(cle: string): Metadata {
  const ville = villes[cle];
  const url = `${BASE_URL}/${ville.slug}`;
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: ville.metaTitle,
      description: ville.metaDescription,
      url,
      siteName: "Armorik Diagnostics",
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/assets/img/logo1.png" }],
    },
  };
}
