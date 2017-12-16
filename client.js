console.log('js');

$(document).ready(onReady);

// Runs when DOM is ready
function onReady() {
  $('#submitEmployee').on('click', newEmployeeInfo);
} // end onReady() function

// Gets info out of input fields and returns an array of the data
function newEmployeeInfo() {
  var empFName = $('#firstName').val();
  var empLName = $('#lastName').val();
  var empID = $('#empID').val();
  var empJobTitle = $('#jobTitle').val();
  var empSal = Number($('#annualSalary').val());
  var empInfoArray = [empFName, empLName, empID, empJobTitle, empSal];
  return empInfoArray;
} // end newEmployeeInfo()
