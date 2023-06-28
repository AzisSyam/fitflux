import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";

export default tambahDataHistory = async (history, historyLatihan) => {
  const currentUser = firebase.auth().currentUser?.uid;
  const userToken = await AsyncStorage.getItem("userToken");
  const userId = userToken || currentUser;
  if (userId) {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        let historyLatihan = doc.data().historyLatihan;
        if (historyLatihan.length > 6) {
          historyLatihan.pop();
        }
        historyLatihan.unshift(history);
        return doc.ref.set({ historyLatihan }, { merge: true });
      })
      .then(() => {
        console.log("panjang", historyLatihan.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
