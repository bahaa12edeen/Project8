<?php

header("Access-Control-Allow-Origin: *");

$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "project8";

$dsn ="mysql:host=$dbsn;dbname=$dbname";

$conn = new PDO($dsn,$dbun,$password);


?>