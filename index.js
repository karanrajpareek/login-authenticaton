const user_con = document.querySelector(".user-container");
const regis_btn = document.querySelector(".registration-btn");
const login_btn = document.querySelector(".login-btn");
const register_button = document.querySelector(".naya")

regis_btn.addEventListener("click" , ()=>{
    user_con.classList.add("login-section--display");
})
login_btn.addEventListener("click" , ()=>{
    user_con.classList.remove("login-section--display");
})



register_button.addEventListener("click" , (e)=>{
    event.preventDefault();
var email = document.getElementById('email').value;
var Username = document.getElementById('username').value;
var password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
alert('user-created');
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// ..
});
})


// const firebaseConfig = {
//     apiKey: "AIzaSyBCHIVvTDNqBYUba5R19QUe809ebBHj3Wo",
//     authDomain: "login-authentication-8442b.firebaseapp.com",
//     projectId: "login-authentication-8442b",
//     storageBucket: "login-authentication-8442b.appspot.com",
//     messagingSenderId: "215019576415",
//     appId: "1:215019576415:web:944c9d9d290d6904810fea"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// //intialise variables
//   const auth = firebase.auth();
//   const database = firebase.database();


//   function register_btn(){
//     email = document.getElementById("email").value;
//     password = document.getElementById("password").value;
//     name = document.getElementById("name").value;
//   };

//   if (validate_Email(email)==false || validate_password(password)==false){
//     alert("email is outto line!")
//   }

//   auth.createUserWithEmailAndPassword(email, password)
//   .then(function(userCredential) {
//     var user = userCredential.user;
//     alert("User created successfully!"); // Alert or handle success appropriately
//   })
//   .catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage); // Alert or handle the error appropriately
//   });



//   function validate_Email(email) {
//     const expression = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
//     if  (expression.test(email)==true){
//         return console.log("email is not good");
//     }else{
//        return console.log("email is not good");
//     }
//    }
//    function validate_password(password){
//     if(password<6){
//         return false
//     }else {
//         return true
//     }
//    }
