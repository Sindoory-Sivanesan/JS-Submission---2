function dateDifference(date1, date2) {
    // Your code here
    dt1 = new Date(date1);

    dt2 = new Date(date2);
    
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));

    }
    console.log(dateDifference("2022-06-15", "2023-06-15"));