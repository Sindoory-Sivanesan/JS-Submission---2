function countOccurrences(arr) {
    let occurrences = new Map();

    arr.forEach(str => {
      if (occurrences.has(str)) {
        occurrences.set(str, occurrences.get(str) + 1);
      } else {
        occurrences.set(str, 1);
      }
    });
  
    return occurrences;
  }

// your code here

// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 };