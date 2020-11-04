// from data.js
var tableData = data;

var tbody = d3.select('tbody');

tableData.forEach(function(sighting){
    var currentRow = tbody.append('tr');

    Object.entries(sighting).forEach(function([key, value]){
        currentRow.append('td').text(value)
    })
})

var form = d3.select('.form-group')
var filterButton = d3.select('#filter-btn');

filterButton.on('click', filterClick);
form.on('submit', filterClick);

function filterClick() {
    
    d3.event.preventDefault();
    
    var input = d3.select('#datetime');
    var inputValue = input.property('value');
    console.log(inputValue)

    var filteredData = tableData.filter(function(ufo) {
        return ufo.datetime == inputValue
    });

    console.log(filteredData)

    var summary = d3.select('#ufo-table');

    d3.selectAll('tr').remove();

    filteredData.forEach(function(ufo) {
        var currentRow = tbody.append('tr');
    
        Object.entries(ufo).forEach(function([key, value]){
            currentRow.append('td').text(value)
        })
    })
}