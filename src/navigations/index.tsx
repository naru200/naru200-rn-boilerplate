import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const AppStack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        {/* Main Navigator */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
