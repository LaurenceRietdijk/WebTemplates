<?php
    $cities = array("Sydney","Brisbane","Perth");

    //includes all except stated
    $new_array = array_diff($cities,["Sydney"]);

    //removes last ellement
    array_pop($cities);

    //removes first ellement
    array_shift($cities);

    sort($cities);
    rsort($cities);
    asort($cities);
    ksort($cities);

    print_r($cities);
?>