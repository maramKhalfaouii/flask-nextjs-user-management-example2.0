import React, { useState, useEffect } from "react";
import { useAuth, withAuth } from "utils/auth";
import { UserApi } from "services";

const bulletIcon = <span style={{ marginRight: "5px" }}>&#8226;</span>;
const highlightedBulletIcon = <span style={{ color: "green", marginRight: "5px" }}>&#8226;</span>;

const Profile = () => {
  const auth = useAuth();
  const [userData, setUserData] = useState(null);
  const [isEditingComment, setIsEditingComment] = useState(false); 
  const [comment, setComment] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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
          setComment(response.user.comment || ""); 
        } else {
          console.error("Error fetching user data:", response.error);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    }
    loadUserData();
  }, []);

  const { id, firstName, lastName, email, admin } = userData || {};

  const handleSaveComment = async () => {
    setIsSaving(true);
    try {
      const api = new UserApi();
      api.setup();
      const response = await api.updateUserComment(auth.token, auth.decodedToken.id, comment);
      
      if (response.kind === "ok") {
       
        setUserData(prevUserData => ({ ...prevUserData, comment })); 
        console.log("Comment saved successfully!");
      } else {
        console.error("Error saving comment:", response.error);
      }
    } catch (err) {
      console.error("Error saving comment:", err);
    } finally {
      setIsSaving(false);
      setIsEditingComment(false); 
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Profile Page</h1>
      <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "1.2rem" }}>About you</p>
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
          <div>
            <strong>Is admin:</strong>{" "}
            {admin ? (
              <span>
                {highlightedBulletIcon}
                Yes
                <span style={{ margin: "0 5px" }}></span>
                {bulletIcon}
                No
              </span>
            ) : (
              <span>
                {bulletIcon}
                Yes
                <span style={{ margin: "0 5px" }}></span>
                {highlightedBulletIcon}
                No
              </span>
            )}
          </div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <h2 style={{ color: "#333", marginBottom: "10px" , fontSize: "1.3rem"} }>Additional Information</h2>
            {isEditingComment ? ( 
              <>
                <textarea
                  rows="4"
                  cols="30" 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add your information here..."
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <br />
                <button
                  onClick={handleSaveComment}
                  disabled={isSaving}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px", 
                  }}
                >
                  {isSaving ? "Saving..." : "Save Comment"}
                </button>
                <button
                  onClick={() => setIsEditingComment(false)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </>
            ) : ( 
              <>
                <div>{comment}</div>
                <button
                  onClick={() => setIsEditingComment(true)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px", 
                  }}
                >
                  Edit Information
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "#777" }}>Loading...</div>
      )}
    </div>
  );
};

export default withAuth(Profile);
