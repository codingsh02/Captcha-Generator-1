const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const capcthaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// Variable to store generate captcha
let captchaText = null;

// function to generate captcha

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
}

const refreshBtnClick = () => {
    generateCaptcha();
    capcthaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !capcthaInputBox.value);
    if (!capcthaInputBox.value) message.classList.remove("active");
}

const submitBtnClick = () => {
    captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
    message.classList.add('active');
    // check if the entered captcha is correct or not
    if (capcthaInputBox.value === captchaText) {
        message.innerText = "Enter Captcha is Correct";
        message.style.color = "#826afb";
    } else {
        message.innerText = "Enter Captcha is not Correct";
        message.style.color = "#ff2525";
    }
};

// Add event listener for the refresh button, CapcthaInputBox, Submit Button 
refreshButton.addEventListener("click", refreshBtnClick);
capcthaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// generate a captcha when the page loads
generateCaptcha();