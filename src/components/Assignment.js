import { Link } from "react-router-dom";

export default function Assignment({ assignment, onDelete }) { // Accept onDelete prop
  return (
    <div className="card">
      <h2>{assignment.assignment_title}</h2> {/* Ensure this matches API key */}
      <p>Module: {assignment.module_name}</p>
      <p>Status: {assignment.status}</p>
      <p>ID: {assignment.id}</p>

      <Link to={`/assignments/${assignment.id}/edit`}>Edit</Link>
      {/* Add the delete button */}
      <button onClick={() => onDelete(assignment)}>Delete</button>
    </div>
  );
}
