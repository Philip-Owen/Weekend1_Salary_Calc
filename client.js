console.log('js');

$(document).ready(onReady);

// Runs when DOM is ready
function onReady() {
  $('#submitEmployee').on('click', newEmployeeInfo);
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
