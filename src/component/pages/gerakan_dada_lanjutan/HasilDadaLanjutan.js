import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import muatDataHistory from "../../../utils/muatDataHistory";
import tambahDataHistory from "../../../utils/tambahDataHistory";

const HasilDadaLanjutan = ({ route }) => {
  const navigation = useNavigation();
  const { menitDurasiAkhir, detikDurasiAkhir } = route.params;
  const [historyLatihan, setHistoryLatihan] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const history = {
    jenisLatihan: "Dada",
    tingkatanLatihan: "Lanjutan",
    menitDurasiAkhir: menitDurasiAkhir,
    detikDurasiAkhir: detikDurasiAkhir,
    kalori: 150,
    tanggal: new Date(),
  };

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      Alert.alert("History Anda telah disimpan!");
      tambahDataHistory(history, historyLatihan);
    }
  };

  useEffect(() => {
    muatDataHistory();
  });

  const delayAndNavigateToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../../../../assets/images/dadaExercise.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textMain}>LATIHAN SELESAI</Text>
        <View style={styles.containerTextBottom}>
          <Text style={styles.textMainBottom}>Dada</Text>
          <View style={styles.circle}></View>
          <Text style={styles.textMainBottom}>Lanjutan</Text>
        </View>
      </View>
      <View style={styles.containerInformation}>
        <View style={styles.containerInformationLeft}>
          <Text style={styles.textInformation}>5</Text>
          <Text style={styles.textInformationBottom}>Latihan</Text>
        </View>
        <View style={styles.containerInformationMiddle}>
          <Text style={styles.textInformation}>150</Text>
          <Text style={styles.textInformationBottom}>Kalori</Text>
        </View>
        <View style={styles.containerInformationRight}>
          <Text style={styles.textInformation}>
            {String(menitDurasiAkhir).padStart(2, "0")} :{" "}
            {String(detikDurasiAkhir).padStart(2, "0")}
          </Text>
          <Text style={styles.textInformationBottom}>Durasi</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.buttonToDashboard2}>
        <Text style={styles.textButton}>Simpan history latihan ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          delayAndNavigateToDashboard();
        }}
        style={styles.buttonToDashboard}
      >
        <Image
          source={require("../../../../assets/images/arrow.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    position: "relative",
    gap: 50,
  },
  containerImage: {
    width: "100%",
    height: 352,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    top: -50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  circle: {
    width: 3,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  containerText: {
    width: "75%",
    height: 100,
    top: -50,
    gap: 20,
  },
  textMain: {
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    color: "white",
  },
  textMainBottom: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "white",
  },
  containerTextBottom: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  containerInformation: {
    width: "75%",
    height: 100,
    backgroundColor: "#7787F4",
    borderRadius: 12,
    top: -70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#7787F4",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    transform: [{ scale: 0.9 }],
  },
  textInformation: {
    fontSize: 24,
    fontFamily: "Roboto-Bold",
    color: "white",
  },
  textInformationBottom: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "white",
  },
  containerInformationLeft: {
    display: "flex",
    gap: 10,
  },
  containerInformationMiddle: {
    display: "flex",
    gap: 10,
  },
  containerInformationRight: {
    display: "flex",
    gap: 10,
  },
  buttonToDashboard: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 100,
    transform: [{ scale: 1.1 }, { rotate: "180deg" }],
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 50,
    bottom: 70,
  },
  buttonToDashboard2: {
    width: 190,
    height: 65,
    backgroundColor: "#FC8877",
    borderRadius: 12,
    shadowColor: "#FC8877",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 50,
    bottom: 70,
  },
  textButton: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: "#fff",
  },
  imageButton: {
    width: 22,
    height: 13,
  },
});

export default HasilDadaLanjutan;
