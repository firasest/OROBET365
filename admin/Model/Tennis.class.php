<?php
class Tennis{
private $champion;
private $eq1;
private $eq2;
private $date;
private $temp;
private $resultateq1;
private $resultateq2;


                

function __construct($champion,$eq1,$eq2,$date,$temp,$resultateq1,$resultateq2){
$this->champion = $champion;
$this->eq1 = $eq1;
$this->eq2 = $eq2;
$this->date = $date;
$this->temp = $temp;
$this->resultateq1 = $resultateq1;
$this->resultateq2 = $resultateq2;



}

public function ajouter(){ 

  include('../includes/connect_db.php');
      
    
      $req = $bdd->exec ("INSERT INTO `tennis`(`champion`,`eq1`, `eq2`, `date`,`temp`, `resultateq1`, `resultateq2`) 
      VALUES ('$this->champion','$this->eq1','$this->eq2','$this->date','$this->temp','$this->resultateq1','$this->resultateq2')");
      
      echo'oui';
                  //return TRUE;
  
  }


    public function modifier(){ 

    include('../includes/connect_db.php');

    $id=$_GET['id'];
        
    $req=$bdd->exec("UPDATE `tennis` 
    SET `champion`='$this->champion', `eq1`='$this->eq1',`eq2`='$this->eq2',`date`='$this->date',`temp`='$this->temp',`resultateq1`='$this->resultateq1',`resultateq2`='$this->resultateq2'  

    
    WHERE id=$id");
    
    
    echo'oui';
    //return TRUE;
 			}



public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM `tennis` WHERE id=\''.$_tempET['id'].'\''); 
 
		echo'oui';	
 
 
}
        
}

//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['eq1'],$_POST['date'],$_POST['pass'],$_POST['type']);


?>