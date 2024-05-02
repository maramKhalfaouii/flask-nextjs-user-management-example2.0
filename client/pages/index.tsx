import React, { useState } from "react";
/*import { useAuth } from "utils/auth";*/

const Home = () => {
  const [users, /*setUsers*/] = useState([
    { id: 1, firstName: "admin", lastName: "admin", email: "admin@gmail.com", admin: true },
    { id: 2, firstName: "Yasmine", lastName: "Oumaya", email: "yasmine@gmail.com", admin: false },
    { id: 3, firstName: "Maram", lastName: "Khalfaoui", email: "maram12@enit.com", admin: false },
    { id: 4, firstName: "dev", lastName: "ops", email: "devops@outlook.com", admin: false },
    { id: 5, firstName: "user", lastName: "app", email: "user@gmail.com", admin: false },
  ]);
  /*const auth = useAuth();*/

  
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>Welcome to our Home Page !</h1>
      <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", backgroundColor: "#f9f9f9", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333", fontSize: "1.2rem" }}>Users List</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f9f9f9" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f9f9f9" }}>Email</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f9f9f9" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.firstName} {user.lastName}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.admin ? "Admin" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
