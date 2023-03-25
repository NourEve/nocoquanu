import { useState } from 'react';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les informations d'identification ici
  };

  return (
    <main>
        <div className="loginpage">

            <div className="title">
                <h2>Nocoquanu</h2>
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

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </main>
  );
}

export default Loginpage;
