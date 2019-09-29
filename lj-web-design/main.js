// Initialize Firebase (ADD YOUR OWN DATA)
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAINIJGxtDO0S4FrDQBoXiOptrJFjJa-Xg",
  authDomain: "ljwebdesign-a7db8.firebaseapp.com",
  databaseURL: "https://ljwebdesign-a7db8.firebaseio.com",
  projectId: "ljwebdesign-a7db8",
  storageBucket: "",
  messagingSenderId: "213597767693",
  appId: "1:213597767693:web:adc9b1c832527b86a06d44",
  measurementId: "G-ZC62S0WQ1H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();  

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var service = getInputVal('service');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,email, service, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, service, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    service: service,
    email: email,
    message: message
  });
}