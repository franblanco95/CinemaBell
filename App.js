import React from 'react';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';

import store from './store';
import { init } from './db';


init()
  .then(() => console.log('La base de datos funciona'))
  .catch(err => {
    console.log('La base de datos no funciona')
    console.log(err.message)
  })

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}



