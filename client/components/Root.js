import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import configStore from '../config/configStore';
import Navigator from '../navigation/Navigator';

const Root = () => (
  <StoreProvider store={configStore()}>
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  </StoreProvider>
);

export default Root;