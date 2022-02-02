// const employee = {
//   name: "Sam",
//   streetAddress: "275 Wickham Road",
// };
// function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
//   const newEmployee = { ...employee };
//   newEmployee[key] = value;
//   return newEmployee;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee.streetAddress = "12 Broadway";
//   return employee;
// }
// function deleteFromEmployeeByKey(employee, key) {
//   const newerEmployee = { ...employee };
//   delete newerEmployee.name;
//   return newerEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee.name;
//   return employee;
// }
const employee = {
  name: "Sam",
  streetAddress: "Mars",
};

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  let newObj = { ...employee };
  newObj.streetAddress = "11 Broadway";
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = "12 Broadway";
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newerObj = { ...employee };
  delete newerObj.name;
  return newerObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}
