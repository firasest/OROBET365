<?php
class CnxAdmin{
private $login;
private $password;

        
function __construct($login,$password){
$this->login = $login;
$this->password = $password;


}


public function verifier(){ 

    include('../includes/connect_db.php');
    $req = $bdd->query(" SELECT * FROM admin WHERE login = '$this->login' AND password = '$this->password'");
    $resultat = $req->fetch();

  if (!$resultat)
{
  header('location:../registrationd56b.php?error=oui');
  
}
   else
{
       session_start();
       $_SESSION['id'] = $resultat['id'];
      
       $_SESSION['login'] = $resultat['login'];
       $_SESSION['password'] = $resultat['password'];
       $_SESSION['email'] = $resultat['email'];
       
       
	   
	header('location:../sport.html');


} 

}
}


$admin = new CnxAdmin($_POST['login'],$_POST['password']);


?>