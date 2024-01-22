window.load = doShowAll();

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    }
    else {
        return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        let key = "";
        let list = "<tr> <th>Item</th> <th>Value</th> </tr>\n";
        let i = 0;
        for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            list += "<tr> <td>" + key + "</td> \n<td>" + localStorage.getItem(key) + "</td> </tr>\n";
        }

        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }

        document.getElementById('list').innerHTML = list;
    }
    else {
        alert('Không thể lưu danh sách mua vì trình duyệt của bạn không hỗ trợ HTML5');
    }
}

function SaveItem() {
    let item_name = document.forms.Gio_Hang.item_name.value;
    let item_quantity = document.forms.Gio_Hang.item_quantity.value;
    localStorage.setItem(item_name, item_quantity);
    doShowAll();
}

function UpdateItem() {
    let item_name1 = document.forms.Gio_Hang.item_name.value;
    let item_quantity1 = document.forms.Gio_Hang.item_quantity.value;

    if (localStorage.getItem(item_name1) != null) {
        localStorage.setItem(item_name1, item_quantity1);
        document.forms.Gio_Hang.item_quantity.value = localStorage.getItem(item_name1);
    }

    doShowAll();
}

function DeleteItem() {
    let name = document.forms.Gio_Hang.item_name.value;
    document.forms.Gio_Hang.item_quantity.value = localStorage.removeItem(item_name);
    doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}