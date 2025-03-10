import { createStore } from 'zustand/vanilla';
import { pubFacActionsExport, pubFacStateExport, type pubFacState, type pubFacType } from './publicReuseFaciltyInsert/index';
import { buildingTableActionsExport, buildingtableStateExport, type buildingTableType } from './rainReuseFacilityInsert';
export type WrStore = pubFacType & buildingTableType;
export const StoreZus = (initState: pubFacState = pubFacStateExport) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...pubFacActionsExport(set),
      ...buildingtableStateExport,
      ...buildingTableActionsExport(set)
    }
  })
}
//store 등록하는 부분