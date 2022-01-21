<?php
    session_start();
    $logemail=$logpass="";
    $err="y";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $conn=mysqli_connect('localhost','root','','kohlock');
        if(!$conn){
            die("Connection failed".mysqli_connect_error());
        }
        
        $logemail = test_input($_POST['logemail']);
        $logpass = test_input($_POST['logpass']);

        $sql = "SELECT * FROM users WHERE email='$logemail' AND password='$logpass'";
        $res = mysqli_query($conn,$sql);
        $row = mysqli_fetch_assoc($res);

        if(mysqli_num_rows($res)>0){
            // header('Location: index.html');
            $userid = 'u'.$row["id"];
            $_SESSION['userid'] = $userid;
            // $err=$row['password'];
            // $err=mysqli_num_rows($res);
            $err="";
        }
        else{
            $err="Invalid email or password";
        }

        echo $err;

    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>