<?php
require_once('../Model/volleyball.class.php');


$volleyball = new Volleyball($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$volleyball->ajouter();

header("location:../listesvolleyball.php?resultat=oui");
//exit();
?>