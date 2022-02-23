import './Navbar.css';

import React from 'react';

//import UserPage from '../container/UserPage'

const Navbar = ({ user }) => (
    <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
        <img 
            src ={user.avatar_url}
             width = "50"
             height ="50"
             className = "mr-3 avatar"
             alt = "profile"
             />
             <h3 style ={{ color: "white" }}>{user.name}</h3>
        

         
             <a className="ml-auto d-flex align-items-center" type="text" href="/">
                 Search for Other User
            </a>
    </nav>
);

export default Navbar;