function getAllParameters() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const parameters = {};
    
    for (const [paramName, paramValue] of urlSearchParams) {
      parameters[paramName] = paramValue;
    }
    
    return parameters;
  }
  
getAllParameters();