import { useState } from 'react';
import logo from "../../../public/assets/nocoquanu-logo.png";
import gif from "../../../public/assets//scout.gif";

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Faire quelque chose avec les informations d'identification ici
  };

  return (
    <main>
        <div className="loginpage">

            <div className="logo_container">
            <img className="logo"src={logo} alt="logo" />
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

       
              <div className="gif">
                <img src={gif} alt="gif" />
              </div>
            
        </div>
    </main>
  );
}

export default Loginpage;
