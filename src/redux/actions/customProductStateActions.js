import { CUSTOM_PRODUCTS } from "../store/dataTypes";

export const STATE_START_FETCHING_P = "STATE_START_FETCHING_P";
export const STATE_END_FETCHING_P = "STATE_END_FETCHING_P";
export const FETCH_FAILURE_P = "FETCH_FAILURE_P";
export const STATE_FETCHED_CUSTOM_PRODUCT = "STATE_FETCHED_CUSTOM_PRODUCT";

const productsRequested = () => {
  return {
    type: STATE_START_FETCHING_P,
    dataType: CUSTOM_PRODUCTS
  };
};

export const fetchedCustomProduct = product => ({
  type: STATE_FETCHED_CUSTOM_PRODUCT,
  dataType: CUSTOM_PRODUCTS,
  payload: product
});

export const endFetching = () => ({
  type: STATE_END_FETCHING_P,
  dataType: CUSTOM_PRODUCTS
});

const fetchError = error => {
  return {
    type: FETCH_FAILURE_P,
    dataType: CUSTOM_PRODUCTS,
    payload: error
  };
};

export const fetchCustomProductBySetId = (
  dispatch,
  productService
) => async setId => {
  dispatch(productsRequested());
  await productService
    .getIndividualSet(setId)
    .then(customproduct => {
      dispatch(fetchedCustomProduct(customproduct))
    })
    .catch(err => dispatch(fetchError(err)));
};
