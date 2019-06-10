import { STARTER_KITS_ITEMS } from "../store/dataTypes";

export const STATE_START_FETCHING_STK = "STATE_START_FETCHING_STK";
export const STATE_END_FETCHING_STK = "STATE_END_FETCHING_STK";
export const FETCH_FAILURE_STK = "FETCH_FAILURE_STK";
export const STATE_FETCHED_STARTER_KITS_PRODUCT = "STATE_FETCHED_STARTER_KITS_PRODUCT";

const productsRequested = () => {
  return {
    type: STATE_START_FETCHING_STK,
    dataType: STARTER_KITS_ITEMS
  };
};

export const getStarterKitsProducts = products => ({
  type: STATE_FETCHED_STARTER_KITS_PRODUCT,
  dataType: STARTER_KITS_ITEMS,
  payload: products
});

export const endFetching = () => ({
  type: STATE_END_FETCHING_STK,
  dataType: STARTER_KITS_ITEMS
});

const fetchError = error => {
  return {
    type: FETCH_FAILURE_STK,
    dataType: STARTER_KITS_ITEMS,
    payload: error
  };
};

export const fetchStarterKitsProducts = (dispatch, productService) => async () => {
    dispatch(productsRequested());
    await productService
      .getAllStarterKits()
      .then(products => dispatch(getStarterKitsProducts(products)))
      .catch(err => dispatch(fetchError(err)));
  };
