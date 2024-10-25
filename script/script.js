"use strict";

const _btn = document.querySelector(".form-sbmt_item.btn");
_btn.addEventListener("click", validateForm);

function validateForm() {
    const _name = document.querySelector('#name').value;
    const _email = document.querySelector('#email').value;
    const _msg = document.querySelector('#message').value;
    let _check = _name.length > 0 && _email.length > 0 && _msg.length > 0
    
    const regex = /^\S+@\S+\.\S+$/;
    const isValidEmail = regex.test(_email)
    // console.log('isValidEmail:', isValidEmail) 
    
 if (!_check) {
    alert("All forms must be filled out");
    return false;
 } else if(_check && !isValidEmail){
     alert("Enter valid email");
     return false;
 } else if (_check && isValidEmail) {
     alert("Thank you!");
     return false;
  }
}




 