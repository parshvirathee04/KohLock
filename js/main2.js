document.addEventListener('DOMContentLoaded',() => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','logout.php?logout=1',true);

    xhr.onload = function(){
        if(this.status==200){
            console.log(this.responseText);
        }
    }
    xhr.send();
});





document.getElementById('form1').addEventListener('submit', (e) => postlogin(e));
        function postlogin(e){
            e.preventDefault();
            // console.log("hi");
            var logemail = document.getElementById('email').value;
            var logpass = document.getElementById('pass').value;

            var logerr = document.querySelector('.logerr');

            var params = `logemail=${logemail}&logpass=${logpass}`;

            var xhr = new XMLHttpRequest();
            xhr.open('POST','signin.php',true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xhr.onload = function(){
                if(this.status == 200){
                    // console.log(this.responseText);
                    if(this.responseText===""){
                        window.location.href='shop.php';
                        console.log('hi');
                    }
                    else{
                        logerr.innerHTML = this.responseText;
                        setTimeout(() => logerr.innerHTML = '',3000);
                    }
                }
            }

            xhr.send(params);
        }