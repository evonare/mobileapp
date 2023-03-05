import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from "react-native";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [theme, setTheme] = useState("");
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const handleTitleChange = (val) => {
    setText(val);
  };

  const handleDescChange = (val) => {
    setDesc(val);
  };

  const handleSubmit = () => {
    if (text === "") {
      Alert.alert("OOPs!", "Please enter a todo Title", [{ title: "Ok" }]);
    } else if (desc === "") {
      Alert.alert("OOPs!", "Please enter a todo Description", [
        { title: "Ok" },
      ]);
    } else {
      addTodo(text, desc);
    }
    setText("");
    setDesc("");
  };

  return (
    <View
      style={
        theme === "dark"
          ? styles.darkTheme.container
          : styles.lightTheme.container
      }
    >
      <TextInput
        style={
          theme === "dark" ? styles.darkTheme.input : styles.lightTheme.input
        }
        placeholder="Todo title..."
        value={text}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={
          theme === "dark" ? styles.darkTheme.input : styles.lightTheme.input
        }
        placeholder="Todo description..."
        value={desc}
        onChangeText={handleDescChange}
      />
      <TouchableOpacity
        style={
          theme === "dark"
            ? styles.darkTheme.btnContainer
            : styles.lightTheme.btnContainer
        }
        onPress={handleSubmit}
      >
        <Text
          style={
            theme === "dark" ? styles.darkTheme.text : styles.lightTheme.text
          }
        >
          Add Todo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lightTheme: {
    container: { width: "80%", marginTop: 40, gap: 20 },
    input: {
      padding: 10,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      fontSize: 20,
    },
    btnContainer: {
      backgroundColor: "dodgerblue",
      paddingVertical: 12,
      borderRadius: 10,
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  darkTheme: {
    container: { width: "80%", marginTop: 40, gap: 20 },
    input: {
      padding: 10,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      fontSize: 20,
      color: "dodgerblue",
      backgroundColor: "white",
      borderRadius: 10,
    },
    btnContainer: {
      backgroundColor: "dodgerblue",
      paddingVertical: 12,
      borderRadius: 10,
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  },
});

export default AddTodo;
