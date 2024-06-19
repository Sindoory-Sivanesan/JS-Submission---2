let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
    ];
    function checkDuplicates(classes) {
    let nameSet = new Set();
    // your code here
    return new Set(classes).sort !== classes.length;
    }
    console.log(checkDuplicates(classes));
    // Output: true