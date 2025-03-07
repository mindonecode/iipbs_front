const FlowRateSearchLabelArray:string[] = ['구분', '시도', '시군구','용량별', '시설명', '시설상태','시설구분'];

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

export type FlowRateSearchActions = {
    FlowRateSearchActions: {
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
        selectFacilityPartData:SelectDataType[];
        selectSidoData:SelectDataType[];
        selectSigunData:SelectDataType[];
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
        selectFacilityPartData : selectFacilityPartData,
        selectSidoData : selectSidoData,
        selectSigunData: selectSigunData,
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
        }
    }
}
