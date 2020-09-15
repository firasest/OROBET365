<?php
require_once('../Model/icehockey.class.php');


$icehockey = new Icehockey($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$icehockey->ajouter();

header("location:../listesicehockey.php?resultat=oui");
//exit();
?>