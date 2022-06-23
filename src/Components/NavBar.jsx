import CartWidget from "./CarWidget/CartWidget";

function Nav(){
    return(
      <div>
       <nav>
        
       
        
      <ul className="nav nav-tabs">
      <img src="./logotico.png"  width="40" height="30" className="logotipo" alt=""></img>
      <li className="nav-item">
        <button className="nav-link" aria-current="page">Inicio</button>
      </li>
      <li className="nav-item dropdown">
        <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item">Vodka</button></li>
          <li><button className="dropdown-item">Cervezas</button></li>
          <li><button className="dropdown-item">Licores</button></li>
                    
        </ul>
      </li>
      <li className="nav-item">
        <button className="nav-link" href="#">Promociones</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" href="#">Contacto</button>
      </li>
    </ul>
    
  <CartWidget cant="8" />
    
    </nav>
        </div>
);
}
export default Nav;


