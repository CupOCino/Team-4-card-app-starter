import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";

const API_URL = process.env.REACT_APP_API_URL || "https://l16-appwebservice.onrender.com";

export default function AddAssignment() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    module_name: "",
    assignment_title: "",
    description: "",
    status: "not started", // default
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
      const res = await fetch(`${API_URL}/addassignment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      // Show detailed backend errors
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log("Assignment added:", data);

      // Reset form after successful submission
      setValues({
        module_name: "",
        assignment_title: "",
        description: "",
        status: "not started",
      });

      // Navigate to assignments list
      navigate("/allassignments");
    } catch (err) {
      console.error("Add assignment error:", err);
      setError(err.message || "Failed to add assignment");
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
