<?php
require("account.php");


$helenAccount = new Account(123, 100);
echo $helenAccount->getBalance();
echo PHP_EOL;

$helenAccount->deposit(150);
$helenAccount->withdraw(75);

echo $helenAccount->getBalance();

