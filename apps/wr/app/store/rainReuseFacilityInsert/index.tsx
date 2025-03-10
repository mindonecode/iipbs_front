export type TableUpperProps = {
    id: string;
    title: string;
    upName?: string;
    upSequnce?: number;
}
type buildingOfType = {
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

const buildingObject:buildingOfType[] = [
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

export type buildingTableState ={ building:{
    isInit: boolean;
    upHeadList: TableUpperProps[];
    buildingObject: buildingOfType[];
}}
type buildingTableActions = {
    decrementList: () => void
}

export type buildingTableType = buildingTableState & buildingTableActions;

export const buildingtableStateExport:buildingTableState= {building:{
    isInit:false,
    upHeadList: upHeadList,
    buildingObject: buildingObject,
}}
export const buildingTableActionsExport:(set:any)=>buildingTableActions=(set: any) => {
    return {
        decrementList:()=>set(
            (state:buildingTableState) => {
            return (
            {building:{ 
                upHeadList: state.building.upHeadList, 
                buildingObject: 
                state.building.buildingObject.slice(0, state.building.buildingObject.length - 1)
             }})}
        )
    }
}
