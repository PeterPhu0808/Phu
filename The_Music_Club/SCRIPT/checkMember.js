// function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }

//var member = getParameterByName('username');

if (sessionStorage.getItem('username') == null) {
    member = "Guest";

    //Display hello guest
    document.getElementById("hello_box").style.display = 'block';

    //Display login & signin links
    document.getElementById("login_link").innerHTML = "Đăng nhập";
    document.getElementById("login_link").setAttribute('href', 'login.html');

    document.getElementById("signin_link").innerHTML = "Đăng ký";
    document.getElementById("signin_link").setAttribute('href', 'signin.html');
}
else {
    member = sessionStorage.getItem('username');

    //Hide hello guest
    document.getElementById("hello_box").style.display = 'none';

    //Login transform
    document.getElementById("login_link").innerHTML = "Xin chào: " + '<i>' + member + '</i>';
    document.getElementById("login_link").setAttribute('href', '#');
    let element = document.getElementById("login_link");
    element.setAttribute('style', 'color: whitesmoke; background-color:rgba(153, 15, 15, 0); cursor: default');

    //Signin transform
    document.getElementById("signin_link").innerHTML = "Đăng xuất";
    document.getElementById("signin_link").setAttribute('href', 'index.html');
    document.getElementById("signin_link").setAttribute('onclick', 'return logOutMember();');
}

//LOG OUT MEMBER
function logOutMember() {
    if (confirm("Bạn có muốn đăng xuất khỏi tài khoản?") == true) {
        //Click ok => Log out
        sessionStorage.removeItem('username');
    }
    else {
        //Không log out
        return false;
    }
}