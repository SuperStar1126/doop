import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import SignIn from "../scenes/Auth/SignIn";
import SignUp from "../scenes/Auth/SignUp";
import Splash from "../scenes/Splash/Splash";
import LoopCameraFeed from "../scenes/Splash/LoopCameraFeed";
import CloneVoice from "../scenes/Splash/CloneVoice";

const { Navigator, Screen } = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="LoopCameraFeed" component={LoopCameraFeed} />
      <Screen name="CloneVoice" component={CloneVoice} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}

export default AuthRoutes;