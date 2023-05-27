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

params.keys().forEach(element => {
    getpartsbyName(element, params[element], function(results) { console.log(results);});

});
