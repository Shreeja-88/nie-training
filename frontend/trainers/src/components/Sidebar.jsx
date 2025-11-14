import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  // Logout with confirmation popup
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      navigate("/");
    }
  };

  return (
    <div
      style={{
        width: collapsed ? "70px" : "230px",
        height: "100vh",
        backgroundColor: "#f1dec7",
        paddingTop: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        borderRight: "3px solid #8b597b",
        transition: "0.3s ease",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

      {/* COLLAPSE BUTTON */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          marginLeft: collapsed ? "10px" : "180px",
          marginBottom: "20px",
          border: "none",
          backgroundColor: "#8b597b",
          color: "white",
          borderRadius: "5px",
          padding: "5px 8px",
          transition: "0.3s",
        }}
      >
        {collapsed ? ">" : "<"}
      </button>

      {/* MENU */}
      <div>
        {!collapsed && (
          <h4
            className="text-center mb-4"
            style={{ color: "#493129", fontWeight: "700" }}
          >
            Trainers App
          </h4>
        )}

        <ul className="nav flex-column" style={{ paddingLeft: "15px" }}>
          <li className="nav-item mb-3">
            <Link
              to="/home"
              className="nav-link"
              style={{ color: "#8b597b", fontSize: collapsed ? "0px" : "18px", fontWeight: "600" }}
            >
              {!collapsed && "Home"}
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/search"
              className="nav-link"
              style={{ color: "#8b597b", fontSize: collapsed ? "0px" : "18px", fontWeight: "600" }}
            >
              {!collapsed && "Search"}
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/add"
              className="nav-link"
              style={{ color: "#8b597b", fontSize: collapsed ? "0px" : "18px", fontWeight: "600" }}
            >
              {!collapsed && "Add Trainer"}
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/list"
              className="nav-link"
              style={{ color: "#8b597b", fontSize: collapsed ? "0px" : "18px", fontWeight: "600" }}
            >
              {!collapsed && "Trainer List"}
            </Link>
          </li>
        </ul>
      </div>

      {/* LOGOUT BUTTON */}
      <div className="text-center mb-4">
        <button
          onClick={handleLogout}
          className="btn"
          style={{
            backgroundColor: "#8b597b",
            color: "white",
            fontWeight: "600",
            width: collapsed ? "40px" : "80%",
            borderRadius: "8px",
            fontSize: collapsed ? "0px" : "16px",
            padding: collapsed ? "8px" : "10px",
            transition: "0.3s",
          }}
        >
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

