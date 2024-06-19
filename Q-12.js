function removeDuplicates(arr) {
    // your code here
    let uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
    }
    let numbers = [1, 2, 2, 3, 4, 4, 5];
    console.log(removeDuplicates(numbers));
    // Output: [1, 2, 3, 4, 5]