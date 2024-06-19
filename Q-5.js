function calculateAge(birthday) {
    
    let birthDate = new Date(birthday);
    
    
    let today = new Date();
    
    
    let age = today.getFullYear() - birthDate.getFullYear();
    
    
    return age;
    }
  
 
  
     console.log(calculateAge("1990-06-15"));
  