/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

document.getElementById('username').insertAdjacentHTML('beforeBegin','<label for="username"> Username </label>');

document.getElementById('password').insertAdjacentHTML('beforeBegin','<label for="password"> Password </label>');

document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin','<label for="confirmPassword"> Confirm Password </label>');

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

const checkInput = (event) => {
  const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
  
  if (event.target.value === '' && !errorElement.length){
  event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger"> Required </span>')
  }
  
  if (errorElement && event.target.value !== '') { errorElement.forEach(elem => elem.remove());
 }

};

document.getElementById('username').addEventListener('blur',checkInput);
document.getElementById('password').addEventListener('blur',checkInput);
document.getElementById('confirmPassword').addEventListener('blur',checkInput);

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

document.getElementById('confirmPassword').addEventListener('blur', (event) =>{
  if (event.target.value !== document.getElementById('password').value) 
  event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger"> Password Should Match </span>')
})
  
/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
const btn = document.querySelector('button');
btn.setAttribute('disabled', 'true');
document.getElementById('form').addEventListener('change', (event) => {
  let formFilled = Array.form(document.querySelectorAll('input')).every
  (input => input.value)
  if (formFilled){
    btn.removeAttribute('disabled')
  } else {
    btn.setAttribute('disabled', true);
  }
})





/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

const form1 = document.getElementById('form')

form1.addEventListener('submit', (event) => {
event.preventDefault()
const alert = document.createElement('div');
alert.classList.add('alert', 'alert-success');
alert.innerText = 'User registered successfully!';
form1.prepend(alert);
}
)

