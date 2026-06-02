import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import PinScreen from '../screens/PinScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitle: '', }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Pin" component={PinScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
