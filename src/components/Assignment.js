import { useNavigate } from "react-router-dom";

export default function Assignment({ assignment, onDelete, busy, disabled }) {
  const navigate = useNavigate();

  return (
    <div className="assignment-card">
      <div className="info">
        <h3>{assignment.assignment_title}</h3>
        <h4>Module: {assignment.module_name}</h4>
        <p>{assignment.description}</p>
        <p style={{ fontSize: "0.85rem", color: "#888" }}>Status: {assignment.status || "Pending"}</p>
      </div>

      <div className="actions">
        <button 
          onClick={() => navigate(`/assignments/${assignment.id}/edit`)} 
          disabled={disabled}
        >
          Edit
        </button>

        <button 
          onClick={() => onDelete(assignment)}
          disabled={disabled || busy}
          style={{ borderColor: "#ff4d4d", color: "#ff4d4d", marginLeft: "10px" }} 
        >
          {busy ? "..." : "Delete"}
        </button>
      </div>
    </div>
  );
}