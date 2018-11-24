var newUrl = prompt('podaj adres');
//window.location = newUrl;

if(newUrl.substr(0,8) !== 'https://' || newUrl.substr(0,8) !== 'http://') {
    newUrl = 'https://' + newUrl;
}

window.open(newUrl);