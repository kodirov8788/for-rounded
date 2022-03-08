import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css"
function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [userEmail] = state.userAPI.userEmail;

  console.log("isLogged", isLogged);
  console.log("isAdmin", isAdmin);
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };



  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser} className="header__logout">

            <div className="header__logoutEmail">
              <strong>
                {!userEmail.email
                  ? "my account"
                  : userEmail.email.match(/^.+(?=@)/)[0]}
              </strong>
            </div>
          </Link>
        </li>
      </>
    );
  };


  return (
    <header >
      <ul >
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login"><h3>Saytga kirish</h3></Link>
          </li>
        )}
        {isAdmin ? (
          <h1>admin</h1>
        ) : (
          <h1>user</h1>
        )}
      </ul>
    </header>
  );
}

export default Header;
