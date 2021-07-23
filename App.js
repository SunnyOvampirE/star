import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/Home";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName ="home" screenOptions ={{headerShown:false}}>
       <Stack.Screen name = "home" component = {HomeScreen}/>
       <Stack.Screen name = "SpaceCraft" component = {SpaceCraftScreen}/>
       <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
       <Stack.Screen name = "starMap" component = {StarMapScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}


