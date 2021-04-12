import * as React from "react";
import { Button, StyleSheet } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to profile page"
      style={styles.btn}
      onPress={() => navigation.navigate("Profile", { name: "anurag" })}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#f2ddk4"
  }
});
