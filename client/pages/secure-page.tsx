import React, { Component, useState } from "react";
import { withAuth } from "utils/auth";

class SecurePage extends Component {
  render() {
    return (
      <div style={{ maxWidth: "600px", margin: "auto", marginTop: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Secure Page</h1>
        <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", backgroundColor: "#f9f9f9", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", marginTop: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "35px", fontSize: "1.2rem" }}>
            You can only access this page if you are logged in.
          </div>
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <div style={{ marginBottom: "15px" }}>
              <strong>Email:</strong> yasmine@gmail.com
            </div>
            <div style={{ marginBottom: "25px" }}>
              <strong>Password:</strong>{" "}
              <PasswordWithVisibilityToggle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const PasswordWithVisibilityToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type={showPassword ? "text" : "password"}
        value={showPassword ? "yasmine1018" : "*********"}
        readOnly
        style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginRight: "10px", fontSize: "1rem" }}
      />
      <button onClick={togglePasswordVisibility} style={{ padding: "10px 20px", borderRadius: "5px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none", fontSize: "1rem" }}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default withAuth(SecurePage);

