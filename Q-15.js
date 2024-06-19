function removeItemsFromSet(items, set) {
    // your code here
    items.forEach(item => {
    set.delete(item);
      });
    }
    
    let mySet = new Set([1, 2, 3, 4, 5]);
    let itemsToRemove = [2, 3];
    removeItemsFromSet(itemsToRemove, mySet);
    console.log([...mySet]); // Output: [1, 4, 5]