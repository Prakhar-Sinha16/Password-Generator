class Password {

    AllCases(includeNumberChar = true, includeSpecialChar = true) {
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const specialChars = '!@#$%^&*()-_+=';
  
      let allChars = uppercaseChars + lowercaseChars;
      if (includeNumberChar) {   //for StrongPassword
        allChars += numberChars;
      }
      if (includeSpecialChar) {  // for super strong password
        allChars += numberChars + specialChars;
      }
      return allChars;
    }
  
    weakPassword(length, count) {
      const allChars = this.AllCases(false, false);
      const passwords = [];
  
      for (let i = 0; i < count; i++) {
        let password = '';
        for (let j = 0; j < length; j++) {
          const randomIndex = Math.floor(Math.random() * allChars.length)
          password += allChars[randomIndex];
        }
        passwords.push(password);
      }
      return passwords;
    }
  
    strongPassword(length, count) {
      const allChars = this.AllCases(true, false); // Include numbers but not special characters
      const passwords = [];
  
      for (let i = 0; i < count; i++) {
        let password = '';
        for (let j = 0; j < length; j++) {
          const randomIndex = Math.floor(Math.random() * allChars.length);
          password += allChars[randomIndex];
        }
        passwords.push(password);
      }
  
      return passwords;
    }
  
    superStrongPassword(length, count) {  // Include numbers & special characters
      const allChars = this.AllCases(true, true);
      const passwords = []
  
      for (let i = 0; i < count; i++) {
        let password = '';
        for (let j = 0; j < length; j++) {
          const randomIndex = Math.floor(Math.random() * allChars.length)
          password += allChars[randomIndex];
        }
        passwords.push(password);
      }
      return passwords;
    }
  
  }
  
  // Instantiate Password objects
  let password = new Password();
  
  // Select DOM elements
  let submit = document.getElementById("submit");
  let title = document.getElementById("title");
  let weakPass = document.getElementById("weakPass");
  let strongPass = document.getElementById("StrongPass");
  let superStrongPass = document.getElementById("SuperStrongPass");
  
  // Add event listener to submit button
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let passContent = title.value.toLowerCase(); // Convert to lowercase
    if (passContent === 'weak') {
      let generatedPassword = password.weakPassword(5, 1);
      weakPass.textContent = "Weak Password => " + generatedPassword;
    } else if (passContent === 'strong') {
      let generatedPassword = password.strongPassword(8, 1);
      strongPass.textContent = "Strong Password => " + generatedPassword;
    } else if (passContent === 'superstrong') { // Adjusted for lowercase comparison
      let generatedPassword = password.superStrongPassword(10, 1);
      superStrongPass.textContent = "SuperStrong Password => " + generatedPassword;
    }
  });
  