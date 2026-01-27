/**
 * API Service
 * * 1) Create a file named .env in your project root (next to package.json)
 * 2) Add this line inside it: 
 * REACT_APP_API_URL=https://your-backend-url.onrender.com
 * 3) Restart your react app (Ctrl+C, then npm start)
 */

const API_URL = process.env.REACT_APP_API_URL || "https://l16-appwebservice.onrender.com"; 

// --- GET ALL ASSIGNMENTS ---
export async function getAssignments() {
  const res = await fetch(`${API_URL}/allassignments`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- ADD NEW ASSIGNMENT ---
export async function addAssignment(assignment) {
  const res = await fetch(`${API_URL}/addassignment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fixed: Now sends 'assignment', not 'card'
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- EDIT ASSIGNMENT ---
export async function updateAssignment(id, assignment) {
  // Fixed: Endpoint changed from /updatecard to /updateassignment
  const res = await fetch(`${API_URL}/updateassignment/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(assignment),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- DELETE ASSIGNMENT ---
export async function deleteAssignment(id) {
  // Fixed: Endpoint changed from /deletecard to /deleteassignment
  const res = await fetch(`${API_URL}/deleteassignment/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}