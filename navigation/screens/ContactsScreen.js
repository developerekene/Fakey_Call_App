import * as React from 'react'
import {View, Text} from 'react-native'
import AddContactButton from '../../components/AddContactButton';
import SearchBar from '../../components/SearchBar';

export default function ContactsScreen({navigation}) {
     return(
          <View>
               <SearchBar/>
               <AddContactButton/>
          </View>
          
     );
}