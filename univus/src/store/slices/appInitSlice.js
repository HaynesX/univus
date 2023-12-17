import { createSlice } from '@reduxjs/toolkit';
import * as Font from 'expo-font';

const initialState = {
  fontsLoaded: false,
  isAppReady: false,
};

export const appInitSlice = createSlice({
  name: 'appInitSlice',
  initialState,
  reducers: {
    setFontsLoaded: (state, action) => {
      state.fontsLoaded = action.payload;
    },
  },
});

export const { setFontsLoaded } = appInitSlice.actions;

export const loadFonts = () => async (dispatch) => {
  await Font.loadAsync({
    'Inter-Black': require('../../../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../../../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../../../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../../../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../../../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../../../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../../../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../../../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('../../../assets/fonts/Inter-Thin.ttf')
  });
  dispatch(setFontsLoaded(true));
};

export default appInitSlice.reducer;
