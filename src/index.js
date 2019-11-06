/* eslint-disable comma-dangle */
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Result from "./screens/Result";
import Loader from "./screens/Loader";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Loader,
      Login,
      Register,
      Result,
      Home
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        header: null
      },
      mode: "modal"
    }
  )
);

export default Routes;
