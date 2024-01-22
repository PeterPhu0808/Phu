// Hàm kiểm tra email hợp lệ
function ValidateEmail(inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        alert("Vui lòng nhập email hợp lệ!!!");
        return false;
    }
}

function checkValidationSignin() {
    let inputName = document.forms["signin_form"]["username"].value.trim();
    let inputPass = document.forms["signin_form"]["password"].value;
    let inputReTypePass = document.forms["signin_form"]["reTypePassword"].value;
    let inputEmail = document.forms["signin_form"]["email"].value;

    if(inputName == "" || inputPass == "" || inputEmail == "") {
        alert("Các nội dung không được để trống!!!");
        return false;
    }
    else if (!ValidateEmail(inputEmail)) {
        return false;
    }
    else if (inputPass != inputReTypePass) {
        alert("Mật khẩu không trùng khớp!!!");
        return false;
    }
    else {
        // Lưu dữ liệu vào session storage
        sessionStorage.setItem('username_temp', inputName);
        sessionStorage.setItem('password_temp', inputPass);
        return true;
    }
}