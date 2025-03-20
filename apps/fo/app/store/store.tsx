import { createStore } from 'zustand/vanilla';
import { dashBoardReducer, dashInitState, type DashBoardStore } from './dashboard';
import { processFacilityReducer, processFacilityInitState, type ProcessFacilityStore, type ProcessFacilityType
} from './processFacility';
import { processAreaReducer, processAreaInitState, type ProcessAreaStore, type ProcessAreaType
} from './processArea';
import { flowRateSearchReducer, flowRateSearchInitState, type FlowRateSearchStore} from './flowRate';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
export type FoStore = tableType & DashBoardStore & ProcessFacilityStore & ProcessAreaStore & FlowRateSearchStore;
export type FoState = tableState & ProcessFacilityType & ProcessAreaType;
export const StoreZus = (initState: FoState = {...tableStateExport, ...processFacilityInitState, ...processAreaInitState}) => {
  return createStore<FoStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...dashInitState,
      ...dashBoardReducer(set),
      ...processFacilityReducer(set),
      ...processAreaReducer(set),
      ...flowRateSearchReducer(set),
      ...flowRateSearchInitState,
    }
  })
}
//store 등록하는 부분