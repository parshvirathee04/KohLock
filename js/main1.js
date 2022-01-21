document.getElementById('myform').addEventListener('submit',postsend);

function postsend(e){
    e.preventDefault();

    var name=document.getElementById('name1').value;
    var email = document.getElementById('email1').value;
    var pass = document.getElementById('pass1').value;
    var cpass = document.getElementById('cpass1').value;

    // console.log(name,email,pass,cpass);

    var params = "uname="+name+"&uemail="+email+ "&upass="+pass+"&ucpass="+ cpass;

    var xhr = new XMLHttpRequest();
    xhr.open('POST','signup.php', true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    xhr.onload = function(){

        if(this.status == 200){
            var errors = JSON.parse(this.responseText);
            showErrors(errors);
            // console.log(JSON.parse(this.responseText));
        }
    }

    xhr.send(params);
}


function showErrors(errors){

    var success = document.querySelector('.reg-suc');

    if(errors.unameErr==='' && errors.uemailErr==='' && errors.upassErr===''){
        success.innerHTML = 'Successfully Registered'.toUpperCase();
    }

    var nameErr = document.querySelector('.unameErr');
    var emailErr = document.querySelector('.uemailErr');
    var passErr = document.querySelector('.upassErr');

    nameErr.innerHTML = `${errors.unameErr}`;
    emailErr.innerHTML = `${errors.uemailErr}`;
    passErr.innerHTML = `${errors.upassErr}`;

    setTimeout(() => nameErr.innerHTML = '', 3000);
    setTimeout(() => emailErr.innerHTML = '', 3000);
    setTimeout(() => passErr.innerHTML = '', 3000);
    setTimeout(() => success.innerHTML = '', 3000);

}
