import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mt-5">

      {/* Header Section */}
      <div className="text-center">
        <h1 style={{ color: "#493129", fontWeight: "700" }}>
          Trainers Search & Management System
        </h1>

        <p className="mt-3" style={{ fontSize: "18px", color: "#8b597b" }}>
          Manage trainer information quickly and easily — Search, Add, Edit & Update Trainers.
        </p>
      </div>

      {/* Features Section */}
      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: "12px", backgroundColor: "#ffe5db" }}
          >
            <div className="card-body text-center">
              <h4 style={{ color: "#493129", fontWeight: "700" }}>Search Trainers</h4>
              <p style={{ color: "#8b597b" }}>
                Find trainers based on name, place or technology.
              </p>
              <Link
                to="/search"
                className="btn btn"
                style={{ backgroundColor: "#8b597b", color: "white" }}
              >
                Search Now
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: "12px", backgroundColor: "#fce3ee" }}
          >
            <div className="card-body text-center">
              <h4 style={{ color: "#493129", fontWeight: "700" }}>Add Trainers</h4>
              <p style={{ color: "#8b597b" }}>
                Add new trainers with full details in just one click.
              </p>
              <Link
                to="/add"
                className="btn btn"
                style={{ backgroundColor: "#493129", color: "white" }}
              >
                Add Trainer
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow"
            style={{ borderRadius: "12px", backgroundColor: "#f3d4ea" }}
          >
            <div className="card-body text-center">
              <h4 style={{ color: "#493129", fontWeight: "700" }}>View Trainer List</h4>
              <p style={{ color: "#8b597b" }}>
                Browse, update and manage all registered trainers.
              </p>
              <Link
                to="/list"
                className="btn btn"
                style={{ backgroundColor: "#c68fa4", color: "white" }}
              >
                View List
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-5 mb-4">
        <p style={{ color: "#a47c89", fontSize: "14px" }}>
          © {new Date().getFullYear()} Trainers Search App — Built with Django & React
        </p>
      </div>
    </div>
  );
};
