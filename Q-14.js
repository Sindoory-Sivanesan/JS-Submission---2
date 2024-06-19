function union(...arrays) {
    let resultSet = new Set();
    // your code here
    arrays.forEach(array => {
        
        array.forEach(item => {
          resultSet.add(item);
        });
      });
    
       return Array.from(resultSet);
    }
    let array1 = [1, 2, 3];
    let array2 = [3, 4, 5];
    let array3 = [5, 6, 7];
    console.log(union(array1, array2, array3));
    // Output: [1, 2, 3, 4, 5, 6, 7]