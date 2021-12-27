const employee = {
  name: "Sam",
  streetAddress: "275 Wickham Road",
};
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = "12 Broadway";
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newerEmployee = { ...employee };
  delete newerEmployee.name;
  return newerEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}
