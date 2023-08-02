import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserStack } from "./navigation";

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <UserStack />
        </NavigationContainer>
    );
};
export default App;
