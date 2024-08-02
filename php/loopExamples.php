<?php
function counting($a, $b)
{
    $string = "";
    for($i = $a; $i <= $b; $i++)
    {
        $string = $string . $i;
        if($i < $b) $string = $string . ', ';
    }
    return $string;
}

function sumMuliples($start, $factor, $end)
{
    while($start % $factor != 0) $start++;
    $running = 0;
    for($i = $start; $i <= $end; $i += $factor) $running += $i;
    return $running;
}

function reverseString($string)
{
    $temp = "";
    $length = strlen($string);
    for ($i = $length - 1; $i >= 0; $i--) $temp = $temp . $string[$i];
    return $temp;
}

function timesTable($a)
{
    $temp = "Multiplication Table of the Number " . $a . ":<br>";
    for ($i = 1; $i <= 10; $i++)
    {
        $temp = $temp . $i . " X " . $a . " = " . $a*$i . "<br>";
    }
    return $temp;
}

function toPower($base, $exponent)
{
    $temp = 1;
    for ($i = 1; $i <= $exponent; $i ++) $temp *= $base;
    return $temp;
}

//print counting(1,10);
//print sumMuliples(1,2,50);
//print reverseString("hello123");
//print timesTable(11);
//print toPower(5,3);
?>