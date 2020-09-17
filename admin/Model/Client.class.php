<?php
class Client{
private $login;
private $name;
private $surname;
private $password;
private $phone;
private $bonus;
private $balance;


                

function __construct($login,$name,$surname,$password,$phone,$bonus,$balance){
$this->login = $login;
$this->name = $name;
$this->surname = $surname;
$this->password = $password;
$this->phone = $phone;
$this->bonus = $bonus;
$this->balance = $balance;



}

public function ajouter(){ 

  include('../includes/connect_db.php');
      
    
      $req = $bdd->exec ("INSERT INTO `client`(`login`,
                                               `name`, 
                                               `surname`,
                                               `password`,
                                               `phone`, 
                                               `bonus`, 
                                               `balance`) 
      VALUES ('$this->login',
              '$this->name',
              '$this->surname',
              '$this->password',
              '$this->phone',
              '$this->bonus',
              '$this->balance')");
      
      echo'oui';
                  //return TRUE;
  
  }


    public function modifier(){ 

    include('../includes/connect_db.php');

    $id=$_GET['id'];
        
    $req=$bdd->exec("UPpassword `client` 
    SET `login`='$this->login', `name`='$this->name',`surname`='$this->surname',`password`='$this->password',`phone`='$this->phone',`bonus`='$this->bonus',`balance`='$this->balance'  

    
    WHERE id=$id");
    
    
    echo'oui';
    //return TRUE;
 			}



public function supprimer(){ 
    
	include('../includes/connect_db.php');

    $req = $bdd->exec('DELETE FROM `client` WHERE id=\''.$_GET['id'].'\''); 
 
		echo'oui';	
 
 
}
        
}

//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['name'],$_POST['password'],$_POST['pass'],$_POST['type']);


?>