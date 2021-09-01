import { createSlice, PayloadAction, } from "@reduxjs/toolkit";

interface Slice {
  mute: boolean;
  volume: number,
  visitedFirstTime: boolean,
};

const slice = createSlice( {
  name: 'settings',
  initialState: {
    language: null,
    mute: true,
    volume: 0.2,
    visitedFirstTime: true,
  } as Slice ,
  reducers: {
    changeVolume: ( slice, action: PayloadAction<string|number> ) => {
      slice.volume = typeof action.payload === 'string' ? parseFloat( action.payload ) : action.payload;
    },
    unmute: slice => {
      slice.mute = false;
    },
    mute: slice => {
      slice.mute = true;
    },
    hasVisited: slice => {
      slice.visitedFirstTime = false;
    },
  }
} )

export const {
  changeVolume,
  mute,
  hasVisited,
  unmute,
} = slice.actions;

export default slice.reducer;
