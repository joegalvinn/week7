import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";
import { useState } from "react";

function App() {
  //we can store the input data into state
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("");

  //we need to link each state variable with its corresponding input
  //we are going to use onChange to track the changes in the input and save them in
  //onChange needs an event handler and listener
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
  function handleJobChange(event) {
    setJob(event.target.value);
  }

  function handleSubmit(event) {
    //event handler for the form
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <p>Forms in React</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your full name"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={location}
          onChange={handleLocationChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          required
          value={job}
          onChange={handleJobChange}
        />
        <br />
        <button type="submit">Submit your data</button>
      </form>
    </div>
  );
}

export default App;
