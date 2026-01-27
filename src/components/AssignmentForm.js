export default function AssignmentForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  return (
    <div className="assignment-form-container">
      <h1>Add a new assignment</h1>

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

        {/* Field 2: Assignment Title */}
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