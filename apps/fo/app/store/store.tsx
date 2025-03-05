import { createStore } from 'zustand/vanilla';
import { dashBoardReducer, dashInitState, type DashBoardStore } from './dashboard';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
export type FoStore = tableType & DashBoardStore;
export const StoreZus = (initState: tableState = tableStateExport) => {
  return createStore<FoStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...dashInitState,
      ...dashBoardReducer(set)
    }
  })
}
//store 등록하는 부분