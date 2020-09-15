<?php
require_once('../Model/Football.class.php');


$football = new Football($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$football->ajouter();

header("location:../listesfootball.php?resultat=oui");
//exit();
?>