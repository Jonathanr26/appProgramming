import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = React.useState([]);
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RN.TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.button}
        >
          <RN.Text style={styles.buttonText}>Cerrar Sesión</RN.Text>
        </RN.TouchableOpacity>
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <RN.View style={styles.container}>
      <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <RN.Text style={styles.title}>Usuarios</RN.Text>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </RN.ScrollView>
    </RN.View>
  );
};

export default HomeScreen;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 8,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
