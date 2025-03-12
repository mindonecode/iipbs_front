
export type TableUpperProps = {
    id: string;
    title: string;
    upName?: string;
    upSequnce?: number;
}
export type rainFacOfType = {
        sido: string,
        sigungo: string,
        facilityName: string,
        location: string,
        locationgubun: string,
        firstConstructionPermission:string,
        facilityCapacity: string,
        buildingArea:string,
        yn?: string,
        permissionDay:string;
        authoDay?: string,
        area?: string,
        reuse?: string,
        register?: string,
        legalTargetYn:string,
}

export const upHeadList:TableUpperProps[] = [
    { id: "sido", title: "시도"},
    { id: "sigungo", title: "시군구"},
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "위치"},
    { id: "locationgubun", title: "지역구분"},
    { id: "facilityCapacity", title: "시설용량"},
    { id: "yn", title: '여부', upName:'upChangeRe' , upSequnce:1 },
    { id: "authoDay", title: '허가일',upName:'upChangeRe', upSequnce:2 },
    { id: "area", title: '면적' ,upName:'upChangeRe',upSequnce:3 }];

const rainOfObject:rainFacOfType[] = [
    { 
        sido: "서울",
        sigungo: "종로구",
        facilityName: "그랑서울",
        location: "종로 33",
        locationgubun: "업무시설",
        firstConstructionPermission : '2024-10-10',
        buildingArea: "50",
        facilityCapacity: "800,000",
        reuse: "Y",
        permissionDay:'2024-10-10',
        register: "Y",
        legalTargetYn:"Y"
    },
    { 
        sido: "서울",
        sigungo: "종로구",
        facilityName: "그랑서울",
        location: "종로 33",
        locationgubun: "업무시설",
        firstConstructionPermission : '2024-10-10',
        buildingArea: "50",
        facilityCapacity: "800,000",
        reuse: "Y",
        permissionDay:'2024-10-10',
        register: "Y",
        legalTargetYn:"Y"
    },
    { 
        sido: "서울",
        sigungo: "종로구",
        facilityName: "그랑서울",
        location: "종로 33",
        locationgubun: "업무시설",
        firstConstructionPermission : '2024-10-10',
        buildingArea: "50",
        facilityCapacity: "800,000",
        reuse: "Y",
        permissionDay:'2024-10-10',
        register: "Y",
        legalTargetYn:"Y"
    },
]


export type selectArray ={
    text:string,
    val:string
    
}

export const selectClass ="w-full h-full text-2xl";
const selectHomeWater = [
    { text: '집수면', val: "1" },
    { text: "종류", val: "2" },
  ];

  const selectYN= [
    { text: 'Y', val: "1" },
    { text: 'N', val: "2" },
  ];

export type rainFacState ={ rain:{
    isInit: boolean;
    upHeadList: TableUpperProps[];
    rainOfObject: rainFacOfType[];
    selectHomeWater:selectArray[];
    selectYN:selectArray[];
}}
type rainFacSActions = {
    decrementList: () => void
}

export type rainFacType = rainFacState & rainFacSActions;

export const rainFacStateExport:rainFacState= {rain:{
    isInit:false,
    upHeadList: upHeadList,
    rainOfObject: rainOfObject,
    selectHomeWater:selectHomeWater,
    selectYN:selectYN
 
    
}}
export const rainFacActionsExport:(set:any)=>rainFacSActions=(set: any) => {
    return {
        decrementList:()=>set(
            (state:rainFacState) => {
            return (
            {rain:{ 
                upHeadList: state.rain.upHeadList, 
                rainOfObject: 
                state.rain.rainOfObject.slice(0, state.rain.rainOfObject.length - 1)
             }})}
        )
    }
}
