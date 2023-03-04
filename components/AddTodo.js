import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo title..."
        value={text}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Todo description..."
        value={desc}
        onChangeText={handleDescChange}
      />
      <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AddTodo;
