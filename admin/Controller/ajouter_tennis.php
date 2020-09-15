<?php
require_once('../Model/Tennis.class.php');


$tennis = new Tennis($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$tennis->ajouter();

header("location:../listestennis.php?resultat=oui");
//exit();
?>