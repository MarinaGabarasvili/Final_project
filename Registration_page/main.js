function checkForm(form)
  {
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }

    var re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
 
    if(form.password1.value == "") {
      alert("Error: Password cannot be blank!");
      form.username.focus();
      return false;
    }
    
      if(form.password1.value != form.password2.value) {
        alert("Error: Password must match!");
        form.password1.focus();
        return false;
      }
      
      if(form.password1.value.length < 8) {
        alert("Error: Password must contain at least eight characters!");
        form.password1.focus();
        return false;
      }

      if(form.password1.value == form.username.value) {
        alert("Error: Password must be different from Username!");
        form.password1.focus();
        return false;
      }

      var pw = /^\w+$/;
      if(!pw.test(form.password1.value)) {
        alert("Error: Password must contain only letters, numbers and underscores!");
        form.password1.focus();
        return false;
      }

      if(form.country.value == 'Country*') {
        alert("Error: Please select country!");
        form.country.focus();
        return false;
      }

    alert("Registration is successful!");
    return true;
  }