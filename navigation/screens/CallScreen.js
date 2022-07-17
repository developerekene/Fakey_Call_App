import * as React from 'react'
import { SafeAreaView } from 'react-native';
import CallScreenIcons from '../../components/CallScreenIcons';
import CallImageComp from '../../components/CallScreenImageComp';

export default function CallScreen() {
     return(
          <SafeAreaView>
               <CallImageComp/>
               <CallScreenIcons/>
          </SafeAreaView>
     );
}