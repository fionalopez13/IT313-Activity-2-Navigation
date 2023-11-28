import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RecoveryScreen from '../screens/RecoveryScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
                <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen}/>
                <Stack.Screen name="Recovery" options={{headerShown: false}} component={RecoveryScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}