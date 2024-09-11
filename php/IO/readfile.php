<?php
//open file
$customers_list = fopen("IO/customers.txt","a+") or die("failed to open file");

// read file
echo fread($customers_list, filesize("IO/customers.txt"));

//write to file
$customer_name = "\nBoo Bond";
fwrite($customers_list, $customer_name);

// read file again
echo fread($customers_list, filesize("IO/customers.txt"));

//Close file
fclose($customers_list);