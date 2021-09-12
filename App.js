import React from 'react';
import MainNavigator from './navigation/HomeNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}



