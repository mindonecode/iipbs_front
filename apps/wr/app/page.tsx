import Link from 'next/link';
import { Button } from '@common/components/ui';



export default function Home() {
  return (
    <>
      <div className='flex'>
      <Button className='place-self-auto'> 
        <Link href="reuseFaciltyManage/reuseFacilityInsert/publicReuseFaciltyInsert"> 하수재이용 시설 등록</Link>
      </Button>
      <Button className='place-self-auto'> 
        <Link href="reuseFaciltyManage/reuseFacilityInsert/rainReuseFaciltyInsert"> 물재이용 시설 등록</Link>
      </Button>
      
      </div>
      </>  
  );
}
