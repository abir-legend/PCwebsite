import {loadJson,getKeys} from "./jsonReader.js"
function missingData(log)
{
  console.error(log)

}
function load(type = 'CPU', brand = '',generation='',model='')
{
  var items = loadJson()
  console.log(typeof(items));
  if(type in getKeys(items))
  {
    console.log('sucessful')
  }
  else{
    missingData(type+' not found')
  }
}

load()
load('type')