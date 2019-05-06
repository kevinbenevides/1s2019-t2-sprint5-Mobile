import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, StackNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Main from "./pages/main";
import Profile from "./pages/profile";
import SingIn from "./pages/signin";

const AuthStack = createStackNavigator({ SingIn });

const MainNavigator = createBottomTabNavigator(
  {
    Main,
    Profile
  },
  {
    initialRouteName: "Main",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#dd99ff",
      activeBackgroundColor: "#B727FF",
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 50
      }
    }
  }
);

// export default createAppContainer(MainNavigator);

export default createAppContainer(
  createSwitchNavigator ({
    MainNavigator,
    AuthStack
  },
  {
    initialRouteName: "AuthStack"
  }
  )
)