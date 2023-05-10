// Get the input element
var input = document.getElementById("search-input");

// Get the table body element
var tableBody = document.getElementById("product-table-body");

// Get all the rows of the table body
var rows = tableBody.getElementsByTagName("tr");

// Add event listener to the input element
input.addEventListener("keyup", function() {
  // Get the user input
  var userInput = input.value.toUpperCase();

  // Loop through all the rows and hide/show them based on the user input
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");
    var match = false;
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell.innerHTML.toUpperCase().indexOf(userInput) > -1) {
        match = true;
        break;
      }
    }
    if (match) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
