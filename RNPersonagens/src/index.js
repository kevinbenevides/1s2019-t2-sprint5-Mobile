import Main from "./pages/main";
import Desenvolvedor from "./pages/desenvolvedor"
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
    {
        Main,
        Desenvolvedor
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          inactiveBackgroundColor: "#666",
          activeBackgroundColor: "#333",
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#FFFFFF",
          style: {
            height: 50,
            
          }
        }
      }
)

export default createAppContainer(MainNavigator)