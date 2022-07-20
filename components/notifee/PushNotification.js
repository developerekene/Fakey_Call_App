import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import notifee, { AndroidStyle } from '@notifee/react-native';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/Colors';

export default function PushNotification(navigation) {
  const route = useRoute()

  const displayNotification = () => {
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
          //  largeIcon: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/e75d073e-8000-4c00-bca1-26075590fd44',
          //  style: {
          //    type: AndroidStyle.BIGPICTURE,
          //   //  picture: require('https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/e75d073e-8000-4c00-bca1-26075590fd44')
          //  }
         },
       });
     }
   
     return (
       <View>
         <TouchableOpacity
              style={{position: 'absolute', top: 0}}
              onPress={displayNotification()}
              >
              <Ionicons name={'call-outline'} size={20} color={COLORS.lightRed}/>
        </TouchableOpacity>
       </View>
     );
   }