import 'react-native-gesture-handler';
enableScreens();

import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import {store} from './src/redux/configureStore';
import MainNavigator from './src/routes/MainNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
