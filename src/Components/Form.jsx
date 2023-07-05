import React, { useState } from "react";

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (contactInfo.name.length <= 5) {
      setErrorMessage("Please enter a valid name");
      setSuccessMessage("");
    } else if (!validateEmail(contactInfo.email)) {
      setErrorMessage("Please enter a valid email address");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage(`Thank you ${contactInfo.name}, we will contact you soon via email`);

      setContactInfo({
        name: "",
        email: "",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={contactInfo.name}
            placeholder="John Doe"
            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={contactInfo.email}
            placeholder="example@example.com"
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
