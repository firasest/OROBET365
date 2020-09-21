<?php
require_once('../Model/tennis.class.php');
$tennis = new tennis(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$tennis->supprimer();

header("location:../listestennis.php?resultat=oui");
//exit();
?>