import * as React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import { COLORS } from '../constants/Colors';
import { useRoute } from '@react-navigation/native'
import PushNotification from './notifee/PushNotification';

export default function CallImageComp(){
     const route = useRoute()
     return(
          <View style={{
               justifyContent: 'center', 
               alignItems: 'center',
               marginTop: 60}}>
                    <PushNotification/>
                    
          <Image style={{width: 100, height: 100}}
               source={require('../images/new-logo.png')}
          />
          
          <Text style={{
               paddingTop: 20,
               color: COLORS.lightRed,
               fontSize: 30,
               paddingBottom: 10,
               fontWeight: 'bold'
          }}>
               {route.params.Name}
          </Text>
          <ScrollView horizontal>
               <Text>
               {route.params.PhoneNumber}
               </Text>
               <Text>
                     {" "}| Nigeria
               </Text>
          </ScrollView>
          <Text style={{paddingTop: 10}}>
               Calling...
          </Text>
     </View>
     );
}