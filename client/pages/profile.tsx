import React, { useState, useEffect } from "react";
import { useAuth, withAuth } from "utils/auth";
import { UserApi } from "services";

const bulletIcon = <span style={{ marginRight: "5px" }}>&#8226;</span>;
const highlightedBulletIcon = <span style={{ color: "green", marginRight: "5px" }}>&#8226;</span>;

const Profile = () => {
  const auth = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function loadUserData() {
      try {
        const api = new UserApi();
        api.setup();
        const response = await api.getUserById(
          auth.token,
          auth.decodedToken.id
        );
        
        if (response.kind === "ok") {
          setUserData(response.user);
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadUserData();
  }, []);

  const { id, firstName, lastName, email, admin } = userData || {};

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Profile</h1>
      <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.2rem" }}>About You</p>
      {userData ? (
        <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", backgroundColor: "#f9f9f9", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ marginBottom: "20px" }}>
            <strong>ID:</strong> {id}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>First Name:</strong> {firstName}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Last Name:</strong> {lastName}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Email:</strong> {email}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <strong>Is admin:</strong>{" "}
            {admin ? (
              <span>
                {highlightedBulletIcon}
                Yes
              </span>
            ) : (
              <span>
                {bulletIcon}
                No
              </span>
            )}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "#777" }}>Loading....</div>
      )}
    </div>
  );
};

export default withAuth(Profile);
