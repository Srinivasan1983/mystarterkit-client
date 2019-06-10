import {
  STATE_END_FETCHING_KID,
    STATE_START_FETCHING_KID,
    FETCH_FAILURE_KID,
    STATE_FETCHED_CUSTOM_IDS
  } from "../actions/customKitIdsStateAction";
  import { initialData } from "../store/initialData";
  
  export default function(storeData, action) {
    switch (action.type) {
      case STATE_START_FETCHING_KID:
        return {
          ...storeData,
          loading: true,
          error: null,
          selectedType: action.dataType
        };
      case STATE_END_FETCHING_KID:
        return {
          ...storeData,
          loading: false,
          error: null,
          selectedType: action.dataType
        };
      case STATE_FETCHED_CUSTOM_IDS:
        return {
          ...storeData,
          loading: false,
          error: null,
          selectedType: action.dataType,
          [action.dataType]: action.payload
        };
      case FETCH_FAILURE_KID:
        return {
          ...storeData,
          loading: false,
          error: action.payload,
          selectedType: action.dataType
        };
      default:
        return storeData || initialData.stateDataForCustomProductsKitIds;
    }
  }
  