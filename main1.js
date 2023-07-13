// validation of address
function validation() {
    var name1 = document.getElementById('firstname').value;
    var name2 = document.getElementById('lastname').value;
    var addr = document.getElementById('address').value;
    var coun = document.getElementById('country').value;
    var zip = document.getElementById('zipcode').value;
    var cit = document.getElementById('city').value;
    var state = document.getElementById('State').value;

    var name = /^[A-Za-z ]{3,}$/;
    var addresscheck = /^[A-Za-z0-9 ,]{3,}$/;
    var cou = /^[A-Za-z]{3,}$/;
    var zipcheck = /^[0-9]{4,6}$/;
    var citycheck = /^[A-Za-z]{3,}$/;
    var statecheck = /^[A-Za-z]{3,}$/;

    if(name.test(name1)) {
        document.getElementById('er-name').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-name').innerHTML = 'Name is not in Alphabate';
        return false;
    }
    if(name.test(name2)) {
        document.getElementById('er-name2').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-name2').innerHTML = 'Name is not in Alphabate';
        return false;
    }
    if(addresscheck.test(addr)) {
        document.getElementById('er-address').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-address').innerHTML = 'Address not field';
        return false;
    }
    if(cou.test(coun)) {
        document.getElementById('er-country').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-country').innerHTML = 'Country not field';
        return false;
    }
    if(zipcheck.test(zip)) {
        document.getElementById('er-state').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-state').innerHTML = 'State not field';
        return false;
    }
    if(citycheck.test(cit)) {
        document.getElementById('er-city').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-city').innerHTML = 'City not field';
        return false;
    }
    if(statecheck.test(state)) {
        document.getElementById('er-state').innerHTML = ' ';
    } 
    else {
        document.getElementById('er-state').innerHTML = 'State not field';
        return false;
    }
}
// google sheet
const scriptURL =
    'https://script.google.com/macros/s/AKfycbzcohYMWmaNnRoI399zx-e4zJ6JmhI2lF3hjkVtzgbRyoiAdGbzfSgPjWN_deExa48WFw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert(
            "Address has been Recorded"))
        .catch(error => console.error('Error!', error.message))
})
