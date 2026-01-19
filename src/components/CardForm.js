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
    <>
      <h1>Add a new card</h1>

      <form onSubmit={onSubmit}>
        <label>
          Card Name:
          <input type="text" name="name" />
        </label>

        <label>
          Card Picture:
          <input type="text" name="picture" />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}