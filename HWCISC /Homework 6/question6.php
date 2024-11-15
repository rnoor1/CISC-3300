<?php
$cars = [
    "Tesla Model S" => "Made by: Tesla, Type: Electric Car",
    "Ford Mustang" => "Made by: Ford, Type: Muscle Car",
    "Toyota Prius" => "Made by: Toyota, Type: Hybrid Car",
    "BMW 3 Series" => "Made by: BMW, Type: Sedan"
];

foreach ($cars as $model => $details) {
    echo "$model - $details<br>";
}

function carInfo(string $model, string $manufacturer = "Unknown", string $type = "Unknown"): string {
    return "$model is produced by $manufacturer and it's a $type.";
}

echo "<br>" . carInfo("Audi A4", "Audi", "Sedan");
echo "<br>" . carInfo("Chevrolet Bolt"); 
?>
