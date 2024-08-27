import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteiner_header}>
        <View style={styles.conteiner_nav}>
          <Image
            source={require("../../../assets/miniLogo.png")}
            style={{}}
            resizeMode="contain"
          />
          <View style={styles.nav_links}>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../../../assets/lineHeader.png")}
          style={{ marginTop: 10 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.conteiner_body}>
        <View style={styles.up_body}>
          <Text style={styles.txt_msm_usuario}>Olá ?????</Text>
          <TouchableOpacity style={styles.bt_gerar_dieta}>
            <Text style={styles.txt_bt_gerarDieta}>Gerar Dieta</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView_body}
          showsVerticalScrollIndicator={false}
        >
          {/* Aqui você pode adicionar o conteúdo rolável */}
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>
          <Text>Conteúdo 1</Text>
          <Text>Conteúdo 2</Text>
          <Text>Conteúdo 3</Text>

          {/* Adicione mais conteúdo conforme necessário */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    top: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  conteiner_header: {
    width: "80%",
    alignItems: "center",
  },

  touchableopacity_header: {
    height: 50,
  },

  conteiner_nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nav_links: {
    display: "flex",
    flexDirection: "row",
    top: 8,
  },

  txt_links: {
    color: "#B5B2C6",
    fontSize: 34,
    paddingHorizontal: 10,
    fontFamily: "BreeSerif_400Regular",
  },

  conteiner_body: {
    top: 10,
    width: "85%",
  },

  up_body: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txt_msm_usuario: {
    color: "#B5B2C6",
    fontSize: 34,
    fontFamily: "BreeSerif_400Regular",
  },

  bt_gerar_dieta: {
    backgroundColor: "#B5B2C6",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 20,
    shadowColor: "#747281",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 4,
    shadowRadius: 3,
  },

  txt_bt_gerarDieta: {
    color: "#E6E3F6",
    fontSize: 20,
    fontFamily: "BreeSerif_400Regular",
  },

  scrollView_body: {
    marginTop: 20,
    backgroundColor: "red",
    height: 600,
    // Adicione outras estilizações para o scrollView se necessário
  },
});
