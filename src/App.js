import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, ProfileScreen, Contact } from "./comp";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
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
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
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
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
