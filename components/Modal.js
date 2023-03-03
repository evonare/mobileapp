import { StyleSheet, Text, Modal, View, TouchableOpacity } from "react-native";

const ModalView = ({ isVisible, setVisible, todo }) => {
  return (
    <Modal visible={isVisible} animationType="slide" style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{todo.title}</Text>
          <Text style={styles.desc}>{todo.desc}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Added on</Text>
            <Text style={styles.date}>{todo.date}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => setVisible(false)}
        >
          <Text style={styles.button}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    position: "relative",
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  content: {
    justifyContent: "flex-start",
    gap: 20,
    paddingHorizontal: 20,
    position: "relative",
    height: 400,
    width: "100%",
  },
  title: { fontWeight: "bold", fontSize: 30, color: "#666" },
  desc: { fontSize: 20, color: "#666" },
  dateContainer: {
    position: "absolute",
    marginTop: 20,
    bottom: 10,
    left: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: { fontSize: 17, color: "#666" },
  btnContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 8,
    position: "absolute",
    bottom: 20,
    width: 150,
  },
  button: {
    fontSize: 20,
    color: "white",
  },
});

export default ModalView;
