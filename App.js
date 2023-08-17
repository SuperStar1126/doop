import { AuthContextProvider } from "./src/context/AuthContext";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <Routes />
    </AuthContextProvider>
  );
}
