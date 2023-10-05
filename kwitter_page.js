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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function send()
{

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

        name:user_name,
        message:msg,
        like:0
    });


    document.getElementById("msg").calue = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

