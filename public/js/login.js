
console.log("Cool");

let username = document.getElementById("username");
let password = document.getElementById("password-id");



async function signup(event) {
    event.preventDefault();

    let userObject = {
        username: username.value,
        password: password.value
    }
    console.log(userObject);

    /*localStorage.setItem(username.value, password.value);
    const userUn = localStorage.getItem(username.value);
    const userPas = localStorage.getItem(password.value);*/
    
        
    console.log(localStorage);
    alert("local storage successful");

    const response = await fetch(
        "/api/user",
        {
            method: "POST",
            body: JSON.stringify(userObject),
            headers: {
                "Content-Type": "application/json",
            }
        }

    )
    .then(() => {
      if(response.ok){
        console.log("success");
        alert("you successfully signed up!");
      }else{
        alert("failed to sign up. Please try again.");
      }
        
    })
    .catch(error => {
        console.log(error);
    })
}

async function loginHandler(event) {
    event.preventDefault();

    
  
    const username1 = document.getElementById("login-uname").value.trim();
    const password1 = document.getElementById("login-psw").value.trim();
    //const username = document.querySelector('#username').value.trim();
    //const password = document.querySelector('#password-id').value.trim();
    console.log(username1, password1);
    
  
    if (username1 && password1) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ 
          username: username1, 
          password: password1,
         }),
        headers: { 'Content-Type': 'application/json' },
        
      });
      console.log(true);
      if (response.ok) {
        document.location.replace('/board');
        
        alert("you are logged in!");
      } else {
        alert(response.statusText);
      };
    }
    console.log(false);
  };

document.getElementById("signup-btn").addEventListener('click', signup);
document.getElementById("login-btn").addEventListener('click', loginHandler);


