function addDays(date , days) {
    var result = new Date (date);
    result.setDate(result.getDate() + days);
    return result;
}
console.log(addDays("2022-06-15", 10));






