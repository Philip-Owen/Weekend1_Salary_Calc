
$(document).ready(onReady);

// begin onReady()
// Runs when DOM is ready
function onReady() {
  $('#submitEmployee').on('click', addNewEmployee);
  $('#employeeData').on('click', '.empDelete', removeEmployee);
} // end onReady() function

let newCompany = new Company('Company XYZ');
let averageMonthly = 0;


// begin addNewEmployee()
// Creates new instances of the Employee Class and adds them to the newCompany Class.
// Appends employee information to the DOM and updates average montly costs.
function addNewEmployee() {
  let newEmployee = new Employee($('#firstName').val(), $('#lastName').val(),
  $('#empID').val(), $('#jobTitle').val(), $('#annualSalary').val());
  newCompany.addEmployees(newEmployee);
  // console.log(newCompany.employees);
  $('#employeeData').append(newEmployee.toHTML());
  $('input').val('');
  $('#salTotal').html(newCompany.averageSalary());
} // end addNewEmployee()


//begin removeEmployee()
// Used to remove employee entries from the DOM and the newCompany.employees array
// Updates the average total once the employee has been removed.
function removeEmployee() {
  let idNum = Number($(this).parents('tr').data('id'));
  newCompany.removeEmployee(idNum);
  $(this).parents('tr').remove();
  $('#salTotal').html(newCompany.averageSalary());
} // end removeEmployee()