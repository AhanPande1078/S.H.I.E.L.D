var firebaseConfig = {
      apiKey: "AIzaSyD7yBUt61NM_qzUYWq9hiee2tVHWq9SZEI",
      authDomain: "shield-c84a3.firebaseapp.com",
      databaseURL: "https://shield-c84a3-default-rtdb.firebaseio.com",
      projectId: "shield-c84a3",
      storageBucket: "shield-c84a3.appspot.com",
      messagingSenderId: "388215901496",
      appId: "1:388215901496:web:fabfc2acdeb0a8a299c5cd",
      measurementId: "G-2N8V4LG34P"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
