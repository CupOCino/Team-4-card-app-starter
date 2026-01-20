export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
    /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button ----
  - handle form submission ----
  - style as a form UI */
  return (
    <div className="card-form-container">
      <h1>Add a new card</h1>

      
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Card Name:</label>
          <input
            type="text"
            name="card_name"         
            value={values.card_name}  
            onChange={onChange}       
          />
        </div>

        <div className="form-group">
          <label>Card Picture (URL):</label>
          <input
            type="text"
            name="card_pic"          
            value={values.card_pic}   
            onChange={onChange}
          />
        </div>

        <button type="submit" disabled={busy}>
          {busy ? "Processing..." : submitText}
        </button>
      </form>
    </div>
  );
}