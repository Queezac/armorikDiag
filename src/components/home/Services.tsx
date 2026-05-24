import Image from "next/image";

export default function Services() {
  return (
    <section id="service" aria-labelledby="service-title">
      <Image
        src="/assets/img/fondServices.png"
        alt="Background Services Armorik Diagnostics"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
        loading="lazy"
        quality={100}
      />
      <div id="fondService">
        <h2 className="section" style={{ paddingBottom: '5vh' }}>À PROPOS DE NOUS</h2>
        <div id="textService">
          <div className="serviceparagraph">
            <p>
              Basé à Louannec, le cabinet <span className="rose">Armorik Diagnostics</span> s&apos;appuie sur une équipe réactive et qualifiée pour vous accompagner dans vos projets immobiliers. Nous intervenons rapidement sur l&apos;ensemble du <span className="rose">Trégor</span> pour réaliser tous les diagnostics techniques nécessaires.
            </p>
          </div>
          <div className="serviceparagraph">
            <p>
              La fiabilité de nos rapports repose sur l&apos;expertise de notre diagnostiqueuse, certifiée <span className="rose">LCP</span> (COFRAC) et assurée <span className="rose">Klarity</span>. Cette certification vous garantit des contrôles rigoureux, qu&apos;il s&apos;agisse de mesures, d&apos;essais ou de vérifications visuelles de vos installations intérieures.
            </p>
          </div>
          <div className="serviceparagraph">
            <p>
              Notre objectif : vous fournir un rapport de diagnostic clair, complet et incluant des recommandations concrètes de travaux pour assurer la conformité et la sécurité de votre logement.
            </p>
          </div>
          <div className="serviceparagraph">
            <p>
              Notre atout : vous rendre les rapports sous <span className="rose">72h</span>. Notre mode de fonctionnement nous permet de gagner en efficacité et de vous rendre les documents rapidement pour mettre votre bien à la vente ou à la location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
