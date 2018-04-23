const singUpService = (() => {
    const correctEmaiRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const MIN_PASSSWORD_LENGTH = 8;

    return {isValidateEmail, isPassworLengthRequired, areTheSamePasswords};

    function isValidateEmail(email) {
        return correctEmaiRegex.test(email);
    }

    function isPassworLengthRequired(password) {
        return password.length >= MIN_PASSSWORD_LENGTH;
    }

    function areTheSamePasswords(password, repeatedPassword) {
        return password === repeatedPassword
    }
})();


export default singUpService;