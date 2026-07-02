import VillePage from "@/components/villes/VillePage";
import { getVilleMetadata, villes } from "@/lib/villes";

export const metadata = getVilleMetadata("perros-guirec");

export default function DiagnosticImmobilierPerrosGuirec() {
  return <VillePage ville={villes["perros-guirec"]} />;
}
