import React from 'react';
import { ThemeProvider } from './src/ThemeContext'; 
import Root from './Root';


import { Provider } from 'react-redux';
import { store } from './src/store/store';
import * as SplashScreen from 'expo-splash-screen';



SplashScreen.preventAutoHideAsync();

export default function App() {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  );
}
