import 'react-native-gesture-handler';
enableScreens();

import React from 'react';
import {StatusBar, SafeAreaView, Dimensions} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import {store} from './src/redux/configureStore';
import MainNavigator from './src/routes/MainNavigator';
const screenHeight = Dimensions.get('screen').height;
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#073763" />
      <SafeAreaView style={{flex: 1, height: 400}}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
