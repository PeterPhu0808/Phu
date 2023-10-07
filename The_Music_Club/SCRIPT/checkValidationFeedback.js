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

function checkValidationFeedback() {
    let inputEmail = document.forms["feedback_form"]["feedback_email"].value;
    let inputName = document.forms["feedback_form"]["feedback_name"].value.trim();
    let inputTitle = document.forms["feedback_form"]["feedback_title"].value.trim();
    let inputContent = document.forms["feedback_form"]["feedback_content"].value.trim();

    if(inputName == "" || inputTitle == "" || inputContent == "") {
        alert("Các nội dung không được để trống!!!");
        return false;
    }
    else if (!ValidateEmail(inputEmail)) {
        return false;
    }
    else {
        return true;
    }
}