import { createStore } from 'zustand/vanilla';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
import { buildingTableActionsExport, buildingtableStateExport, type buildingTableType } from './rainReuseFacilityInsert';
export type WrStore = tableType & buildingTableType;
export const StoreZus = (initState: tableState = tableStateExport) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...buildingtableStateExport,
      ...buildingTableActionsExport(set)
    }
  })
}
//store 등록하는 부분