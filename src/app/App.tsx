import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './App.store';

import { SimpleLoading, ContainerLayout } from '../components';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<SimpleLoading />} persistor={persistor}>
        <BrowserRouter>
          <ContainerLayout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
