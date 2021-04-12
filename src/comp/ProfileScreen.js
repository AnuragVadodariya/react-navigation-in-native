import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.txt}>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Anurag Contact"
        style={styles.btn}
        onPress={() => navigation.navigate("Contact", { name: "anurag" })}
      />
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
  }
});
