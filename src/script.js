
const createUsernameInputField = () => {
    const inputField = document.createElement("input");

    inputField.type = "text";
    inputField.id = "usernameInput";
    inputField.name = "username";
    inputField.placeholder = "Username...";
    inputField.size = 50;
    inputField.className = "form-element";

    return inputField;
}

const createPasswordInputField = () => {
    const inputField = document.createElement("input");

    inputField.type = "password";
    inputField.id = "passwordInput";
    inputField.name = "password";
    inputField.placeholder = "";
    inputField.size = 50;
    inputField.className = "form-element";

    return inputField;
}

const createSubmitButton = () => {
    const button = document.createElement("input");
    const div = document.createElement("div");

    button.type = "submit";
    button.id = "submitButton";
    button.name = "submit"
    button.value = "Login";
    button.size *= 2;
    div.className = "form-element";
    div.appendChild(button);

    return div;
}





const inputFieldNames = ["username", "password", "loginButton"]; 


const container = document.getElementById("input-container");

const form = document.createElement("form");
form.action = "http://dabblestudios.tplinkdns.com:16000/login";
form.method = "POST";
form.enctype = "application/x-www-form-urlencoded";
form.content

for (let i = 0; i < inputFieldNames.length; i++){
    if (inputFieldNames[i] == "username"){
        form.appendChild(createUsernameInputField());
        continue;
    }
    if (inputFieldNames[i] == "password"){
        form.appendChild(createPasswordInputField());
        continue;
    }
    if (inputFieldNames[i] == "loginButton"){
        form.appendChild(createSubmitButton());
        continue;
    }

}

container.appendChild(form);





