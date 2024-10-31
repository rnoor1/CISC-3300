<?php
require_once './controllers/UserController.php';

$controller = new UserController();
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestMethod == 'GET' && $requestUri == '/users') {
    $controller->sendUserData();
} else {
    $controller->showWelcomePage();
}
?>
