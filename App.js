import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home";
import About from "./components/About";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
        headerStyle: {
          borderBottomColor: "#3333",
          borderBottomWidth: 2,
        },
        drawerActiveBackgroundColor: "dodgerblue",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "dodgerblue",
        headerTintColor: "dodgerblue",
        headerTitleStyle: {
          fontWeight: "bold",
          marginLeft: "50%",
        },
      }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{
        title: "About",
        headerStyle: {
          borderBottomColor: "#3333",
          borderBottomWidth: 2,
        },
        headerTintColor: "dodgerblue",
        headerTitleStyle: {
          fontWeight: "bold",
          marginLeft: "50%",
        },
        drawerActiveBackgroundColor: "dodgerblue",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "dodgerblue",
      }}
    />
  </Drawer.Navigator>
);

const App = () => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);

export default App;
