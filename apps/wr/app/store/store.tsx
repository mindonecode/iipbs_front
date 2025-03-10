import { createStore } from 'zustand/vanilla';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
import { buildingTableActionsExport, buildingtableStateExport, type buildingTableState, type buildingTableType } from './rainReuseFacilityInsert';
export type WrStore = tableType & buildingTableType;
export const StoreZus = (initState: buildingTableState& tableState = {
  ...tableStateExport, 
  ...buildingtableStateExport 
}) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...buildingTableActionsExport(set)
    }
  })
}
//store 등록하는 부분