<?php
    session_start();
    $str="";
    $uid = $_SESSION['userid'];
    $conn = mysqli_connect('localhost','root','','kohlock');
    if(!$conn){
        die("connection failed".mysqli_connect_error());
    }
    $pid=$_POST['pid'];
    $quan=$_POST['quan'];

    if($quan<=0){
        $sql3 = "DELETE FROM $uid WHERE pid='$pid'";
        mysqli_query($conn,$sql3);
    }
    else{
        $sql="SELECT * FROM $uid WHERE pid='$pid'";
        $res=mysqli_query($conn,$sql);
        $row=mysqli_fetch_assoc($res);
        if($row){
            $sql1="UPDATE $uid SET quantity='$quan' WHERE pid='$pid'";
            mysqli_query($conn,$sql1);
        }
        else{
            $sql2 = "INSERT INTO $uid VALUES ('$pid','$quan')";
            if(!mysqli_query($conn,$sql2)){
                $str=msqli_error($conn);
            }
            else{
                $str="suc";
            }
    
        }    

    }

    echo json_encode($str);

?>