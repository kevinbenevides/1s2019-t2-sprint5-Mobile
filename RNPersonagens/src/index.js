import Main from "./pages/main";
import Desenvolvedor from "./pages/desenvolvedor"
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
    {
        Main,
        Desenvolvedor
    }
)

export default createAppContainer(MainNavigator)