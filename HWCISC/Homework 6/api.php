<?php

$array = [
    "Name" => "Mary Carman",
    "Age" => 25,
    "Occupation" => "Developer",
    "Country" => "USA"
];


header('Content-Type: application/json');
echo json_encode($array);
?>

