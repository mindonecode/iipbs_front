import PublicReuseFaciltyInsert from './publicReuseFaciltyInsert/page';
import { StoreProvider } from './store';



export default function Home() {
  return (
    <StoreProvider>
      <PublicReuseFaciltyInsert   />
    </StoreProvider>
  );
}
