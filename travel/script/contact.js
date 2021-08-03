function validate() {
  var paymentt= document.getElementById("fname").value;
  if(paymentt.length === 12)
    { 
      window.alter("payment accepted");
      document.getElementById('error').innerHTML="payment accepted";
      return true;
      
    }
    else{  
     document.getElementById('error').innerHTML="invalid payment number";
     return false;
      }
}
        
      
