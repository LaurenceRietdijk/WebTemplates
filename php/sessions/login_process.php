<?php
//start a session
session_start();

//hardcode username and password
$valid_username = "jamesbond";
$valid_password = "007";

//get the posted form data
$username = $_POST['username'];
$password = $_POST['password'];

//Simple Authentication
if($username === $valid_username && $password === $valid_password){
    $_SESSION['username'] = $username;

    // redirects to the welcome page;
    header('location: welcome.php');
    exit();
}else{
    echo "invalide username or password";
}