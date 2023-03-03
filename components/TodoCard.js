import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableWithoutFeedback,
} from "react-native";

const TodoCard = ({ todo, onSwipeRight, onPress }) => {
  const [position, setPosition] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        setPosition(gestureState.dx);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > 100) {
          onSwipeRight();
        } else {
          setPosition(0);
        }
      },
    })
  ).current;

  return (
    <View
      style={[styles.container, { transform: [{ translateX: position }] }]}
      {...panResponder.panHandlers}
    >
      <TouchableWithoutFeedback
        onLongPress={() => {
          onPress((isVisible) => !isVisible);
        }}
      >
        <Text style={styles.text}>{todo.title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  text: { color: "dodgerblue", fontSize: 20 },
});

export default TodoCard;
