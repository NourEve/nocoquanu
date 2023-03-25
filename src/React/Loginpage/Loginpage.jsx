import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo from "../../../public/assets/nocoquanu-logo.png";
import scout from "../../../public/assets/scout.gif";

const Loginpage = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "get",
      url: `https://test.hugoorickx.tech/con/${username}/${password}`,
      responseType: "json",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <div className="loginpage">
        <div className="logo_container">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Connexion</button>
          </form>
        </div>
        <img className="scout" src={scout} alt="scout" />
      </div>
    </main>
  );
};

export default Loginpage;

