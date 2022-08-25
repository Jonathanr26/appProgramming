import React from "react";
import { Button, View, StyleSheet } from "react-native";

const Products = (props) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="ProductsAdd"
        onPress={() => props.navigation.navigate("ProductsAdd")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Products;
