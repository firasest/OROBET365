
<!doctype html>
<html lang="en">

    
<!-- Mirrored from themesbrand.com/skote/layouts/vertical/auth-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 25 Feb 2020 15:47:36 GMT -->
<head>
        <meta charset="utf-8" />
        <title>S'identfier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- Bootstrap Css -->
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
<style>
.alert-success {
    color: #e8dede;
    background-color: #e80d0d;
    border-color: #c6eee0;
}

</style>
    </head>

    <body style="background-color: #91aee2;">
    <?php 
                      if (isset($_GET['error'])) {

                       if ($_GET['error'] == 'oui') {
                      ?>

                          <br><div class="container"><div class="alert alert-success alert-dismissible">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                    
                                   Erreur login ou mot de passe.
                                    
                                    </div></div>

                          <?php  }else{ 
                              ?>
                              <div></div>
                          <?php } 
                            }?>        
                                     
       
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-soft-primary">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Bienvenue !</h5>
                                            <p>Connectez-vous pour continuer sur OROBET.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div>
                                    <a href="#">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.png" alt="" class="rounded-circle" height="34">
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2">
                                    <form class="form-horizontal" action="Controller/cnx_admin.php" method="post">
        
                                    <div class="form-group">
                                            <label for="username">Nom d'utilisateur</label>
                                            <input type="text" class="form-control" id="username"  name="login" placeholder="Saisissez votre nom d'utilisateur">
                                        </div>
                
                                        <div class="form-group">
                                            <label for="userpassword">Mot de passe</label>
                                            <input type="password" class="form-control" id="userpassword" name="password"  placeholder="Saisissez votre Mot de passe">        
                                        </div>
                
                                        
                                        
                                        <div class="mt-3">
                                            <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">S'identifier</button>
                                        </div>
            
                                      
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            <p>Vous n'avez pas de compte? <a href="auth-register.php" class="font-weight-medium text-primary"> S'inscrire maintenant </a> </p>
                            <p>© 2020 OROBET. Fabriqué avec <i class="mdi mdi-heart text-danger"></i> par Designet</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </body>

</html>
