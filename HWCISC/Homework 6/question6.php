<?php
// Display errors for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// a. Associative array
$associativeArray = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// b. Loop through the array and echo out each key and value
foreach ($associativeArray as $key => $value) {
    echo "Key: $key, Value: $value<br>";
}

// 7. a. Create a function with set return type, optional and typed parameter
function exampleFunction(int $number, string $text = "Default") {
    return "$text: $number";
}

// Call the function with correct values
echo exampleFunction(10, "Number is");
?>
