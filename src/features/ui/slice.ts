import { createSlice } from '@reduxjs/toolkit';
import { UiState } from './type';

const initialState: UiState = {
  ui: {
    units: 'standard',
    theme: 'theme-light',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUnits: (state) => {
      state.ui.units = state.ui.units === 'standard' ? 'metric' : 'standard';
    },
    setTheme: (state) => {
      state.ui.theme =
        state.ui.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
    },
  },
});

export default uiSlice.reducer;

export const { setUnits, setTheme } = uiSlice.actions;

export const uiSelector = (state: { uiStore: UiState }): UiState => {
  return state.uiStore;
};
