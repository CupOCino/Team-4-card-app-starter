export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  return (
    <div className="card-form-container">
      <h1>Add a new assignment</h1>

      {/* Display Error if it exists */}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <form onSubmit={onSubmit}>
        
        {/* Field 1: Module Name */}
        <div className="form-group">
          <label>Module Name:</label>
          <input
            type="text"
            name="module_name"         // Matches DB column & State
            value={values.module_name} // Connects to State
            onChange={onChange}        // Allows typing
            placeholder="e.g. Web Development"
          />
        </div>

        {/* Field 2: Assignment Title */}
        <div className="form-group">
          <label>Assignment Title:</label>
          <input
            type="text"
            name="assignment_title"         // Matches DB column & State
            value={values.assignment_title} // Connects to State
            onChange={onChange}             // Allows typing
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