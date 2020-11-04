// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

tableData.forEach(function(sighting){
    var currentRow = tbody.append('tr');

    Object.entries(sighting).forEach(function([key, value]){
        console.log(key, value)
        currentRow.append('td').text(value)
    })
})