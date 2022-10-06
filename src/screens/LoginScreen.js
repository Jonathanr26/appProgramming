import * as React from "react";
import * as RN from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [users, setUsers] = React.useState({
    email: "",
    password: "",
    createdAt: new Date(),
  });

  const onLogin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        users.email,
        users.password
      );
      const user = userCredential.user;
      console.log(user);
      navigation.navigate("HomeScreen");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Iniciar Sesión</RN.Text>

      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, email: text })}
        style={styles.inputContainer}
        value={users.email}
        placeholder="Correo electrónico"
      />
      <RN.TextInput
        onChangeText={(text) => setUsers({ ...users, password: text })}
        value={users.password}
        style={styles.inputContainer}
        placeholder="Contraseña"
      />
      <RN.View style={styles.buttonStyle}>
        <RN.TouchableOpacity onPress={onLogin} style={styles.button}>
          <RN.Text style={styles.buttonText}>Iniciar Sesión</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
      <RN.View style={styles.text2}>
        <RN.Text>¿No tienes cuenta?</RN.Text>
        <RN.TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <RN.Text style={styles.resgisterText}> Regístrate</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};

export default LoginScreen;

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
  buttonAdd: {
    backgroundColor: "#0FA5E9",
    padding: 8,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTextAdd: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  text2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  resgisterText: {
    color: "#0FA5E9",
    fontWeight: "bold",
    fontSize: 16,
  },
});
