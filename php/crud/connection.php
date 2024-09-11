<?php
class DB{
    private $dbHost = "localhost";
    private $dbUser = "root";
    private $dbPass = "";
    private $dbName = "movie_db";
    private $db = null;

    public function __construct()
    {
        if(!isset($this->db)){
            try{
                $conn = new PDO("mysql:host=".$this->dbHost.";dbName=".$this->dbName,$this->dbUser,$this->dbPass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e)
            {
                die("Failed to connect to database: ". $e->getMessage());
            }

            $this->db = $conn;
        }
    }

    public function connStatus(){
        if($this->db == null){
            return "closed";
        }else{
            return "Open";
        }
    }
}