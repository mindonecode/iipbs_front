import ProcessFacilitySearch from "./pages/processFacility/page";
import { StoreProvider } from "./store";

export default function Home() {
  return (
    <StoreProvider>
      <ProcessFacilitySearch/>
    </StoreProvider>
  );
}
