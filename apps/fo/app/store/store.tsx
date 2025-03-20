import { createStore } from 'zustand/vanilla';
import { dashBoardReducer, dashInitState, type DashBoardStore } from './dashboard';
import { processFacilityReducer, processFacilityInitState, type ProcessFacilityStore, type ProcessFacilityType
} from './processFacility';
import { processAreaReducer, processAreaInitState, type ProcessAreaStore, type ProcessAreaType
} from './processArea';
import { flowRateSearchReducer, flowRateSearchInitState, type FlowRateSearchStore} from './flowRate';
import { facilityPrecipitationReducer, facilityPrecipitationInitState, type FacilityPrecipitationStore, type FacilityPrecipitationType
} from './facilityPrecipitation';
import { tableActionsExport, tableStateExport, type tableState, type tableType } from './publicReuseFaciltyInsert/index';
export type FoStore = tableType & DashBoardStore & ProcessFacilityStore & ProcessAreaStore & FlowRateSearchStore & FacilityPrecipitationStore;
export type FoState = tableState & ProcessFacilityType & ProcessAreaType & FacilityPrecipitationType;
export const StoreZus = (initState: FoState = {...tableStateExport, ...processFacilityInitState, ...processAreaInitState, ...facilityPrecipitationInitState}) => {
  return createStore<FoStore>()((set) => {
    return {
      ...initState,
      ...tableActionsExport(set),
      ...dashInitState,
      ...dashBoardReducer(set),
      ...processFacilityReducer(set),
      ...processAreaReducer(set),
      ...facilityPrecipitationReducer(set),
      ...flowRateSearchReducer(set),
      ...flowRateSearchInitState,
    }
  })
}
//store 등록하는 부분