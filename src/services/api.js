/**
 * API Service (Create React App)
 *
 * 1) Create `.env` at project root
 * 2) Set: REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com
 * 3) Restart `npm start`
 */
const API_URL = process.env.REACT_APP_API_URL || "";

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /allcards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

export async function getAssignments() {
  const res = await fetch(`${API_URL}/allassignments`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function addCard(card) {
  // TODO: implement POST /addcard
}

export function EditCard(id, card) {
  // TODO: implement PUT /updatecard/:id
}

export function deleteAssignment(id) {
  // TODO: implement DELETE /deletecard/:id
}
