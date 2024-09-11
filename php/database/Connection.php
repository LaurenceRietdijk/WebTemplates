<?php
    //There are 3 types of methods in PHP to connect to MySQL database through the back end:
    //MySQL
    //MySQLi
    //PDO
    class Connection{
        private $server = "mysql:host=localhost;dbname=movies_db";
        private $username = "root";
        private $password = "";
        private $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);

        public $connection;

        public function openConnection(){
            try{
                $this->connection = new PDO($this->server, $this->username, $this->password, $this->options);
                return $this->connection;
            }catch(PDOException $e){
                echo "Failed to establish connection " . $e->getMessage();
            }
        }

        public function closeConnection(){
            $this->connection = null;
        }
    }



?>