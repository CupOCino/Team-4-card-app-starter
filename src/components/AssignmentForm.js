import React from "react";

export default function AssignmentForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
  subtext
}) {
  return (
    <div className="card-form-container">
      <h1>{submitText}</h1>
      {subtext && <p style={{ color: "#888", marginBottom: "20px" }}>{subtext}</p>}

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Module Name:</label>
          <input
            type="text"
            name="module_name"
            value={values.module_name}
            onChange={onChange}
            placeholder="e.g. Web Development"
            required
          />
        </div>

        <div className="form-group">
          <label>Assignment Title:</label>
          <input
            type="text"
            name="assignment_title"
            value={values.assignment_title}
            onChange={onChange}
            placeholder="e.g. Project 1"
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={onChange}
            placeholder="Brief description"
            required
          />
        </div>

        <div className="simple-select-container">
          <label>Status:</label>
          <select name="status" value={values.status} onChange={onChange} className="simple-select">
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <br/>
        <br/>
        <br/>


        <button type="submit" disabled={busy}>
          {busy ? "Processing..." : submitText}
        </button>
      </form>
    </div>
  );
}
