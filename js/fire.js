// console.log(app,db);
const db = firebase.database();

function searchValueInDatabase(searchValue) {
  const ref = db.ref('/cpu'); // Reference to the 'cpu' node in the database

  ref.once('value', (snapshot) => {
    snapshot.forEach((brandSnapshot) => {
      const brand = brandSnapshot.key; // Get the brand key
      brandSnapshot.forEach((generationSnapshot) => {
        const generation = generationSnapshot.key; // Get the generation key
        generationSnapshot.forEach((modelSnapshot) => {
          const model = modelSnapshot.key; // Get the model key
          const data = modelSnapshot.val(); // Access the data
          console.log(model,data);

          // Check if the searchValue exists anywhere in the data
          const isSearchValueFound = Object.values(data).some((value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchValue.toLowerCase())
          );
          console.log(isSearchValueFound);
          if (isSearchValueFound) {
            console.log(`Brand: ${brand}, Generation: ${generation}, Model: ${model}`);
            console.log(data);
          }
        });
      });
    });
  })
  .catch((error) => {
    console.error('Error searching in database:', error);
  });
}


function getpartsbyName(type,name,callback) {
  db.ref(type).orderByChild('name').equalTo(name).once('value')
    .then(function(snapshot) {
      // Iterate over the query results
      snapshot.forEach(function(childSnapshot) {
        let key = childSnapshot.key;
        var value = childSnapshot.val();
        console.log(value);
        callback(value);
      });
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}

// 
//  usage
//  getpartsbyName('cpu', 'searchTerm', function(results) { console.log(results);});
// 


function getImage(type, name, callback) {
  db.ref(type)
    .orderByChild('name')
    .equalTo(name)
    .once('value')
    .then(function(snapshot) {
      console.log(snapshot.val());
      let image = '';
      snapshot.forEach(function(childSnapshot) {
        const value = childSnapshot.val();
        image = value['image'];
        console.log(type,name,image);
      });
      callback(image);
    })
    .catch(function(error) {
      console.error('Error:', error);
      callback("https://media.istockphoto.com/id/1204740322/photo/cpu.jpg?s=612x612&w=0&k=20&c=DSjrMlrtuD42yC5XHtpoc2mqGEYEjk-B-JTDK4McTK8=");
    });
}

function getLabel(type,callback) {
  db.ref(type)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      const firstDataKey = Object.keys(data)[0];
      console.log(data);
      db.ref(type)
        .child(firstDataKey)
        .once('value')
        .then((snapshot) => {
          const randomData = snapshot.val();
          const randomDataKeys = Object.keys(randomData);
          console.log(randomData, randomDataKeys);
          callback(randomDataKeys);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}


// getLabel('cpu',function(params) {
//   console.log(params)
// })
  
