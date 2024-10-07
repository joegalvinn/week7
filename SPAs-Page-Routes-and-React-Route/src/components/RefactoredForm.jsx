import { useState } from "react";

function App() {
  //we can store the input data into state
  // const [username, setUsername] = useState("");
  // const [location, setLocation] = useState("");
  // const [job, setJob] = useState("");

  //we have simpilifed the store data into state
  const [formValues, setFormValues] = useState({
    username: "",
    location: "",
    job: "",
  });

  //we need to link each state variable with its corresponding input
  //we are going to use onChange to track the changes in the input and save them in
  //onChange needs an event handler and listener

  //I need one event handler to track the change of my form values
  //I need to use the sa,e state for all of the inputs
  function handleFormValuesChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  // function handleUsernameChange(event) {
  //   setUsername(event.target.value);
  // }
  // function handleLocationChange(event) {
  //   setLocation(event.target.value);
  // }
  // function handleJobChange(event) {
  //   setJob(event.target.value);
  // }

  function handleSubmit(event) {
    //event handler for the form
    event.preventDefault();
  }

  return (
    <div className="fancyForm">
      <p>Forms in React</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={formValues.username}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={formValues.location}
          onChange={handleFormValuesChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          required
          value={formValues.job}
          onChange={handleFormValuesChange}
        />
        <br />
        <button type="submit">Submit your data</button>
      </form>
    </div>
  );
}

export default App;
