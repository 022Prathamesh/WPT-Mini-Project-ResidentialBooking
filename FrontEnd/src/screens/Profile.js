import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    address: "",
  });

  console.log("User detail", userData);

  const fetchDetail = async () => {
    await fetch("http://localhost:5001/api/getuserdetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    }).then(async (res) => {
      let response = await res.json();
      setUserData(response.userdetail);
    });
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const handleEditClick = () => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        location: userData.location,
        address: userData.address,
      });
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating the object with the form data
    const updatedUserData = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      address: formData.address,
    };

    console.log("Updated User Data:", updatedUserData);

    // Here you would send the updated data to the backend API
    await fetch("http://localhost:5001/api/updateuserdetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    }).then(async (res) => {
      let response = await res.json();
      if (response.success) {
        setUserData(response.userdetail);
        setIsEditing(false);
      } else {
        alert("Failed to update user details");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="justify-content-center">
          <div className="card">
            <div className="card-body">
              <div className="card-title text-center">
               <h3> My Profile</h3>
              </div>
              {userData ? (
                isEditing ? (
                  <form onSubmit={handleSubmit} className="card-text">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex justify-content-start">
                      <button type="submit" className="btn btn-primary me-2">Save</button>
                      <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="card-text">
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Location:</strong> {userData.location}</p>
                    <p><strong>Address:</strong> {userData.address}</p>
                    <p><strong>Joined on:</strong> {new Date(userData.date).toLocaleDateString()}</p>
                    <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                  </div>
                )
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
