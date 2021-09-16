import React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}



