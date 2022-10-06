import * as React from "react";
import * as RN from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const AddProduct = () => {
  const navigation = useNavigation();
  const [newItem, setNewItem] = React.useState({
    name: "",
    price: 0,
    isSold: false,
    createdAt: new Date(),
  });

  const onSend = async () => {
    const docRef = await addDoc(collection(db, "products"), newItem);
    navigation.goBack();
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Agregar productos</RN.Text>

      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        style={styles.inputContainer}
        placeholder="Nombre del producto"
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        style={styles.inputContainer}
        placeholder="Precio"
        keyboardType="numeric"
      />
      <RN.View style={styles.buttonStyle}>
        <RN.TouchableOpacity onPress={onSend} style={styles.button}>
          <RN.Text style={styles.buttonText}>Agregar Producto</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

export default AddProduct;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "700",
  },
  inputContainer: {
    marginTop: 20,
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  buttonStyle: {
    width: "90%",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
