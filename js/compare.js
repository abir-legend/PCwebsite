// const db = firebase.database();

// function getCpuDataForComparison() {
//   const urlSearchParams = new URLSearchParams(window.location.search);
//   const brandParam = urlSearchParams.get('brand');
//   const generationParam = urlSearchParams.get('generation');
//   const model1Param = urlSearchParams.get('model1');
//   const model2Param = urlSearchParams.get('model2');

//   const cpuDataRef = db.ref(`cpu/${brandParam}/${generationParam}`);

//   cpuDataRef.once('value', (snapshot) => {
//     const cpuData = snapshot.val();
//     if (cpuData) {
//       const model1Data = cpuData[model1Param];
//       const model2Data = cpuData[model2Param];

//       if (model1Data && model2Data) {
//         console.log(`CPU 1 (${model1Param}):`, model1Data);
//         console.log(`CPU 2 (${model2Param}):`, model2Data);

//         // Populate the comparison page with the retrieved CPU data
//         // Example: Update the HTML elements with the CPU details
//         document.getElementById('cpu1Name').textContent = model1Param;
//         document.getElementById('cpu2Name').textContent = model2Param;
//         // Update other relevant elements with CPU details
//       } else {
//         console.log('Invalid model parameters');
//       }
//     } else {
//       console.log('No CPU data found');
//     }
//   }).catch((error) => {
//     console.error('Error retrieving CPU data from Firebase:', error);
//   });
// }

// // Call the function to retrieve CPU data for comparison
// getCpuDataForComparison();

// function* myCompare() {
//   const container = document.createElement('div');
//   container.classList.add('compare');

//   const labels = document.createElement('div');
//   labels.classList.add('label');

//   const productLabel = document.createElement('div');
//   productLabel.classList.add('label', 'Prod');
//   productLabel.textContent = 'Product';
//   labels.appendChild(productLabel);

//   const imageLabel = document.createElement('div');
//   imageLabel.classList.add('label', 'Img');
//   imageLabel.textContent = 'Image';
//   labels.appendChild(imageLabel);

//   const nameLabel = document.createElement('div');
//   nameLabel.classList.add('label', 'title');
//   nameLabel.textContent = 'Name';
//   labels.appendChild(nameLabel);

//   const brandLabel = document.createElement('div');
//   brandLabel.classList.add('label', 'Bnd');
//   brandLabel.textContent = 'Brand';
//   labels.appendChild(brandLabel);

//   const generationLabel = document.createElement('div');
//   generationLabel.classList.add('label', 'Gen');
//   generationLabel.textContent = 'Generation';
//   labels.appendChild(generationLabel);

//   const coreCountLabel = document.createElement('div');
//   coreCountLabel.classList.add('label', 'Det1');
//   coreCountLabel.textContent = 'Core Count';
//   labels.appendChild(coreCountLabel);

//   const threadsLabel = document.createElement('div');
//   threadsLabel.classList.add('label', 'Det2');
//   threadsLabel.textContent = 'Threads';
//   labels.appendChild(threadsLabel);

//   const baseFreqLabel = document.createElement('div');
//   baseFreqLabel.classList.add('label', 'Det3');
//   baseFreqLabel.textContent = 'Base Freq';
//   labels.appendChild(baseFreqLabel);

//   const boostFreqLabel = document.createElement('div');
//   boostFreqLabel.classList.add('label', 'Det4');
//   boostFreqLabel.textContent = 'Boost Freq';
//   labels.appendChild(boostFreqLabel);

//   const processNodeLabel = document.createElement('div');
//   processNodeLabel.classList.add('label', 'Det5');
//   processNodeLabel.textContent = 'Process Node';
//   labels.appendChild(processNodeLabel);

//   const tdpLabel = document.createElement('div');
//   tdpLabel.classList.add('label', 'Det6');
//   tdpLabel.textContent = 'TDP';
//   labels.appendChild(tdpLabel);

//   container.appendChild(labels);

//   // CPU data loop
//   yield container;

//   // CPU 1
//   const cpu1 = document.createElement('div');
//   cpu1.classList.add('Item');

//   const product1 = document.createElement('div');
//   product1.classList.add('itemCol', 'Prod');
//   product1.textContent = 'Core i9 13900K';
//   cpu1.appendChild(product1);

//   const image1 = document.createElement('div');
//   image1.classList.add('itemCol', 'Img');
//   image1.textContent = 'Img';
//   cpu1.appendChild(image1);

//   const nameInput1 = document.createElement('input');
//   nameInput1.classList.add('itemCol', 'title');
//   nameInput1.placeholder = 'Search';
//   cpu1.appendChild(nameInput1);

//   const brand1 = document.createElement('div');
//   brand1.classList.add('itemCol', 'Bnd');
//   brand1.textContent = 'Intel';
//   cpu1.appendChild(brand1);

//   const generation1 = document.createElement('div');
//   generation1.classList.add('itemCol', 'Gen');
//   generation1.textContent = '13th Gen';
//   cpu1.appendChild(generation1);

//   const coreCount1 = document.createElement('div');
//   coreCount1.classList.add('itemCol', 'Det1');
//   coreCount1.textContent = '24';
//   cpu1.appendChild(coreCount1);

//   const threads1 = document.createElement('div');
//   threads1.classList.add('itemCol', 'Det2');
//   threads1.textContent = '32';
//   cpu1.appendChild(threads1);

//   const baseFreq1 = document.createElement('div');
//   baseFreq1.classList.add('itemCol', 'Det3');
//   baseFreq1.textContent = '3.0 GHz';
//   cpu1.appendChild(baseFreq1);

//   const boostFreq1 = document.createElement('div');
//   boostFreq1.classList.add('itemCol', 'Det4');
//   boostFreq1.textContent = '5.4 GHz';
//   cpu1.appendChild(boostFreq1);

//   const processNode1 = document.createElement('div');
//   processNode1.classList.add('itemCol', 'Det5');
//   processNode1.textContent = '10nm';
//   cpu1.appendChild(processNode1);

//   const tdp1 = document.createElement('div');
//   tdp1.classList.add('itemCol', 'Det6');
//   tdp1.textContent = '125 W';
//   cpu1.appendChild(tdp1);

//   container.appendChild(cpu1);

//   yield container;

//   // CPU 2
//   const cpu2 = document.createElement('div');
//   cpu2.classList.add('Item');

//   const product2 = document.createElement('div');
//   product2.classList.add('itemCol', 'Prod');
//   product2.textContent = 'Ryzen 9 7950X';
//   cpu2.appendChild(product2);

//   const image2 = document.createElement('div');
//   image2.classList.add('itemCol', 'Img');
//   image2.textContent = 'Img';
//   cpu2.appendChild(image2);

//   const nameInput2 = document.createElement('input');
//   nameInput2.classList.add('itemCol', 'title');
//   nameInput2.placeholder = 'Search';
//   cpu2.appendChild(nameInput2);

//   const brand2 = document.createElement('div');
//   brand2.classList.add('itemCol', 'Bnd');
//   brand2.textContent = 'AMD';
//   cpu2.appendChild(brand2);

//   const generation2 = document.createElement('div');
//   generation2.classList.add('itemCol', 'Gen');
//   generation2.textContent = 'Ryzen 7000';
//   cpu2.appendChild(generation2);

//   const coreCount2 = document.createElement('div');
//   coreCount2.classList.add('itemCol', 'Det1');
//   coreCount2.textContent = '16';
//   cpu2.appendChild(coreCount2);

//   const threads2 = document.createElement('div');
//   threads2.classList.add('itemCol', 'Det2');
//   threads2.textContent = '32';
//   cpu2.appendChild(threads2);

//   const baseFreq2 = document.createElement('div');
//   baseFreq2.classList.add('itemCol', 'Det3');
//   baseFreq2.textContent = '4.5 GHz';
//   cpu2.appendChild(baseFreq2);

//   const boostFreq2 = document.createElement('div');
//   boostFreq2.classList.add('itemCol', 'Det4');
//   boostFreq2.textContent = '5.7 GHz';
//   cpu2.appendChild(boostFreq2);

//   const processNode2 = document.createElement('div');
//   processNode2.classList.add('itemCol', 'Det5');
//   processNode2.textContent = '5nm';
//   cpu2.appendChild(processNode2);

//   const tdp2 = document.createElement('div');
//   tdp2.classList.add('itemCol', 'Det6');
//   tdp2.textContent = '170 W';
//   cpu2.appendChild(tdp2);

//   container.appendChild(cpu2);

//   yield container;
// }

// // Usage
// const generator = myCompare();
// document.body.appendChild(generator.next().value); // Initial labels
// document.body.appendChild(generator.next().value); // CPU 1
// document.body.appendChild(generator.next().value); // CPU 2

function getUrlSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of searchParams) {
    params[key] = value;
  }

  return params;
}

// Example usage
const params = getUrlSearchParams();
getdataparams(params);

function getdataparams(data) {
  // type=data['type'];
  const parts = Object.keys(data).filter(type => type !== 'type');
  console.log(parts);
  for(const pdata in parts) {
    console.log(pdata);
    console.log(data[parts[pdata]]);
  }
  console.log(data['type']);
}

// ['boost_clock',
//   'core_clock',
//   'core_count',
//   'image',
//   'integrated_graphics',
//   'name',
//   'price',
//   'smt',
//   'tdp']

  
  
  // Example usage
  var labelsList = ['boost_clock', 'core_clock', 'core_count', 'image', 'integrated_graphics', 'name', 'price', 'smt', 'tdp'];

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

  updateLabels(labelsList);