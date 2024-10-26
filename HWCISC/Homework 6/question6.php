<?php

$array = [
    "Name" => "Mary Carman",
    "Age" => 25,
    "Occupation" => "Developer",
    "Country" => "USA"
];


foreach ($array as $key => $value) {
    echo "$key: $value<br>";
}


function greetUser(string $name, string $greeting = "Hello"): string {
    return "$greeting, $name!";
}


echo greetUser("Mary");
echo "<br>";
echo greetUser("Jane", "Hi");
?>
