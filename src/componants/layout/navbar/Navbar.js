import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">


  <a className="navbar-brand d-lg-none" href="#">Navbar</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">A propos</a>
      </li>
    </ul>
    
    

    <a className="navbar-brand d-none d-lg-block" href="#">
      <img className='mx-auto w-25 dark-logo' src='/assets/logo_main.png'/>
      <img className='mx-auto w-25 light-logo' src='/assets/logo_main_light.png'/>
    </a>
    
    
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;