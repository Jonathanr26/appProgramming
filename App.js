import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  Modal,
  Pressable,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";

const Separator = () => <View style={stylePage.separator} />;

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={stylePage.container}>
      <View>
        <Image
          style={stylePage.tinyLogo}
          source={{
            uri: "https://logoeps.com/wp-content/uploads/2013/03/linkin-park-band-vector-logo1.png",
          }}
        />
        <Text style={stylesGeneral}>Componentes básicos</Text>
        <Text>Estilo:</Text>
        <Text style={stylePage.code}>
          {JSON.stringify(stylesGeneral, null, 2)}
        </Text>
      </View>

      <Separator />

      <View style={stylePage.fixToText}>
        <Button title="Left button" onPress={() => Alert.alert("Left")} />
        <Button title="Right button" onPress={() => Alert.alert("Right")} />
      </View>

      <View style={stylePage.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#ACFF72" }}
          thumbColor={isEnabled ? "#1EFF03" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styleModal.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styleModal.centeredView}>
            <View style={styleModal.modalView}>
              <Text style={styleModal.modalText}>Mostrando la modal!</Text>
              <Pressable
                style={[styleModal.button, styleModal.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styleModal.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styleModal.button, styleModal.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styleModal.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styleModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#00FFFB",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#00FF80",
  },
  buttonClose: {
    backgroundColor: "#FF1700",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const stylePage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#E1E1E8",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#A36AFB",
    backgroundColor: "#FFFFED",
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const styleTypography = StyleSheet.create({
  header: {
    color: "#E100E5",
    fontSize: 30,
    marginBottom: 36,
  },
});

const stylesGeneral = StyleSheet.flatten([
  stylePage.text,
  styleTypography.header,
]);


export default App;
