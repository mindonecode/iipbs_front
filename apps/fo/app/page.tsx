<<<<<<< HEAD
import ProcessFacilitySearch from "./pages/processFacility/page";
import { StoreProvider } from "./store";

export default function Home() {
  return (
    <StoreProvider>
      <ProcessFacilitySearch/>
    </StoreProvider>
=======
import DashBoard from "./pages/dashboard/page";

export default function Home() {
  return (
      <DashBoard/>
>>>>>>> origin/iipbs/fo/store
  );
}
