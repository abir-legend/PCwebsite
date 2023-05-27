const db = firebase.database();

function getUrlSearchParams() {
    const searchParams = new URLSearchParams(window.location.search);

    const params = {};
  
    for (const [key, value] of searchParams) {
      params[key] = value;
    }
  
    return params;
  }

const params = getUrlSearchParams();
// getdataparams(params);
console.log(params);

Object.keys(params).forEach(element => {
    getpartsbyName(element, params[element], function(results) { console.log(results);});

});

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