import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm"; 
import { addAssignment } from "../services/api"; 

export default function AddAssignment() {
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    module_name: "",       
    assignment_title: ""
  });
  
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);

    try {
      await addAssignment(values);
      navigate("/allassignments");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <AssignmentForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Assignment"
        subtext="Enter the details of your new assignment below."
      />
    </main>
  );
}