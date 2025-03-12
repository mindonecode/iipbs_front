import type { TableUpperProps } from "../rainReuseFacilityInsert";

export type TableProps = {
    id: string;
    title: string;
}

export type selectLabel={
    text:string,
    val:string
}


type publicReuseFacilityData = {
    sido: string,
    sigungo: string,
    facilityName: string,
    location: string,
    locationgubun: string,
    facilityCapacity: string,
    yn?: string,
    authoDay?: string,
    area?: string,
    reuse?: string,
    register?: string
    
    
}
type pubMngFacData = {
        mng: string,
        subCo: string,
        startDay: string,
        endDay: string,
}
const selectLabel:selectLabel[]=[
    {text:'test',val:'1'}
]


const pubFacHeadList:TableProps[] = [
    { id: "sido", title: "시도"},
    { id: "sigungo", title: "시군구"},
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "위치"},
    { id: "locationgubun", title: "지역구분"},
    { id: "facilityCapacity", title: "시설용량"},
    { id: "yn", title: '재이용여부' },
    { id: "authoDay", title: '등록여부'}];
    
    
    const pubMngUpHeadList:TableUpperProps[] = [
        { id: "mng", title: "운영방식"},
        { id: "subCo", title: "대행업체"},
        { id: "startDay", title: "시작일", upName:'upChangeRe' , upSequnce:1 },
        { id: "endDay", title: "종료일", upName:'upChangeRe' , upSequnce:2 },
    ];
    const date = new Date() 
    const pubMngFacData:pubMngFacData[] = [
        { mng:"자체운영", subCo:"-",startDay: '2024-11-11' ,endDay:'2024-11-20'},
        { mng:"자체운영", subCo:"한국수자원공사",startDay: '2022-11-11' ,endDay:'2024-09-13'},
        { mng:"자체운영", subCo:"스타벅스",startDay: '2023-11-11' ,endDay:'2024-02-19'},
    ];   
    const publicReuseFacilityData:publicReuseFacilityData[] = [
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


const erctUswtrCd:selectLabel[]=[
    {text:'처리장연계',val:'1'},
    {text:'자체/연계',val:'2'},
    {text:'자체처리',val:'3'},
]

const cyclCd :selectLabel[]= [
    { text: "1치", val: "1" },
    { text: "2차", val: "2" },
  ];
  const seCd :selectLabel[] = [
    { text: "신규", val: "1" },
    { text: "진행", val: "2" },
  ];
  const buseCd  :selectLabel[]= [
    { text: "재정", val: "1" },
    { text: "만루", val: "2" },
  ];
  const rprcsCd :selectLabel[] = [
    { text: "물리적처리", val: "1" },
    { text: "생물학적처리", val: "2" },
  ];
  const buseMet :selectLabel[] = [
    { text: "재정", val: "1" },
    { text: "민간투자", val: "2" },
    { text: "자체", val: "2" },
  ];
  const rprcLoCd :selectLabel[] = [
    { text: "내부", val: "1" },
    { text: "외부", val: "2" },
  ];
  const rprcLoCd :selectLabel[] = [
    { text: "내부", val: "1" },
    { text: "외부", val: "2" },
  ];

export type pubFacState = {pubFac:{
    isInit: boolean;
    pubFacHeadList: TableProps[];
    pubMngUpHeadList:TableUpperProps[]
    publicReuseFacilityData: publicReuseFacilityData[];
    selectLabel:selectLabel[];
    pubMngFacData:pubMngFacData[];
    erctUswtrCd:selectLabel[];
    cyclCd:selectLabel[];
    seCd:selectLabel[];
    buseCd  :selectLabel[]
    rprcsCd :selectLabel[]
    buseMet :selectLabel[]
    rprcLoCd:selectLabel[]
}}
type pubFacActions = {
    decrementList: () => void
}

export type pubFacType = pubFacState & pubFacActions;

export const pubFacStateExport:pubFacState= {pubFac:{
    isInit:false,
    pubFacHeadList: pubFacHeadList,
    pubMngUpHeadList:pubMngUpHeadList,
    publicReuseFacilityData: publicReuseFacilityData,
    selectLabel:selectLabel,
    pubMngFacData:pubMngFacData,
    erctUswtrCd:erctUswtrCd,
    cyclCd:cyclCd,
    seCd:seCd,
    buseCd:buseCd,
    rprcsCd:rprcsCd,
    buseMet:buseMet,
    rprcLoCd:
}}
export const pubFacActionsExport:(set:any)=>pubFacActions=(set: any) => {
    return {
        decrementList:()=>set(
            (state:pubFacState) => {
            return (
            {pubFac:{ 
                pubFacheadList: state.pubFac.pubFacHeadList, 
                publicReuseFacilityUper: 
                state.pubFac.publicReuseFacilityData.slice(0, state.pubFac.publicReuseFacilityData.length - 1)
            }})}
        )
    }
}
