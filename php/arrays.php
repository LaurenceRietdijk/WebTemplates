<?php
$fruits = array("apple", "pear", "orange", "bannana", "mango");
//print $fruits[2];
//print $fruits[4];

$profile = array( "name" => "Laurence", "email" => "buttmuncher@yahoo.com", "age" => 38, "country" => "Australia", "interests" => "PHP");
function display($a)
{
    foreach ($a as $x => $y) {
        echo "$x: $y<br>";
    }
}
//display($profile);

$myArray = array(1,4,6,4,3,6,7,9);
$sum = 0;
foreach($myArray as $v) $sum += $v;
//print $sum;

$catalogue = array(
    array("name" => "shoe", "price" => 39.99, "availability" => true),
    array("name" => "sock", "price" => 3.50, "availability" => true),
    array("name" => "shirt", "price" => 15.99, "availability" => true),
    array("name" => "pants", "price" => 30.00, "availability" => false)
);

function find($arr, $field, $value)
{
    foreach ($arr as $target) {
        if ($target[$field] === $value) {
            return $target;
        }
    }
    return null;
}

function displayItem($a)
{
    $msg = " Sold Out!";
    if($a["availability"]) $msg = " Avaliable!";
    echo $a["name"] . ": $" . $a["price"] . $msg . "<br>";
}
$item = find($catalogue, "name", "shirt");
//displayItem($item);

$cities = array("New York", "London", "Tokyo", "Paris", "Sydney");
function foundInArray($arr, $value)
{
    foreach($arr as $member)
    {
        if($member === $value) return true;
    }
    return false;
}
print foundInArray($cities, "Tokyo") ? 'true' : 'false';

?>