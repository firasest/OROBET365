<?php
class Client{

private $name;
private $prenom;
private $email;
private $city;
private $phone;
private $login; 
private $password;



              

function __construct($name,$prenom,$email,$city,$phone,$login,$password){
  
  $this->name = $name;
  $this->prenom = $prenom;
  $this->email = $email;
  $this->city = $city;
  $this->phone = $phone;
  $this->login = $login;
  $this->password = $password;
  
  




}

public function ajouter(){ 

  include('../includes/connect_db.php');
      
    
      $req = $bdd->exec ("INSERT INTO `client`(
                                              `nom`,
                                              `prenom`,
                                              `email`,
                                              `ville`, 
                                              `mobile`,
                                              `username`, 
                                              `password`
                                              )
       VALUES (
               '$this->name',
               '$this->prenom',
               '$this->email',
               '$this->city',
               '$this->phone',
               '$this->login',
               '$this->password'
               )");
      
      echo 'oui';
                  //return TRUE;
  
  }


    public function modifier(){ 

    include('../includes/connect_db.php');

    $id=$_GET['id'];
        
    $req=$bdd->exec("UPDATE `client` SET 
     `name`='$this->name',
     `surname`='$this->surname',
     `email`='$this->email',
     `date_nas`='$this->date_nas',
     `nationalite`='$this->nationalite',
     `region`='$this->region',
     `city`='$this->city',
     `adresse2`='$this->adresse2',
     `region`='$this->region',
     `email`='$this->phone',
     `date_nas`='$this->login',
     `nationalite`='$this->password',
     `region`='$this->gender',
     `nationalite`='$this->code',
    
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

//$instance = new User($_POST['name'],$_POST['surname'],$_POST['name'],$_POST['email'],$_POST['pass'],$_POST['type']);


?>