<?php
    $lotto =array(5,9,4,21,9,31,44);

    print_r($lotto);
    sort($lotto);
    rsort($lotto);

    print_r($lotto);

    $cities = array("Sydeny"=>6000000, "Melborne"=>2500000, "Perth"=>1000);
    
    //key decending
    krsort($cities);

    //association decending
    arsort($cities);

    //key assending
    ksort($cities);

    //association assending
    asort($cities);

    print_r($cities);
?>