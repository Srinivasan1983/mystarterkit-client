import {
  STATE_START_FETCHING_AONS,
  STATE_END_FETCHING_AONS,
  FETCH_FAILURE_AONS,
  STATE_FETCHED_ADDONS_KITS_PRODUCT
} from "../actions/getAllAddOnsKitsActions";
import { initialData } from "../store/initialData";

export default function(storeData, action) {
  switch (action.type) {
    case STATE_START_FETCHING_AONS:
      return {
        ...storeData,
        loading: true,
        error: null,
        selectedType: action.dataType
      };
    case STATE_END_FETCHING_AONS:
      return {
        ...storeData,
        loading: false,
        error: null,
        selectedType: action.dataType
      };
    case STATE_FETCHED_ADDONS_KITS_PRODUCT:
      return {
        ...storeData,
        loading: false,
        error: null,
        selectedType: action.dataType,
        [action.dataType]: action.payload
      };
    case FETCH_FAILURE_AONS:
      return {
        ...storeData,
        loading: false,
        error: action.payload,
        selectedType: action.dataType
      };
    default:
      return storeData || initialData.stateDataForAddOnsKitsItems;
  }
}
