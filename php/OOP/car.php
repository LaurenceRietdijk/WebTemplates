<?php

class Car{
    public $make;
    public $model;
    public $year;
    public $color;

    public function __construct($make,$model,$year,$color){
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
        $this->color = $color;
    }

    public function startEngine(){
        return "Engine of the $this->color $this->make $this->model has started!\n";
    }

}



$corolla = new Car("Toyota","Corrolla", 1998, "red");
echo $corolla->startEngine();


$myCar = new Car("Toyota", "Yaris", 2018, "silver");
echo $myCar->startEngine();
