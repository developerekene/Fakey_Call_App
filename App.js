import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import notifee from '@notifee/react-native';
import PushNotification from './components/notifee/PushNotification';
import MainContainer from './navigation/MainContainer';
import CallScreen from './navigation/screens/CallScreen';

export default function App() {
  
  return (
    <>
    
      <SafeAreaView style={{
      flex: 1,
    backgroundColor: '#fff',
    }}>
      {/* <StatusBar style='auto'/> */}
      {/* <PushNotification/> */}
      {/* <MainContainer/> */}
      <CallScreen/>
      
      </SafeAreaView>
    </>
  );

}

