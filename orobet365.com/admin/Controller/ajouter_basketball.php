<?php
require_once('../Model/basketball.class.php');


$basketball = new Basketball($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$basketball->ajouter();

header("location:../listesbasketball.php?resultat=oui");
//exit();
?>