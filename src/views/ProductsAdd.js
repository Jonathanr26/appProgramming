import React, { useState } from "react";
import { Button, ScrollView, TextInput, View, StyleSheet } from "react-native";

const ProductsAdd = (props) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
  });

  const changeText = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const Add = () => {
    console.log(state);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Name of products"
          onChangeText={(value) => changeText("name", value)}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Description of products"
          onChangeText={(value) => changeText("description", value)}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Price of products"
          onChangeText={(value) => changeText("price", value)}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          color="#779000"
          backgroundColor="#ffffff"
          title="Add products"
          onPress={() => Add()}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          color="#ff7ff7"
          title="back"
          onPress={() => props.navigation.navigate("Products")}
        />
      </View>
    </ScrollView>
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
    padding: 10,
  },
  viewButton: {
    flex: 1,
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff2cc",
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 5,
    height: 40,
  },
  button: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsAdd;
