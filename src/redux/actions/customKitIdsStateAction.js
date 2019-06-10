import { CUSTOM_PRODUCT_KIT_IDS } from "../store/dataTypes";

export const STATE_START_FETCHING_KID = "STATE_START_FETCHING_KID";
export const STATE_END_FETCHING_KID = "STATE_END_FETCHING_KID";
export const FETCH_FAILURE_KID = "FETCH_FAILURE_KID";
export const STATE_FETCHED_CUSTOM_IDS = 'STATE_FETCHED_CUSTOM_IDS';

const productsRequested = () => {
  return {
    type: STATE_START_FETCHING_KID,
    dataType: CUSTOM_PRODUCT_KIT_IDS
  };
};

export const fetchedAllkitIds = kitIds => ({
  type: STATE_FETCHED_CUSTOM_IDS,
  dataType: CUSTOM_PRODUCT_KIT_IDS,
  payload: kitIds
});

export const endFetching = () => ({
  type: STATE_END_FETCHING_KID,
  dataType: CUSTOM_PRODUCT_KIT_IDS
});

const fetchError = error => {
  return {
    type: FETCH_FAILURE_KID,
    dataType: CUSTOM_PRODUCT_KIT_IDS,
    payload: error
  };
};

export const fetchAllCustomProductKitsIds = (
  dispatch,
  productService
) => async () => {
  dispatch(productsRequested());
  await productService
    .getIndividualSetIds()
    .then(kitIds => {
      dispatch(fetchedAllkitIds(kitIds))
    })
    .catch(err => dispatch(fetchError(err)));
  }
