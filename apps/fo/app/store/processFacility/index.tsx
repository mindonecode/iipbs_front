import type { SelectDataType } from "@common/business_components/ui";
import type { TableUpperProps } from "../dashboard";
export type {TableUpperProps};

type sidoDataType = {
    fid: number,
    mctpvCd: number,
    mctpvEngNm: string,
    mctpvKornNm: string
}

// API 호출 함수 추가
const fetchSidoData = async (): Promise<sidoDataType[]> => {
    try {
        const response = await fetch('http://192.168.1.129:8881/api/v1/addr/city');
        const data = await response.json();
        console.log(data);
        // API 응답 데이터를 SelectDataType 형식으로 변환
        return data.data.map((item: any) => ({
            text: item.mctpvKornNm || '',
            val: item.mctpvCd || ''
        }));
    } catch (error) {
        console.error('시도 데이터를 가져오는데 실패했습니다:', error);
        return [];
    }
};

/**====================================
 * Store - 타입
 ====================================*/

/**
 * (1) 메인페이지
 */
// 처리시설 리스트
type facilityListProps = {
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

// (2) 처리시설 팝업
// 시설 기본정보
export type BasicInfoProps = {
    facilityName : string,
    facilityCapacity : string,
    sido : string,
    sigungo : string,
    startDay : string,
    location : string,
    openDay : string,
    publicMethod : string,
    manageUpchae : string,
}

// 시설 계획정보
export type PlanInfoProps = {
    bodPlanInput : string,
    tocPlanInput : string,
    ssPlanInput : string,
    tnPlanInput : string,
    tpPlanInput : string,
    bodDesignInput : string,
    tocDesignInput : string,
    ssDesignInput : string,
    tnDesignInput : string,
    tpDesignInput : string,
    siteAreaSize : string,
    processAreaSize : string,
    sewageTreatmentPopulation : string
}

// 시설 수역 및 구역정보
export type fcltyAreaInfoProps = {
    riverName : string,
    waterDischargedArea : string,
    unitWaterArea : string,
    areaUnit : string,
    environmentalAgency : string,
}

// 시설 이력관리
export type fcltyHistInfoProps = {
    step : string,
    unit : string,
    businessStartDate : string,
    businessEndDate : string,
    installDate : string,
    openDate : string,
    commissioningDate : string,
    operationDate : string
}

// 시설 수질정보
export type fcltyWaterQltyInfoProps = {
    step : string,
    bodPlanInput : string,
    tocPlanInput : string,
    ssPlanInput : string,
    tnPlanInput : string,
    tpPlanInput : string,
    bodDesignInput : string,
    tocDesignInput : string,
    ssDesignInput : string,
    tnDesignInput : string,
    tpDesignInput : string,
    bodPlanOutput : string,
    tocPlanOutput : string,
    ssPlanOutput : string,
    tnPlanOutput : string,
    tpPlanOutput : string,
}

/**====================================
 * Store - data
 ====================================*/

/**
 * (1) 메인페이지 
 */ 
// 검색단
const ProcessFacilityLabelArray:string[] = ['구분', '시도', '시군구','용량별', '시설명', '시설상태','시설구분'];

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

// selectSidoData를 동적으로 설정하도록 수정
let selectSidoData: SelectDataType[] = [];

// 초기 데이터 로드
fetchSidoData().then(data => {
    selectSidoData = [
        { text: "전체", val: '00'},  // 기본 "전체" 옵션 유지
        ...data
    ];
}).catch(error => {
    console.error('시도 데이터 초기화 실패:', error);
    // 에러 발생 시 기본 데이터 사용
    selectSidoData = [
        { text: "전체", val: '00'}
    ];
});

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

// 리스트 헤더
const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량(m³/L)"},
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
        sigungo: "강서구",
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

/**
 * 처리시설 상세팝업
 */ 
// 시설 기본정보 (헤더)
const upHeadListBasicInfo:TableUpperProps[] = [
    { id: "facilityName", title: "시설명" },
    { id: "facilityCapacity", title: "시설용량n(m³/일)"},
    { id: "sido", title: "시도"},
    { id: "sigungo", title: "시군구"},
    { id: "startDay", title: "가동개시일"},
    { id: "location", title: "주소"},
    { id: "openDay", title: "준공일"},
    { id: "publicMethod", title: "공법"},
    { id: "manageUpchae", title: "관리대행업자"},
];

// 시설 기본정보 (리스트)
const gridListBasicInfo:BasicInfoProps[] = [
    {
        facilityName : "난지",
        facilityCapacity : "860,000",
        sido : "서울특별시",
        sigungo : "",
        startDay : "1987-06-30",
        location : "경기도 고양시 덕양구 대덕로 426 (현천동)",
        openDay : "2013-04-30",
        publicMethod : "MLE, A2O",
        manageUpchae : "자체",
    }
];

// 시설 계획정보 (헤더)
const upHeadListPlanInfo:TableUpperProps[] = [
    { id: "bodPlanInput", title: "BOD", upName:"upChangeRe1", upSequnce:1 },
    { id: "tocPlanInput", title: "TOC\n(COD)", upName:"upChangeRe1", upSequnce:2 },
    { id: "ssPlanInput", title: "SS", upName:"upChangeRe1", upSequnce:3 },
    { id: "tnPlanInput", title: "T-N", upName:"upChangeRe1", upSequnce:4 },
    { id: "tpPlanInput", title: "T-P", upName:"upChangeRe1", upSequnce:5 },
    { id: "bodDesignInput", title: "BOD", upName:"upChangeRe2", upSequnce:1 },
    { id: "tocDesignInput", title: "TOC\n(COD)", upName:"upChangeRe2", upSequnce:2 },
    { id: "ssDesignInput", title: "SS", upName:"upChangeRe2", upSequnce:3 },
    { id: "tnDesignInput", title: "T-N", upName:"upChangeRe2", upSequnce:4 },
    { id: "tpDesignInput", title: "T-P", upName:"upChangeRe2", upSequnce:5 },
    { id: "siteAreaSize", title: "관리대행업자\n(m²)"},
    { id: "processAreaSize", title: "처리구역면적\n(ha)"},
    { id: "sewageTreatmentPopulation", title: "하수처리인구\n(인)"},
];

// 시설 계획정보 (리스트)
const gridListPlanInfo:PlanInfoProps[] = [
    {
        bodPlanInput : "179.0",
        tocPlanInput : "(90.0)",
        ssPlanInput : "132.0",
        tnPlanInput : "38.000",
        tpPlanInput : "4.300",
        bodDesignInput : "178.0",
        tocDesignInput : "91.0",
        ssDesignInput : "131.0",
        tnDesignInput : "40.200",
        tpDesignInput : "4.500",
        siteAreaSize : "928,574",
        processAreaSize : "7,994.0",
        sewageTreatmentPopulation : "1,573,277",
    }
];

// 시설 수역 및 구역정보 (헤더)
const upHeadListFcltyAreaInfo:TableUpperProps[] = [
    { id: "riverName", title: "하천명" },
    { id: "waterDischargedArea", title: "방류수역"},
    { id: "unitWaterArea", title: "단위유역"},
    { id: "areaUnit", title: "지역구분"},
    { id: "environmentalAgency", title: "관할 유역(지방) 환경청"}
];

// 시설 수역 및 구역정보 (리스트)
const gridListFcltyAreaInfo:fcltyAreaInfoProps[] = [
    {
        riverName : "한강",
        waterDischargedArea : "한강수계",
        unitWaterArea : "한강본류",
        areaUnit : "500톤 이상\n(Ⅲ지역)",
        environmentalAgency : "한강유역환경청"
    }
];

// 시설 이력관리 (헤더)
const upHeadListFcltyHistInfo:TableUpperProps[] = [
    { id: "step", title: "차수" },
    { id: "unit", title: "구분"},
    { id: "businessStartDate", title: "사업기간", upName:"upChangeRe1", upSequnce:1},
    { id: "businessEndDate", title: "사업기간", upName:"upChangeRe1", upSequnce:2},
    { id: "installDate", title: "설치인가일"},
    { id: "openDate", title: "준공일"},
    { id: "commissioningDate", title: "시운전완료일"},
    { id: "operationDate", title: "가동개시일"},
];

// 시설 이력관리 (리스트)
const gridListFcltyHistInfo:fcltyHistInfoProps[] = [
    {
        step : "최초",
        unit : "최초",
        businessStartDate : "1984.12.01",
        businessEndDate : "1987.06.01",
        installDate : "1985.09.13",
        openDate : "1987.06.30",
        commissioningDate : "1987.06.30",
        operationDate : "1987.06.30",
    },
    {
        step : "1차",
        unit : "증설",
        businessStartDate : "1988.12.01",
        businessEndDate : "1994.12.01",
        installDate : "1987.07.31",
        openDate : "1994.12.20",
        commissioningDate : "1994.12.20",
        operationDate : "1994.12.20",
    },
];

// 시설 수질정보 (헤더)
const upHeadListFcltyWaterQltyInfo:TableUpperProps[] = [
    { id: "step", title: "차수" },
    { id: "bodPlanInput", title: "BOD", upName:"upChangeRe1", upSequnce:1 },
    { id: "tocPlanInput", title: "TOC\n(COD)", upName:"upChangeRe1", upSequnce:2 },
    { id: "ssPlanInput", title: "SS", upName:"upChangeRe1", upSequnce:3 },
    { id: "tnPlanInput", title: "T-N", upName:"upChangeRe1", upSequnce:4 },
    { id: "tpPlanInput", title: "T-P", upName:"upChangeRe1", upSequnce:5 },
    { id: "bodDesignInput", title: "BOD", upName:"upChangeRe2", upSequnce:1 },
    { id: "tocDesignInput", title: "TOC\n(COD)", upName:"upChangeRe2", upSequnce:2 },
    { id: "ssDesignInput", title: "SS", upName:"upChangeRe2", upSequnce:3 },
    { id: "tnDesignInput", title: "T-N", upName:"upChangeRe2", upSequnce:4 },
    { id: "tpDesignInput", title: "T-P", upName:"upChangeRe2", upSequnce:5 },
    { id: "bodPlanOutput", title: "BOD", upName:"upChangeRe3", upSequnce:1 },
    { id: "tocPlanOutput", title: "TOC\n(COD)", upName:"upChangeRe3", upSequnce:2 },
    { id: "ssPlanOutput", title: "SS", upName:"upChangeRe3", upSequnce:3 },
    { id: "tnPlanOutput", title: "T-N", upName:"upChangeRe3", upSequnce:4 },
    { id: "tpPlanOutput", title: "T-P", upName:"upChangeRe3", upSequnce:5 },
];

// 시설 수질정보 (리스트)
const gridListFcltyWaterQltyInfo:fcltyWaterQltyInfoProps[] = [
    {
        step : "최초",
        bodPlanInput : "111.0",
        tocPlanInput : "(0.0)",
        ssPlanInput : "122.0",
        tnPlanInput : "0.000",
        tpPlanInput : "0.000",
        bodDesignInput : "111.0",
        tocDesignInput : "(0.0)",
        ssDesignInput : "122.0",
        tnDesignInput : "0.000",
        tpDesignInput : "0.000",
        bodPlanOutput : "20.0",
        tocPlanOutput : "(0.0)",
        ssPlanOutput : "12.0",
        tnPlanOutput : "0.000",
        tpPlanOutput : "0.000",
    },
    {
        step : "1차",
        bodPlanInput : "111.0",
        tocPlanInput : "(0.0)",
        ssPlanInput : "122.0",
        tnPlanInput : "0.000",
        tpPlanInput : "0.000",
        bodDesignInput : "111.0",
        tocDesignInput : "(0.0)",
        ssDesignInput : "122.0",
        tnDesignInput : "0.000",
        tpDesignInput : "0.000",
        bodPlanOutput : "20.0",
        tocPlanOutput : "(0.0)",
        ssPlanOutput : "12.0",
        tnPlanOutput : "0.000",
        tpPlanOutput : "0.000",
    },
    {
        step : "2차",
        bodPlanInput : "111.0",
        tocPlanInput : "(0.0)",
        ssPlanInput : "122.0",
        tnPlanInput : "0.000",
        tpPlanInput : "0.000",
        bodDesignInput : "111.0",
        tocDesignInput : "(0.0)",
        ssDesignInput : "122.0",
        tnDesignInput : "0.000",
        tpDesignInput : "0.000",
        bodPlanOutput : "20.0",
        tocPlanOutput : "(0.0)",
        ssPlanOutput : "12.0",
        tnPlanOutput : "0.000",
        tpPlanOutput : "0.000",
    },
    {
        step : "3차",
        bodPlanInput : "179.0",
        tocPlanInput : "(90.0)",
        ssPlanInput : "132.0",
        tnPlanInput : "38.000",
        tpPlanInput : "4.300",
        bodDesignInput : "178.0",
        tocDesignInput : "91.0",
        ssDesignInput : "131.0",
        tnDesignInput : "40.200",
        tpDesignInput : "4.500",
        bodPlanOutput : "10.0",
        tocPlanOutput : "(40.0)",
        ssPlanOutput : "10.0",
        tnPlanOutput : "17.4",
        tpPlanOutput : "2.0",
    }
];

/**====================================
 * Store - expaort
 ====================================*/
export type ProcessFacilityActions = {
    ProcessFacilityActions: {
        labelChange:()=>void;
    }
}

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
    },

    ProcessFacilityList : {
        isInit: boolean;
        upHeadList:TableUpperProps[];
        processFacilityList:facilityListProps[];
    },

    ProcessFacilityDetail : {
        isInit : boolean;
        upHeadListBasicInfo : TableUpperProps[];
        gridListBasicInfo : BasicInfoProps[];
        upHeadListPlanInfo : TableUpperProps[];
        gridListPlanInfo : PlanInfoProps[];
        upHeadListFcltyAreaInfo : TableUpperProps[];
        gridListFcltyAreaInfo : fcltyAreaInfoProps[];
        
        upHeadListFcltyHistInfo : TableUpperProps[];
        gridListFcltyHistInfo : fcltyHistInfoProps[];
        upHeadListFcltyWaterQltyInfo : TableUpperProps[];
        gridListFcltyWaterQltyInfo : fcltyWaterQltyInfoProps[];
    },
}

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
    },

    ProcessFacilityList : {
        isInit : false,
        upHeadList : upHeadList,
        processFacilityList : processFacilityList
    },

    ProcessFacilityDetail : {
        isInit : false,
        upHeadListBasicInfo : upHeadListBasicInfo,
        gridListBasicInfo : gridListBasicInfo,
        upHeadListPlanInfo : upHeadListPlanInfo,
        gridListPlanInfo : gridListPlanInfo,
        upHeadListFcltyAreaInfo : upHeadListFcltyAreaInfo,
        gridListFcltyAreaInfo : gridListFcltyAreaInfo,

        upHeadListFcltyHistInfo : upHeadListFcltyHistInfo,
        gridListFcltyHistInfo : gridListFcltyHistInfo,
        upHeadListFcltyWaterQltyInfo : upHeadListFcltyWaterQltyInfo,
        gridListFcltyWaterQltyInfo : gridListFcltyWaterQltyInfo,
    }
}

export type ProcessFacilityStore = ProcessFacilityType & ProcessFacilityActions;

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