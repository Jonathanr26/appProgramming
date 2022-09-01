import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/Products";
import Products_add from "./src/Products_add";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Product List",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="Products_add" component={Products_add} />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <View style={styles.view}>
      <Text>Inicio!!!</Text>
    </View>
  );
};

const Config = () => {
  return (
    <View style={styles.view}>
      <Text>Configuraciones de mi app!!!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={MyStack} />
        <Tab.Screen name="Config" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#bcbcbc",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
