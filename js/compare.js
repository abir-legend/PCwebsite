function getUrlSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of searchParams) {
    params[key] = value;
  }

  return params;
}

const params = getUrlSearchParams();
getdataparams(params);

function getdataparams(data) {

  const parts = Object.keys(data).filter(type => type !== 'type');
  console.log(parts);
  for(const pdata in parts) {
    console.log(pdata);
    console.log(data[parts[pdata]]);
  }
  console.log(data['type']);
}
function getdatatype(data) {  
  return data['type'];
}
  // var labelsList = ['boost_clock', 'core_clock', 'core_count', 'image', 'integrated_graphics', 'name', 'price', 'smt', 'tdp'];

  function updateLabels(values) {
    const labels = document.querySelectorAll('.label > div');
    const modifiedList = values.filter(label => label !== 'name' && label !== 'image');
    const constlist = ['name', 'image'];
    const joinedList = constlist.concat(modifiedList);

    for (let i = 0; i < values.length; i++) {
      const label = labels[i];
      label.textContent = joinedList[i];
    }
  }
const db = firebase.database();
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

  getLabel(getdatatype(params),function(params) {updateLabels(params);console.log(params)})
