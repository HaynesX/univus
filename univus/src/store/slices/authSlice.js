import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isSignout: false,
  userToken: null,
  user: {
    accountType: null,
    username: null,
    email: null,
    verified: false,
    token: null,
    
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    restoreToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      state.isSignout = false;
      state.userToken = action.payload;
    },
    signOut: (state) => {
      state.isSignout = true;
      state.userToken = null;
    },
    setIsLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
  },
  setUser: (state, action) => {
    state.user = action.payload;
},
setDefaultUser: (state) => {
  state.user = {
    accountType: null,
    username: null,
    email: null,
    verified: false,
    token: null,
    
  }
},
  },
});

export const { restoreToken, signIn, signOut, setIsLoading, setUser, setDefaultUser  } = authSlice.actions;

export default authSlice.reducer;
