import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3026/api/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [id]);

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1>{user.nombre}</h1>
      <p>{user.email}</p>
      <p>{user.pais}</p>
    </>
  );
}

export default UserDetails;
