import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false
};

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
