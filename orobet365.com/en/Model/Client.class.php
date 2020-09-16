<?php
class Client{
private $nom;
private $prenom;
private $email;
private $date_nas;
private $nationalite;
private $region;
private $adresse;
private $adresse2;  
private $ville;
private $mobile;
private $username;
private $password;
private $confirmpassword;
private $code;
              

function __construct($nom,$prenom,$email,$date_nas,$nationalite,$region,$adresse,$adresse2,$ville,
$mobile,$username,$password,$confirmpassword,$code){
$this->nom = $nom;
$this->prenom = $prenom;
$this->email = $email;
$this->date_nas = $date_nas;
$this->nationalite = $nationalite;
$this->region = $region;
$this->adresse = $adresse;
$this->adresse2 = $adresse2;
$this->ville = $ville;
$this->mobile = $mobile;
$this->username = $username;
$this->password = $password;
$this->confirmpassword = $confirmpassword;
$this->code = $code;



}

public function ajouter(){ 

  include('../includes/connect_db.php');
      
    
      $req = $bdd->exec ("INSERT INTO `client`(`nom`,
                                              `prenom`,
                                              `email`,
                                              `date_nas`,
                                              `nationalite`,
                                              `region`,
                                              `adresse`,
                                              `adresse2`, 
                                              `ville`, 
                                              `mobile`,
                                              `username`, 
                                              `password`,
                                              `confirmpassword`,
                                              `code`)
       VALUES ('$this->nom',
               '$this->prenom',
               '$this->email',
               '$this->date_nas',
               '$this->nationalite',
               '$this->region',
               '$this->adresse',
               '$this->adresse2',
               '$this->ville',
               '$this->mobile',
               '$this->username',
               '$this->password',
               '$this->confirmpassword',
               '$this->code')");
      
      echo 'oui';
                  //return TRUE;
  
  }


    public function modifier(){ 

    include('../includes/connect_db.php');

    $id=$_GET['id'];
        
    $req=$bdd->exec("UPDATE `client` SET 
     `nom`='$this->nom',
     `prenom`='$this->prenom',
     `email`='$this->email',
     `date_nas`='$this->date_nas',
     `nationalite`='$this->nationalite',
     `region`='$this->region',
     `ville`='$this->ville',
     `adresse2`='$this->adresse2',
     `region`='$this->region',
     `email`='$this->mobile',
     `date_nas`='$this->username',
     `nationalite`='$this->password',
     `region`='$this->confirmpassword',
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

//$instance = new User($_POST['nom'],$_POST['prenom'],$_POST['nom'],$_POST['email'],$_POST['pass'],$_POST['type']);


?>