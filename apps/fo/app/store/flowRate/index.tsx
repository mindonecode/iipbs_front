import type { TableUpperProps } from "../dashboard";

/**====================================
 * Store - 타입
 ====================================*/

/**
 * (1) 메인페이지
 */
const FlowRateSearchLabelArray:string[] = ['구분', '시도', '시군구', '용량별', '시설명', '조회기간', '시설상태'];

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

/**
 * (2) 모달
 */
export type FlowRateModalProps = {
    totalFlow : number,
    sewageFlow : number,
    linkedTreatedWater : number,
    totReturnWater : number,
    discharge : number,
}

/**====================================
 * Store - data
 ====================================*/

 /**
 * (1) 메인페이지
 */
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

/**
 * (2) 모달
 */

const flowRateModalList:FlowRateModalProps[] = [
      {
        totalFlow: 547385,
        sewageFlow: 535948,
        linkedTreatedWater: 3313,
        totReturnWater: 8124,
        discharge: 547385
    },
    {
        totalFlow: 553361,
        sewageFlow: 539660,
        linkedTreatedWater: 4982,
        totReturnWater: 8719,
        discharge: 553361
    },
    {
        totalFlow: 541157,
        sewageFlow: 528666,
        linkedTreatedWater: 699,
        totReturnWater: 7419,
        discharge: 541157
    },
    {
        totalFlow: 547637,
        sewageFlow: 539519.4,
        linkedTreatedWater: 699,
        totReturnWater: 7418.6,
        discharge: 547637
    },
    {
        totalFlow:   541157,
        sewageFlow: 528665.9,   
        linkedTreatedWater: 4257.7,
        totReturnWater: 8233.4,
        discharge: 541157
    },
    {
        totalFlow: 553361,
        sewageFlow: 539659.6,
        linkedTreatedWater: 4982.3,
        totReturnWater: 8719.1,
        discharge: 553361
    }
]

/**====================================
 * Store - expaort
 ====================================*/

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
    },

    FlowRateList : {
        isInit : boolean;
        upHeadList: TableUpperProps[];
        flowRateList:flowRateListProps[];
    },

    FlowRateModal : {
        isInit : boolean;
        flowRateModalList : FlowRateModalProps[];
    }
}

export type FlowRateSearchStore = FlowRateSearchType & FlowRateSearchActions;

export const flowRateSearchInitState:FlowRateSearchType = {
    FlowRateSearch: {
        isInit: false,
        flowRateSearchLabelArray: FlowRateSearchLabelArray,
    },
    FlowRateList : {
        isInit : false,
        upHeadList : upHeadList,
        flowRateList : flowRateList
    },
    FlowRateModal : {
        isInit : false,
        flowRateModalList : flowRateModalList
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
        },
    }
}