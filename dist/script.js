var config = {
  apiKey: "AIzaSyBCtd9fp8S81iOBY1OdV7QSrfcxvlhAd_c",
  authDomain: "mooplay-id.firebaseapp.com",
  databaseURL: "https://mooplay-id-default-rtdb.firebaseio.com",
  projectId: "mooplay-id",
  storageBucket: "mooplay-id.appspot.com",
  messagingSenderId: "701085426698",
  appId: "1:701085426698:web:b999805a86f8cd39552bf3",
  measurementId: "G-HG9GWLVVF1" };

firebase.initializeApp(config);

const counter = document.getElementsByClassName("app__counter")[0];
const counterRef = firebase.database().ref("incremental_counter");
counterRef.on("value", snapshot => {
  counter.textContent = snapshot.val();
});

const incrementButton = document.getElementsByClassName("app__increment")[0];
incrementButton.addEventListener("click", () => {
  counterRef.transaction(val => val + 1, err => {
    if (err) {
      alert(err);
    }
  });
}, false);