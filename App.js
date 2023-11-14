const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Signup from "./screens/Signup";
import PNActive from "./screens/PNActive";
import Notificationprofile from "./screens/Notificationprofile";
import OTPActiveKeyboardClosed from "./screens/OTPActiveKeyboardClosed";
import OTPActiveSuggestion from "./screens/OTPActiveSuggestion";
import Type1Line from "./components/Type1Line";
import TypeDeleteImage from "./components/TypeDeleteImage";
import Type2Lines from "./components/Type2Lines";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "InstrumentSans-Medium": require("./assets/fonts/InstrumentSans-Medium.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Martel-Bold": require("./assets/fonts/Martel-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PNActive"
              component={PNActive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notificationprofile"
              component={Notificationprofile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPActiveKeyboardClosed"
              component={OTPActiveKeyboardClosed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPActiveSuggestion"
              component={OTPActiveSuggestion}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
