<?php
class UserController {
    public function showUserPage() {
        include './views/users.html';
    }

    public function getUserData() {
        require_once './models/User.php';
        $users = UserModel::getAllUsers();
        header('Content-Type: application/json');
        echo json_encode($users);
    }
}
?>
