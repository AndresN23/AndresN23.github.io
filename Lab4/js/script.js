//event listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);
document.querySelector("#signupForm").addEventListener("submit", function(event){validateForm(event);})
document.querySelector("#password").addEventListener("click", suggestPassword);

//functions
//to display city from a web api after entering a zip code
async function displayCity(){
   // alert(document.querySelector("#zip").value);
    let zipCode = document.querySelector("#zip").value;
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;


try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.city){
    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#lat").innerHTML = data.latitude;
    document.querySelector("#lon").innerHTML = data.longitude;
    }
    else{
        document.querySelector("#city").innerHTML = "Zip code not found";
        document.querySelector("#lat").innerHTML = "";
        document.querySelector("#lon").innerHTML = "";
    }
}
catch {
    document.querySelector("#city").innerHTML = "Zip code not found";
}
}
//display counties from the web api base on the two letter abbrivation of a state
async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();

    let countyList = document.querySelector("#county");
   countyList.innerHTML = "<option> Select County </option>";
    for (let i = 0; i < data.length; i++) {
        countyList.innerHTML += `<option> ${data[i].county} </option>`;
    }
}

async function checkUsername(){
    let username = document.querySelector("#username").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();

    let usernameError = document.querySelector("#usernameError");
    if (data.available){
        usernameError.innerHTML = "Username available!";
        usernameError.style.color = "green";
    }
    else {
        usernameError.innerHTML = "Username Taken";
        usernameError.style.color = "red";
    }
}

function validateForm(e){
    let isValid = true;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;

    if (username.length < 3){
        document.querySelector("#usernameError").innerHTML = "Username must be more than 3 characters";
        isValid = false;
    }

    if (password.length < 6){
        document.querySelector("#passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    if (password !== password2){
        document.querySelector("#passwordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    if(!isValid){
        e.preventDefault();
    }

}

function suggestPassword(){
    let randomPwd = Math.random().toString(36).slice(-8);
    document.querySelector("#suggestedPwd").innerHTML = "Suggested Password: " + randomPwd;
}