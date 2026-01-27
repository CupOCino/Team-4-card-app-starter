import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm"; 
// 1. FIXED: Import 'addAssignment' instead of 'addCard'
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
      // 2. FIXED: Call the new function name 'addAssignment'
      await addAssignment(values);
      navigate("/assignments"); // or "/assignments" depending on your route path
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Assignment"
      />
    </main>
  );
}