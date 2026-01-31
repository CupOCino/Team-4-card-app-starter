import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USERS = [
  { username: "user", password: "userpassword123" }
];

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);

    try {
      const user = USERS.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        throw new Error("Invalid username or password");
      }

      localStorage.setItem("token", username);
      navigate("/allassignments");
    } catch (err) {
      console.error("Login failed", err);
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <div className="card-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "#ff4d4d" }}>{error}</p>}

          <button disabled={busy} type="submit">
            {busy ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}   