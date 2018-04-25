import $ from 'jquery';

const singUpService = (() => {
    const correctEmaiRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const MIN_PASSSWORD_LENGTH = 8;

    return {isValidateEmail, isPassworLengthRequired, areTheSamePasswords, register, singin};

    function isValidateEmail(email) {
        return correctEmaiRegex.test(email);
    }

    function isPassworLengthRequired(password) {
        return password.length >= MIN_PASSSWORD_LENGTH;
    }

    function areTheSamePasswords(password, repeatedPassword) {
        return password === repeatedPassword
    }

    //TO DO: Extract-refactor
    function singin(newUserCredentials, cb){
        if (!newUserCredentials.email || !newUserCredentials.password) {
            if (cb) cb(false, '');
            this.onChange(false);
            return
        }

        $.ajax({
            type: 'POST',
            url: `http://localhost:8080/singin`,
            contentType: 'application/json',
            data: JSON.stringify(newUserCredentials),
            success: data => {
                console.log(data);
                if (data.token) {
                    cb({
                        authenticated: true,
                        token: data.token,
                    })
                } else {
                    cb({ authenticated: false, message: data.message })
                }
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    }

    function register(newUserCredentials, pass, cb) {
        cb = arguments[arguments.length - 1];

        if (!newUserCredentials.email || !newUserCredentials.password) {
            if (cb) cb(false, '');
            this.onChange(false);
            return
        }

        pretendRegisterRequest(newUserCredentials, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token;
                localStorage.name = newUserCredentials.username;
                if (cb) cb(true, res.message);
                this.onChange(true)
            } else {
                if (cb) cb(false, res.message);
                this.onChange(false)
            }
        })
    }

    function pretendRegisterRequest(newUserCredentials, cb) {
        $.ajax({
            type: 'POST',
            url: `localhost:8080/register`,
            contentType: 'application/json',
            data: JSON.stringify(newUserCredentials),
            success: data => {
                console.log(data);
                if (data.token) {
                    cb({
                        authenticated: true,
                        token: data.token,
                    })
                } else {
                    cb({ authenticated: false, message: data.message })
                }
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
                cb({ authenticated: false })
            }
        });
    }
})();


export default singUpService;