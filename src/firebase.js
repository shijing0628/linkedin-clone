import firebase from 'firebase'

const firebaseConfig = {
 apiKey: "AIzaSyCaA-MlkyGAVtw0eRtgav_jXnsNSUWiSfQ",
 authDomain: "linkedin-clone-react-2000c.firebaseapp.com",
 projectId: "linkedin-clone-react-2000c",
 storageBucket: "linkedin-clone-react-2000c.appspot.com",
 messagingSenderId: "751607348147",
 appId: "1:751607348147:web:3a1c08cd654eb0dff6a9c6"
};

const firebasApp = firebase.initializeApp(firebaseConfig)
const db = firebasApp.firestore()
const auth = firebase.auth()

export { db, auth }