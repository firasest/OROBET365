<?php
ob_start();
require_once('../Model/Client.class.php');
$client = new Client(
    $_POST['login'],
    $_POST['name'],
    $_POST['city'],
    $_POST['surname'],
    $_POST['email'],
    $_POST['password'],
    $_POST['phone']);
  
$client->ajouter();

header("location:../registrationd56b.php?resultat=oui");
//exit();
?>