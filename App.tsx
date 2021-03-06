import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}
