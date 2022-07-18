import * as React from 'react'
import * as Contacts from 'expo-contacts'
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native';


export default function MyContactList({ navigation }) {
     //defining error message
     let [error, setError] = useState(undefined)
     let [contacts, setContacts] = useState([])
     useEffect(() => {
          //async functions to request permissions and load contacts
       (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === "granted") {
           const { data } = await Contacts.getContactsAsync({
             fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
          //    fields: [Contacts.Fields.Emails],
           });
           console.log(status);
           console.log(data);
           console.log(Contacts)
   
           if (data.length > 0) {
               const contact = data[0];
               console.log(contact);
               setContacts(data);
           }else{
                setError("No Contacts Found")
           }
         }else{
              setError("Permission to access contacts denied")
         }
       })();
     }, []);

     let getContactsRow = () =>{
          if(contacts.length > 0){
               // console.log("LABEL", contacts)
               return contacts.map((contact, index) => {
                    console.log("LABEL", contact)
                    return(
                      <View key={index}>

                           <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen")}>
                           <Text 
                           style={{
                                fontSize: 17, 
                                paddingStart: 20, 
                                paddingBottom: 20, 
                                paddingTop: 20, 
                                color: COLORS.lightRed}}>
                                     {contact.firstName}</Text>
                           </TouchableOpacity>
                           
                           
                      {/* {contact.emails.map((emailContact, i)=> <Text key={i} style={{color: COLORS.colorwhite, paddingTop: 10}}>Email: {emailContact.email}</Text>)} */}
                      {/* {contact.phoneNumbers.map((phoneContact, j)=> <Text key={j} style={{color: COLORS.colorwhite}}>{phoneContact.label}: {phoneContact.number}</Text>)} */}
                      
                    </View>
                    );
               });
          }else{
               return <Text style={{
                    color: COLORS.colorwhite
               }}>Awaiting Contacts...</Text>
          }
     }

     return(
          <>
          <View style={{
                         
                    }}>
                    {error? <Text>{error}</Text>: getContactsRow()}
                    
               {/* <ScrollView horizontal >
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'call-outline'} size={20} color={COLORS.colorwhite}/>
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'chatbox-ellipses-outline'} size={20} color={COLORS.colorwhite}/>
                    <Ionicons style={{paddingRight: 60, paddingTop: 20}} name={'videocam-outline'} size={20} color={COLORS.colorwhite}/>
               </ScrollView> */}
          </View>
     </>
     );

}