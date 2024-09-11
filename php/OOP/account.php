<?php

class Account{

    //Variables
    protected $accountNumber;
    protected $balance;

    //Constructor
    public function __construct($accountNumber, $initialBalance)
    {
        $this->accountNumber = $accountNumber;
        $this->balance = $initialBalance;
    }

    /***
    * Allow the teller to take the deposit and increase the user balance
    * @param $amount - the amount depositied by the customer
    * @return this function returns the total account balance
    */
    public function deposit($amount){
        $this->balance += $amount;
        echo "Deposited $amount. New balance: ". $this->balance. PHP_EOL;
    }

    public function withdraw($amount){
        if($amount > $this->balance){
            echo "Insufficent funds". PHP_EOL;
        }else{
            $this->balance -= $amount;
            echo "Withdraw: $amount. New Balance: ".  $this->balance. PHP_EOL;
        }
    }

    public function getBalance(){
        return $this->balance;
    }


}