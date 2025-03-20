import type { SelectDataType } from "@common/business_components/ui";
import type { TableUpperProps } from "../dashboard";
export type {TableUpperProps};
/**====================================
 * Store - 타입
 ====================================*/

/**
 * (1) 메인페이지
 */
// 시설별 강수현황황
type FacilityPrecipitationProps = {
    facilityCd : string,
    sido : string,
    sigungo : string,
    facilityName : string,
    location : string,
    facilityCapacity : string,
    observatoryInfo : string,
    rainDay : string,
    rainEffectDay : string,
    totalYearRain : string
}

/*
* (2) 강수현황 팝업
*/
// 강수현황
type PrecipitationPropsDetailProps = {
    searchDate : string,
    rain : string,
    rainDay : string,
    rainEffectDay : string
}


/**====================================
 * Store - data
 ====================================*/

/**
 * (1) 메인페이지 
 */ 
// 검색단
const LabelArray:string[] = ['구분', '시도', '시군구','용량별', '시설명', '시설상태','시설구분'];

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

// 리스트 헤더
const upHeadList:TableUpperProps[] = [
    { id: "facilityCd", title: "시설코드"},
    { id: "sido", title: "시도", upName:"upChangeRe", upSequnce:1 },
    { id: "sigungo", title: "시군구", upName:"upChangeRe",upSequnce:2 },
    { id: "facilityName", title: "시설명"},
    { id: "location", title: "주소"},
    { id: "facilityCapacity", title: "시설용량(m³/일)"},
    { id: "observatoryInfo", title: "관측소 정보"},
    { id: "rainDay", title: "강우일\n(일)"},
    { id: "rainEffectDay", title: "강수영향일\n(일)"},
    { id: "totalYearRain", title: "연간 총 총강수량\n(mm)"}
];

const facilityPrecipitation:FacilityPrecipitationProps[] = [
    {
        facilityCd : "11000SW001R",
        sido: "서울특별시",
        sigungo: "강남구",
        facilityName: "난지",
        location: "경기도 고양시 덕양구 대차로 4가",
        facilityCapacity: "860,000",
        observatoryInfo: "강서",
        rainDay: "105",
        rainEffectDay: "140",
        totalYearRain: "1289"
    },
    {
        facilityCd : "11200PB001R",
        sido: "서울특별시",
        sigungo: "성동구",
        facilityName: "중량물재생센터",
        location: "서울특별시 성동구 자동차시장3길 64 (용답동, 중랑물재생센터)",
        facilityCapacity: "1,590,000",
        observatoryInfo: "서울시 강남구 역삼동 11-1 강남구청 청사 옥상",
        rainDay: "10",
        rainEffectDay: "10",
        totalYearRain: "10"
    },
]

/**
 * 강수현황황 상세팝업
 */ 
// 강수현황 (헤더)
const upHeadListPrecipitationDetail:TableUpperProps[] = [
    { id: "searchDate", title: "검색일자"},
    { id: "rain", title: "강수량"},
    { id: "rainDay", title: "강우일"},
    { id: "rainEffectDay", title: "강수영향일"}
]
// 강수현황 (리스트트)
const gridListPrecipitationDetail:PrecipitationPropsDetailProps[] = [
    {
        searchDate : "2024-01-01",
        rain : "4.5",
        rainDay : "1",
        rainEffectDay : "11"
    },
    {
        searchDate : "2024-01-02",
        rain : "3.5",
        rainDay : "1",
        rainEffectDay : "11"
    }
]
/**====================================
 * Store - expaort
 ====================================*/
export type FacilityPrecipitationActions = {
    FacilityPrecipitationActions: {
        labelChange:()=>void;
    }
}

export type FacilityPrecipitationType = {
    FacilityPrecipitationSearch: {
        isInit: boolean;
        labelArray:string[];
        selectPartData:SelectDataType[];
        selectUpdownData:SelectDataType[];
        selectOperationData:SelectDataType[];
        selectFacilityPartData:SelectDataType[];
        selectSidoData:SelectDataType[];
        selectSigunData:SelectDataType[];
    },

    FacilityPrecipitation : {
        isInit: boolean;
        upHeadList: TableUpperProps[];
        facilityPrecipitation: FacilityPrecipitationProps[]; // Changed from facilityAreaProps to ProcessAreaProps
    },

    PrecipitationDetail : {
        isInit : boolean;
        upHeadListPrecipitationDetail : TableUpperProps[];
        gridListPrecipitationDetail : PrecipitationPropsDetailProps[];
    }
}

export const facilityPrecipitationInitState: FacilityPrecipitationType = {
    FacilityPrecipitationSearch: {
        isInit: false,
        labelArray: LabelArray,
        selectPartData : selectPartData,
        selectUpdownData : selectUpdownData,
        selectOperationData : selectOperationData,
        selectFacilityPartData : selectFacilityPartData,
        selectSidoData : selectSidoData,
        selectSigunData: selectSigunData,
    },

    FacilityPrecipitation : {
        isInit : false,
        upHeadList : upHeadList,
        facilityPrecipitation : facilityPrecipitation
    },  

    PrecipitationDetail : {
        isInit : false,
        upHeadListPrecipitationDetail : upHeadListPrecipitationDetail,
        gridListPrecipitationDetail : gridListPrecipitationDetail
    }
}

export type FacilityPrecipitationStore = FacilityPrecipitationType & FacilityPrecipitationActions;

export const facilityPrecipitationReducer:(set:any)=>FacilityPrecipitationActions=(set: any) => {
    console.log("tableActionsExport");
    return {
        FacilityPrecipitationActions: {
            labelChange:()=>set(
                (state:FacilityPrecipitationType) => {
                    state.FacilityPrecipitationSearch.labelArray[0] = "구분 변경";
                return (
                { 
                    FacilityPrecipitationSearch: {
                        ...state.FacilityPrecipitationSearch,
                        LabelArray: state.FacilityPrecipitationSearch.labelArray
                    }
                })}
            )
        }
    }
}