import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeColors, LightTheme } from "../styles";

import { Icon } from "../components/Icon";
import { ImageSourcePropType, View,  } from "react-native";
import Home from "../screens/Home/Home";
// import Schedule from "../screens/Schedule/Schedule";
// import Calendar from "../screens/Schedule/Schedule";
import Schedule from "../screens/Schedule/Schedule";
// import Meeting from "../screens/Meeting/Meeting";
import Meeting from "../screens/Meeting/Meeting";
import Transcript from "../screens/Transcript/Transcript";
import Profile from "../screens/Profile/Profile";
import ProfileEdit from "../screens/ProfileEdit/ProfileEdit";
import Logout from "../screens/Logout/Logout";
import MeetingScreen from "../screens/MeetingScreen/MeetingScreen";

const Tab = createBottomTabNavigator();

function getTabbarIcon(focused: boolean, source: ImageSourcePropType) {
    return (
        <Icon
            width={24}
            height={24}
            source={source}
            color={focused ? LightTheme.Primary : ThemeColors.LightGray}
        />
    );
}

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: ThemeColors.White,
                    height: 80,
                    paddingBottom: 20
                }
            }}
        >
            {/* <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/gallery.png"))
                }}
            /> */}
            <Tab.Screen
                name={"Schedule"}
                component={Schedule}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/home.png"))
                }}
            />
            <Tab.Screen
                name={"Meeting"}
                component={Meeting}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/calendar.png"))
                }}
            />
            <Tab.Screen
                name={"Transcript"}
                component={Transcript}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/transcript.png"))
                }}
            />
            <Tab.Screen
                name={"Account"}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/account.png"))
                }}
            />
            <Tab.Screen
                name={"ProfileEdit"}
                component={ProfileEdit}
                options={{
                    tabBarButton: (props) => (
                        <View style={{ display: 'none' }}>
                        </View>
                    )
                }} 
            />
            <Tab.Screen
                name={"Logout"}
                component={Logout}
                options={{
                    tabBarButton: (props) => (
                        <View style={{ display: 'none' }}>
                            {/* <BottomTabBar {...props} /> */}
                        </View>
                    )
                }} 
            />
            {/* <Tab.Screen
                name={"MeetingScreen"}
                component={MeetingScreen}
                options={{
                    tabBarIcon: ({ focused }: any) =>
                        getTabbarIcon(focused, require("../assets/icons/gallery.png"))
                }}
            /> */}
        </Tab.Navigator>
    );
};

export { BottomTabs };
