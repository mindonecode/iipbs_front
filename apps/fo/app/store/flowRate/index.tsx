import type { SelectDataType, TableUpperProps } from "../dashboard";

const FlowRateSearchLabelArray:string[] = ['구분', '시도', '시군구', '용량별', '시설명', '조회기간', '시설상태'];

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
const selectSearchYear:SelectDataType[] = [
    { text: "2025년", val: '2025'},
    { text: "2024년", val: '2024'},
    { text: "2023년", val: '2023'},
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

// GRID관련
export type flowRateListProps = {
    facilityCd : string,
    sido : string,
    sigungo : string,
    facilityName : string,
    location : string,
    facilityCapacity : string,
    totInflow : string,
    sewageInflow : string,
    linkedTreatedWater : string,
    totReturnWater : string,
    discharge : string,
}
const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량\n(m³/L)"},
    { id: "totInflow", title: "총 유입입량\n(m³/일)"},
    { id: "sewageInflow", title: "하수유입량\n(m³/일)"},
    { id: "linkedTreatedWater", title: '연계처리량\n(m³/일)'},
    { id: "totReturnWater", title: '총인 반류수량\n(m³/일)'},
    { id: "discharge", title: '방류량\n(m³/일)'}
];
const flowRateList:flowRateListProps[] = [
    {
        facilityCd : "11000SW001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "난지",
        location: "경기도 고양시 덕양구 대차로 4가",
        facilityCapacity: "860,000",
        totInflow : "626,344",
        sewageInflow : "608,798",
        linkedTreatedWater : "4,103",
        totReturnWater: "13,444",
        discharge: "622,241"
    },
    {
        facilityCd : "11200PB001R",
        sido: "서울특별시",
        sigungo: "성동구",
        facilityName: "중량물재생센터",
        location: "서울특별시 성동구 자동차시장3길 64 (용답동, 중랑물재생센터)",
        facilityCapacity: "1,590,000",
        totInflow : "1,310,456",
        sewageInflow : "1,282,332",
        linkedTreatedWater : "4,869",
        totReturnWater: "23,255",
        discharge: "1,154,369"
    },
    {
        facilityCd : "11500PB001R",
        sido: "서울특별시시",
        sigungo: "강서구",
        facilityName: "서남",
        location: "서울특별시 강서구 마곡동 74",
        facilityCapacity: "1,630,000",
        totInflow : "1,501,700",
        sewageInflow : "1,481,835",
        linkedTreatedWater : "4,289",
        totReturnWater: "15,576",
        discharge: "1,481,835"
    },
    {
        facilityCd : "11680PB001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "탄천",
        location: "서울특별시 강남구 일원동 580",
        facilityCapacity: "900,000",
        totInflow : "741,984",
        sewageInflow : "741,923",
        linkedTreatedWater : "62",
        totReturnWater: "-",
        discharge: "741,286"
    },
]

export type FlowRateSearchActions = {
    FlowRateSearchActions: {
        labelChange:()=>void;
    },
    FlowRateListActions : {
        labelChange:()=>void;
    }
}

export type FlowRateSearchType = {
    FlowRateSearch: {
        isInit: boolean;
        flowRateSearchLabelArray:string[];
        selectPartData:SelectDataType[];
        selectUpdownData:SelectDataType[];
        selectOperationData:SelectDataType[];
        selectSearchYear:SelectDataType[];
        selectSidoData:SelectDataType[];
        selectSigunData:SelectDataType[];
    },
    FlowRateList : {
        isInit : boolean;
        upHeadList: TableUpperProps[];
        flowRateList:flowRateListProps[];
    }
}

export type FlowRateSearchStore = FlowRateSearchType & FlowRateSearchActions;

export const flowRateSearchInitState:FlowRateSearchType = {
    FlowRateSearch: {
        isInit: false,
        flowRateSearchLabelArray: FlowRateSearchLabelArray,
        selectPartData : selectPartData,
        selectUpdownData : selectUpdownData,
        selectOperationData : selectOperationData,
        selectSearchYear : selectSearchYear,
        selectSidoData : selectSidoData,
        selectSigunData: selectSigunData,
    },
    FlowRateList : {
        isInit : false,
        upHeadList : upHeadList,
        flowRateList : flowRateList
    }
}

export const flowRateSearchReducer:(set:any)=>FlowRateSearchActions=(set: any) => {
    console.log("tableActionsExport");
    return {
        FlowRateSearchActions: {
            labelChange:()=>set(
                (state:FlowRateSearchType) => {
                    state.FlowRateSearch.flowRateSearchLabelArray[0] = "구분 변경";
                return (
                { 
                    FlowRateSearch: {
                        ...state.FlowRateSearch,
                        flowRateSearchlabelArray: state.FlowRateSearch.flowRateSearchLabelArray
                }})}
            )
        }, 
        FlowRateListActions: {
            labelChange:()=>set(
                (state:FlowRateSearchType) => {
                    state.FlowRateSearch.flowRateSearchLabelArray[0] = "구분 변경";
                return (
                { 
                    FlowRateSearch: {
                        ...state.FlowRateSearch,
                        flowRateSearchlabelArray: state.FlowRateSearch.flowRateSearchLabelArray
                }})}
            )
        }
    }
}