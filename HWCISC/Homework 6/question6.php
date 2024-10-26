<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


$associativeArray = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];


foreach ($associativeArray as $key => $value) {
    echo "Key: $key, Value: $value<br>";
}


function exampleFunction(int $number, string $text = "Default") {
    return "$text: $number";
}


echo exampleFunction(10, "Number is");
?>
