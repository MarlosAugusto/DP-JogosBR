/* eslint-disable comma-dangle */
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Result from "./screens/Result";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Register,
      Result,
      Home
    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        header: null
      },
      mode: "modal"
    }
  )
);

export default Routes;
