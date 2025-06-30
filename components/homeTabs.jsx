import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../pages/homeScreen';
import ProfileScreen from '../pages/profileScreen';
import SettingsScreen from '../pages/settingsScreen';
import TaskStack from './taskStack'

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e76f51',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff6e6',
            borderTopWidth: 1,
          },
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="storefront" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Ajustes"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
            name="Tareas"
            component={TaskStack}
            options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
