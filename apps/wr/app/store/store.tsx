import { createStore } from 'zustand/vanilla';
import { pubFacActionsExport, pubFacStateExport, type pubFacState } from './publicReuseFaciltyInsert/index';
import { buildingTableActionsExport, buildingtableStateExport, type buildingTableState, type buildingTableType } from './rainReuseFacilityInsert';
export type WrStore = pubFacState & buildingTableType;
export const StoreZus = (initState: buildingTableState& pubFacState = {
  ...pubFacStateExport, 
  ...buildingtableStateExport 
}) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...pubFacActionsExport(set),
      ...buildingTableActionsExport(set)
    }
  })
}
//store 등록하는 부분