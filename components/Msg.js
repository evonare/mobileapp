import { StyleSheet, View, Text, Button } from "react-native";

const Msg = ({ delMsg, addMsg, button, btnText, btnOnPress }) => {
  return (
    <View
      style={
        (delMsg != null && styles.delMsg.container) ||
        (addMsg != null && styles.addMsg.container)
      }
    >
      <Text
        style={
          (delMsg != null && styles.delMsg.text) ||
          (addMsg != null && styles.addMsg.text)
        }
      >
        {delMsg || addMsg}
      </Text>
      {button && <Button title={btnText} onPress={() => btnOnPress()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  delMsg: {
    container: {
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: "red",
      borderRadius: 10,
      bottom: 15,
      shadowColor: "red",
      elevation: 7,
    },
    text: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  addMsg: {
    container: {
      position: "absolute",
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "#1e90ff",
      borderRadius: 5,
      bottom: 10,
    },
    text: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
});

export default Msg;
