import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;