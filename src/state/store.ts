import {configureStore} from "@reduxjs/toolkit";
import counter from "@/state/reducers/counter";

const store = configureStore({
  reducer: {
    counter: counter,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store

export default store;
