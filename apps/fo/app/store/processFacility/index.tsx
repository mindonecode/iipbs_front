export type ProcessFacilityType = {
    ProcessFacility: {
        isInit: boolean;
        processFacilityLabelArray:string[];
        selectPartData:SelectDataType[];
        selectUpdownData:SelectDataType[];
        selectOperationData:SelectDataType[];
        selectFacilityPartData:SelectDataType[];
        selectSidoData:SelectDataType[];
        selectSigunData:SelectDataType[];
    }
}
const ProcessFacilityLabelArray:string[] = ['구분', '시도', '시군구','용량별', '시설명', '시설상태','시설구분'];

export type SelectDataType = {
    text: string;
    val: string;
}
const selectPartData:SelectDataType[] = [
    { text: "행정별", val: '00'},
    { text: "유역별", val: '01'},
    { text: "환경청별", val: '02'},
];
const selectUpdownData:SelectDataType[] = [
    { text: "이상", val: '00'},
    { text: "이하", val: '01'},
];
const selectOperationData:SelectDataType[] = [
    { text: "전체", val: '00'},
    { text: "가동중", val: '01'},
    { text: "가동중지", val: '02'},
    { text: "시설폐쇄", val: '03'},
];
const selectFacilityPartData:SelectDataType[] = [
    { text: "전체", val: '00'},
    { text: "공공하수처리시설", val: '01'},
    { text: "오수처리장", val: '02'},
    { text: "개인하수처리시설", val: '03'},
    { text: "분뇨처리장", val: '04'},
    { text: "폐수처리장", val: '05'},
    { text: "침출수처리장", val: '06'},
    { text: "기타기초시설설", val: '07'},
];
const selectSidoData:SelectDataType[] = [
    { text: "전체", val: '00'},
    { text: "서울특별시", val: '01'},
    { text: "인천광역시", val: '02'},
    { text: "경기도", val: '03'},
    { text: "강원도", val: '04'},
    { text: "충청남도", val: '05'},
    { text: "충청북도", val: '06'},
    { text: "경상남도", val: '07'},
    { text: "경상북도", val: '08'},
    { text: "전라남도", val: '09'},
    { text: "전라북도", val: '10'},
    { text: "제주도", val: '11'},
];
const selectSigunData:SelectDataType[] = [
    { text: "전체", val: '00'},
    { text: "동대문구", val: '01'},
    { text: "여의도", val: '02'},
    { text: "강남구", val: '03'},
    { text: "노원구", val: '04'},
    { text: "영등포구", val: '05'},
    { text: "관악구", val: '06'},
    { text: "광진구", val: '07'},
    { text: "망원동", val: '08'},
];

export type ProcessFacilityActions = {
    ProcessFacilityActions: {
        labelChange:()=>void;
    }
}
export type ProcessFacilityStore = ProcessFacilityType & ProcessFacilityActions;

export const processFacilityInitState:ProcessFacilityType = {
    ProcessFacility: {
        isInit: false,
        processFacilityLabelArray: ProcessFacilityLabelArray,
        selectPartData : selectPartData,
        selectUpdownData : selectUpdownData,
        selectOperationData : selectOperationData,
        selectFacilityPartData : selectFacilityPartData,
        selectSidoData : selectSidoData,
        selectSigunData: selectSigunData,
    }
}

export const processFacilityReducer:(set:any)=>ProcessFacilityActions=(set: any) => {

    console.log("tableActionsExport");
    return {
        ProcessFacilityActions: {
            labelChange:()=>set(
                (state:ProcessFacilityType) => {
                    state.ProcessFacility.processFacilityLabelArray[0] = "구분 변경";
                return (
                { 
                    ProcessFacility: {
                        ...state.ProcessFacility,
                        processFacilitylabelArray: state.ProcessFacility.processFacilityLabelArray
                }})}
            )
        }
    }
}

export type TableUpperProps = {
    id: string;
    title: string;
    upName?: string;
    upSequnce?: number;
}
export type facilityListProps = {
    facilityCd : string,
    sido : string,
    sigungo : string,
    facilityName : string,
    location : string,
    facilityCapacity : string,
    planInputWaterQlty : string,
    designInputWaterQlty : string,
    publicMethod : string,
    operationDay : string,
    openDay : string,
    manageUpchae : string,
}
const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량(m3/L)"},
    { id: "planInputWaterQlty", title: "계획유입수질(mg/L)"},
    { id: "designInputWaterQlty", title: "설계유입수질(mg/L)"},
    { id: "publicMethod", title: '공법'},
    { id: "operationDay", title: '가동개시일'},
    { id: "openDay", title: '준공일' },
    { id: "manageUpchae", title: '관리대행업자'}
];
const processFacilityList:facilityListProps[] = [
    {
        facilityCd : "11000SW001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "난지",
        location: "경기도 고양시 덕양구 대차로 4가",
        facilityCapacity: "860,000",
        planInputWaterQlty : "179.0",
        designInputWaterQlty : "860,000",
        publicMethod : "MLE, A20",
        operationDay: "1987-06-30",
        openDay: "2013-04-30",
        manageUpchae: "자체"
    },
    {
        facilityCd : "11200PB001R",
        sido: "서울특별시",
        sigungo: "성동구",
        facilityName: "중량물재생센터",
        location: "서울특별시 성동구 자동차시장3길 64 (용답동, 중랑물재생센터)",
        facilityCapacity: "1,590,000",
        planInputWaterQlty : "172.0",
        designInputWaterQlty : "172.0",
        publicMethod : "표준활성슬러지법, A2O, MLE, SBAF",
        operationDay: "1976-09-21",
        openDay: "2021-06-30",
        manageUpchae: "자체"
    },
    {
        facilityCd : "11500PB001R",
        sido: "서울특별시시",
        sigungo: "강서서구",
        facilityName: "서남",
        location: "서울특별시 강서구 마곡동 74",
        facilityCapacity: "1,630,000",
        planInputWaterQlty : "174.0",
        designInputWaterQlty : "174.0",
        publicMethod : "기타, 표준활성슬러지법, MLE, 4 stage-BNR",
        operationDay: "1987-03-01",
        openDay: "2021-04-30",
        manageUpchae: "공기업"
    },
    {
        facilityCd : "11680PB001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "탄천",
        location: "서울특별시 강남구 일원동 580",
        facilityCapacity: "900,000",
        planInputWaterQlty : "170.0",
        designInputWaterQlty : "170.0",
        publicMethod : "MLE",
        operationDay: "1987-12-09",
        openDay: "2021-07-31",
        manageUpchae: "공기업"
    },
]

export type tableStateProcessFacility = {
    isInit: boolean;
    upHeadList: TableUpperProps[];
    processFacilityList: facilityListProps[];
}
type tableActionsProcessFacility = {
    decrementList: () => void
}

export type tableTypeProcessFacility = tableStateProcessFacility & tableActionsProcessFacility;

export const tableStateExportProcessFacility:tableStateProcessFacility= {
    isInit:false,
    upHeadList: upHeadList,
    processFacilityList: processFacilityList,
}
export const tableActionsExportProcessFacility:(set:any)=>tableActionsProcessFacility=(set: any) => {

    console.log("tableActionsExport");
    return {
        decrementList:()=>set(
            (state:tableStateProcessFacility) => {

            console.log("tableActionsExport", state);
            return (
            { 
                upHeadList: state.upHeadList, 
                processFacilityList: 
                state.processFacilityList.slice(0, state.processFacilityList.length - 1)
            })}
        )
    }
}
