<?php
class UserModel {
    public static function fetchAllUsers() {
        return [
            ['id' => 1, 'username' => 'Jane cars', 'email' => 'jane@example.com'],
            ['id' => 2, 'username' => 'John server', 'email' => 'john.server@example.com'],
            ['id' => 3, 'username' => 'SamWill', 'email' => 'samwill@example.com'],
        ];
    }
}
?>
