import './register.scss';

function Register() {
  return (

<div id="main-wrapper" class="container">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <img className='h5 mb-0 w-50 dark-logo' src='/assets/logo_main_light.png'/>
                                <div class="m-5">
                                    <h3 class="h4 font-weight-bold text-theme text-center">INSCRIPTION</h3>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="yourName">Nom</label>
                                        <input type="text" class="form-control" id="yourName" />
                                    </div>
                                    <div class="form-group">
                                        <label for="InputEmail">Email</label>
                                        <input type="email" class="form-control" id="InputEmail" />
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="InputPassword">Mot de passe</label>
                                        <input type="password" class="form-control" id="InputPassword" />
                                      
                                    </div>
                                    <button type="submit" class="btn btn-theme text-center">S'inscrire</button>
                                    <p class="text-muted text-center mt-3 mb-0">Déja un compte ? <a href="login.html" class="text-primary ml-1">Connexion</a></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
       
            
               
        </div>
       
    </div>
  
</div>

  );
}

export default Register;