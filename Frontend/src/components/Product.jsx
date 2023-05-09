import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import UserDetails from './Products';


function Product(){
    const [products, setProductState] = useState([]);
    const [productLength, setProductLengthState] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/productos")
        .then((response) => response.json())
        .then((result) => setProductState(result.data));
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:3026/api/productos")
        .then((res) => res.json())
        .then((productLength) => setProductLengthState(productLength.meta));
    }, []);
    return ( <Router>
        <div className="">
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nombre}</td>
                    <td>{product.descripcion}</td>
                    <td>
                     
                      
                        <Link to={`/api/productos/${product.id}`}>Ver detalles</Link>
                     
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h3>La cantidad de productos es: {productLength.total}</h3>
         
        </div>
        </Router>)
}

export default Product;