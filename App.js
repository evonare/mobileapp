import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React Native",
      desc: "This is my application",
      key: Math.random().toString(),
      date: new Date().toString(),
    },
  ]);

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
      <View style={styles.container}>
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoContainer onSwipeRight={handleSwipeRight} todos={todos} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
  },
  listContainer: {
    marginTop: 50,
    position: "relative",
  },
  list: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  listItem: {
    color: "dodgerblue",
    fontSize: 20,
  },
});

export default App;
