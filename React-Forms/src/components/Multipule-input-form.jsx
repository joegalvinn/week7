import { useState } from "react";

export function MyForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />{" "}
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formValues.age}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <p>Current value is: {formValues.age}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
