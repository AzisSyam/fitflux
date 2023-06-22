import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonToDashboard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Dashboard")}
      style={styles.buttonToDashboard}
    >
      <Image
        source={require("../../../assets/images/arrow.png")}
        style={styles.imageButton}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonToDashboard: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 100,
    transform: [{ scale: 1.1 }, { rotate: "180deg" }],
    shadowColor: "#88888",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    elevation: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    position: "absolute",
    left: 30,
    bottom: 20,
  },
  imageButton: {
    width: 22,
    height: 13,
  },
});

export default ButtonToDashboard;
