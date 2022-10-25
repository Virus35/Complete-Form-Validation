let username = document.querySelector("#username");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#password-check");
let form = document.querySelector(".form");
let input = document.querySelectorAll("input");
let icons=document.querySelectorAll("i");
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUsername();
  validateEmail();
  validateNumber();
  validatePassword();
  appear();
});

appear = () => {
  let countSuccess = 0;
  for (inp of input) {
    if (inp.style.border == "2px solid green") {
      countSuccess++;
      console.log(countSuccess);
    }
  }
  if (countSuccess == 5) {
    // swal(`Welcome ${username.value} !`,"Your Form has Submitted","success");
    swal(`Welcome ${username.value} !`,"Your Form has Submitted","success").then((value) => {
      let result=value;
    });
        for(inp of input){
            inp.value="";
            inp.style.border="1px solid grey";
        }
        for(ico of icons){
            ico.style.visibility="hidden";
        }
  }
};

error = (input, message) => {
  let error =
    input.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
      .nextSibling;
  error.textContent = message;
  input.style.border = "2px solid red";
  input.nextSibling.nextSibling.style.visibility = "hidden";
  input.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility =
    "visible";
  error.style.display = "block";
};

success = (input) => {
  input.style.border = "2px solid green";
  input.nextSibling.nextSibling.style.visibility = "visible";
  let error =
    input.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
      .nextSibling;
  input.nextSibling.nextSibling.nextSibling.nextSibling.style.visibility =
    "hidden";
  error.style.display = "none";
  ++count;
};

validateUsername = () => {
  let trimUsername = username.value.trim();
  let nameRegex = /^[a-zA-Z\-]+$/;
  let validateUserName = trimUsername.match(nameRegex);
  validateUserName == null
    ? error(
        username,
        "Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
      )
    : success(username);
};

validateEmail = () => {
  let trimEmail = email.value.trim();
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validateEmail = trimEmail.match(emailRegex);
  validateEmail == null
    ? error(email, "Please provide a valid email")
    : success(email);
};

validateNumber = () => {
  let trimNumber = number.value.trim();

  if (trimNumber == "") {
    error(number, "number cannot be empty");
  } else if (trimNumber.length < "10" || trimNumber.length > "10") {
    error(number, "number must be of 10 digits");
  } else if (
    trimNumber[0] != "9" &&
    trimNumber[0] != "8" &&
    trimNumber[0] != "7" &&
    trimNumber[0] != "6"
  ) {
    error(number, "number must start with 9 or 8 or 7 or 6");
    console.log(trimNumber[0]);
  } else {
    success(number);
  }
};

validatePassword = () => {
  let trimPassword = password.value.trim();
  if (trimPassword == "") {
    error(password, "password cannot be empty");
    error(confirm_password, "password cannot be empty");
  } else if (trimPassword.length < 6) {
    error(password, "password must be greater than 5");
    error(confirm_password, "password must be greater than 5");
  } else if (trimPassword.length > 25) {
    error(password, "password should not exceed 25 characters");
    error(confirm_password, "password should not exceed 25 characters");
  } else {
    success(password);
    validateConfirmPassword(trimPassword);
  }
};

validateConfirmPassword = (b) => {
  let trimConfirmPassword = confirm_password.value.trim();
  if (trimConfirmPassword == b) {
    success(confirm_password);
  } else {
    error(confirm_password, "password does not match");
  }
};
