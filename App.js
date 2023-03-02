import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Buy groceries for the week", key: 0 },
    { title: "Call the bank to inquire about a loan", key: 1 },
    { title: "Schedule a dentist appointment", key: 2 },
    { title: "Respond to emails from clients", key: 3 },
    { title: "Pick up dry cleaning", key: 4 },
    { title: "Research and book a vacation for the summer", key: 5 },
    { title: "Organize paperwork and file documents", key: 6 },
    { title: "Write a blog post for company website", key: 7 },
    { title: "Attend a networking event", key: 8 },
    { title: "Go for a run in the park", key: 9 },
    { title: "Meet with team to discuss project updates", key: 10 },
    { title: "Renew gym membership", key: 11 },
    { title: "Pay bills and update budget spreadsheet", key: 12 },
    { title: "Plan a surprise birthday party for a friend", key: 13 },
    { title: "Research and purchase new software for work tasks.", key: 14 },
  ]);

  const handleOnPress = (id) => {
    setTodos(todos.filter((todo) => todo.key !== id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleOnPress(0)}
      ></TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.list}
            onPress={() => handleOnPress(item.key)}
            onLongPress={() => setId(null)}
          >
            <Text style={styles.listItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
        style={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    paddingTop: 32,
    paddingHorizontal: 20,
    height: "100%",
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
