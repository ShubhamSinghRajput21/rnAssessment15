import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
