
class Company {
  // Creates a new company object
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  // Pushes new employees into the employees array.
  addEmployees(employeeIn) {
    this.employees.push(employeeIn);
  }

  // calculates the average montly salary costs
  averageSalary() {
    var averageSalary = 0;
    var employeeCount = this.employees.length;
    for (var i = 0; i < employeeCount; i++) {
      averageSalary += this.employees[i].salary / 12;
    }
    return averageSalary.toFixed(2);
  }
  
  // removes employees from employees array 
  removeEmployee(idNum) {
    let newEmpArr = [];
    for (let i = 0; i < this.employees.length; i++) {
      if (newCompany.employees[i].empID != idNum) {
        newEmpArr.push(newCompany.employees[i]);
      }
    }
    this.employees = newEmpArr;
  }

  // adds employees from employees array to the DOM
  toHTML() {
    var result = '';
    employeeCount = this.employees.length;
    for (var i = 0; i < employeeCount; i++) {
      result += this.employees[i].toHTML();
    }
    return result;
  }
}


class Employee {
  // creates a new employee object
  constructor(fName, lName, empID, empTitle, salary) {
    this.fName = fName;
    this.lName = lName;
    this.empID = Number(empID);
    this.empTitle = empTitle;
    this.salary = Number(salary);
  }

  // appends employee information to the DOM.
  toHTML() {
    var $row = $('<tr>');
    var $button = '<button type="button" class="btn btn-danger empDelete">Delete</button>';
    $row.append('<td>'+ this.fName + '</td>');
    $row.append('<td>'+ this.lName + '</td>');
    $row.append('<td>'+ this.empID + '</td>');
    $row.append('<td>'+ this.empTitle + '</td>');
    $row.append('<td>'+ this.salary + '</td>');
    $row.append('<td>'+ $button + '</td>');
    $row.data('id', Number(this.empID));
    return $row;
  }
}
