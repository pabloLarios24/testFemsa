import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home'
import { HomeStackParams } from '../types/HomeStackParams';
import ProductDetail from '../../screens/productDetail';

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<HomeStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: { color: 'black', fontWeight: 'bold' },
        animation: 'slide_from_right',
      }}
      initialRouteName="Home"
      id="HomeStack"
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetail} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
