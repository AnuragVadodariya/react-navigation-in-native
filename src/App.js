import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen, Contact } from "./comp";

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
            textAlign: "center"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a Info. button!")}
                title="Info"
                color="#000"
                style={{ marginRight: 10 }}
              />
            )
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            headerLeft: () => (
              <Button
                onPress={() => alert("press back button")}
                title="Back"
                color="#000"
                style={{ marginRight: 10 }}
              />
            )
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
