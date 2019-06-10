import {
    STATE_START_FETCHING_STK,
    STATE_END_FETCHING_STK,
    FETCH_FAILURE_STK,
    STATE_FETCHED_STARTER_KITS_PRODUCT
  } from "../actions/getAllStarterKitsAction";
  import { initialData } from "../store/initialData";
  
  export default function(storeData, action) {
    switch (action.type) {
      case STATE_START_FETCHING_STK:
        return {
          ...storeData,
          loading: true,
          error: null,
          selectedType: action.dataType
        };
      case STATE_END_FETCHING_STK:
        return {
          ...storeData,
          loading: false,
          error: null,
          selectedType: action.dataType
        };
      case STATE_FETCHED_STARTER_KITS_PRODUCT:
        return {
          ...storeData,
          loading: false,
          error: null,
          selectedType: action.dataType,
          [action.dataType]: action.payload
        };
      case FETCH_FAILURE_STK:
        return {
          ...storeData,
          loading: false,
          error: action.payload,
          selectedType: action.dataType
        };
      default:
        return storeData || initialData.stateDataForStarterKitsItems;
    }
  }
  