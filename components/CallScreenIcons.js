import * as React from 'react'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants/Colors';

export default function CallScreenIcons({navigation}){
     return(
          <View style={{
               justifyContent: 'center',
               alignItems: 'center',
               marginTop: 120
          }}>
               <ScrollView horizontal>
                    <TouchableOpacity
                         style={{paddingRight: 100, marginBottom: 60}}
                         onPress={{}}
                         >
                         <Ionicons name={'mic-outline'} size={30} color={COLORS.lightGrey}/>
                         {/* <Text>Start Recording</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{paddingRight: 100}}
                         onPress={{}}
                         >
                         <Ionicons name={'mic-off-outline'} size={30} color={COLORS.lightGrey}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{}}
                         onPress={{}}
                         >
                         <Ionicons name={'add-outline'} size={30} color={COLORS.lightGrey}/>
                    </TouchableOpacity>
               </ScrollView>
               <ScrollView horizontal>
                    <TouchableOpacity
                         style={{paddingRight: 100, marginBottom: 60}}
                         onPress={{}}
                         >
                         <Ionicons name={'videocam-outline'} size={30} color={COLORS.lightGrey}/>
                         {/* <Text>Start Recording</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{paddingRight: 100}}
                         onPress={{}}
                         >
                         <Ionicons name={'people-outline'} size={30} color={COLORS.lightGrey}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={{}}
                         onPress={{}}
                         >
                         <Ionicons name={'pause-outline'} size={30} color={COLORS.lightGrey}/>
                    </TouchableOpacity>
               </ScrollView>
               <ScrollView horizontal>
                    
                    
                    <TouchableOpacity
                         style={{}}
                         onPress={{}}
                         >
                         <Ionicons style={{
                              backgroundColor: COLORS.lightRed, 
                              padding: 10,
                              borderRadius: 40
                              }} name={'call-outline'} size={40} color={COLORS.colorwhite} back/>
                    </TouchableOpacity>
               </ScrollView>
               
          </View>
     );
}