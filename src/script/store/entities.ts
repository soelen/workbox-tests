import { combineReducers } from '@reduxjs/toolkit';
import settings from './settings';

const entities = combineReducers({
  settings,
});

export default entities;

// export type RootState = ReturnType<typeof rootReducer>
