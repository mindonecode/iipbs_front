import Link from "next/link";
import { Button } from "@common/components/ui";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <Link href={"./pages/processFacility"}><Button>처리시설 시설정보</Button></Link>
      </div>  
      <div className="col-span-2">
        <Link href={"./pages/flowRate"}><Button>시설별 유량현황</Button></Link>
      </div>
      <div className="col-span-2">
        <Link href={"./pages/dashboard/"}><Button>대시보드</Button></Link>
      </div>
      <div className="col-span-2">
        <Link href={"./pages/processArea"}><Button>처리구역정보</Button></Link>
      </div>
      <div className="col-span-2">
        <Link href={"./pages/facilityPrecipitation"}><Button>시설별 강수현황</Button></Link>
      </div>
    </div>
  );
}
