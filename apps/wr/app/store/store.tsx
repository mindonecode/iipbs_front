import { createStore } from 'zustand/vanilla';
import { pubFacActionsExport, pubFacStateExport, type pubFacState } from './publicReuseFaciltyInsert/index';
import { rainFacActionsExport, rainFacStateExport, type rainFacState, type rainFacType } from './rainReuseFacilityInsert';


export type WrStore = pubFacState & rainFacType;
export const StoreZus = (initState: rainFacState& pubFacState = {
  ...pubFacStateExport, 
  ...rainFacStateExport 
}) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...pubFacActionsExport(set),
      ...rainFacActionsExport(set)
    }
  })
}
//store 등록하는 부분