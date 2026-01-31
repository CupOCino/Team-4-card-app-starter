import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";
import { getAssignments, updateAssignment } from "../services/api";

export default function EditCard() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [values, setValues] = useState({
    module_name: "",
    assignment_title: ""
  });

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    async function loadAssignment() {
      setLoading(true);
      setError(null);

      try {
        const assignments = await getAssignments();
        const found = assignments.find((a) => String(a.id) === String(id));

        if (!found) {
          throw new Error("Assignment not found");
        }

        setValues({
          module_name: found.module_name || "",
          assignment_title: found.assignment_title || ""
        });
      } catch (err) {
        console.error("Failed to load assignment", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadAssignment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);

    try {
      await updateAssignment(id, values);
      navigate("/allassignments");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <AssignmentForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Save Changes"
      />
    </main>
  );
}