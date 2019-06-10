import {
  CUSTOM_PRODUCTS,
  CUSTOM_PRODUCT_KIT_IDS,
  ADDONS_KITS_ITEMS,
  CUSTOM_PRODUCT_KIT_ITEM_LIST,
  STARTER_KITS_ITEMS
} from "./dataTypes";
export const initialData = {
  modelData: {
    [CUSTOM_PRODUCTS]: [{}],
    [CUSTOM_PRODUCT_KIT_IDS]: [{}],
    [CUSTOM_PRODUCT_KIT_ITEM_LIST]: [{}],
    [STARTER_KITS_ITEMS]: [{}],
    [ADDONS_KITS_ITEMS]: [{}]
  },
  stateDataForCustomProducts: {
    loading: false,
    selectedType: CUSTOM_PRODUCTS,
    error: null
  },
  stateDataForCustomProductsKitIds: {
    loading: false,
    selectedType: CUSTOM_PRODUCT_KIT_IDS,
    error: null
  },
  stateDataForCustomProductsKitListItems: {
    loading: false,
    selectedType: CUSTOM_PRODUCT_KIT_ITEM_LIST,
    error: null
  },
  stateDataForStarterKitsItems: {
    loading: false,
    selectedType: STARTER_KITS_ITEMS,
    error: null
  },
  stateDataForAddOnsKitsItems: {
    loading: false,
    selectedType: ADDONS_KITS_ITEMS,
    error: null
  }
};
