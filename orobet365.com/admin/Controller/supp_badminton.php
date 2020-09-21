<?php
require_once('../Model/badminton.class.php');
$badminton = new Badminton(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$badminton->supprimer();

header("location:../listesbadminton.php?resultat=oui");
//exit();
?>