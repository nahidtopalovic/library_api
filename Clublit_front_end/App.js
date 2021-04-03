import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Login from "./src/screens/Login";
import PwForgot from "./src/screens/PwForgot";
import Signup from "./src/screens/Signup";
import Start from "./src/screens/Start";

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  PwForgot: PwForgot,
  Signup: Signup,
  Start: Start
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    PwForgot: PwForgot,
    Signup: Signup,
    Start: Start
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
