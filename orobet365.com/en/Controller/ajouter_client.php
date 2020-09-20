<?php
ob_start();
require_once('../Model/Client.class.php');
$client = new Client(
    
    $_POST['nom'],
    $_POST['prenom'],
    $_POST['email'],
    $_POST['ville'],
    $_POST['phone'],
    $_POST['login'],
    $_POST['password']
    

);
  
$client->ajouter();

header("location:../registrationd56b.php?resultat=oui");
//exit();
?>