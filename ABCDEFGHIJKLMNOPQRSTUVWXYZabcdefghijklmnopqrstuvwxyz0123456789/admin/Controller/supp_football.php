<?php
require_once('../Model/Football.class.php');
$football = new Football(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$football->supprimer();

header("location:../listesfootball.php?resultat=oui");
//exit();
?>