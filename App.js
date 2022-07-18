import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import notifee from '@notifee/react-native';
import PushNotification from './components/notifee/PushNotification';
import MainContainer from './navigation/MainContainer';
import CallScreen from './navigation/screens/CallScreen';
import AppContainer from './navigation/AppContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailsScreen from './navigation/screens/DetailsScreen';

export default function App() {
  
  return (
    <>
    
    <SafeAreaProvider style={{
      flex: 1,
    backgroundColor: '#fff',
    }}>
      <StatusBar style='auto'/>
      <AppContainer/>
      {/* <PushNotification/> */}
      {/* <MainContainer/> */}
      {/* <CallScreen/> */}
      {/* <DetailsScreen/> */}
    
    </SafeAreaProvider>
      
    </>
  );

}

