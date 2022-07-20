import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import AppContainer from './navigation/AppContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PushNotification from './components/notifee/PushNotification';

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

