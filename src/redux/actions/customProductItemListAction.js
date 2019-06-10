import { CUSTOM_PRODUCT_KIT_ITEM_LIST } from "../store/dataTypes";

export const STATE_START_FETCHING_LI = "STATE_START_FETCHING_LI";
export const STATE_END_FETCHING_LI = "STATE_END_FETCHING_LI";
export const FETCH_FAILURE_LI = "FETCH_FAILURE_LI";
export const FETCHED_CUSTOM_PRODUCT_KIT_ITEM_LIST =
  "FETCHED_CUSTOM_PRODUCT_KIT_ITEM_LIST";

const productsRequested = () => {
  return {
    type: STATE_START_FETCHING_LI,
    dataType: CUSTOM_PRODUCT_KIT_ITEM_LIST
  };
};

export const fetchedCustomProductListItems = customproductlist => ({
  type: FETCHED_CUSTOM_PRODUCT_KIT_ITEM_LIST,
  dataType: CUSTOM_PRODUCT_KIT_ITEM_LIST,
  payload: customproductlist
});

export const endFetching = () => ({
  type: STATE_END_FETCHING_LI,
  dataType: CUSTOM_PRODUCT_KIT_ITEM_LIST
});

const fetchError = error => {
  return {
    type: FETCH_FAILURE_LI,
    dataType: CUSTOM_PRODUCT_KIT_ITEM_LIST,
    payload: error
  };
};

export const fetchCustomProductByListItems = (
  dispatch,
  productService
) => async pId => {
  dispatch(productsRequested());
  await productService
    .getIndividualSetItemList(pId)
    .then(customproductlist => {
      dispatch(fetchedCustomProductListItems(customproductlist));
    })
    .catch(err => dispatch(fetchError(err)));
};
