const firebaseConfig = {

      apiKey: "AIzaSyAhlRfHK-1n47-CSKd5k5mbCox2UrFmBuw",
    
      authDomain: "kwitter-5c6d0.firebaseapp.com",
    
      databaseURL: "https://kwitter-5c6d0-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-5c6d0",
    
      storageBucket: "kwitter-5c6d0.appspot.com",
    
      messagingSenderId: "188625361169",
    
      appId: "1:188625361169:web:aa0deb8e62b22589af94b0"
    
    };
    

    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!" ; 

function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class'room_name id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "kwitter.html;"
}






