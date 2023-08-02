import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from "@react-navigation/native-stack";

import { APP_ROUTES } from "../routes";
import { BottomTabs } from "./BottomTabs";
import Meeting from "../screens/Meeting/Meeting";
import Profile from "../screens/Profile/Profile";
import ProfileEdit from "../screens/ProfileEdit/ProfileEdit";
import Login from "../screens/Authentication/Login/Login";
import Splash from "../screens/Splash/Splash";
import LoopCameraFeed from "../screens/LoopCameraFeed/LoopCameraFeed";
import CloneVoice from "../screens/CloneVoice/CloneVoice";
import Schedule from "../screens/Schedule/Schedule";

import { RouteType } from "./types";
import Blog from "../screens/Blog/Blog";

const Stack = createNativeStackNavigator();

const defaultOptions: NativeStackNavigationOptions = { headerShown: false };

const routes: Array<RouteType> = [
    { name: "Splash", component: Splash },
    { name: "LoopCameraFeed", component: LoopCameraFeed },
    { name: "CloneVoice", component: CloneVoice },
    { name: "Login", component: Login },
    { name: "Tabs", component: BottomTabs },
    { name: "Schedule", component: Schedule },
    { name: "Meeting", component: Meeting },
    { name: "Profile", component: Profile },
    { name: "ProfileEdit", component: ProfileEdit },
];

const UserStack: React.FC = () => {
    return (
        <Stack.Navigator>
            {routes.map((route, index) => {
                const { name, component, options = {} } = route;
                return (
                    <Stack.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={{ ...defaultOptions, ...options }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};

export default UserStack;
