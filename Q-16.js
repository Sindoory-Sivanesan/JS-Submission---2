function updateAttendance(newAttendance, overallAttendance) {
    // your code here
    newAttendance.forEach(name => {
        
        overallAttendance.add(name);
      });
    
      
      return overallAttendance;
    }
    let overallAttendance = new Set(["Alice", "Bob"]);
    let todayAttendance = ["Charlie", "Alice"];
    overallAttendance = updateAttendance(todayAttendance, overallAttendance);
    console.log([...overallAttendance]);
    // Output: ["Alice", "Bob", "Charlie"]