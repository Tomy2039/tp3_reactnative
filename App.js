import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './pages/loginScreen.jsx';
import HomeTabs from './components/homeTabs.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={() => setLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        )}
      </Stack.Navigator>
  );
}