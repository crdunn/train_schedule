  // var config = {
  //   apiKey: "AIzaSyCrU6bBWJ-rkA80ytYVZl9mrFpk0N3zgYs",
  //   authDomain: "myfirstproject-abadd.firebaseapp.com",
  //   databaseURL: "https://myfirstproject-abadd.firebaseio.com",
  //   projectId: "myfirstproject-abadd",
  //   storageBucket: "myfirstproject-abadd.appspot.com",
  //   messagingSenderId: "159759071992"
  // };
  // firebase.initializeApp(config);

i = 4









$("#submit-new").on("click", function(event){
	event.preventDefault();

	var newName = $("#new-name").val();
	var newDest = $("#new-destination").val();
	var newFirst = $("#new-first").val();
	var newFreq = $("#new-frequency").val();

	$("#tableBody").append('<tr><th scope="row">'+newName+'</th><td id="dest'+i+'">'+newDest+'</td><td id="freq'+i+'">#</td><td id="next3">00:00</td><td id="away'+i+'">'+i+'</td></tr>');
	i++
	
})