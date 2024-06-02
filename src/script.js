

const inputFieldNames = ["username", "password", "loginButton"]; 


const container = document.getElementById("input-container");

const form = document.createElement("form");
form.action = "http://dabblestudios.tplinkdns.com:16000/login";
form.method = "POST";

for (let i = 0; i < inputFieldNames.length; i++){
    if (inputFieldNames[i] == "username"){
        form.appendChild(createUsernameInputField());
        continue;
    }
    if (inputFieldNames[i] == "password"){
        form.appendChild(createPassswordInputField());
        continue;
    }
    if (inputFieldNames[i] == "loginButton"){
        form.appendChild(createSubmitButton());
        continue;
    }

}

container.appendChild(form);





const createUsernameInputField = () => {
    const inputField = document.createElement("input");

    inputField.type = "text";
    inputField.id = "usernameInput";
    inputField.placeholder = "Username...";

    return inputField;
}

const createPasswordInputField = () => {
    const inputField = document.createElement("input");

    inputField.type = "password";
    inputField.id = "passwordInput";
    inputField.placeholder = "";

    return inputField;
}

const createSubmitButton = () => {
    const button = document.createElement("input");

    button.type = "submit";
    button.id = "submitButton";
    button.value = "Login";

    return button;
}