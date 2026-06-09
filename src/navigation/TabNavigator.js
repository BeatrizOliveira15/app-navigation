import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStackNavigator from './StackNavigator'
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    const initialRouteName = props.route?.params?.initialRouteName ?? 'Home';
    return (
        <Tab.Navigator
        initialRouteName={initialRouteName}
        screenOptions={({route, navigation}) => ({
            headerShown: false,
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    style={{ marginLeft: 12 }}
                >
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
            ),
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

        <Tab.Screen name="Home" component={HomeStackNavigator}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Chat" component={ChatScreen}/> 
        <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
