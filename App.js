import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/mainNavigation';
import 'react-native-gesture-handler';
import {navigationRef} from './src/navigation/rootNavigation';
import {GettingFusedDater, Settings} from './src/screens/appFlow';
import {Dropdown} from './src/components/modals';
import Wrapper from './src/components/wrapper';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
    // <Dropdown />
  );
};

export default App;
