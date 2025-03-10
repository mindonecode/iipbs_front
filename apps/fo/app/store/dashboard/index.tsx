/**
 * Store - 타입
 */

// selectBox
export type SelectDataType = {
    text: string;
    val: string;
}

// grid header
export type TableUpperProps = {
    id: string;
    title: string;
    upName?: string;
    upSequnce?: number;
}

// ===TAB1
// main fclty
export type mainFcltyProps = {
    fcltyNm : string,
    facilityCapacity : string,
    publicMethod : string,
    location : string
}

// 시설계획
export type planFcltyListProps = {
    item : string,
    provisionalApproval : string,
    now : string,
    stepOne : string,
    stepTwo : string,
    stepThree : string,
    stepFour : string,
}

// list1
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
 * Store - data
 */
// Main
const DashBoardTopLabelArray:string[] = ['구분', '시도', '시군구', '년도', '시설명'];
const selectPartData:SelectDataType[] = [
    { text: "행정별", val: '00'},
    { text: "유역별", val: '01'},
    { text: "환경청별", val: '02'},
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

// === Tab1
// grid header
const upHeadListFclty:TableUpperProps[] = [
    { id : "fcltyNm", title : "시설명"},
    { id : "facilityCapacity", title : "시설용량(m³/L)"},
    { id : "publicMethod", title : "공법"},
    { id : "location", title : "지역구"},
]
const fcltyList : mainFcltyProps[] = [
    {
        fcltyNm : "난지",
        facilityCapacity : "860,000",
        publicMethod : "MLE, A2O",
        location : "500톤 이상(Ⅲ지역)"
    }
]

const upHeadListPlanFclty : TableUpperProps[] = [
    { id: "item", title: "", upName:"upChangeRe", upSequnce:1 },
    { id: "provisionalApproval", title: "가승인", upName:"upChangeRe", upSequnce:2 },
    { id: "now", title: "현재", upName:"upChangeRe", upSequnce:3 },
    { id: "stepOne", title: "1단계", upName:"upChangeRe", upSequnce:4 },
    { id: "stepTwo", title: "2단계", upName:"upChangeRe", upSequnce:5 },
    { id: "stepThree", title: "3단계", upName:"upChangeRe", upSequnce:6 },
    { id: "stepFour", title: "4단계", upName:"upChangeRe", upSequnce:7 },
]
const planFcltyList:planFcltyListProps[] = [
    {
        item : "1. 증설계획(㎥/일)",
        provisionalApproval: "6,797",
        now: "5,794",
        stepOne: "6,957",
        stepTwo: "7,680",
        stepThree: "7,894",
        stepFour : "7,768",
    },
    {
        item : "2. 처리인구",
        provisionalApproval: "17,571",
        now: "13,114",
        stepOne: "16,587",
        stepTwo: "18,335",
        stepThree: "18,847",
        stepFour : "18,552",
    },
    {
        item : "3. 처리구역 (km2)",
        provisionalApproval: "79.94",
        now: "79.94",
        stepOne: "79.94",
        stepTwo: "79.94",
        stepThree: "79.94",
        stepFour : "79.94",
    },
    {
        item : "4. 분류식화율 (%)",
        provisionalApproval: "80.6",
        now: "80.8",
        stepOne: "81.1",
        stepTwo: "82.3",
        stepThree: "83.0",
        stepFour : "83.8",
    },
    {
        item : "5. 오수량원단위(일최대)",
        provisionalApproval: "",
        now: "",
        stepOne: "",
        stepTwo: "",
        stepThree: "0.32",
        stepFour : "",
    },
    {
        item : "6. 물사용량",
        provisionalApproval: "",
        now: "",
        stepOne: "",
        stepTwo: "",
        stepThree: "",
        stepFour : "",
    },
    {
        item : "년도 (최근 3개년)",
        provisionalApproval: "급수인구\n(처리구역)",
        now: "물사용량(㎥/일)",
        stepOne: "",
        stepTwo: "사용량 원단위",
        stepThree: "",
        stepFour : "비고",
    },
    {
        item : "2021",
        provisionalApproval: "-",
        now: "-",
        stepOne: "",
        stepTwo: "-",
        stepThree: "",
        stepFour : "-",
    },
    {
        item : "2022",
        provisionalApproval: "-",
        now: "-",
        stepOne: "",
        stepTwo: "-",
        stepThree: "",
        stepFour : "-",
    },
    {
        item : "2023",
        provisionalApproval: "1,573,277",
        now: "560,000",
        stepOne: "",
        stepTwo: "0.32",
        stepThree: "",
        stepFour : "-",
    },
]

const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량(m³/L)"},
    { id: "totInflow", title: "총 유입입량(m³/일)"},
    { id: "sewageInflow", title: "하수유입량(m³/일)"},
    { id: "linkedTreatedWater", title: '연계처리량(m³/일)'},
    { id: "totReturnWater", title: '총인 반류수량(m³/일)'},
    { id: "discharge", title: '방류량(m³/일)'}
];
const flowRateList:flowRateListProps[] = [
    {
        facilityCd : "11000SW001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "난지",
        location: "경기도 고양시 덕양구 대차로 4가",
        facilityCapacity: "860,000",
        totInflow : "547,637",
        sewageInflow : "539,519.4",
        linkedTreatedWater : "699.0",
        totReturnWater: "7,418.6",
        discharge: "547,637.0"
    },
    {
        facilityCd : "11200PB001R",
        sido: "서울특별시",
        sigungo: "성동구",
        facilityName: "중량물재생센터",
        location: "서울특별시 성동구 자동차시장3길 64 (용답동, 중랑물재생센터)",
        facilityCapacity: "1,590,000",
        totInflow : "1,003,563",
        sewageInflow : "883,231.8",
        linkedTreatedWater : "634.9",
        totReturnWater: "8631.0",
        discharge: "545,234.8"
    },
    {
        facilityCd : "11500PB001R",
        sido: "서울특별시시",
        sigungo: "강서구",
        facilityName: "서남",
        location: "서울특별시 강서구 마곡동 74",
        facilityCapacity: "1,630,000",
        totInflow : "1,445,233",
        sewageInflow : "1,113,443.2",
        linkedTreatedWater : "881.8",
        totReturnWater: "9882.0",
        discharge: "632,194"
    },
    {
        facilityCd : "11680PB001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "탄천",
        location: "서울특별시 강남구 일원동 580",
        facilityCapacity: "900,000",
        totInflow : "467,343",
        sewageInflow : "443,321",
        linkedTreatedWater : "322",
        totReturnWater: "3,123",
        discharge: "323,123"
    },
]

export type DashBoardActions = {
    MainAction: {
        labelChange:()=>void;
    },
}

export type DashBoardType = {
    DashboardMain: {
        isInit: boolean;
        topLabelArray:string[];
        selectPartData:SelectDataType[];
        selectSearchYear:SelectDataType[];
        selectSidoData:SelectDataType[];
        selectSigunData:SelectDataType[];
    },

    FcltyMain : {
        isInit : boolean;
        upHeadListFclty : TableUpperProps[];
        fcltyList : mainFcltyProps[];
    },

    PlanFclty : {
        isInit : boolean;
        upHeadListPlanFclty : TableUpperProps[];
        planFcltyList : planFcltyListProps[];
    }

    FlowRateList : {
        isInit : boolean;
        upHeadList: TableUpperProps[];
        flowRateList:flowRateListProps[];
    }
}

export type DashBoardStore = DashBoardType & DashBoardActions;

export const dashInitState:DashBoardType = {
    DashboardMain: {
        isInit: false,
        topLabelArray: DashBoardTopLabelArray,
        selectPartData : selectPartData,
        selectSearchYear : selectSearchYear,
        selectSidoData : selectSidoData,
        selectSigunData: selectSigunData,
    },
    
    FcltyMain : {
        isInit : false,
        upHeadListFclty : upHeadListFclty,
        fcltyList : fcltyList,
    },

    PlanFclty : {
        isInit : false,
        upHeadListPlanFclty : upHeadListPlanFclty,
        planFcltyList : planFcltyList
    },

    FlowRateList : {
        isInit : false,
        upHeadList : upHeadList,
        flowRateList : flowRateList
    }
}

export const dashBoardReducer:(set:any)=>DashBoardActions=(set: any) => {
    console.log("tableActionsExport");
    return {
        MainAction: {
            labelChange:()=>set(
                (state:DashBoardType) => {
                    state.DashboardMain.topLabelArray[0] = "구분 변경";
                return (
                { 
                    FlowRateSearch: {
                        ...state.DashboardMain,
                        topLabelArray: state.DashboardMain.topLabelArray
                }})}
            )
        },
    }
}