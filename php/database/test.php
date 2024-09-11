<?php
include_once 'Connection.php';

try{
    $datebase = new Connection();
    $conn = $datebase->openConnection();

    $sql = "SELECT * FROM movie";

    foreach($conn->query($sql) as $row){
        echo "ID: ". $row['title'] . ":" . $row['classinfication'] . "\n";
    }
}
catch(PDOException $e){
    echo "Failed to fetch data";
}

$datebase->closeConnection();