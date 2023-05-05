import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserDetails (){
  const { id } = useParams();
  const [user, setUser] = useState([]);
 

 

  useEffect(() => {
    fetch("http://localhost:3026/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [id]);
  
  const userFiltrado = user.find(u => u.id == id);
  

  if (!userFiltrado) {
    return <p>Cargando...</p>;
  }

  return (
    <>
     <p>Id:{userFiltrado.id}</p>
     <p>Nombre:{userFiltrado.nombre}</p>
     <p>Email:{userFiltrado.email}</p>
     <p>País:{userFiltrado.pais}</p>
     <p>Telefono:{userFiltrado.telefono}</p>
     
    </>
  );
}


export default UserDetails;
