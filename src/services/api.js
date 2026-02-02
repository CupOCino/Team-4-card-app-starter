const API_URL = process.env.REACT_APP_API_URL || "https://l16-appwebservice.onrender.com";

// Helper to return Authorization header if token exists
function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// LOGIN (public route)
export async function login(credentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json(); // { token: "..." }
}

// GET assignments (public)
export async function getAssignments() {
  const res = await fetch(`${API_URL}/allassignments`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// ADD assignment (protected)
export async function addAssignment(assignment) {
  const res = await fetch(`${API_URL}/addassignment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(), // automatically includes token if exists
    },
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// UPDATE assignment (protected)
export async function updateAssignment(id, assignment) {
  const res = await fetch(`${API_URL}/updateassignment/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// DELETE assignment (protected)
export async function deleteAssignment(id) {
  const res = await fetch(`${API_URL}/deleteassignment/${id}`, {
    method: "DELETE",
    headers: {
      ...authHeader(),
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}