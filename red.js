// Write data to Firebase
var userId = firebase.database().ref().child('users').push().key;
firebase.database().ref('users/' + userId).set({
  username: "John",
  email: "john@example.com"
});

// Read data from Firebase
// var usersRef = firebase.database().ref('users');
// usersRef.on('child_added', function(data) {
//   var user = data.val();
//   console.log("User:", user);
// });
// firebase.database().ref('users/' + userId).set({
//   username: "John",
//   email: "john@example.com"
// });

const db = firebase.database();

// Define a function to search for a specific value in the database
function searchValueInDatabase(searchValue) {
  const ref = db.ref('/users'); // Reference to the "users" node in the database

  // Use the orderByChild and equalTo methods to query the data
  ref.orderByChild('model')
    .equalTo(searchValue)
    .once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // Access the matching data
        const data = childSnapshot.val();
        console.log(data);
      });
    })
    .catch((error) => {
      console.error('Error searching in database:', error);
    });
}

// Call the search function with the desired search value
searchValueInDatabase('9100');