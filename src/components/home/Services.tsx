import Image from "next/image";

export default function Services() {
  return (
    <section id="service" aria-labelledby="service-title">
      <div id="fondService">
        <h2 className="section" style={{ paddingBottom: '5vh' }}>À PROPOS DE NOUS</h2>
        <div id="textService">
          <div className="serviceparagraph">
            <img src="/assets/img/Users.png" alt="User_icon" style={{ width: '50px', height: '50px' }} />
            <p>
              Basé à Louannec, le cabinet <span className="rose">Armorik Diagnostics</span> s'appuie sur une équipe réactive et qualifiée pour vous accompagner dans vos projets immobiliers. Nous intervenons rapidement sur l'ensemble du <span className="rose">Trégor</span> pour réaliser tous les diagnostics techniques nécessaires.
            </p>
          </div>
          <div className="serviceparagraph">
            <img src="/assets/img/Prize.png" alt="Prize_icon" style={{ width: '50px', height: '50px' }} />
            <p>
              La fiabilité de nos rapports repose sur l'expertise de notre diagnostiqueuse, certifiée <span className="rose">LCP</span> (COFRAC) et assurée <span className="rose">Klarity</span>. Cette certification vous garantit des contrôles rigoureux, qu'il s'agisse de mesures, d'essais ou de vérifications visuelles de vos installations intérieures.
            </p>
          </div>
          <div className="serviceparagraph">
            <img src="/assets/img/Doc.png" alt="Doc_icon" style={{ width: '50px', height: '50px' }} />
            <p>
              Notre objectif est simple : vous fournir un document clair et complet, incluant des recommandations concrètes de travaux . Cela vous permet de vous informez précisément ainsi que les futurs occupants et d'assurer la mise en conformité et la sécurité de votre logement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
