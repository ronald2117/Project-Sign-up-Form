function validateForm() {
    const password = document.querySelector('#user-pswrd');
    const confirmPassword = document.querySelector('#user-confirm-pswrd');
    const errorMsgCont = document.querySelector('.error-msg-cont');

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        if (errorMsgCont.childNodes.length !== 0) {
            password.focus();
            return false;
        };
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "*Passwords do not match";
        errorMsg.style.fontSize = '15px';
        errorMsg.style.marginTop = '0';
        errorMsg.style.color = 'red';
        errorMsg.style.position = 'absolute';
        errorMsgCont.appendChild(errorMsg);
        password.focus();
        return false; // Prevent form submission
    }

    return true;
}