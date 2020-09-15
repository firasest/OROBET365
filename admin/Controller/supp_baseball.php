<?php
require_once('../Model/baseball.class.php');
$baseball = new Baseball(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$baseball->supprimer();

header("location:../listesbaseball.php?resultat=oui");
//exit();
?>