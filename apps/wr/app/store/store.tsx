import { createStore } from 'zustand/vanilla';
import { pubFacActionsExport, pubFacStateExport, type pubFacState } from './publicReuseFaciltyInsert/index';
import { rainFacActionsExport, rainFacStateExport, type rainFacState, type rainFacType } from './rainReuseFacilityInsert';
import { rswtFacActionsExport, rswtFacStateExport, type rswtFacState, type rswtFacType } from './rswtrReuseFaciltyInsert';


export type WrStore = pubFacState & rainFacType &rswtFacType;
export const StoreZus = (initState: rainFacState& pubFacState & rswtFacState= {
  ...pubFacStateExport, 
  ...rainFacStateExport,
  ...rswtFacStateExport 
}) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...pubFacActionsExport(set),
      ...rainFacActionsExport(set),
      ...rswtFacActionsExport
    }
  })
}
//store 등록하는 부분