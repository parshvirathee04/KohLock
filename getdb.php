<?php
    session_start();
    $str="";
    $uid = $_SESSION['userid'];
    $conn = mysqli_connect('localhost','root','','kohlock');
    if(!$conn){
        die("connection failed".mysqli_connect_error());
    }

    $products = [];

    $sql="SELECT $uid.pid, products.kname, products.cost, $uid.quantity FROM 
    $uid INNER JOIN products ON $uid.pid = products.pid";
    $res=mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0){
        while($row=mysqli_fetch_assoc($res)){
            $products[$row['pid']]=array($row['kname'],$row['cost'],$row['quantity']);
        }
    
    }
    echo json_encode($products);

?>