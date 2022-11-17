const button = document.body.getElementsByClassName('get-started')[0];
const warning = document.body.getElementsByClassName('email')[0];
const write = document.body.getElementsByClassName('enter')[0];




const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


button.addEventListener('click', (Event) => {
    if (!write.value.match(checkmail)) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});



