import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";

export default function Login() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!fontsLoaded) {
    return null; // Pode adicionar um componente de carregamento aqui se necessário
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.conteiner}>
        <Image
          source={require("../../../assets/imgLogoHome.png")}
          style={{ width: 340, marginTop: 140 }}
          resizeMode="contain"
        />
        <View style={styles.conteinerInputs}>
          <Text style={styles.txtInputs}>Email:</Text>
          <View style={styles.Inputs}>
            <Image
              source={require("../../../assets/emailImg.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              fontSize={22}
              placeholder="seu@email.com"
              placeholderTextColor={"#E6E3F6"}
            />
          </View>
        </View>
        <View style={styles.conteinerInput}>
          <Text style={styles.txtInputs}>Senha:</Text>
          <View style={styles.Inputs}>
            <Image
              source={require("../../../assets/senhaImg.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input2}
              fontSize={22}
              placeholder="**********"
              placeholderTextColor={"#E6E3F6"}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Image
                source={
                  passwordVisible
                    ? require("../../../assets/olhoFechado.png")
                    : require("../../../assets/olhoAberto.png")
                }
                resizeMode="contain"
                style={{ width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  conteinerInputs: {
    width: "80%",
    marginTop: 40,
  },
  conteinerInput: {
    marginTop: 10,
    width: "80%",
  },
  Inputs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 15,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
  },
  input: {
    marginLeft: 10,
    color: "#CAC1F9",
    display: "flex",
    justifyContent: "center",
    width: "85%",
  },
  input2: {
    marginLeft: 10,
    color: "#CAC1F9",
    display: "flex",
    justifyContent: "center",
    width: "75%",
  },
  txtInputs: {
    marginBottom: 3,
    fontSize: 40,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
});
