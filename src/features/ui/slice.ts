import { createSlice } from '@reduxjs/toolkit';
import { UiState } from './type';

const initialState: UiState = {
  ui: {
    units: 'standard',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUnits: (state) => {
      state.ui.units = state.ui.units === 'standard' ? 'metric' : 'standard';
    },
  },
});

export default uiSlice.reducer;

export const { setUnits } = uiSlice.actions;

export const uiSelector = (state: { uiStore: UiState }): UiState => {
  return state.uiStore;
};
