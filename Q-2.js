let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
    ];
    
    //TYPE - 1

    // let filteredEmployees = [];
    // for (let i= 0; i < employees.length; i++) {
    //     if (employees[i].age <= 30  ) {
    //         filteredEmployees = [...filteredEmployees, employees[i]];
    // }
    // }
   
    // console.log(filteredEmployees);


    //TYPE - 2


    let ageLimit = 30;

    function filterEmployees(employees, ageLimit) {

    return employees.filter(employees => employees.age <= ageLimit)


    }

    console.log(filterEmployees(employees, ageLimit));


    
    // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]