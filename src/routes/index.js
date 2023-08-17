import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AppStack  from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
        {user ? <AppStack /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
