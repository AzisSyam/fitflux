import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";

export default muatDataHistory = async () => {
  const currentUser = firebase.auth().currentUser?.uid;
  const userToken = await AsyncStorage.getItem("userToken");
  const userId = userToken || currentUser;
  if (userId) {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          if (snapshot.data().historyLatihan.length > 6) {
            setHistoryLatihan(snapshot.data().historyLatihan.pop());
          }
        } else {
          console.log("user does not exist");
        }
      });
  }
};
