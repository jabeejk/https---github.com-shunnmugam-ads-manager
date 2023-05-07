import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  loaderStack: boolean[];
}

const initialState: UiState = {
  loaderStack: []
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    loader: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        //is loading true
        state.loaderStack.push(true);
      } else {
        state.loaderStack.pop();
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { loader } = uiSlice.actions;

export default uiSlice.reducer;
