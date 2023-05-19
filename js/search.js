function getparameters() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const typeParam = urlSearchParams.get('parts');
    
    if (typeParam) {
      const cpuDataRef = db.ref(typeParam.toLowerCase());
      console.log(typeParam)
  
      cpuDataRef.once('value', (snapshot) => {
        const cpuData = snapshot.val();
        if (cpuData) {
          console.log(cpuData);
        }
      }).catch((error) => {
        console.error('Error retrieving CPU data from Firebase:', error);
      });
    }
  }