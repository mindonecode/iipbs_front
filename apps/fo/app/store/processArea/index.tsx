import type { SelectDataType } from "@common/business_components/ui";
import type { TableUpperProps } from "../dashboard";
export type {TableUpperProps};
/**====================================
 * Store - 타입
 ====================================*/

/**
 * (1) 메인페이지
 */
// 처리구역 리스트
type ProcessAreaProps = {
    facilityCd : string,
    sido : string,
    sigungo : string,
    facilityName : string,
    location : string,
    facilityCapacity : string,
    approval : string,
    now : string,
    stepFirst : string,
    stepSecond : string,
    stepThird : string,
    stepFourth : string,
}

// (2) 처리구역 팝업
// 시설증설 계획
export type FcltyImproveInfoProps = {
    basicPlan : string,
    now : string,
    stepFirst : string,
    stepSecond : string,
    stepThird : string,
    stepFourth : string,
}

// 처리구역 계획
export type ProcessAreaPlanProps = {
    basicPlan : string,
    now : string,
    stepFirst : string,
    stepSecond : string,
    stepThird : string,
    stepFourth : string,
    processArea : string,
}

/**====================================
 * Store - data
 ====================================*/

/**
 * (1) 메인페이지 
 */ 
// 검색단
const ProcessFacilityLabelArray:string[] = ['구분', '시도', '시군구','용량별', '시설명', '시설상태','시설구분'];

// 리스트 헤더
const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량(m³/일)"},
    { id: "approval", title: "기승인\n(2018년)"},
    { id: "now", title: "현재\n(2024년)"},
    { id: "stepFirst", title: "1단계\n(2025년)"},
    { id: "stepSecond", title: "2단계\n(2030년)"},
    { id: "stepThird", title: "3단계\n(2035년)"},
    { id: "stepFourth", title: "4단계\n(2040년)"}
];

const processAreaList:ProcessAreaProps[] = [
    {
        facilityCd : "11000SW001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "난지",
        location: "경기도 고양시 덕양구 대차로 4가",
        facilityCapacity: "860,000",
        approval : "860,000",
        now : "860,000",
        stepFirst: "880,000",
        stepSecond: "910,000",
        stepThird: "950,000",
        stepFourth: "990,00"
    },
    {
        facilityCd : "11200PB001R",
        sido: "서울특별시",
        sigungo: "성동구",
        facilityName: "중량물재생센터",
        location: "서울특별시 성동구 자동차시장3길 64 (용답동, 중랑물재생센터)",
        facilityCapacity: "1,590,000",
        approval: "1,590,000",
        now: "1,590,000", 
        stepFirst: "1,600,000",
        stepSecond: "1,620,000",
        stepThird: "1,650,000",
        stepFourth: "1,680,000"
    },
]

/**
 * 처리구역정보 상세팝업
 */ 
// 시설증설 계획 (헤더)
const upHeadListFcltyImproveInfo:TableUpperProps[] = [
    { id: "basicPlan", title: "기존계획\n(m³/일)" },
    { id: "now", title: "현재"},
    { id: "stepFirst", title: "1단계", upName:"upChangeRe", upSequnce:1},
    { id: "stepSecond", title: "2단계", upName:"upChangeRe", upSequnce:2},
    { id: "stepThird", title: "3단계", upName:"upChangeRe", upSequnce:3},
    { id: "stepFourth", title: "4단계", upName:"upChangeRe", upSequnce:4},
];

// 시설증설 계획 (리스트)
const gridListFcltyImproveInfo:FcltyImproveInfoProps[] = [
    {
        basicPlan : "6,797",
        now : "5,794",
        stepFirst : "6,957",
        stepSecond : "7,680",
        stepThird : "7,894",
        stepFourth : "7,768"
    }
];

// 처리인구 계획 (헤더)
const upHeadListProcessPopulation:TableUpperProps[] = [
    { id: "basicPlan", title: "기존계획\n(인)" },
    { id: "now", title: "현재"},
    { id: "stepFirst", title: "1단계", upName:"upChangeRe", upSequnce:1},
    { id: "stepSecond", title: "2단계", upName:"upChangeRe", upSequnce:2},
    { id: "stepThird", title: "3단계", upName:"upChangeRe", upSequnce:3},
    { id: "stepFourth", title: "4단계", upName:"upChangeRe", upSequnce:4},
];

// 처리인구 계획 (리스트)
const gridListProcessPopulation:FcltyImproveInfoProps[] = [
    {
        basicPlan : "6,797",
        now : "5,794",
        stepFirst : "6,957",
        stepSecond : "7,680",
        stepThird : "7,894",
        stepFourth : "7,768"
    }
];
// 처리구역 계획 (헤더)
const upHeadListProcessAreaPlan:TableUpperProps[] = [
    { id: "basicPlan", title: "기존계획\n(km²)" },
    { id: "now", title: "현재", upName:"upChangeRe", upSequnce:1},
    { id: "stepFirst", title: "1단계", upName:"upChangeRe", upSequnce:2},
    { id: "stepSecond", title: "2단계", upName:"upChangeRe", upSequnce:3},
    { id: "stepThird", title: "3단계", upName:"upChangeRe", upSequnce:4},
    { id: "stepFourth", title: "4단계", upName:"upChangeRe", upSequnce:5},
    { id: "processArea", title: "처리구역"}
];

// 시설증설 계획 (리스트)
const gridListProcessAreaPlan:ProcessAreaPlanProps[] = [
    {
        basicPlan : "6,797",
        now : "5,794",
        stepFirst : "6,957",
        stepSecond : "7,680",
        stepThird : "7,894",
        stepFourth : "7,768",
        processArea : "용산, 은평, 서대문, 마포 전역 및 종로, 중구, 성동, 고양시 일부"
    }
];

/**====================================
 * Store - expaort
 ====================================*/
export type ProcessAreaActions = {
    ProcessAreaActions: {
        labelChange:()=>void;
    }
}

export type ProcessAreaType = {
    ProcessAreaSearch: {
        isInit: boolean;
        processFacilityLabelArray:string[];
    },

    ProcessArea : {
        isInit: boolean;
        upHeadList: TableUpperProps[];
        processAreaList: ProcessAreaProps[]; // Changed from facilityAreaProps to ProcessAreaProps
    },  

    ProcessAreaDetail : {
        isInit: boolean;
        upHeadListFcltyImproveInfo: TableUpperProps[];
        gridListFcltyImproveInfo: FcltyImproveInfoProps[]; // Changed from facilityAreaProps to ProcessAreaProps
        upHeadListProcessPopulation: TableUpperProps[];
        gridListProcessPopulation: FcltyImproveInfoProps[]; // Changed from facilityAreaProps to ProcessAreaProps
        upHeadListProcessAreaPlan: TableUpperProps[];
        gridListProcessAreaPlan: ProcessAreaPlanProps[]; // Changed from facilityAreaProps to ProcessAreaProps
    },
}

export const processAreaInitState: ProcessAreaType = {
    ProcessAreaSearch: {
        isInit: false,
        processFacilityLabelArray: ProcessFacilityLabelArray,
    },

    ProcessArea : {
        isInit : false,
        upHeadList : upHeadList,
        processAreaList : processAreaList
    },

    ProcessAreaDetail : {
        isInit : false,
        upHeadListFcltyImproveInfo : upHeadListFcltyImproveInfo,
        gridListFcltyImproveInfo : gridListFcltyImproveInfo,
        upHeadListProcessPopulation : upHeadListProcessPopulation,
        gridListProcessPopulation : gridListProcessPopulation,
        upHeadListProcessAreaPlan : upHeadListProcessAreaPlan,
        gridListProcessAreaPlan : gridListProcessAreaPlan,
    },
}

export type ProcessAreaStore = ProcessAreaType & ProcessAreaActions;

export const processAreaReducer:(set:any)=>ProcessAreaActions=(set: any) => {
    console.log("tableActionsExport");
    return {
        ProcessAreaActions: {
            labelChange:()=>set(
                (state:ProcessAreaType) => {
                    state.ProcessAreaSearch.processFacilityLabelArray[0] = "구분 변경";
                return (
                { 
                    ProcessAreaSearch: {
                        ...state.ProcessAreaSearch,
                        processFacilityLabelArray: state.ProcessAreaSearch.processFacilityLabelArray
                    }
                })}
            )
        }
    }
}