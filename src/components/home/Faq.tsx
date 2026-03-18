"use client";

import { useState } from "react";

const faqData = [
    {
        question: "Est-ce que tous les diagnostics ont la même durée de validité ?",
        answer: "Non, la durée de validité varie selon le diagnostic et les résultats obtenus. Par exemple, le DPE est valable 10 ans, le diagnostic termites a une validité très courte de 6 mois, tandis que le diagnostic plomb ou amiante peut avoir une durée illimitée en l'absence de matériaux défectueux."
    },
    {
        question: "Le tarif est-il fixe ou dépend-il de la surface de mon bien ?",
        answer: "Le tarif d'une intervention dépend principalement de la surface du logement, de son année de construction et du nombre de diagnostics techniques requis. Un devis sur-mesure vous sera toujours proposé avant toute intervention."
    },
    {
        question: "Que faire si l'un des diagnostics révèle une anomalie ?",
        answer: "Si une anomalie est détectée (par exemple sur l'installation électrique ou gaz), elle sera détaillée dans le rapport. Dans la plupart des cas, cela n'empêche pas la vente ou la location, mais l'acquéreur ou le locataire devra en être informé."
    },
    {
        question: "Combien de temps dure une intervention ?",
        answer: "La durée de l'intervention varie selon la superficie du bien et l'ancienneté du bâtiment. Il faut généralement compter entre 1 heure et 3 heures sur place selon les diagnostics à réaliser."
    },
    {
        question: "Est-il obligatoire d’être sur place le jour de l'intervention ?",
        answer: "Il est préférable que vous soyez présent ou représenté, afin de nous permettre de poser quelques questions et de nous donner un accès à l'ensemble du bien (incluant dépendances, caves et greniers)."
    },
    {
        question: "Intervenez-vous uniquement à Louannec ou aussi dans les communes voisines ?",
        answer: "Nous sommes basés à Louannec, mais nous intervenons avec grande réactivité sur tout le bassin Lannion-Trégor et les communes environnantes."
    }
];

export default function Faq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq">
            <h2 className="section" style={{ paddingBottom: '5vh' }}>QUESTIONS FRÉQUENTES</h2>

            <div id="faq-container">
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq-item ${openFaq === index ? "open" : ""}`}>
                        <h3 className="faq-question" onClick={() => toggleFaq(index)}>
                            {faq.question}
                        </h3>
                        <div className="faq-answer-wrapper">
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}