import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../constants/colors";
import HomeScreen from "../../screens/home/HomeScreen";
import WeatherScreen from "../../screens/home/WeatherScreen";

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        backgroundColor: Colors.primary,
        height: 96,
      },
      headerTitleStyle: {
        fontSize: 32,
        fontFamily: "canela-bold",
        color: Colors.PRIMARY_DARK,
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "left",
        headerStyle: {
          height: 96,
          backgroundColor: "white",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      })}
    />
    <HomeStack.Screen
      name="Weather"
      component={WeatherScreen}
      options={({ navigation }) => ({
        title: "",
        headerTitleStyle: {
          fontSize: 32,
          fontFamily: "canela-bold",
          color: "white",
        },
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: Colors.PRIMARY_DARK,
          height: 96,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      })}
    />
  </HomeStack.Navigator>
);

export default HomeNavigator;
