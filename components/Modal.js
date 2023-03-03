import {
  StyleSheet,
  Text,
  Modal,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const ModalView = ({ isVisible, setVisible }) => {
  return (
    <Modal visible={isVisible} animationType="slide" style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.desc}>This is Description</Text>
          <Text style={styles.date}>Added on this Date</Text>
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
  date: {
    position: "absolute",
    fontSize: 15,
    color: "#666",
    marginTop: 20,
    bottom: 10,
    right: 20,
  },
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
