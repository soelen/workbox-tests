import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// router(route: string, params?: object, query?: object, data?: object ):void {

export interface RouteCategory {
  name: string,
  title?: string,
  show: boolean,
}
export interface RouteData {
  title: string,
  description: string,
  category: RouteCategory,
  icon: string,

}

interface Params {
  dialog?: string,
  tab?: string,
}

export interface Route {
  name: string,
  pattern: string,
  sidebar: string,
  data: RouteData,
  params?: Params,
}

interface Slice {
  route: Route,
  mobile: boolean,
  fullscreen: boolean,
  installed: boolean,
  version: string,
  builddate: string,
};

const slice = createSlice( {
  name: 'app',
  initialState: {
    route: {},
    mobile: false,
    fullscreen: false,
    installed: false,
    version: '',
    builddate: '',
  } as Slice,
  reducers: {
    routerUpdated: ( slice, action: PayloadAction<Route> ) => {

      slice.route = action.payload;

    },
    versionAdded: ( slice, action: PayloadAction<string> ) => {
      slice.version = action.payload;
    },
    builddateAdded: ( slice, action: PayloadAction<string> ) => {
      slice.builddate= action.payload;
    },
    appInstalled: slice => {
      slice.installed = true;
    },
    fullscreenLaunched: slice => {
      slice.fullscreen = true;
    },
    fullscreenLeft: slice => {
      slice.fullscreen = false;
    },
    mediaQueryUpdated: ( slice, action: PayloadAction<boolean> ) => {

      slice.mobile = action.payload;
    },
  }
} )

export const {
  appInstalled,
  routerUpdated,
  mediaQueryUpdated,
  fullscreenLaunched,
  fullscreenLeft,
  versionAdded,
  builddateAdded,
} = slice.actions;

// Action Creators

export default slice.reducer;
