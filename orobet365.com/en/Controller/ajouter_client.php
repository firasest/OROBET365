<?php
ob_start();
require_once('../Model/Client.class.php');
$client = new Client(
    $_POST['nom'],
    $_POST['prenom'],
    $_POST['email'],
    $_POST['date_nas'],
    $_POST['nationalite'],
    $_POST['region'],
    $_POST['adresse'],
    $_POST['adresse2'],
    $_POST['ville'],
    $_POST['mobile'],
    $_POST['username'],
    $_POST['password'],
    $_POST['confirmpassword'],
    $_POST['code']);
  
$client->ajouter();

header("location:../indexclient.php?resultat=oui");
//exit();
?>