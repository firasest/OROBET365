<?php
class Admin{
private $login;
private $password;
private $email;


                

function __construct($login,$password,$email){
$this->login = $login;
$this->password = $password;
$this->email = addslashes($email);




}

public function ajouter(){ 

  include('../includes/connect_db.php');
      
    
      $req = $bdd->exec ("INSERT INTO `admin`(`login`, `password`, `email`) VALUES ('$this->login','$this->password','$this->email')");
      
      echo'oui';
                  //return TRUE;
  
  }


    public function modifier(){ 

    include('../includes/connect_db.php');

    $id=$_GET['id'];
        
    $req=$bdd->exec("UPDATE `admin` SET  `login`='$this->login',`password`='$this->password',`email`='$this->email' WHERE id=$id");
    
    
    echo'oui';
    //return TRUE;
 			}



public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM `admin` WHERE id=\''.$_GET['id'].'\''); 
 
		echo'oui';	
 
 
}
        
}

//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['login'],$_POST['email'],$_POST['pass'],$_POST['type']);


?>