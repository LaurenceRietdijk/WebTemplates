<?php
// start new session
session_start();

// declare session variables
$_SESSION['username'] = "JamesBond";
$_SESSION['email'] = "Bond007@mi5.uk.co";

//reference a session variable
echo "Username:". $_SESSION['username'] . PHP_EOL;

// overwrite a session variable
$_SESSION['username'] = "PooBum";

//remove a session variable
unset($_SESSION['username']);

//Check if the session variable is removed.
if(!isset($_SESSION['username'])){
    echo "Username session variable has been removed" . PHP_EOL;
}

session_destroy();