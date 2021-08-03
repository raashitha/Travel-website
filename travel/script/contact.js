function validate() {
  var paymentt= document.getElementById("fname").value;
  if(paymentt.length === 12)
    {
      document.getElementById('error').innerHTML="payment accepted";
      window.alter("payment accepted");
      return true;
      
    }
    else{  
     document.getElementById('error').innerHTML="invalid payment number";
     return false;
      }
}
        
      
