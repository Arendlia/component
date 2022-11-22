
 


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">


  <a class="navbar-brand d-lg-none" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse justify-content-between" id="navbarToggle">

    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Shop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">A propos</a>
      </li>
    </ul>
    
    

    <a class="navbar-brand d-none d-lg-block" href="#"><img className='w-25' src='/assets/logo_main.png'/></a>
    
    
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;