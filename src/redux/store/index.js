import { createStore, combineReducers } from "redux";
import customProductStateReducer from "../reducers/customProductStateReducer";
import customKitIdsStateReducer from "../reducers/customKitIdsStateReducer";
import customProductItemListReducres from "../reducers/customProductItemListReducres";
import getAllStarterKitsReducer from "../reducers/getAllStarterKitsReducer";
import getAllAddOnsKitsReducer from "../reducers/getAllAddOnsKitsReducer";

export default createStore(
  combineReducers({
    customProductStateData: customProductStateReducer,
    customKitIdsStateData: customKitIdsStateReducer,
    customProductItemListData: customProductItemListReducres,
    getAllStarterKitsData: getAllStarterKitsReducer,
    getAllAddOnsKitsData: getAllAddOnsKitsReducer
  })
);
