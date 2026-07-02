import Link from "next/link"
import { villes } from "@/lib/villes"

export default function ZonesInterventions() {

    return (
               <section id="zones" aria-labelledby="zones-title">
                  <h2 id="zones-title" className="section" style={{ paddingBottom: '2vh' }}>NOS ZONES D&apos;INTERVENTION</h2>
                  <p className="zones-intro">
                    Basés à <span className="rose">Louannec</span>, nous intervenons dans tout le Trégor :
                  </p>
                  <div className="zones-liens">
                    {
                        Object.entries(villes).map(([key, value]) => (
                            <Link key={key} href={value.slug} className="zone-btn">{value.btnName}</Link>
                        ))
                    }
                    </div>
                </section>
    )
}