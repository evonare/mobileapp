import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ModalView from "./Modal";

import TodoCard from "./TodoCard";

const TodoContainer = ({ todos, onSwipeRight }) => {
  const [isVisible, setVisible] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (todos.length === 0) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
    }
  }, [todos]);

  const renderItem = ({ item }) => (
    <TodoCard
      todo={item}
      onSwipeRight={() => onSwipeRight(item.key)}
      onPress={setVisible}
    />
  );

  return (
    <View style={styles.todoContainer}>
      <ModalView isVisible={isVisible} setVisible={setVisible} />
      <View style={styles.container}>
        <Text style={styles.note}>Swipe Right to Delete</Text>
        {showMsg && (
          <Text style={styles.error}>
            Your todo list is waiting for some tasks to be added.
          </Text>
        )}
        <FlatList data={todos} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 70,
    gap: 10,
    paddingHorizontal: 10,
  },
  note: {
    color: "#999",
    marginBottom: 10,
  },
  error: { color: "#999", marginTop: 100, fontSize: 20, textAlign: "center" },
});

export default TodoContainer;
