import * as React from "react";
import { Text, StyleSheet, View, Button, ScrollView } from "react-native";

export const Contact = ({ navigation, route }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.txt}>This is {route.params.name}'s Contacts</Text>
        <Text style={styles.contact}>+21,4333433422</Text>
        <Text style={styles.contact}>+1,43334323</Text>
        <Text style={styles.contact}>+91,34433433422</Text>
        <Text style={styles.contact}>+1,77777433422</Text>
        <Text style={styles.contact}>+13,3434333422</Text>
        <Button
          title="Go to Home page"
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    margin: 20,
    textAlign: "center"
  },
  btn: {
    backgroundColor: "#fff"
  },
  contact: {
    justifyContent: "center",
    alignItem: "center",
    width: "9rem",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    cursor: "pointer"
  }
});
