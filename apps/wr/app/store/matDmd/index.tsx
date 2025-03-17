import type { selectArray } from "../rainReuseFacilityInsert";



const selectSido = [
    { text: '서울', val: "1" },
    { text: "인천", val: "2" },
    { text: "부산", val: "3" },
  ];
const selectSgg = [
    { text: '종로구', val: "1" },
    { text: "성북구", val: "2" },
    { text: "강남구", val: "3" },
  ];
  const selectUsg = [
    { text: '민간', val: "1" },
    { text: "공공", val: "2" },
  ];
  const selectYN= [
    { text: 'Y', val: "1" },
    { text: 'N', val: "2" },
  ];

export type matDmdState ={ dmd:{
    isInit: boolean;
    selectSido:selectArray[];
    selectSgg:selectArray[];
    selectUsg:selectArray[];
    selectYN:selectArray[];
}}
type matDmdActions = {
    decrementList: () => void
}

export type matDmdType = matDmdState & matDmdActions;

export const matDmdStateExport:matDmdState= {dmd:{
    isInit:false,
    selectSido:selectSido,
    selectSgg: selectSgg,
    selectUsg: selectUsg,
    selectYN:selectYN,
 
    
}}
export const matDmdActionsExport:(set:any)=>matDmdActions=(set: any) => {
    return {
        decrementList:()=>set(
            (state:matDmdState) => {
            return (
            {rain:{ 
             }})}
        )
    }
}
