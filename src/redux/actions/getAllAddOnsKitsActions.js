import { ADDONS_KITS_ITEMS } from "../store/dataTypes";

export const STATE_START_FETCHING_AONS = "STATE_START_FETCHING_AONS";
export const STATE_END_FETCHING_AONS = "STATE_END_FETCHING_AONS";
export const FETCH_FAILURE_AONS = "FETCH_FAILURE_AONS";
export const STATE_FETCHED_ADDONS_KITS_PRODUCT =
  "STATE_FETCHED_ADDONS_KITS_PRODUCT";

const productsRequested = () => {
  return {
    type: STATE_START_FETCHING_AONS,
    dataType: ADDONS_KITS_ITEMS
  };
};

export const getAddOnsKitsProducts = products => ({
  type: STATE_FETCHED_ADDONS_KITS_PRODUCT,
  dataType: ADDONS_KITS_ITEMS,
  payload: products
});

export const endFetching = () => ({
  type: STATE_END_FETCHING_AONS,
  dataType: ADDONS_KITS_ITEMS
});

const fetchError = error => {
  return {
    type: FETCH_FAILURE_AONS,
    dataType: ADDONS_KITS_ITEMS,
    payload: error
  };
};

export const fetchAddOnsKitsProducts = (
  dispatch,
  productService
) => async () => {
  dispatch(productsRequested());
  await productService
    .getAllAddOnsKits()
    .then(products => dispatch(getAddOnsKitsProducts(products)))
    .catch(err => dispatch(fetchError(err)));
};
