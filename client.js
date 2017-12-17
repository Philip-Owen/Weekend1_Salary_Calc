console.log('js');

$(document).ready(onReady);

// Runs when DOM is ready
function onReady() {
  $('#submitEmployee').on('click', addNewEmployee);
} // end onReady() function

// Gets info out of input fields and returns an array of the data
function newEmployeeInfo() {
  var employeeFName = $('#firstName').val();
  var employeeLName = $('#lastName').val();
  var employeeID = $('#empID').val();
  var employeeTitle = $('#jobTitle').val();
  var employeeSal = Number($('#annualSalary').val());
  var employeeInfoArray = [employeeFName, employeeLName, employeeID,
    employeeTitle, employeeSal];
  return employeeInfoArray;
} // end newEmployeeInfo()

// Adds new employee information to the DOM and updates monthy cost calculations
function addNewEmployee() {
  employeeData = newEmployeeInfo();
  console.log(employeeData);
  var $row = $('<tr>');
  $row.append('<td>'+ employeeData[0] + '</td>');
  $row.append('<td>'+ employeeData[1] + '</td>');
  $row.append('<td>'+ employeeData[2] + '</td>');
  $row.append('<td>'+ employeeData[3] + '</td>');
  $row.append('<td>'+ employeeData[4] + '</td>');
  $row.data('salary', employeeData[4]);
  $('#employeeData').append($row);
  $('input').not('#submitEmployee').val('');
  var totalMontlyCost = monthyCosts();
$('#salTotal').html(totalMontlyCost);
} // end addNewEmployee()

// Does calculations for getting the monthly salary costs.
function monthyCosts() {
  var addedSalaries = 0;
  var empCount = $('tbody').children().length;
  for (var i = 1; i <= empCount; i++) {
    addedSalaries += $('tbody tr:nth-child(' + i + ')').data('salary');
  }
  addedSalaries = Number((addedSalaries / 12).toFixed(2));
  return addedSalaries;
} // end monthyCosts()
