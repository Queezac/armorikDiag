import { Ville, villes } from "@/lib/villes";
import Link from "next/link";
import VilleFaq from "./VilleFaq";
import styles from "./VillePage.module.css";

const BASE_URL = "https://armorik-diagnostics.fr";

function VilleJsonLd({ ville }: { ville: Ville }) {
  const url = `${BASE_URL}/${ville.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Diagnostic immobilier",
    "name": `Diagnostic immobilier à ${ville.nom}`,
    "description": ville.metaDescription,
    "url": url,
    "areaServed": {
      "@type": "City",
      "name": ville.nom,
      "address": { "@type": "PostalAddress", "postalCode": ville.codePostal, "addressCountry": "FR" },
    },
    "provider": {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#business`,
      "name": "Armorik Diagnostics",
      "telephone": "02 96 13 27 79",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 Route de Tréguier",
        "addressLocality": "Louannec",
        "postalCode": "22700",
        "addressCountry": "FR",
      },
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ville.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": `Diagnostic immobilier à ${ville.nom}`, "item": url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function VillePage({ ville }: { ville: Ville }) {
  return (
    <main className={styles.page}>
      <VilleJsonLd ville={ville} />

      <div className={styles.inner}>
        <nav aria-label="Fil d'Ariane" className={styles.breadcrumb}>
          <Link href="/">Accueil</Link> › <span>Diagnostic immobilier à {ville.nom}</span>
        </nav>

        <header className={styles.hero}>
          <h1>
            Diagnostic immobilier à <span className="rose">{ville.nom}</span> ({ville.codePostal})
          </h1>
          {ville.chapeau.map((paragraphe, i) => (
            <p key={i}>{paragraphe}</p>
          ))}
          <div className={styles.ctaRow}>
            <a href="tel:0296132779" className={styles.btnContour}>02 96 13 27 79</a>
            <Link href="/" className={`${styles.btnContour}`}>Qui sommes-nous ?</Link>
            <Link href="/#devis" className={`${styles.btnPlein} ${styles.right}`}>DEVIS GRATUIT</Link>
          </div>
        </header>

        {ville.sections.map((section) => (
          <section key={section.titre} className={styles.carte}>
            <h2>{section.titre}</h2>
            {section.paragraphes.map((paragraphe, i) => (
              <p key={i}>{paragraphe}</p>
            ))}
            {
              section.image && <img src={section.image.url} alt={section.image.alt} />
            }
              </section>
        ))}

        <section aria-labelledby={`diags-${ville.codePostal}`}>
          <h2 id={`diags-${ville.codePostal}`} className={styles.sectionTitre}>
            Vos diagnostics à <span className="rose">{ville.nom}</span>
          </h2>
          <div className={styles.grille}>
            {ville.diagnosticsLocaux.map((diag) => (
              <article key={diag.nom}>
                <h3>{diag.nom}</h3>
                <p>{diag.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby={`faq-${ville.codePostal}`}>
          <h2 id={`faq-${ville.codePostal}`} className={styles.sectionTitre}>
            Questions fréquentes à <span className="rose">{ville.nom}</span>
          </h2>
          <VilleFaq items={ville.faq} className={styles.faqBloc} />
        </section>

        <p className={styles.zones}>
          Armorik Diagnostics intervient aussi à {ville.communesVoisines.join(", ")} et dans tout le Trégor.
          <br />
          Voir aussi :{" "}
          {ville.autresVilles.map((cle, i) => (
            <span key={cle}>
              {i > 0 && " · "}
              <Link href={`/${villes[cle].slug}`}>Diagnostic immobilier à {villes[cle].nom}</Link>
            </span>
          ))}
          {" · "}
          <Link href="/">Diagnostic immobilier à Louannec</Link>
        </p>
      </div>

      <section className={styles.bandeSombre}>
        <h2>
          Besoin d&apos;un diagnostic à <span className="rose">{ville.nom}</span> ?
        </h2>
        <p>
          Devis gratuit et sans engagement, réponse rapide.
          <br />
          Diagnostiqueuse certifiée, assurée et indépendante, basée à Louannec.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/#devis" className={styles.btnPlein}>DEMANDER UN DEVIS</Link>
          <a href="tel:0296132779" className={styles.btnContour}>02 96 13 27 79</a>
        </div>
      </section>
    </main>
  );
}
