<?php
require_once('../Model/badminton.class.php');


$badminton = new Badminton($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$badminton->modifier();

header("location:../listesbadminton.php?resultat=oui");
//exit();
?>