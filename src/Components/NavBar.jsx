

function Nav(){
    return(
       <nav>
        
      <ul className="nav nav-tabs">
      <img src="./logotico.png"  width="40" height="30" className="logotipo"></img>
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Inicio</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Cervezas</a></li>
          <li><a className="dropdown-item" href="#">Vinos</a></li>
          <li><a className="dropdown-item" href="#">Licores</a></li>
                    
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Promociones</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
      </li>
    </ul>
    
  
    
    </nav>
        
);
}
export default Nav;


