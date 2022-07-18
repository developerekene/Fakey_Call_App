import * as React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function DetailsScreen({navigation}){
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
                         <TouchableOpacity
                              style={{paddingRight: 100}}
                              onPress={() => navigation.navigate("CallScreen")}
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
                         First Name: {"first name"}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                         Last Name: {"last name"}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                         Email: {"email"}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                         Mobile Number: {"mobile number"}
                    </Text>
                    <Text style={{fontSize: 20, marginBottom: 15}}>
                         Phone Number: {"phone number"}
                    </Text>
               </View>

               
          </View>
          
     );
}