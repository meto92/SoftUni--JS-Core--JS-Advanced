function validate() {
    let usernameRegex = /^[a-zA-Z\d]{3,20}$/;
    let passwordRegex = /^\w{5,15}$/;
    let emailRegex = /^.*@.*?\..*$/;

    let checkBox = document.getElementById("company");
    let $companyInfo = $("#companyInfo");

    $(checkBox).change(() => {
        $companyInfo.css("display") === "none"
            ? $companyInfo.css("display", "")
            : $companyInfo.css("display", "none");
    });

    let $usernameField = $("#username");
    let $emailField = $("#email");
    let $passwordField = $("#password");
    let $confirmPasswordField = $("#confirm-password");
    let $companyNumberField = $("#companyNumber");

    $("#submit").click((e) => {
        e.preventDefault();
        e.stopPropagation();

        let isUsernameValid = usernameRegex.test($usernameField.val());
        let isEmailValid = emailRegex.test($emailField.val());
        let passwordsMatch = $passwordField.val() === $confirmPasswordField.val();
        let isPasswordValid = passwordsMatch && passwordRegex.test($passwordField.val());
        let isCompanyNumberValid = true;
       
        if (checkBox.checked) {
            let companyNumber = +$companyNumberField.val();

            isCompanyNumberValid = companyNumber >= 1000 && companyNumber < 10000;
        }

        if (!isUsernameValid) {
            $usernameField.css("border-color", "red");
        } else {
            $usernameField.css("border-color", "");
        }

        if (!isEmailValid) {
            $emailField.css("border-color", "red");
        } else {
            $emailField.css("border-color", "");
        }

        if (!isPasswordValid) {
            $passwordField.css("border-color", "red");
            $confirmPasswordField.css("border-color", "red");
        } else {
            $passwordField.css("border-color", "");
            $confirmPasswordField.css("border-color", "");
        }

        if (!isCompanyNumberValid) {
            $companyNumberField.css("border-color", "red");
        } else {
            $companyNumberField.css("border-color", "");
        }

        let $validDiv = $("#valid");

        if (isUsernameValid && isEmailValid && isPasswordValid && isCompanyNumberValid) {
            $validDiv.css("display", "block");
        } else {
            $validDiv.css("display", "none");
        }
    });
}