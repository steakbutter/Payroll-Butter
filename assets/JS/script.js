// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
const employees = [];

// Created variable 'keepAdding' to true so we can execute the while loop over and over again until the user wants to stop adding employees.
 let keepAdding = true;
while (keepAdding === true) {
  const firstName = window.prompt ("Enter First Name"); 
  const lastName = window.prompt ("Enter Last Name");
  const salary = window.prompt ("Enter Salary");
  if (isNaN(salary)) {
    window.alert('Not a number');
  }
  // Created employee object to fill employees data with the users input above
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary),
  };
// Used the push method to add the employee information from the user input to the employees array created at the start
  employees.push(employee);

// Added the window confirm to the keepAdding variable to continue loop or return the gathered information by the user.
  keepAdding = window.confirm ('Do you want to add another employee?');
  if (keepAdding != true) {

    return employees;
  }

  }

}
 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let totalSalary = 0;
for (let i = 0; i < employeesArray.length; i++) {
totalSalary += employeesArray [i];
}
let avgSalary = totalSalary / employeesArray.length;

  console.log (`The average employee salary between our ${employeesArray.length} employee(s) is ${avgSalary.toFixed(2)} `);
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Used the Math.floor function to select a random employee from the employees array.
  const idEmployee = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray [idEmployee]
  console.log (`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
