import {
    STATE_END_FETCHING_LI,
    STATE_START_FETCHING_LI,
    FETCH_FAILURE_LI,
    FETCHED_CUSTOM_PRODUCT_KIT_ITEM_LIST
    } from "../actions/customProductItemListAction";
    import { initialData } from "../store/initialData";
    
    export default function(storeData, action) {
      switch (action.type) {
        case STATE_START_FETCHING_LI:
          return {
            ...storeData,
            loading: true,
            error: null,
            selectedType: action.dataType
          };
        case STATE_END_FETCHING_LI:
          return {
            ...storeData,
            loading: false,
            error: null,
            selectedType: action.dataType
          };
        case FETCHED_CUSTOM_PRODUCT_KIT_ITEM_LIST:
          return {
            ...storeData,
            loading: false,
            error: null,
            selectedType: action.dataType,
            [action.dataType]: action.payload
          };
        case FETCH_FAILURE_LI:
          return {
            ...storeData,
            loading: false,
            error: action.payload,
            selectedType: action.dataType
          };
        default:
          return storeData || initialData.stateDataForCustomProductsKitListItems;
      }
    }
    