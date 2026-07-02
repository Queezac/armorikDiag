import VillePage from "@/components/villes/VillePage";
import { getVilleMetadata, villes } from "@/lib/villes";

export const metadata = getVilleMetadata("tregastel");

export default function DiagnosticImmobilierTregastel() {
  return <VillePage ville={villes["tregastel"]} />;
}
