import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
       <div>
         <ul >
            
             <li >
                 <NavLink to='/'>Dashboard </NavLink>
             </li>
             <li>
                 <NavLink to='/usuarios'>Usuarios </NavLink>
             </li>
             <li>
                 <NavLink to='/productos'>Productos </NavLink>
             </li>
         </ul>
       </div>
    )
}

export default Navbar;