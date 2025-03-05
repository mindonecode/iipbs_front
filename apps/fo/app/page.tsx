import DashBoard from "./pages/dashboard/page";
import { StoreProvider } from "./store";

export default function Home() {
  return (
    <StoreProvider>
      <DashBoard/>
    </StoreProvider>
  );
}
