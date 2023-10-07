function getDateTime() {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    let hour = today.getHours();
    let min = today.getMinutes();
    let second = today.getSeconds();
    
    if(hour < 10){
        hour = "0" + hour;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(second < 10){
        second = "0" + second;
    }
    
    let time = hour + ':' + min + ':' + second;
    
    document.getElementById("date_box").innerHTML = "Ngày: " + date;
    document.getElementById("time_box").innerHTML = "Giờ: " + time;
}

// Cài đặt thời gian gọi hàm DateTime
const interval = setInterval(getDateTime, 1000);