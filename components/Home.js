import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React Native",
      desc: "This is my application",
      key: Math.random().toString(),
      date: new Date().toString(),
    },
  ]);
  const [theme, setTheme] = useState("");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    AsyncStorage.getItem("todos").then((storedTodos) => {
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    });
  }, []);

  const handleSwipeRight = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.key !== id));
  };

  const addTodo = (text, desc) => {
    setTodos((prevTodos) => {
      return [
        {
          title: text,
          key: Math.random().toString(),
          desc: desc,
          date: new Date().toLocaleString(),
        },
        ...prevTodos,
      ];
    });
  };

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={
          theme === "dark"
            ? styles.darkTheme.container
            : styles.lightTheme.container
        }
      >
        <AddTodo addTodo={addTodo} />
        <TodoContainer onSwipeRight={handleSwipeRight} todos={todos} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  lightTheme: {
    container: {
      backgroundColor: "#fff",
      height: "100%",
      alignItems: "center",
    },
  },
  darkTheme: {
    container: {
      backgroundColor: "#000",
      height: "100%",
      alignItems: "center",
    },
  },
});

export default Home;
