<?php
function isEven($a)
{
    return $a % 2 == 0;
}

function grade($a)
{
    if($a > 100)
    {
        return "Invalid:cannot be greater than 100%";
    }
    if ($a < 0) {
        return "Invalid:cannot be negative!";
    }
    if($a >= 90)
    {
        return "A";
    }else{
        if ($a >= 80) {
            return "B";
        } else {
            if ($a >= 70) {
                return "C";
            } else {
                if ($a >= 60) {
                    return "D";
                } else {
                    return "F";
                }
            }
        }
    }
}

function leapYear($a)
{
    if($a % 400 ==0)
    {
        return true;
    }else{
        if ($a % 100 == 0) {
            return false;
        } else {
            if ($a % 4 == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function findLargest ($a)
{
    $temp = -100000;
    foreach ($a as $num)
    {
        if($num > $temp) {$temp = $num;}
    }
    return $temp;
}

function calculate($a, $opp, $b)
{
    switch($opp)
    {
        case "+":
            return $a + $b;
            break;
        case "-":
            return $a - $b;
            break;
        case "*":
            return $a * $b;
            break;
        case "/":
            return $a / $b;
            break;
            default:
            return "ERROR:Invalid opperator! Must be '+', '-', '*' or '/'";
    }
}

//echo isEven(1001) ? 'true' : 'false';
//echo grade(95);
//echo leapYear(100) ? 'true' : 'false';
$myArray = array(5, 6, 8, 4, 3, 3, 7);
//echo findLargest($myArray);
//echo calculate(10, "-", 2);

?>