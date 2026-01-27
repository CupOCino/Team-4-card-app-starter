/**
 * API Service
 * * 1) Create a file named .env in your project root (next to package.json)
 * 2) Add this line inside it: 
 * REACT_APP_API_URL=https://your-backend-url.onrender.com
 * 3) Restart your react app (Ctrl+C, then npm start)
 */

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; 

// --- GET ALL ASSIGNMENTS ---
export async function getAssignments() {
  // FIX: The comment said the endpoint is /allcards, not /allassignments
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- ADD NEW ASSIGNMENT ---
export async function addCard(card) {
  const res = await fetch(`${API_URL}/addcard`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- EDIT ASSIGNMENT ---
export async function EditCard(id, card) {
  const res = await fetch(`${API_URL}/updatecard/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// --- DELETE ASSIGNMENT ---
export async function deleteAssignment(id) {
  const res = await fetch(`${API_URL}/deletecard/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}