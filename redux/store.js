import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import usersReducer from "./Reducers/user";
import busesReducer from "./Reducers/bus";
import navReducer from "./Reducers/navigation";
import scanQueueeReducer from "./Reducers/scanQueuee";
import paymentReducer from "./Reducers/payment";

const rootReducer = combineReducers({
  user: usersReducer,
  bus: busesReducer,
  nav: navReducer,
  scanQueuee: scanQueueeReducer,
  payment: paymentReducer,
});

// persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
