import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Header from '../../components/headers/Header';
import axios from "axios";
import { GlobalState } from "../../GlobalState";


const Home = () => {
   const state = useContext(GlobalState);
   const [isLogged] = state?.userAPI.isLogged;
   const [userEmail] = state?.userAPI?.userEmail;
   const logoutUser = async () => {
      await axios.get("/user/logout");

      localStorage.removeItem("firstLogin");

      window.location.href = "/";
   };
   return (
      <div>
         <Header />
         <div className="home__container">
            {isLogged && <h2>{userEmail.email}</h2>}
            {isLogged ? <button onClick={logoutUser}>Saytdan chiqish</button> :
               <Link to="/login">login</Link>

            }
            {!isLogged &&
               <Link to="/register">register</Link>
            }


            <h1>Home</h1>
         </div>

      </div>
   )
}

export default Home