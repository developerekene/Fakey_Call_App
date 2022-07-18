import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/Colors';


export default function CreateContactScreen(navigation){
     return(
          <View style={{paddingTop: 30}}>
               <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: COLORS.lightRed
                    }}
                    onChangeText={{}}
                    value={{}}
                    placeholder="First Name"
                    keyboardType="name-phone-pad"
                    />
                    <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: COLORS.lightRed
                    }}
                    onChangeText={{}}
                    value={{}}
                    placeholder="Last Name"
                    keyboardType="name-phone-pad"
                    />
                    <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: COLORS.lightRed
                    }}
                    onChangeText={{}}
                    value={{}}
                    placeholder="Email"
                    keyboardType="name-phone-pad"
                    />
                    <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: COLORS.lightRed
                    }}
                    onChangeText={{}}
                    value={{}}
                    placeholder="Mobile Number"
                    keyboardType="number-pad"
                    />
                    <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: COLORS.lightRed
                    }}
                    onChangeText={{}}
                    value={{}}
                    placeholder="Home Number"
                    keyboardType="number-pad"
                    />
                    <TouchableOpacity
                         style={{
                              justifyContent: 'center',
                              alignItems: "center",
                              backgroundColor: COLORS.lightGrey,
                              padding: 10,
                              height: 50,
                              marginTop: 40
                         }}
                         // onPress={{}}
                         >
                         <Text>Save Contact</Text>
                         </TouchableOpacity>
          </View>
     );
}