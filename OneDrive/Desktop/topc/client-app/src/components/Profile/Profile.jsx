import React, { useState } from "react";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState("John Doe");
  const [biography, setBiography] = useState("I am a software developer.");
  const [country, setCountry] = useState("USA");
  const [interests, setInterests] = useState(["ReactJS"]);

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBiographyChange = (event) => {
    setBiography(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleInterestsChange = (event) => {
    const selectedInterests = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setInterests(selectedInterests);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Profile thumbnail"
            className="img-thumbnail rounded-circle"
          />
        </div>
        <div className="col-md-8">
          {isEditable ? (
            <>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="biography">Biography:</label>
                <textarea
                  className="form-control"
                  id="biography"
                  rows="3"
                  value={biography}
                  onChange={handleBiographyChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country of residence:</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={country}
                  onChange={handleCountryChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="interests">Interests (ReactJS tags):</label>
                <select
                  multiple
                  className="form-control"
                  id="interests"
                  value={interests}
                  onChange={handleInterestsChange}
                >
                  <option value="ReactJS">ReactJS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                </select>
              </div>
              <button className="btn btn-primary mr-2" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h1>{name}</h1>
              <p>{biography}</p>
              <p>Country of residence: {country}</p>
              <p>Interests: {interests.join(", ")}</p>
              <button className="btn btn-primary" onClick={handleEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
