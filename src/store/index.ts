import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import Storage from "@react-native-async-storage/async-storage";

import { rootReducer } from "../store/slices";

const persistConfig = {
    key: "!!!root",
    storage: Storage,
    whitelist: ["theme", "auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
});

// if (__DEV__) {
//     const createDebugger = require("redux-flipper").default;
//     middlewares.push(createDebugger());
// }

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
