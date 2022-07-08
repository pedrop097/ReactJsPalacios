//@ts-check
import CartWidget from "./CarWidget/CartWidget";
import { Link } from 'react-router-dom';
function Nav() {
  return (

    <nav>

      <Link to={"/"} style={{ textDecoration: "none", color: "black", margin:"10px" }}>
       
        <img src="../imagenes/logotico.png" width="40" height="30" className="logotipo" alt=""></img><></>
        Dinioso Shop de Bebidas
      </Link>

      <ul className="nav nav-tabs" style={{margin:"10px"}}>

        <li className="nav-item">
          <button className="nav-link" aria-current="page">Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>

          <div className="dropdown-menu">

      
            <button className="dropdown-item">
           <Link style={{textDecoration:"none", color:"black", fontFamily:"sans-serif"}} to={"/category/vinos"}>Vinos</Link>
              </button>
            <button className="dropdown-item">
            <Link style={{textDecoration:"none", color:"black",fontFamily:"sans-serif"}} to={"/category/cervezas"}>Cervezas</Link>
              
            </button>
            <button className="dropdown-item">
            <Link style={{textDecoration:"none", color:"black",fontFamily:"sans-serif"}} to={"/category/vodka"}>Vodka</Link>
             </button>

          </div>
        </li>
        
        <li className="nav-item">
          <button className="nav-link">Contacto</button>
        </li>
      </ul>
      <CartWidget/>
    </nav>

  );
}
export default Nav;


