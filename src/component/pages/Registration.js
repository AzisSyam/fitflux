import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import firebase from "../../../config";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = async (email, password, firstName, lastName) => {
    if (!email || !password || !firstName || !lastName) {
      alert("Mohon lengkapi semua input sebelum mendaftar");
      return;
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      await currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: "https://fitflux-b7e65.firebaseapp.com",
      });
      alert("Akun telah terdaftar silahkan login");
      await firebase.firestore().collection("users").doc(currentUser.uid).set({
        firstName,
        lastName,
        email,
        historyLatihan: [],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/daftar.png")}
        style={styles.image}
      />

      <View style={styles.containerRegist}>
        <Text>
          <Text style={styles.tittle}>Daftar</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          placeholderTextColor="#888"
          onChangeText={(firstName) => setFirstName(firstName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          placeholderTextColor="#888"
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.styleButton1}
          >
            <Text style={styles.textButton1}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => registerUser(email, password, firstName, lastName)}
            style={styles.styleButton2}
          >
            <Text style={styles.textButton2}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    fontFamily: "Roboto-Medium",
    fontSize: 28,
  },
  image: {
    width: 800,
    height: "70%",
    position: "absolute",
    bottom: -150,
    right: -250,
    transform: [{ scale: 0.7 }],
  },
  containerRegist: {
    width: "100%",
    height: 630,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    display: "flex",
    alignItems: "center",
    paddingTop: 70,
  },
  textInput: {
    padding: 20,
    width: 305,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#888",
    marginTop: 25,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    width: 305,
    marginTop: 25,
    justifyContent: "space-between",
  },
  styleButton1: {
    width: "45%",
    height: 70,
    borderWidth: 2,
    borderColor: "#888",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderRadius: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  styleButton2: {
    width: "45%",
    height: 70,
    borderRadius: 24,
    backgroundColor: "#293241",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textButton1: {
    color: "#444",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  textButton2: {
    color: "#ffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default Registration;
