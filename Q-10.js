let employees = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];


function mapEmployeeIdsToNames(employees) {
// use Map Object here
let employeeMap = new Map();

employees.forEach(employee => {
  employeeMap.set(employee.id, employee.name);
});

return employeeMap;
}



let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }