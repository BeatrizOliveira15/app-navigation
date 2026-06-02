import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Feather from '@expo/vector-icons/Feather';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home'){
                    return <Feather name="home" size={size} color={color} />;

                } else if (route.name === 'Search') {
                   return <Feather name="search" size={24} color={color} />;

                } else if (route.name === 'Chat') {
                    iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline';

                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false
        })}
        >

        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Chat" component={ChatScreen}/> 
        <Tab.Screen name="Profile" component={ProfileScreen}/>

        </Tab.Navigator>
    );
};

export default TabNavigator;
