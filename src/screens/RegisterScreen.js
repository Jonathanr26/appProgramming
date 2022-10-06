import * as React from "react";
import * as RN from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    createdAt: new Date(),
  });

  const onRegister = async () => {
    if (users.password !== users.confirmPassword) {
      return RN.Alert.alert("Las contraseñas no coinciden");
    }
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        users.email,
        users.password
      );
      const user = userCredential.user;
      console.log(user);
      navigation.navigate("LoginScreen");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }

    await addDoc(collection(db, "users"), users);
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Registrarte</RN.Text>

      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, username: text })}
        style={styles.inputContainer}
        placeholder="Nombre de usuario"
      />
      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, email: text })}
        style={styles.inputContainer}
        placeholder="Correo electrónico"
      />
      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, password: text })}
        style={styles.inputContainer}
        placeholder="Contraseña"
      />
      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, confirmPassword: text })}
        style={styles.inputContainer}
        placeholder="Confirmar contraseña"
      />

      <RN.View style={styles.buttonStyle}>
        <RN.TouchableOpacity onPress={onRegister} style={styles.button}>
          <RN.Text style={styles.buttonText}>Registrarte</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

export default RegisterScreen;

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
