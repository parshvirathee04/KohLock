<?php
      session_start();
      if(isset($_GET['logout'])){
        session_destroy();
        unset($_SESSION['userid']);
         //header("location : login.php");
         echo "";
         //echo "not";
        }  
      else{
        echo "oops";
      }
?>