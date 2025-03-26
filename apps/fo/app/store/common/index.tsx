/**====================================
 * 보편적으로 쓰는 store 공간
 ====================================**/

import { getFectch } from "@/app/components/api";

/**
 * STORE - TYPE
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

// 시도 데이터
export type sidoDataType = {
  fid: number,
  mctpvCd: number,
  mctpvEngNm: string,
  mctpvKornNm: string
}

// 시군구 데이터
export type sigunDataType = {
  fid: number,
  sggCd: number,
  sggEngNm: string,
  sggKornNm: string
}

/**
 * STORE - DATA
 */

// 시도 데이터
const selectSidoData: SelectDataType[] = [
  { text: "전체", val: '00' }
];

// 시군구 데이터
const selectSigunData: SelectDataType[] = [
  { text: "전체", val: '00' }
];

// 구분 데이터
const selectPartData:SelectDataType[] = [
  { text: "행정별", val: '00' },
  { text: "유역별", val: '01' },
  { text: "환경청별", val: '02' },
];

// 상향 하향 데이터
const selectUpdownData:SelectDataType[] = [
  { text: "이상", val: '00' },
  { text: "이하", val: '01' },
];

// 운영 상태 데이터
const selectOperationData:SelectDataType[] = [
  { text: "전체", val: '00' },
  { text: "가동중", val: '01' },
  { text: "가동중지", val: '02' },
  { text: "시설폐쇄", val: '03' },
];

// 시설 구분 데이터
const selectFacilityPartData:SelectDataType[] = [
  { text: "전체", val: '00' },
  { text: "공공하수처리시설", val: '01' },
  { text: "오수처리장", val: '02' },
  { text: "개인하수처리시설", val: '03' },
  { text: "분뇨처리장", val: '04' },
  { text: "폐수처리장", val: '05' },
  { text: "침출수처리장", val: '06' },
  { text: "기타기초시설", val: '07' },
];

// 년도 데이터
const selectSearchYear:SelectDataType[] = [
  { text: "2025년", val: '2025' },
  { text: "2024년", val: '2024' },
  { text: "2023년", val: '2023' },
];

// 유량 기간 구분
const selectFlowTerm : SelectDataType[] = [
    { text: "연간", val: '00' },
    { text: "하절기", val: '01' },
    { text: "동절기", val: '02' },
    { text: "청천시", val: '03' },
    { text: "강우시", val: '04' },
];

// 유량 기간 구분
const selectFlowPanel : SelectDataType[] = [
    { text: "구간별", val: '00'},
 /*    { text: "3mm미만", val: '01'},
    { text: "3~10mm미만", val: '02'},
    { text: "10~20mm미만", val: '03'},
    { text: "20~30mm미만", val: '04'},
    { text: "30~40mm미만", val: '05'},
    { text: "40~50mm미만", val: '06'},
    { text: "50~60mm미만", val: '07'},
    { text: "60mm이상", val: '08'}, */
];

/**
 * STORE - API
 */

// 시도 API 호출 함수 추가
const fetchSidoData = async (): Promise<SelectDataType[]> => {
    try {
      const data = await getFectch('/addr/city');
      return [
        { text: "전체", val: '00'},
        ...data.map((item: sidoDataType) => ({
            text: item.mctpvKornNm || '',
            val: String(item.mctpvCd) || ''
        }))
      ];
    } catch (error) {
        console.error('시도 데이터를 가져오는데 실패했습니다:', error);
        return selectSidoData;
    }
};  

// 시군구 API 호출 함수 추가
const fetchSigunData = async (sidoCd: string): Promise<SelectDataType[]> => {
    try {
      const data = await getFectch('/addr/sgg');
      return [
        { text: "전체", val: '00'},
        ...data
        .filter((item: sigunDataType) => 
            item.sggCd.toString().substring(0,2) === sidoCd
        )
        .map((item: sigunDataType) => ({
            text: item.sggKornNm || '',
            val: String(item.fid) || ''
        }))
      ];
    } catch (error) {
      console.error('시군구 데이터를 가져오는데 실패했습니다:', error);
      return selectSigunData;
    }
};

/**====================================
 * Store - expaort
 ====================================*/
export type CommonAction = {
  CommonActions: {
    initializeSidoData: () => Promise<void>;
    initializeSigunData: (sidoCd: string) => Promise<void>;
  }
}

export type CommonType = {
  Common: {
    isInit: boolean;
    selectSidoData: SelectDataType[];
    selectSigunData: SelectDataType[];
    selectPartData: SelectDataType[];
    selectUpdownData: SelectDataType[];
    selectOperationData: SelectDataType[];
    selectFacilityPartData: SelectDataType[];
    selectSearchYear: SelectDataType[];

    selectFlowTerm: SelectDataType[];
    selectFlowPanel: SelectDataType[];
  }
}

export const commonState:CommonType = {
  Common: {
    isInit: false,
    selectSidoData: selectSidoData,
    selectSigunData: selectSigunData,
    selectPartData: selectPartData,
    selectUpdownData: selectUpdownData,
    selectOperationData: selectOperationData,
    selectFacilityPartData: selectFacilityPartData,
    selectSearchYear: selectSearchYear,

    selectFlowTerm: selectFlowTerm,
    selectFlowPanel: selectFlowPanel,
  }
}

export type CommonStore = CommonType & CommonAction;

export const CommonReducer:(set:any)=>CommonAction=(set: any) => {
  return {
    CommonActions: {
      updateSidoData: (data: SelectDataType[]) => set(
        (state: CommonType) => ({
          Common: {
            ...state.Common,
            selectSidoData: data
          }
        })
      ),
      initializeSidoData: async () => {
        const data = await fetchSidoData();
        set((state: CommonType) => ({
          Common: {
            ...state.Common,
            selectSidoData: data
          }
        }));
      },
      initializeSigunData: async (sidoCd: string) => {
        const data = await fetchSigunData(sidoCd);
        set((state: CommonType) => ({
          Common: {
            ...state.Common,
            selectSigunData: data
          }
        }));
      }
    }
  }
}