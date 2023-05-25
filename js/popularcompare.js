// Select the parent container
const compareContainer = document.querySelector('.popularCompare');
var comps = []
// Read data from Firebase /compare path
const compareRef = firebase.database().ref('popularcompare');
compareRef.on('value', function(snapshot) {
  const compareData = snapshot.val();
    console.log(compareData);
    compareContainer.innerHTML = ''
    
    // Iterate over the compareData object
    for (const type in compareData) {
        if (compareData.hasOwnProperty(type)) {
            // Create a div for each type
            const typeDiv = document.createElement('div');
            typeDiv.className = 'comp';
            typeDiv.innerHTML= 'compare '+ type
            
            // Create a div for parts within each type
            const partsDiv = document.createElement('div');
            partsDiv.className = 'parts';
            partsDiv.addEventListener("click", () => Goto(type,compareData[type]));
            // Iterate over the parts in the current type
            for (const part in compareData[type]) {
                if (compareData[type].hasOwnProperty(part)) {
                    // Create a div for each part within partsDiv
                    const partDiv = document.createElement('div');
                    partDiv.textContent = compareData[type][part];
                    partDiv.className = 'part';
                    partsDiv.appendChild(partDiv);
                    const numParts = Object.keys(compareData[type]).length;
                    partsDiv.style.gridTemplateColumns = `repeat(${numParts}, 1fr)`;
                    const imageUrl = getImage(type, compareData[type][part]);
                    partDiv.style.backgroundImage = `url(${imageUrl})`;
        }
      }

      // Append the partsDiv to the typeDiv
      typeDiv.appendChild(partsDiv);

      // Append the typeDiv to the compareContainer
      compareContainer.appendChild(typeDiv);
    }
  }
  comps = document.querySelectorAll('.comp')
  Slide(0)
  console.log(comps);
});
currstep = 0

function nextCompare() {
    currstep = (currstep + 1) % comps.length;
    Slide(currstep);
}

function Slide(ind) {
    console.log(ind);
    comps.forEach((par, i) => {
        if (i === ind) {
            par.classList.add('active');
        } else {
            par.classList.remove('active');
        }
    });
}
setInterval(nextCompare, 7000);

function getImage(type, id)
{
    return "https://media.istockphoto.com/id/1204740322/photo/cpu.jpg?s=612x612&w=0&k=20&c=DSjrMlrtuD42yC5XHtpoc2mqGEYEjk-B-JTDK4McTK8="
}