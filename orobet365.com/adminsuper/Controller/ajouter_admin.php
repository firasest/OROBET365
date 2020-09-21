<?php
require_once('../Model/Admin.class.php');
$admin = new Admin($_POST['login'],$_POST['password'],$_POST['email']);
$admin->ajouter();

header("location:../listesadmin.php?resultat=oui");
//exit();
?>