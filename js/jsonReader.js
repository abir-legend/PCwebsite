let jsonData;

function loadJson()
{
  var address = "gs://build-a-pc-b5507.appspot.com/data.json"
  var request = new XMLHttpRequest();
  request.open('GET', address, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) 
    {
      var data = JSON.parse(request.responseText);
      // Process the JSON data here
      jsonData = data;
      console.log(data);
    } 
    else 
    {
      console.error('Error:', request.status);
    }
  };
  request.onerror = function() {
    console.error('Request failed');
  };
  request.send();
}

function getKeys(ob)
{
    return Object.keys(ob)
}

loadJson()