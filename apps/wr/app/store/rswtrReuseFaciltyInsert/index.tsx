import { upHeadList, type rainFacOfType, type selectArray, type TableUpperProps } from "../rainReuseFacilityInsert";


const rswtOfObject:rainFacOfType[] = [
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


const selectHomeWater = [
    { text: '집수면', val: "1" },
    { text: "종류", val: "2" },
  ];

  const selectYN= [
    { text: 'Y', val: "1" },
    { text: 'N', val: "2" },
  ];

export type rswtFacState ={ rswt:{
    isInit: boolean;
    upHeadList: TableUpperProps[];
    rswtOfObject: rainFacOfType[];
    selectHomeWater:selectArray[];
    selectYN:selectArray[];
}}
type rswtFacSActions = {
    decrementList: () => void
}

export type rswtFacType = rswtFacState & rswtFacSActions;

export const rswtFacStateExport:rswtFacState= {rswt:{
    isInit:false,
    upHeadList: upHeadList,
    rswtOfObject: rswtOfObject,
    selectHomeWater:selectHomeWater,
    selectYN:selectYN
 
    
}}
export const rswtFacActionsExport:(set:any)=>rswtFacSActions=(set: any) => {
    return {
        decrementList:()=>set(
            (state:rswtFacState) => {
            return (
            {rain:{ 
                upHeadList: state.rswt.upHeadList, 
                rainOfObject: 
                state.rswt.rswtOfObject.slice(0, state.rswt.rswtOfObject.length - 1)
             }})}
        )
    }
}
