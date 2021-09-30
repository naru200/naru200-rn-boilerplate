import React from 'react';
import AppNavigation from './navigations';

import { NativeBaseProvider } from 'native-base';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default App;
