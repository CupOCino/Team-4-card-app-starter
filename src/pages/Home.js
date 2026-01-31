// Home.js
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to TRACE</h1>
      <p>Manage your school work easily.</p>
      <Link to="/allassignments">View All Assignments</Link>
    </main>
    /* TODO: Design and complete the Home page
  - display instructions
  - link to Cards page
  - style as a landing page */
  );
}