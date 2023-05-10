class MyCompare extends HTMLElement {
  constructor() {
    super();

    // create the compare container
    const compareContainer = document.createElement('div');
    compareContainer.classList.add('compare-container');

    // create the compare header
    const compareHeader = document.createElement('div');
    compareHeader.classList.add('compare-header');

    const compareTitle = document.createElement('h2');
    compareTitle.textContent = 'Select Components to Compare:';

    const compareButton = document.createElement('button');
    compareButton.id = 'compare-button';
    compareButton.textContent = 'Compare';

    compareHeader.appendChild(compareTitle);
    compareHeader.appendChild(compareButton);

    // create the compare body
    const compareBody = document.createElement('div');
    compareBody.classList.add('compare-body');

    const cpuLabel = document.createElement('label');
    cpuLabel.textContent = 'CPU:';
    const cpuSelect = document.createElement('select');
    cpuSelect.name = 'cpu';

    // add options to the CPU select element
    const cpuOptions = ["Intel Core i5-11600K", "AMD Ryzen 5 5600X", "Intel Core i9-11900K", "AMD Ryzen 9 5900X"];
    for (let option of cpuOptions) {
      const cpuOption = document.createElement('option');
      cpuOption.textContent = option;
      cpuSelect.appendChild(cpuOption);
    }

    cpuLabel.appendChild(cpuSelect);
    compareBody.appendChild(cpuLabel);

    // repeat the above process for the other components (GPU, RAM, storage)

    // create the compare footer
    const compareFooter = document.createElement('div');
    compareFooter.classList.add('compare-footer');

    const comparisonTable = document.createElement('table');
    comparisonTable.classList.add('comparison-table');

    const tableHeader = document.createElement('thead');
    const tableHeaderRow = document.createElement('tr');

    const cpuHeader = document.createElement('th');
    cpuHeader.textContent = 'CPU';
    const gpuHeader = document.createElement('th');
    gpuHeader.textContent = 'GPU';
    const ramHeader = document.createElement('th');
    ramHeader.textContent = 'RAM';
    const storageHeader = document.createElement('th');
    storageHeader.textContent = 'Storage';

    tableHeaderRow.appendChild(cpuHeader);
    tableHeaderRow.appendChild(gpuHeader);
    tableHeaderRow.appendChild(ramHeader);
    tableHeaderRow.appendChild(storageHeader);

    tableHeader.appendChild(tableHeaderRow);
    comparisonTable.appendChild(tableHeader);

    const tableBody = document.createElement('tbody');
    const tableBodyRow = document.createElement('tr');

    const cpuCell = document.createElement('td');
    const gpuCell = document.createElement('td');
    const ramCell = document.createElement('td');
    const storageCell = document.createElement('td');

    tableBodyRow.appendChild(cpuCell);
    tableBodyRow.appendChild(gpuCell);
    tableBodyRow.appendChild(ramCell);
    tableBodyRow.appendChild(storageCell);

    tableBody.appendChild(tableBodyRow);
    comparisonTable.appendChild(tableBody);

    compareFooter.appendChild(comparisonTable);

    // add all the elements to the compare container
    compareContainer.appendChild(compareHeader);
    compareContainer.appendChild(compareBody);
    compareContainer.appendChild(compareFooter);

    this.appendChild(compareContainer);
  }
}

// register the custom element
customElements.define('my-compare', MyCompare);
