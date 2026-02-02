const API_URL = process.env.REACT_APP_API_URL || "https://l16-appwebservice.onrender.com"; 

export async function getAssignments() {
  const res = await fetch(`${API_URL}/allassignments`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addAssignment(assignment) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User is not logged in");
  const res = await fetch(`${API_URL}/addassignment`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function updateAssignment(id, assignment) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User is not logged in");
  const res = await fetch(`${API_URL}/updateassignment/${id}`, {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function deleteAssignment(id) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("User is not logged in");
  const res = await fetch(`${API_URL}/deleteassignment/${id}`, {
    method: "DELETE",
    headers: { 
      "Authorization": `Bearer ${token}` //
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}

export async function login(credentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}
