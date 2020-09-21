<?php
class CnxClient{
private $login;
private $password;

        
function __construct($login,$password){
$this->login = $login;
$this->password = $password;


}


public function verifier(){ 

    include('../includes/connect_db.php');
    $req = $bdd->query(" SELECT * FROM client WHERE login = '$this->login' AND password = '$this->password'");
    $resultat = $req->fetch();

  if (!$resultat)
{
  header('location:../registration.php?error=oui');
  
}
   else
{
       session_start();
       $_SESSION['id'] = $resultat['id'];
       $_SESSION['login'] = $resultat['login'];
       $_SESSION['password'] = $resultat['password'];
       
       
       
	   
	header('location:../../en2.php');


} 

}
}


$client = new CnxClient($_POST['login'],$_POST['password']);


?>