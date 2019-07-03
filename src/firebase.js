
import firebase from 'firebase'

// Get a RTDB instance
const config = {
  apiKey: "AIzaSyBY_IsELCEbpO8RDqe_XSixxzGFJOasFqY",
 authDomain: "vue-firbase-b1d28.firebaseapp.com",
 databaseURL: "https://vue-firbase-b1d28.firebaseio.com",
 projectId: "vue-firbase-b1d28",
 storageBucket: "vue-firbase-b1d28.appspot.com",
 messagingSenderId: "86828027087",
 appId: "1:86828027087:web:d58cb2d64dc7c287"

}
const app = firebase.initializeApp(config)
export const db = app.database();

/*export const vocabularyRef = db.ref('vocabulary');*/
