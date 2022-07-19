import * as React from 'react'
import {View, ScrollView} from 'react-native'
import AddContactButton from '../../components/AddContactButton';
import MyContactList from '../../components/MyContactList';
import SearchBar from '../../components/SearchBar';

export default function ContactsScreen({navigation}) {
     return(

          <View>
               <SearchBar/>
               <AddContactButton navigation={navigation}/>
               <MyContactList navigation={navigation}/>
               
          </View>
          
     );
}