export default function AssignmentForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
  subtext, 
}) {
  return (
    <div className="card-form-container">
      <h1>{submitText}</h1>
      

      {subtext && <p style={{ color: "#888", marginBottom: "20px" }}>{subtext}</p>}

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Module Name:</label>
          <input
            type="text"
            name="module_name"
            value={values.module_name}
            onChange={onChange}
            placeholder="e.g. Web Development"
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
          />
        </div>

        <button type="submit" disabled={busy}>
          {busy ? "Processing..." : submitText}
        </button>
      </form>
    </div>
  );
}