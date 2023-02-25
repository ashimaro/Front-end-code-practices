 //Array for all possible characters.
 const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

 //method to generate random password
 function generatePassword(length) {
     let password = "";

     for (let i = 0; i < length; i++) {
         const randomCharacter = Math.floor(Math.random() * characters.length);
         password = password + characters.charAt(randomCharacter);

     }

     return password
 }

     function displayPassword(password) {
         const passwordDisplay = document.getElementById("display-pwd");
         passwordDisplay.textContent = "Your password is : " + password;
     }

     //method to generate and display password
     function generateAndDisplayPassword() {
         const passwordLength = 10; //declare length
         const password = generatePassword(passwordLength);
         displayPassword(password);
     }