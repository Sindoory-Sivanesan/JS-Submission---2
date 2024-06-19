let transactions = [
{ type: "deposit", amount: 100 },
{ type: "withdrawal", amount: 50 },
{ type: "deposit", amount: 200 },
{ type: "withdrawal", amount: 30 }
];


function groupByType(transactions) {


// your code here...
const grouped = Object.groupBy(transactions,({type}) => type);

return grouped;
}

console.log(groupByType(transactions));
// // Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit",
// amount: 200 }], withdrawal: [{ type: "withdrawal", amount: 50 }, { type:
// "withdrawal", amount: 30 }] }