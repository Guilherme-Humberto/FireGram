import * as firebase from 'firebase'
import 'firebase/storage'
import config from '../config/index.json'

var firebaseConfig = {
    apiKey: config.KEY,
    authDomain: config.AUTHDOMAIN,
    databaseURL: config.DATABASEURL,
    projectId: config.PROJECTID,
    storageBucket: config.STORAGEBUCKET,
    messagingSenderId: config.MESSAGINGSENDERID,
    appId: config.APPID
  };
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig)

const projectStorage = firebase.default.storage();
const projectFireStorage = firebase.default.firestore();
const timestamp = firebase.default.firestore.FieldValue.serverTimestamp;

export { projectFireStorage, projectStorage, timestamp }