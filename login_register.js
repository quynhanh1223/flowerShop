// let acc = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         username: "admin",
//         password: "admin",
//     },
//     {
//         id: 2,
//         email: "admin2@gmail.com",
//         username: "admin2",
//         password: "admin2",
//     }
// ];
// localStorage.setItem("account", JSON.stringify(acc));
let dataAcc = JSON.parse(localStorage.getItem("account"))
console.log("🚀 ~ file: index.js:49 ~ dataAcc:", dataAcc)

function checkEmail(email, password, type) {
    console.log(checkEmail)
    let exists = false;

    for (let i = 0; i < dataAcc.length; i++)
        if (email === dataAcc[i].email) {
            if (type === 'login') {
                //neu loai la login, kiem tra ca password
                if (password === dataAcc[i].password) {
                    exists = true;
                }
            } else {
                //neu loai khong phai 'login', chi can kiem tra email
                exists = true;
            }
            return exists
        }
}

function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('signup-email').value;
    let valuePassword = document.getElementById('signup-password').value;
    let valueConfPassword = document.getElementById('confirm-password').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail)) {
            alert('Email already exists')
        } else {
            if (valuePassword === valueConfPassword) {
                dataAcc.push(
                    { id: dataAcc.length + 1, email: valueEmail, password: valuePassword }
                )
                localStorage.setItem('account', JSON.stringify(dataAcc))
                alert('Register success') // thông báo đăng ký thành công
                window.location.href="login.html"
            } else {
                alert('Confirm Password fail')// xác nhận password sai
            }
        }
    } else {
        alert('Please enter your email and password')
    }
}


function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('login-email').value;
    let valuePassword = document.getElementById('login-password').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            localStorage.setItem('isLogin', true) // lưu trạng thái đăng nhập là true
            alert('Login successful') // thông báo đăng nhập thành công
            window.location.href="index.html"
        } else {
            alert('Account not found')
        }
    } else {
        alert('Please enter email and password')
    }
}



// new
// let fireBaseui = document.getElementById('')
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
            return true;
        },
        uiShown() {
            document.getElementById('loader').style.display = 'none';
        },
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'signedIn',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};
ui.start('#firebaseui-auth-container', uiConfig);