import * as React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import { COLORS } from '../constants/Colors';



export default function CallImageComp(){
     return(
          <View style={{
               justifyContent: 'center', 
               alignItems: 'center',
               marginTop: 60}}>
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
               Ekene
          </Text>
          <ScrollView horizontal>
               <Text>
                    09087875746 |{" "}
               </Text>
               <Text>
                    Nigeria
               </Text>
          </ScrollView>
          <Text style={{paddingTop: 10}}>
               Calling...
          </Text>
     </View>
     );
}