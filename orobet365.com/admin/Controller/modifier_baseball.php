<?php
require_once('../Model/baseball.class.php');


$baseball = new Baseball($_POST['champion'],$_POST['eq1'],$_POST['eq2'],$_POST['date'],
$_POST['temp'],$_POST['resultateq1'],$_POST['resultateq2']);
$baseball->modifier();

header("location:../listesbaseball.php?resultat=oui");
//exit();
?>