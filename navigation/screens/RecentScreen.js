import * as React from 'react'
import {View, Text, TouchableOpacity, Button } from 'react-native'
import SearchBar from '../../components/SearchBar';
import notifee, { AndroidStyle } from '@notifee/react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/Colors';

export default function RecentScreen({navigation}) {
     
     return(
          <View>
               <SearchBar/>
               <Text>

               </Text>

          </View>
     
     );
}