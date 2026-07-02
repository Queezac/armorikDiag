import VillePage from "@/components/villes/VillePage";
import { getVilleMetadata, villes } from "@/lib/villes";

export const metadata = getVilleMetadata("lannion");

export default function DiagnosticImmobilierLannion() {
  return <VillePage ville={villes["lannion"]} />;
}
