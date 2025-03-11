import { createStore } from 'zustand/vanilla';
import { pubFacActionsExport, pubFacStateExport, type pubFacState } from './publicReuseFaciltyInsert/index';
import { rainFacActionsExport, rainFacStateExport, type rainFacState, type rainFacType } from './rainReuseFacilityInsert';
import { rswtFacActionsExport, rswtFacStateExport, type rswtFacState, type rswtFacType } from './rswtrReuseFaciltyInsert';
import { matDmdActionsExport, matDmdStateExport, type matDmdState, type matDmdType } from './matDmd';


export type WrStore = pubFacState & rainFacType &rswtFacType &matDmdType;
export const StoreZus = (initState: rainFacState& pubFacState & rswtFacState &matDmdState= {
  ...pubFacStateExport, 
  ...rainFacStateExport,
  ...rswtFacStateExport ,
  ...matDmdStateExport
}) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...pubFacActionsExport(set),
      ...rainFacActionsExport(set),
      ...rswtFacActionsExport(set),
      ...matDmdActionsExport(set)
    }
  })
}
//store 등록하는 부분