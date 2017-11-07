  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrU6bBWJ-rkA80ytYVZl9mrFpk0N3zgYs",
    authDomain: "myfirstproject-abadd.firebaseapp.com",
    databaseURL: "https://myfirstproject-abadd.firebaseio.com",
    projectId: "myfirstproject-abadd",
    storageBucket: "myfirstproject-abadd.appspot.com",
    messagingSenderId: "159759071992"
  };
  firebase.initializeApp(config);
  var dataRef = firebase.database();

var i = 0;
var j = 0;
var newName
var newDest
var newFreq
var newFirst
var tMinutesTillTrain
var nextT


// Pulls stored data from firebase on page load and when a train is added
dataRef.ref().on("child_added", function(childSnapshot) {
  newName = childSnapshot.val().train;
  newDest = childSnapshot.val().destination;
  newFreq =  childSnapshot.val().frequency;
  newFirst = childSnapshot.val().firstTrain;
//takes data from Firebase and claculates departures and time locally
  i++

});

// Pushes new trains to Firebase
$("#submit-new").on("click", function(event){
  event.preventDefault();
  newName = $("#new-name").val();
  newDest = $("#new-destination").val();
  newFirst = $("#new-first").val();
  newFreq = $("#new-frequency").val();

  dataRef.ref().push({
    train: newName,
    destination: newDest,
    firstTrain: newFirst,
    frequency: newFreq
  });

  $("#new-name").empty();
  $("#new-destination").empty();
  $("#new-first").empty();
  $("#new-frequency").empty();

  j++;
});


// Working code from an in class assignment.
function trainCalc (){
    console.log("j="+j);

    var tFrequency = newFreq;

    var firstTime = newFirst;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    nextT = moment(nextTrain).format("hh:mm");

    //appends data to the panel div on the html body
    $("#tableBody").append('<tr><th scope="row">'+newName+'</th><td id="dest'+j+'">'+newDest+'</td><td id="freq'+j+'">'+newFreq+'</td><td id="next'+j+'">'+nextT+'</td><td id="away'+j+'">'+tMinutesTillTrain+'</td></tr>');
};  
