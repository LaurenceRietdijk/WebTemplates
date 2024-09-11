<?php
//start the session
session_start();

//unset the session
unset($_SESSION['username']);

//destroy the session
session_destroy();

//redirect to the login page.
header("location: login.php");

//exit the page
exit();