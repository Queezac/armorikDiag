import DevisForm from "@/components/home/DevisForm";
import Diagnostics from "@/components/home/Diagnostics";
import Services from "@/components/home/Services";
import Blog from "@/components/home/Blog";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="seo-h1">
          Diagnostiqueur immobilier à Louannec, Lannion et tout le reste du Trégor
        </h1>

        <section className="hero" aria-labelledby="intro-title">
          <div className="presentation">
            <div className="carreRose">
              <a href="#devis" className="btn-carre"><i className="fas fa-file-text">&nbsp;</i>DEVIS GRATUIT</a>
              <a href="tel:0296132779" className="btn-carre"><i className="fas fa-phone">&nbsp;</i>02 96 13 27 79</a>
            </div>
            <div className="presentation-container">
              <div className="presentation-text">
                <h2 className="titre"><span className="rose">Diagnostics immobiliers</span> sur le bassin Lannion-Trégor</h2>
                <p>
                  Que vous vendez ou louez un bien immobilier, certains diagnostics immobiliers <br /> sont obligatoires.
                  Leur nature dépend de l’âge du bâtiment, de ses installations <br /> et du type de transaction.
                </p>
                <p>
                  <span className="rose">Armorik Diagnostics</span> vous accompagne avec réactivité et sérieux. <br />
                  Notre diagnostiqueuse certifiée réalise des expertises précises, indépendantes <br /> et conformes aux dernières réglementations,
                  afin de garantir la sécurité <br /> et la conformité de vos biens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="ligneNoire1" aria-hidden="true" />

        <Diagnostics />

        <DevisForm />

        <hr className="ligneNoire2" aria-hidden="true" />

        <Services />

        <hr className="ligneNoire2" aria-hidden="true" />

        <Faq />

        <Blog />

      </main>
    </>
  );
}
