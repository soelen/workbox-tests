import { combineReducers } from '@reduxjs/toolkit';

import entities from './entities';
import app from './app';


const rootReducer = combineReducers( {
    entities,
    app,
} );

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>
