import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/mainNavigation';
import 'react-native-gesture-handler';
import {navigationRef} from './src/navigation/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/services/redux/store';
import {SearchDropDown} from './src/screens/appFlow';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
    // <SearchDropDown />
  );
};

export default App;
