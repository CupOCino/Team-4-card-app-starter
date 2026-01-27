import { Link } from "react-router-dom";

export default function Assignment({ assignment }) {
  return (
    <div>
      <h2>{assignment.assignment_title}</h2>
      <p>Module: {assignment.module_name}</p>
      <p>Status: {assignment.status}</p>
      <p>ID: {assignment.id}</p>

      <Link to={`/assignments/${assignment.id}/edit`}>Edit</Link>
    </div>
  );
}
