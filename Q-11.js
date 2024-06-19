let inventory = new Map();

function addItem(itemName, quantity) {
 
  inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
 
  if (inventory.has(itemName)) {
   
    inventory.set(itemName, inventory.get(itemName) + quantity);
  } 
}



// Example usage:
addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple"));  // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150

