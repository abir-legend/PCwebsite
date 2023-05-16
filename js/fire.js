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
          // console.log(model,data);

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


  
  // Call the search function with the desired search value
  searchValueInDatabase('13900');