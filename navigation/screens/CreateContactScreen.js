import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/Colors';
import { useState } from 'react';


export default function CreateContactScreen(navigation){
     const [contacts, setContacts] = useState([{}]);
     const [contact, setContact] = useState({firstName: "", lastName: "", email: "", mobileNumber: "", phoneNumber: ""});
     const handleChangeFirstName = (text) => {
          setContact({...contact, firstName: text});
     }
     const handleChangeLastName = (text) => {
          setContact({...contact, lastName: text});
     }
     const handleChangeEmail = (text) => {
          setContact({...contact, email: text});
     }
     const handleChangeMobileNumber = (text) => {
          setContact({...contact, mobileNumber: text});
     }
     const handleChangePhoneNumber = (text) => {
          setContact({...contact, phoneNumber: text});
     }
     const submitContact = () => {
          setContacts({...contacts, contact});
          clearFields()
          console.log(contacts);
     }
     const clearFields = () => {
          setContact({firstName: "", lastName: "", email: "", mobileNumber: "", phoneNumber: ""});
     }
     const emptyContact = () => {
          if(contact.firstName === "" || contact.lastName  === "" || contact.email  === "" || contact.mobileNumber  === "" || contact.phoneNumber  === "" || contact.phoneNumber  === undefined){
               return;
          }
     }

     return(
          <View style={{paddingTop: 30}}>
               <TextInput
                    style={{
                         height: 60,
                         margin: 12,
                         borderWidth: 1,
                         padding: 10,
                         borderRadius: 15,
                         borderColor: "#000"
                    }}
                    onChangeText={(text) => handleChangeFirstName(text)}
                    value={contact.firstName}
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
                         borderColor: "#000"
                    }}
                    onChangeText={(text) => handleChangeLastName(text)}
                    value={contact.lastName}
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
                         borderColor: "#000"
                    }}
                    onChangeText={(text) => handleChangeEmail(text)}
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
                         borderColor: "#000"
                    }}
                    onChangeText={(text) => handleChangeMobileNumber(text)}
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
                         borderColor: "#000"
                    }}
                    onChangeText={(text) => handleChangePhoneNumber(text)}
                    value={{}}
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                    />
                    <TouchableOpacity
                         style={{
                              justifyContent: 'center',
                              alignItems: "center",
                              backgroundColor: COLORS.lightRed,
                              padding: 10,
                              height: 50,
                              marginTop: 40,
                              marginLeft: 15,
                              marginRight: 15,
                              borderRadius: 10
                         }}
                         onPress={() => submitContact()}
                         >
                         <Text style={{color: COLORS.colorwhite}}>Save Contact</Text>
                         </TouchableOpacity>
          </View>
     );
}