import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schedule from '../scenes/Schedule';
import Icon from '../components/Icon/Icon';
// import Meeting from '../scenes/Meeting';
import Speaker_Home from '../scenes/home/speaker';
import Meeting from '../scenes/ILS';
import Transcript from '../scenes/Transcript';
import Profile from '../scenes/Account/Profile';
import ProfileEdit from '../scenes/Account/ProfileEdit';
import Logout from '../scenes/Account/Logout';


function getTabbarIcon(focused, source) {
  return (
      <Icon
          width={24}
          height={24}
          source={source}
          color={focused ? '#1C62D3' : '#27364E'}
      />
  );
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Create_Meeting() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Speaker_Home" component={Speaker_Home} options={{headerShown: false}}/>
      <Stack.Screen name="Meeting_Screen" component={Meeting} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function Account() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
                getTabbarIcon(focused, require("../assets/icons/home.png"))
          }}
        />
        <Tab.Screen 
          name="Meeting"
          component={Create_Meeting}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused }) =>
                getTabbarIcon(focused, require("../assets/icons/calendar.png"))
          }}
        />
        {/* <Tab.Screen 
          name="Speaker_Home"
          component={Speaker_Home}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused }) =>
                getTabbarIcon(focused, require("../assets/icons/calendar.png"))
          }}
        /> */}
        <Tab.Screen 
          name="Transcript"
          component={Transcript}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
                getTabbarIcon(focused, require("../assets/icons/transcript.png"))
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
                getTabbarIcon(focused, require("../assets/icons/account.png"))
          }}
        />
      </Tab.Navigator>
  );
}

export default AppStack;
