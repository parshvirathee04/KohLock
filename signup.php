<?php

    session_start();
    $username=$password=$cpassword=$email="";
    $usernameErr=$passwordErr=$emailErr="";
    $err=0;
    // $str="n";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conn = mysqli_connect('localhost','root','','kohlock');
        if(!$conn){
            die("Connection failed".mysqli_connect_error());
        }

        if(isset($_POST['uname']))
            $username=test_input($_POST['uname']);
        if(isset($_POST['uemail']))
            $email=test_input($_POST['uemail']);
        if(isset($_POST['upass']))
            $password=test_input($_POST['upass']);
        if(isset($_POST['ucpass']))
            $cpassword=test_input($_POST['ucpass']);

        if (!preg_match("/^[a-zA-Z ]*$/",$username)) {
            $usernameErr = "Only letters and white space allowed";
            $err=1;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
            $err=1;
        }

        if($password!=$cpassword){
            $passwordErr = "Passwords not same";
            $err=1;
        }

        $sql= "SELECT * FROM users WHERE email='$email' LIMIT 1";
        $res = mysqli_fetch_assoc(mysqli_query($conn,$sql));
        if($res){
            $emailErr = "Already Registered";
            $err=1;
        }

        if($err==0){
            $sql2= "INSERT INTO users (name,email,password) VALUES ('$username','$email','$password')";
            mysqli_query($conn,$sql2);
            
            $sql3 = "SELECT id from users WHERE email='$email'";
            $res = mysqli_query($conn,$sql3);
            $row = mysqli_fetch_assoc($res);
            $userid = 'u'.$row["id"];
            
            $sql4 = "CREATE TABLE $userid (
                    pid VARCHAR(10) PRIMARY KEY NOT NULL,
                    quantity INT NOT NULL DEFAULT 0)";
            mysqli_query($conn,$sql4);
            // if(!mysqli_query($conn,$sql4)){
            //     $str=mysqli_error($conn);
            // }
            // else{
            //     $str="suc";
            // }

            $_SESSION['userid'] = $userid;
        }

        $errors = ['unameErr'=> $usernameErr, 'uemailErr' => $emailErr, 'upassErr' => $passwordErr];

        
        // $errorss = ['unameErr'=> $username, 'uemailErr' => $email, 'upassErr' => $password];

        echo json_encode($errors);
        // echo json_encode($str);
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>