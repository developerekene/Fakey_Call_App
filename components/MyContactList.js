import * as React from 'react'
import * as Contacts from 'expo-contacts'
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';


export default function MyContactList() {
     //defining error message
     let [error, setError] = useState(undefined)
     // let [contacts, setContacts] = useState(undefined)
     useEffect(() => {
          //async functions to request permissions and load contacts
       (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === "granted") {
           const { data } = await Contacts.getContactsAsync({
             fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
           });
   
           if (data.length > 0) {
               const contact = data[0];
               console.log(contact);
           }else{
                setError("No Contacts Found")
           }
         }else{
              setError("Permission to access contacts denied")
         }
       })();
     }, []);

     // let getContactsRow = () =>{
     //      if(contacts != undefined){
     //           return contacts.map((contact, index) => {
     //                return(
     //                  <View key={index}>
     //                  <Text>Name: {contacts.FirstName} {contacts.LastName}</Text>
     //                </View>
     //                );
     //           });
     //      }else{
     //           return <Text style={{
     //                color: COLORS.colorwhite
     //           }}>Awaiting Contacts...</Text>
     //      }
     // }

     return(
          <>
          <View style={{
                         padding: 20,
                         backgroundColor: COLORS.lightRed,
                    }}>
               <Text>
                    {error}         
                    {/* {getContactsRow()} */}
               </Text>
               <ScrollView horizontal >
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'call-outline'} size={20} color={COLORS.colorwhite}/>
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'chatbox-ellipses-outline'} size={20} color={COLORS.colorwhite}/>
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'videocam-outline'} size={20} color={COLORS.colorwhite}/>
               </ScrollView>
          </View>
     </>
     );

}