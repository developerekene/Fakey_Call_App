import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './MainContainer';
import ContactsScreen from './screens/ContactsScreen';
import CallScreen from './screens/CallScreen';
import CreateContactScreen from './screens/CreateContactScreen';

const Stack = createNativeStackNavigator();

export default function AppContainer(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Maincontainer">
        <Stack.Screen
          name="Maincontainer"
          component={MainContainer}
          options={{headerShown: false}}
          // options={{ title: 'Welcome' }}
        />
        
        <Stack.Screen name="CallScreen" component={CallScreen} options={{}} />
        <Stack.Screen name="CreateContact" component={CreateContactScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};