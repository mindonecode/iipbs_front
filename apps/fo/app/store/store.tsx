import { createStore } from 'zustand/vanilla';
import { dashBoardReducer, dashInitState, type DashBoardStore } from './dashboard';
import { processFacilityReducer, processFacilityInitState, type ProcessFacilityStore, tableActionsExportProcessFacility, tableStateExportProcessFacility, type tableTypeProcessFacility
} from './processFacility';
import { flowRateSearchReducer, flowRateSearchInitState, type FlowRateSearchStore} from './flowRate';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
export type FoStore = tableType & DashBoardStore & ProcessFacilityStore & tableTypeProcessFacility & FlowRateSearchStore;
export const StoreZus = (initState: tableState = tableStateExport) => {
  return createStore<FoStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...dashInitState,
      ...dashBoardReducer(set),
      ...processFacilityInitState,
      ...processFacilityReducer(set),
      ...tableStateExportProcessFacility,
      ...tableActionsExportProcessFacility(set),
      ...flowRateSearchReducer(set),
      ...flowRateSearchInitState,
    }
  })
}
//store 등록하는 부분