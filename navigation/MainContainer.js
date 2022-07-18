import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Importing Screens
import ContactsScreen from './screens/ContactsScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import RecentScreen from './screens/RecentScreen'

//Importing Color
import { COLORS } from '../constants/Colors';

//Screen Names
const contactName = 'Contacts'
const favouriteName = 'Favourite'
const recentname = 'Recent'

//Creating Tab Navigator
const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function MainContainer(){
     return(
               <Tab.Navigator
               initialRouteName={contactName}
               options={{headerShown: false}}
               screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                         let iconName;
                         let routeName = route.name

                         if(routeName === contactName){
                              iconName = focused ? 'person-outline' : 'person-outline'
                         } else if(routeName === favouriteName){
                              iconName = focused ? 'star-outline' : 'star-outline'
                         }else if(routeName === recentname){
                              iconName = focused ? 'call-outline' : 'call-outline'
                         }

                         return <Ionicons name={iconName} size={size} color={color}/>
                    }
               })}
               tabBarOptions={{
                    activeTintColor: COLORS.lightRed,
                    inactiveTintColor: COLORS.lightGrey
               }}
               >
                    <Tab.Screen name={recentname} component={RecentScreen} />
                    <Tab.Screen name={contactName} component={ContactsScreen} />
                    <Tab.Screen name={favouriteName} component={FavouriteScreen}/>

               </Tab.Navigator>
     );
}