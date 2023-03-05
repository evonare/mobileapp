import { StyleSheet, Text, View } from "react-native";

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>My Todos</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    height: 70,
    backgroundColor: "dodgerblue",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 25,
    textAlign: "center",
  },
});

export default Header;
