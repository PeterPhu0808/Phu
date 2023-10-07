function checkAccount() {
    let username = document.forms["login_form"]["username"].value;
    let password = document.forms["login_form"]["password"].value;
    let username_temp = sessionStorage.getItem('username_temp');
    let password_temp = sessionStorage.getItem('password_temp');
    if (username != username_temp || password != password_temp) {
        alert("Tên tài khoản hoặc mật khẩu không chính xác!!!");
        return false;
    }
    else {
        alert("Bạn đã đăng nhập thành công!!!");
        sessionStorage.setItem('username', username);
        return true;
    }
}