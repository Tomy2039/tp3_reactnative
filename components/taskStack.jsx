import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskListScreen from '../pages/taskListScreen';
import SubtaskDetailScreen from '../pages/subtaskDetailScreen';
import SubtaskListScreen from '../pages/subtaskListScreen'; 

const Stack = createNativeStackNavigator();

export default function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={TaskListScreen} />
      <Stack.Screen name="Subtareas" component={SubtaskListScreen} />
      <Stack.Screen name="Detalle" component={SubtaskDetailScreen} />
    </Stack.Navigator>
  );
}
