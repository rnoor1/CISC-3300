<?php

$array = [
    "Name" => "Mary carman",
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

// Call the function
echo greetUser("Mary");
echo "<br>";
echo greetUser("Jane", "Hi");
?>

