import {
  STATE_END_FETCHING_P,
  STATE_START_FETCHING_P,
  STATE_FETCHED_CUSTOM_PRODUCT,
  FETCH_FAILURE_P
} from "../actions/customProductStateActions";
import { initialData } from "../store/initialData";

export default function(storeData, action) {
  switch (action.type) {
    case STATE_START_FETCHING_P:
      return {
        ...storeData,
        loading: true,
        error: null,
        selectedType: action.dataType
      };
    case STATE_END_FETCHING_P:
      return {
        ...storeData,
        loading: false,
        error: null,
        selectedType: action.dataType
      };
    case STATE_FETCHED_CUSTOM_PRODUCT:
      return {
        ...storeData,
        loading: false,
        error: null,
        selectedType: action.dataType,
        [action.dataType]: action.payload
      };
    case FETCH_FAILURE_P:
      return {
        ...storeData,
        loading: false,
        error: action.payload,
        selectedType: action.dataType
      };
    default:
      return storeData || initialData.stateDataForCustomProducts;
  }
}
