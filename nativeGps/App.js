import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

import Home from './Screens/Home';
import MapScreen from './Screens/MapScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Tela "Lugares favoritos"
function FavoritosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lugares Favoritos ❤️</Text>
    </View>
  );
}

// Stack com suas telas principais
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

// Drawer englobando a pilha
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Localiza+">
        <Drawer.Screen name="Localiza+" component={MainStack} />
        <Drawer.Screen name="Lugares favoritos ❤️" component={FavoritosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
