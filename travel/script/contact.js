function validate() {
  var destination = document.getElementById("destination").value;
  var paymentt= document.getElementById("fname").value;
 
  if(paymentt.length === 12 )
  {
    document.getElementById('error').innerHTML="payment accepted";
    window.alter("payment accepted");
    return true;
    
  }else if(destination === '')
  {
    document.getElementById('error').innerHTML="destination should be filled...";
    return false;
  }
  else{  
     document.getElementById('error').innerHTML="invalid payment number...";
     return false;
      }
       
    }
      
