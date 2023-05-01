import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  firebase: {
    projectId: 'livresque-189a2',
    appId: '1:1056478499825:web:ec8fca75e717d9fe732a50',
    storageBucket: 'livresque-189a2.appspot.com',
    apiKey: 'AIzaSyD38gOUD5aoHoas9qREWhz8UgsI_6WirJA',
    authDomain: 'livresque-189a2.firebaseapp.com',
    messagingSenderId: '1056478499825',
    measurementId: 'G-GBJY22LP1C',
  },
  production: true
};
const firebaseConfig = {
  apiKey: "AIzaSyD38gOUD5aoHoas9qREWhz8UgsI_6WirJA",
  authDomain: "livresque-189a2.firebaseapp.com",
  projectId: "livresque-189a2",
  storageBucket: "livresque-189a2.appspot.com",
  messagingSenderId: "1056478499825",
  appId: "1:1056478499825:web:ec8fca75e717d9fe732a50",
  measurementId: "G-GBJY22LP1C"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
