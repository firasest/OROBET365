<?php
require_once('../Model/volleyball.class.php');
$volleyball = new Volleyball(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$volleyball->supprimer();

header("location:../listesvolleyball.php?resultat=oui");
//exit();
?>