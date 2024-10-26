<?php
// a. Associative array
$associativeArray = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// b. Loop through the array
foreach ($associativeArray as $key => $value) {
    echo "Key: $key, Value: $value<br>";
}

// 7. a. Create a function
function exampleFunction(int $number, string $text = "Default") {
    return "$text: $number";
}

// Call the function
echo exampleFunction(10, "Number is");
?>
