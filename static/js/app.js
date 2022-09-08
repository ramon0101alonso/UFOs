// module 11.2.4
// import the data from data.js
const tableData = data;

// d3 is a java script library that produces sophisticated and highly dynamic graphics
// in an HTML webpage
// Reference the HTML table using d3
var tbody = d3.select("tbody")

// module 11.5.1`

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // forEach function loops through the array in the same way as a for loop.  
    // difference is you can use fat arrow =>
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }