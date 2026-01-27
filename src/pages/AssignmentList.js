import { useEffect, useState } from "react";
import Assignment from "../components/Assignment";
import { getAssignments, deleteAssignment } from "../services/api";

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const data = await getAssignments();
      setAssignments(data);
    } catch (error) {
      console.error("Failed to load assignments", error);
      setError("Failed to load assignments");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(assignment) {
    setBusy(true);
    setError("");
    try {
      // delete from backend
      const res = await deleteAssignment(assignment.id);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // remove from local state
      setAssignments((prevAssignments) =>
        prevAssignments.filter((a) => a.id !== assignment.id)
      );
    } catch (error) {
      console.error("Failed to delete assignment", error);
      setError("Failed to delete assignment");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <div>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            assignment={assignment}
            onDelete={handleDelete}
            busy={loading}
            disabled={busy}
          />
        ))}
      </div>
    </main>
  );
}
