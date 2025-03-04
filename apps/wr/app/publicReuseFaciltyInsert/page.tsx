import {UiTable} from '@common/business_components';
import { TableRow } from '@common/components';
import { TableHead } from '@common/components';



interface TableUpperProps {
  id: string;
  title: string;
  upName : string;
  upSequnce: number;
}

const publicReuseFacility = [
  { 
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },   

]

const publicReuseFacilityUper = [
  { 
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    yn: "Y",
    authoDay: "2012",
    area:"123"
  },   
  ]


  
const headList = [
                  { id: "sido", title: "시도" },
                  { id: "sigungo", title: "시군구" },
                  { id: "facilityName", title: "시설명" },
                  { id: "location", title: "위치" },
                  { id: "locationgubun", title: "지역구분" },
                  { id: "facilityCapacity", title: "시설용량" },
                  { id: "reuse", title: '재이용여부' },
                  { id: "register", title: '등록여부' }];



 const upHeadList = [
                    { id: "sido", title: "시도" },
                    { id: "sigungo", title: "시군구" },
                    { id: "facilityName", title: "시설명" },
                    { id: "location", title: "위치" },
                    { id: "locationgubun", title: "지역구분" },
                    { id: "facilityCapacity", title: "시설용량" },
                    { id: "yn", title: '여부', upName:'upChangeRe' , upSequnce:1 },
                    { id: "authoDay", title: '허가일',upName:'upChangeRe', upSequnce:2 },
                    { id: "area", title: '면적' ,upName:'upChangeRe',upSequnce:3 }];

  const headMakeColSpan = (upHeadList: any) => {
    return  ( <>
    <TableRow>{
    upHeadList.map((head: TableUpperProps) => 
      (head.upName === 'upChangeRe'&& head.upSequnce=== 1?<TableHead  rowSpan={1} colSpan={3}>{'중축 개축 증축 '}</TableHead>:
        head.upSequnce> 1?null:<TableHead rowSpan={2}key={head.id}>{head.title}</TableHead>))}
    </TableRow>
    <TableRow>
      {upHeadList.map((head: TableUpperProps) =>
        (head.upName === 'upChangeRe'?<TableHead key={head.id}>{head.title}</TableHead>:null))}
    </TableRow>
    </>)
  }



  export default function PublicReuseFaciltyInsert() {

  const nodeList= headMakeColSpan(upHeadList);
  const total = 100;
  return (  <div>
            <UiTable publicReuseFacility={publicReuseFacilityUper} headlist={upHeadList} pageSize={100} total={total} children={nodeList} headName={'test'} />
            </div>
  );
}

