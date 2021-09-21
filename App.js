import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicscreen from './screens/DailyPic' ;
import SpaceCraftscreen from './screens/SpaceCraft';
import StarMapscreen from './screens/StarMap';

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="DailyPicscreen" screenOptions={{headerShown:false}}>
        <stack.Screen name="DailyPicscreen" component={HomeScreen}></stack.Screen>
        <stack.Screen name="SpaceCraftscreen" component={IssLocation}></stack.Screen>
        <stack.Screen name="StarMapscreen" component={Meteors}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
