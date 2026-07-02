"use client";

import { VilleFaqItem } from "@/lib/villes";
import { useState } from "react";

export default function VilleFaq({ items, className }: { items: VilleFaqItem[]; className?: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={className}>
      {items.map((faq, index) => (
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
  );
}
