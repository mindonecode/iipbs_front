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

// 운영실태
export type operationalStatusListProps = {
    flowRate : string,
    waterQlty : string,
    yearAvg : string,
    yearMax : string,
    yearMin : string,
    summerAll : string,
    summerThree : string,
    summerRain : string,
    winterAll : string,
    winterRainAvg : string,
    winterRainMax : string,
    winterRainMin : string,
    groundWaterAvg : string,
    groundWaterSummer : string,
    groundWaterWinter : string,
    rdi : string,
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
        item : "1.증설계획\n(㎥/일)",
        provisionalApproval: "6,797",
        now: "5,794",
        stepOne: "6,957",
        stepTwo: "7,680",
        stepThree: "7,894",
        stepFour : "7,768",
    },
    {
        item : "2.처리인구",
        provisionalApproval: "17,571",
        now: "13,114",
        stepOne: "16,587",
        stepTwo: "18,335",
        stepThree: "18,847",
        stepFour : "18,552",
    },
    {
        item : "3.처리구역\n(km2)",
        provisionalApproval: "79.94",
        now: "79.94",
        stepOne: "79.94",
        stepTwo: "79.94",
        stepThree: "79.94",
        stepFour : "79.94",
    },
    {
        item : "4.분류식화율\n(%)",
        provisionalApproval: "80.6",
        now: "80.8",
        stepOne: "81.1",
        stepTwo: "82.3",
        stepThree: "83.0",
        stepFour : "83.8",
    },
    {
        item : "5.오수량원단위\n(일최대)",
        provisionalApproval: "",
        now: "",
        stepOne: "",
        stepTwo: "",
        stepThree: "0.32",
        stepFour : "",
    },
    {
        item : "6.물사용량",
        provisionalApproval: "",
        now: "",
        stepOne: "",
        stepTwo: "",
        stepThree: "",
        stepFour : "",
    },
    {
        item : "년도\n(최근 3개년)",
        provisionalApproval: "급수인구\n(처리구역)",
        now: "물사용량\n(㎥/일)",
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

const upHeadListOperationStatus : TableUpperProps[] = [
    { id: "flowRate", title: "유량 및 수질", upName:"upChangeRe1", upSequnce:1},
    { id: "waterQlty", title: "유량 및 수질", upName:"upChangeRe1", upSequnce:2},
    { id: "yearAvg", title: "평균", upName:"upChangeRe2", upSequnce:1 },
    { id: "yearMax", title: "최대", upName:"upChangeRe2", upSequnce:2 },
    { id: "yearMin", title: "최소", upName:"upChangeRe2", upSequnce:3 },
    { id: "summerAll", title: "하절기\n전기간", upName:"upChangeRe3", upSequnce:1 },
    { id: "summerThree", title: "강우일\n(3mm이상)", upName:"upChangeRe3", upSequnce:2 },
    { id: "summerRain", title: "비강우시", upName:"upChangeRe3", upSequnce:3 },
    { id: "winterAll", title: "동절기\n전기간", upName:"upChangeRe4", upSequnce:1 },
    { id: "winterRainAvg", title: "비강우시\n평균", upName:"upChangeRe4", upSequnce:2 },
    { id: "winterRainMax", title: "비강우시\n최대", upName:"upChangeRe4", upSequnce:3 },
    { id: "winterRainMin", title: "비강우시\n최소", upName:"upChangeRe4", upSequnce:4 },
    { id: "groundWaterAvg", title: "연평균", upName:"upChangeRe5", upSequnce:1 },
    { id: "groundWaterSummer", title: "하절기\n평균", upName:"upChangeRe5", upSequnce:2 },
    { id: "groundWaterWinter", title: "동절기\n평균", upName:"upChangeRe5", upSequnce:3 },
    { id: "rdi", title: "RDII 추정" },
]

const operationalStatusList : operationalStatusListProps[] = [
    {
        flowRate : '유량\n(㎥/일)',
        waterQlty : '유입',
        yearAvg : '547,637',
        yearMax : '553,361',
        yearMin : '541,157',
        summerAll : '547,637',
        summerThree : '553,361',
        summerRain : '541,157',
        winterAll : '547,637',
        winterRainAvg : '547,637',
        winterRainMax : '553,361',
        winterRainMin : '541,157',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '유량\n(㎥/일)',
        waterQlty : '순수하수',
        yearAvg : '539,519.4',
        yearMax : '539,659.6',
        yearMin : '528,665.9',
        summerAll : '539,519.4',
        summerThree : '539,659.6',
        summerRain : '528,665.9',
        winterAll : '539,519.4',
        winterRainAvg : '539,519.4',
        winterRainMax : '539,659.6',
        winterRainMin : '528,665.9',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '유량\n(㎥/일)',
        waterQlty : '연계처리수',
        yearAvg : '699.0',
        yearMax : '4,982.3',
        yearMin : '4,257.7',
        summerAll : '699.0',
        summerThree : '4,982.3',
        summerRain : '4,257.7',
        winterAll : '699.0',
        winterRainAvg : '699.0',
        winterRainMax : '4,982.3',
        winterRainMin : '4,257.7',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '유량\n(㎥/일)',
        waterQlty : '총인설비\n반류수',
        yearAvg : '7,418.6',
        yearMax : '8,719.1',
        yearMin : '8,233.4',
        summerAll : '7,418.6',
        summerThree : '8,719.1',
        summerRain : '8,233.4',
        winterAll : '7,418.6',
        winterRainAvg : '7,418.6',
        winterRainMax : '8,719.1',
        winterRainMin : '8,233.4',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '유량\n(㎥/일)',
        waterQlty : '방류',
        yearAvg : '547,637',
        yearMax : '553,361',
        yearMin : '541,157',
        summerAll : '547,637',
        summerThree : '553,361',
        summerRain : '541,157',
        winterAll : '547,637',
        winterRainAvg : '547,637',
        winterRainMax : '553,361',
        winterRainMin : '541,157',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '유입\n(BOD)',
        yearAvg : '204.4',
        yearMax : '294.0',
        yearMin : '123.9',
        summerAll : '193.4',
        summerThree : '181.6',
        summerRain : '202.1',
        winterAll : '220.0',
        winterRainAvg : '221.3',
        winterRainMax : '223.6',
        winterRainMin : '219.8',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '방류\n(BOD)',
        yearAvg : '2.2',
        yearMax : '3.6',
        yearMin : '0.8',
        summerAll : '2.0',
        summerThree : '2.1',
        summerRain : '2.1',
        winterAll : '2.3',
        winterRainAvg : '2.2',
        winterRainMax : '2.6',
        winterRainMin : '1.5',
        groundWaterAvg : '50,421',
        groundWaterSummer : '74,965',
        groundWaterWinter : '47,678',
        rdi : '203,083',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '유입\n(T-N)',
        yearAvg : '43.690',
        yearMax : '76.656',
        yearMin : '20.040',
        summerAll : '40.306',
        summerThree : '37.722',
        summerRain : '42.792',
        winterAll : '49.910',
        winterRainAvg : '50.148',
        winterRainMax : '55.236',
        winterRainMin : '46.925',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '방류\n(T-N)',
        yearAvg : '6.426',
        yearMax : '14.244',
        yearMin : '2.388',
        summerAll : '5.42',
        summerThree : '4.964',
        summerRain : '5.641',
        winterAll : '6.945',
        winterRainAvg : '6.95',
        winterRainMax : '7.92',
        winterRainMin : '5.17',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '유입\n(T-P)',
        yearAvg : '4.687',
        yearMax : '7.26',
        yearMin : '2.34',
        summerAll : '4.207',
        summerThree : '3.96',
        summerRain : '4.492',
        winterAll : '5.384',
        winterRainAvg : '5.392',
        winterRainMax : '6.027',
        winterRainMin : '4.789',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
    },
    {
        flowRate : '수질\n(mg/L)',
        waterQlty : '방류\n(T-P)',
        yearAvg : '0.076',
        yearMax : '0.412',
        yearMin : '0.008',
        summerAll : '0.039',
        summerThree : '0.035',
        summerRain : '0.041',
        winterAll : '0.134',
        winterRainAvg : '0.14',
        winterRainMax : '0.168',
        winterRainMin : '0.125',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
    },
    {
        flowRate : '총인\n시설\n수질\n(mg/L)',
        waterQlty : '총인설비\n유입(T-P)',
        yearAvg : '4.687',
        yearMax : '7.26',
        yearMin : '2.34',
        summerAll : '4.207',
        summerThree : '3.96',
        summerRain : '4.492',
        winterAll : '5.384',
        winterRainAvg : '5.392',
        winterRainMax : '6.027',
        winterRainMin : '4.789',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
    },
    {
        flowRate : '총인\n시설\n수질\n(mg/L)',
        waterQlty : '총인설비\n방류(T-P)',
        yearAvg : '0.076',
        yearMax : '0.412',
        yearMin : '0.008',
        summerAll : '0.039',
        summerThree : '0.035',
        summerRain : '0.041',
        winterAll : '0.134',
        winterRainAvg : '0.14',
        winterRainMax : '0.168',
        winterRainMin : '0.125',
        groundWaterAvg : '6.6%',
        groundWaterSummer : '6.7%',
        groundWaterWinter : '6.1%',
        rdi : '44.6%',
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
    },

    OperationStatus : {
        isInit : boolean;
        upHeadListOperationStatus : TableUpperProps[];
        operationalStatusList : operationalStatusListProps[];
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

    OperationStatus : {
        isInit : false,
        upHeadListOperationStatus : upHeadListOperationStatus,
        operationalStatusList : operationalStatusList
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
                    DashboardMain: {
                        ...state.DashboardMain,
                        topLabelArray: state.DashboardMain.topLabelArray
                }})}
            )
        },
    }
}