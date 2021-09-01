import { configureStore, Action, } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'
import reducer from './reducer';


const store = configureStore( {
  reducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware(),
} );

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// store.subscribe(() => saveState( store.getState() ) );
