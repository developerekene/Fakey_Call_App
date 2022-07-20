import * as React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import PushNotification from '../../components/notifee/PushNotification';

export default function DetailsScreen({navigation}){

     const route = useRoute()
     return(
          <View>
               <View style={{
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: 30,
                    marginBottom: 15}}>
                    <Image style={{width: 100, height: 100, marginBottom: 20}}
                         source={require('../../images/new-logo.png')}
                    />
                    <ScrollView horizontal>
                         {/* <PushNotification /> */}
                         <TouchableOpacity
                              style={{paddingRight: 100}}
                              onPress={() => navigation.navigate("CallScreen", {
                                   Name: route.params.Name,
                                   PhoneNumber: route.params.PhoneNumber,
                              })}
                              >
                                   <Ionicons name={'call-outline'} size={20} color={COLORS.lightRed}/>
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={{paddingRight: 100}}
                              // onPress={{}}
                              >
                              <Ionicons name={'videocam-outline'} size={20} color={COLORS.lightRed}/>
                         </TouchableOpacity>
                         <TouchableOpacity
                              
                              // onPress={{}}
                              >
                              <Ionicons name={'chatbox-ellipses-outline'} size={20} color={COLORS.lightRed}/>
                         </TouchableOpacity>
                    </ScrollView>
               </View>
               
               <View style={{
                    marginLeft: 30,
                    marginTop: 20
               }}>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                         {"Title:"} {route.params.JobTitle}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                    {"Name:"} {route.params.Name}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                    {"Email:"} {route.params.Email}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                    {"Phone Number:"} {route.params.PhoneNumber}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                    {"Company:"} {route.params.Company}
                    </Text>
                    
               </View>

               
          </View>
          
     );
}