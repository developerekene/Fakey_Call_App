import * as React from 'react'
import { SafeAreaView } from 'react-native';
import CallScreenIcons from '../../components/CallScreenIcons';
import CallImageComp from '../../components/CallScreenImageComp';
import { COLORS } from '../../constants/Colors';

export default function CallScreen({navigation}) {
     return(
          <SafeAreaView style={{backgroundColor: COLORS.colorwhite, flex: 1}}>
               <CallImageComp/>
               <CallScreenIcons navigation={navigation}/>
          </SafeAreaView>
     );
}