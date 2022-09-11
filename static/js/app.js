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
      // adding one object to each row per row
      Object.values(dataRow).forEach((val) => {
        //append data inot a table data tag
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

function handleClick() {
    //we are telling D3 to look for #datetime id in the HTML tags and chain value and hold it in date variable
    let date = d3.select("#datetime").property("value");
    // this is our default table data from the original data as imported from our data.js file
    let filteredData = tableData;
    //module 11.5.4 filter with if to look for date === match exactly
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    //call the buildTable function with the filtered data as agrgument
    buildTable(filteredData);
}

    //this is linking our code directly to the filter button and D3 execute handleClick button when clicked
d3.selectAll("#filter-btn").on("click", handleClick);
    //this will create a basic table from our unfiltered data pulled straight from our array
    //ORIGINAL DATA
buildTable(tableData);