<?php
class CnxClient{
private $username;
private $password;

        
function __construct($username,$password){
$this->username = $username;
$this->password = $password;


}


public function verifier(){ 

    include('../includes/connect_db.php');
    $req = $bdd->query(" SELECT * FROM client WHERE username = '$this->username' AND password = '$this->password'");
    $resultat = $req->fetch();

  if (!$resultat)
{
  header('location:../../registration.php?error=oui');
  
}
   else
{
       session_start();
       $_SESSION['id'] = $resultat['id'];
       $_SESSION['username'] = $resultat['username'];
       $_SESSION['password'] = $resultat['password'];
       
       
       
	   
	header('location:../../en2.php');


} 

}
}


$client = new CnxClient($_POST['username'],$_POST['password']);


?>