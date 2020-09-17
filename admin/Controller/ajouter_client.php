<?php
require_once('../Model/Client.class.php');


$client = new Client(
    $_POST['login'],
    $_POST['name'],
    $_POST['surname'],
    $_POST['password'],
    $_POST['phone'],
    $_POST['bonus'],
    $_POST['balance']);
$client->ajouter();

header("location:../listeclient.php?resultat=oui");
//exit();
?>