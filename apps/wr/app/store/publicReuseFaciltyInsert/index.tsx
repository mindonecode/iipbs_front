export type TableProps = {
    id: string;
    title: string;
}

export type selectLabel={
    title:string,
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


const selectLabel:selectLabel[]=[
    {title:'test',val:'1'}
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

export type pubFacState = {pubFac:{
    isInit: boolean;
    pubFacHeadList: TableProps[];
    publicReuseFacilityData: publicReuseFacilityData[];
    selectLabel:selectLabel[];
}}
type pubFacActions = {
    decrementList: () => void
}

export type pubFacType = pubFacState & pubFacActions;

export const pubFacStateExport:pubFacState= {pubFac:{
    isInit:false,
    pubFacHeadList: pubFacHeadList,
    publicReuseFacilityData: publicReuseFacilityData,
    selectLabel:selectLabel
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
