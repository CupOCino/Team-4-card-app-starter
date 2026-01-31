import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

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
      const res = await login({ username, password });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      localStorage.setItem("token", data.token);
      navigate("/cards/new");
    } catch (err) {
      console.error("Login failed", err);
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "crimson" }}>{error}</p>}

        <button disabled={busy} type="submit">
          {busy ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}