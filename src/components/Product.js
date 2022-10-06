import * as React from "react";
import * as RN from "react-native";
import { db } from "../config/firebaseConfig";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

const Product = ({ id, username, email, password }) => {
  const onDelete = () => {
    const docRef = doc(db, "users", id);
    deleteDoc(docRef);
  };

  const onEdit = () => {
    const docRef = doc(db, "users", id);
    updateDoc(docRef, {
      username: "Nombre ramdom",
    });
  };

  return (
    <RN.View>
      <RN.View style={styles.productContainer}>
        <RN.View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <RN.Text style={styles.name}>{username}</RN.Text>
          <AntDesign
            style={styles.buttonDelete}
            onPress={onDelete}
            name="delete"
            size={24}
            color="black"
          />
        </RN.View>
        {username ? (
          <RN.Text style={styles.text}>Nombre: {username}</RN.Text>
        ) : null}
        <RN.Text style={styles.text}>Correo: {email}</RN.Text>
        <RN.Text style={styles.text}>Contraseña: {password}</RN.Text>
        <RN.TouchableOpacity onPress={onEdit} style={styles.button}>
          <RN.Text style={styles.buttonText}>Editar</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

export default Product;

const styles = RN.StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDelete: {
    backgroundColor: "#FF0404",
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
