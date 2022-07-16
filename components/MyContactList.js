import * as React from 'react'
import * as Contacts from 'expo-contacts'
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function MyContactList() {
     let [error, setError] = useState(undefined)
     let [contacts, setContacts] = useState(undefined)
     useEffect(() => {
       (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === 'granted') {
           const { data } = await Contacts.getContactsAsync({
             fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
           });
   
           if (data.length > 0) {
             setContacts(data);
           }else{
                setError("No Contacts Found")
           }
         }else{
              setError("Permission to access contacts denied")
         }
       })();
     }, []);

     return(
          <View>
               <Text>{error}</Text>
          </View>
     );

}