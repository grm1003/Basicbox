

(function(){
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgPsydyAxdThu94RuUPbvWJNzNPOvNHi0",
    authDomain: "basicbox-mat.firebaseapp.com",
    projectId: "basicbox-mat",
    storageBucket: "basicbox-mat.appspot.com",
    messagingSenderId: "1008008132250",
    appId: "1:1008008132250:web:204ed31b5d3d9dcaf35123",
    measurementId: "G-8MV0E7QBLF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}) ()