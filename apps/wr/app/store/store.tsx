import { createStore } from 'zustand/vanilla';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
export type WrStore = tableType;
export const StoreZus = (initState: tableState = tableStateExport) => {
  return createStore<WrStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set)
    }
  })
}
//store 등록하는 부분