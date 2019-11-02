/* eslint-disable comma-dangle */
import { createAppContainer, createStackNavigator } from "react-navigation";
// import Loader from "./screens/Loader";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Result from "./screens/Result";

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
      initialRouteName: "Loader",
      defaultNavigationOptions: {
        header: null
      },
      mode: "modal"
    }
  )
);

export default Routes;
