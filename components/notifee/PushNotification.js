import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import notifee from '@notifee/react-native';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/Colors';

export default function PushNotification(navigation) {
  const route = useRoute()

  const handleChangeLastName = () => {
    // navigateTo()
    onDisplayNotification()

  }

  const navigateTo = () => {
    navigation.navigate("CallScreen")
    
  }
     async function onDisplayNotification() {
       // Request permissions (required for iOS)
       await notifee.requestPermission()
   
       // Create a channel (required for Android)
       const channelId = await notifee.createChannel({
         id: 'default',
         name: 'Default Channel',
       });
   
       // Display a notification
       await notifee.displayNotification({
         title: 'Fakey App',
         body: 'You are making a call',
         android: {
           channelId,
          //  smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          //  // pressAction is needed if you want the notification to open the app when pressed
          //  pressAction: {
          //    id: 'default',
          //  },
         },
       });
     }
   
     return (
       <View>
         {/* <TouchableOpacity
              style={{paddingRight: 100}}
              onPress={() => navigation.navigate("CallScreen", {
                  Name: route.params.Name,
                  PhoneNumber: route.params.PhoneNumber,
              })}
              >
              <Ionicons name={'call-outline'} size={20} color={COLORS.lightRed}/>
        </TouchableOpacity> */}
       </View>
     );
   }