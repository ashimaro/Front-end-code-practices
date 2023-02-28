
// Generate calendar for given month and year
function generateCalendar(month, year, tableId) {
    // Get table body element
    var tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    // Clear table body
    tableBody.innerHTML = '';

    // Get number of days in month
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get first day of month
    var firstDayOfMonth = new Date(year, month, 1).getDay();

    // Create table rows for calendar
    var row = document.createElement('tr');
    var cellCount = 0;
    for (var i = 0; i < firstDayOfMonth; i++) {
        var cell = document.createElement('td');
        cell.classList.add('empty-cell');
        row.appendChild(cell);
        cellCount++;
    }
    for (var i = 1; i <= daysInMonth; i++) {
        var cell = document.createElement('td');
        cell.innerText = i;
        cell.classList.add('calendar-date');
        cell.addEventListener('click', function() {
            selectDate(this);
        });
        row.appendChild(cell);
        cellCount++;
        if (cellCount == 7) {
            tableBody.appendChild(row);
            row = document.createElement('tr');
            cellCount = 0;
        }
    }
    for (var i = cellCount; i < 7; i++) {
        var cell = document.createElement('td');
        cell.classList.add('empty-cell');
        row.appendChild(cell);
    }
    tableBody.appendChild(row);

    // Set month and year in header
    document.getElementById('month-year-' + tableId[tableId.length - 1]).innerText = getMonthName(month) + ' ' + year;
}

// Get month name for given month number
function getMonthName(month) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
}

// Select date in calendar
function selectDate(cell) {
// Deselect previously selected cell(s)
var selectedCells = document.querySelectorAll('.selected-date');
selectedCells.forEach(function(selectedCell) {
selectedCell.classList.remove('selected-date');
});

// Select new cell
cell.classList.add('selected-date');

// Get the date from the selected cell
var date = cell.innerText;

// Get the month and year from the calendar header
var header = cell.closest('.calendar').querySelector('.calendar-header');
var month = header.querySelector('h2').innerText.split(' ')[0];
var year = header.querySelector('h2').innerText.split(' ')[1];

// Display the chosen date
var chosenDateElement = document.getElementById('chosen-date');
chosenDateElement.innerText = 'You chose ' + date + ' ' + month + ' ' + year;
}
// Navigate to previous month in calendar
function previousMonth(tableId) {
    // Get current month and year from header
    var monthYear = document.getElementById('month-year-' + tableId).innerText.split(' ');
    var month = monthYear[0];
    var year = monthYear[1];

    // Convert month name to month number
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = monthNames.indexOf(month);

    // Decrement month and year
    if (month == 0) {
        month = 11;
        year--;
    } else {
        month--;
    }

    // Generate calendar for previous month and year
    generateCalendar(month, year, 'calendar-' + tableId);
}

// Navigate to next month in calendar
function nextMonth(tableId) {
  
    // Get current month and year from header
var monthYear = document.getElementById('month-year-' + tableId).innerText.split(' ');
var month = monthYear[0];
var year = monthYear[1];

// Convert month name to month number
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
month = monthNames.indexOf(month);

// Increment month and year
if (month == 11) {
    month = 0;
    year++;
} else {
    month++;
}

// Generate calendar for next month and year
generateCalendar(month, year, 'calendar-' + tableId);
}

// Generate initial calendars for current month and year
var now = new Date();
var currentMonth = now.getMonth();
var currentYear = now.getFullYear();
generateCalendar(currentMonth, currentYear, 'calendar-1');
generateCalendar(currentMonth, currentYear, 'calendar-2');
