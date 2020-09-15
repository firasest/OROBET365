<?php
require_once('../Model/Basketball.class.php');
$basketball = new Basketball(isset($_POST['champion']),isset($_POST['eq1']),isset($_POST['eq2']),isset($_POST['date']),
                         isset($_POST['temp']),isset($_POST['resultateq1']),isset($_POST['resultateq2']));
$basketball->supprimer();

header("location:../listesbasketball.php?resultat=oui");
//exit();
?>