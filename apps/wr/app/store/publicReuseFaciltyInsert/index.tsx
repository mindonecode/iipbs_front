export type TableUpperProps = {
    id: string;
    title: string;
    upName?: string;
    upSequnce?: number;
}
type PublicReuseFacility = {
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
const upHeadList:TableUpperProps[] = [
    { id: "sido", title: "시도"},
    { id: "sigungo", title: "시군구"},
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "위치"},
    { id: "locationgubun", title: "지역구분"},
    { id: "facilityCapacity", title: "시설용량"},
    { id: "yn", title: '여부', upName:'upChangeRe' , upSequnce:1 },
    { id: "authoDay", title: '허가일',upName:'upChangeRe', upSequnce:2 },
    { id: "area", title: '면적' ,upName:'upChangeRe',upSequnce:3 }];

const publicReuseFacilityUper:PublicReuseFacility[] = [
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

export type tableState = {
    isInit: boolean;
    upHeadList: TableUpperProps[];
    publicReuseFacilityUper: PublicReuseFacility[];
}
type tableActions = {
    decrementList: () => void
}

export type tableType = tableState & tableActions;

export const tableStateExport:tableState= {
    isInit:false,
    upHeadList: upHeadList,
    publicReuseFacilityUper: publicReuseFacilityUper,
}
export const tableActionsExport:(set:any)=>tableActions=(set: any) => {

    console.log("tableActionsExport");
    return {
        decrementList:()=>set(
            (state:tableState) => {

            console.log("tableActionsExport", state);
            return (
            { 
                upHeadList: state.upHeadList, 
                publicReuseFacilityUper: 
                state.publicReuseFacilityUper.slice(0, state.publicReuseFacilityUper.length - 1)
            })}
        )
    }
}
