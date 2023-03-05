import { StyleSheet, Text, View } from "react-native";
import { Linking } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Todo, the ultimate mobile app for keeping track of your tasks
        and to-do lists! Created by{" "}
        <Text
          style={styles.author}
          onPress={() => Linking.openURL("https://linktr.ee/ranaintizar")}
        >
          @ranaintizar
        </Text>
        , Todo allows you to easily organize your daily routine, set priorities
        for your tasks, and make sure you never forget an important deadline
        again. Our user-friendly interface allows you to quickly create, edit,
        and complete tasks, and our powerful notification system ensures that
        you stay on top of your schedule. Whether you're a busy professional or
        a student with a lot on your plate, Todo has everything you need to stay
        organized and productive. Download now and start making every day more
        efficient with Todo!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  text: {
    color: "dodgerblue",
    fontSize: 25,
    textAlign: "justify",
  },
  author: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default About;
