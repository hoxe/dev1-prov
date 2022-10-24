import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./home.css"

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <div id="home">
            <h1 className="title">HomePage</h1>
            <div className="action">
                <p>{String( ("Login is ") + authenticated)}</p>
               <button onClick={handleLogout}>Logout</button>
               </div>
        </div>
        
    );
};

export default HomePage;