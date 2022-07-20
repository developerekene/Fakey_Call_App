import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants/Colors';

export default function AddContactButton({navigation}){
     return(
          <View style={{
               marginStart: 22,
               marginTop: 10,
               marginBottom: 10
          }}>
               <TouchableOpacity onPress={() => navigation.navigate('CreateContact')
      }>
                    <View style={{
                         flexDirection: 'row'
                    }}>
                         <Ionicons name={'person-add-outline'} size={20} color={COLORS.lightRed}/>
                         <Text style={{marginLeft: 30, color: COLORS.lightGrey}} 
                              >Create Contact</Text>
                    </View>
          </TouchableOpacity>
          </View>
          
          
     );
}