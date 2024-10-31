<?php
class UserController {
    public function showWelcomePage() {
        include './views/users.html';
    }

    public function sendUserData() {
        require_once './models/UserModel.php';
        
        $userList = UserModel::fetchAllUsers();
        header('Content-Type: application/json');
        echo json_encode($userList);
    }
}
?>
