let userPreferences = new Map();

function setPreference(key, value) {
// USE SET METHOD IN MAP OBJECT
userPreferences.set(key, value);
}


function getPreference(key) {
// use get method in Map oBJECT
return userPreferences.get(key);
}



setPreference("theme", "dark");
setPreference("fontSize", "16px");
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px