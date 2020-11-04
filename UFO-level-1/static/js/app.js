// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');

tableData.forEach(function(sighting){
    var currentRow = tbody.append('tr');

    Object.entries(sighting).forEach(function([key, value]){
        currentRow.append('td').text(value)
    })
})

var filterButton = d3.select('#filter-btn');

filterButton.on('click', filterClick)

function filterClick() {
    console.log(d3.event.target)
}