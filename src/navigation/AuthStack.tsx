import React from "react";

import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from "@react-navigation/native-stack";

import { APP_ROUTES } from "../routes";
import Login from "../screens/Authentication/Login/Login";

import { RouteType } from "./types";
import Blog from "../screens/Blog/Blog";

export type AuthStackParams = {
    Login: undefined;
    ForgotPassword: undefined;
    Otp: { tokenUUID: string; email: string };
    ResetPassword: { tokenUUID: string; code: string };
};

const Stack = createNativeStackNavigator();

const defaultOptions: NativeStackNavigationOptions = { headerShown: false };

const routes: Array<RouteType> = [
    { name: APP_ROUTES.LOGIN, component: Login },
    { name: APP_ROUTES.BLOG, component: Blog }
];

const AuthStack: React.FC = () => {
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

export default AuthStack;
