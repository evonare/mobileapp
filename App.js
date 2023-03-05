import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import About from "./components/About";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [theme, setTheme] = useState("");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const options = {
    headerStyle: {
      borderBottomColor: theme === "dark" ? "#666" : "#3333",
      borderBottomWidth: theme === "dark" ? 1 : 2,
      backgroundColor: theme === "dark" ? "#000" : "#fff",
    },
    headerTintColor: "dodgerblue",
    headerTitleStyle: {
      fontWeight: "bold",
      marginLeft: "50%",
    },
    drawerActiveBackgroundColor: "dodgerblue",
    drawerActiveTintColor: "#fff",
    drawerInactiveTintColor: "dodgerblue",
  };

  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          ...options,
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: "About",
          ...options,
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => (
  <NavigationContainer>
    <DrawerNavigation />
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default App;
