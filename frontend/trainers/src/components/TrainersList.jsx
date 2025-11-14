import React, { useEffect, useState } from "react";
import { searchTrainer, deleteTrainer } from "../api";
import { Link, useLocation } from "react-router-dom";

export const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const filters = {
    name: queryParams.get("name") || "",
    place: queryParams.get("place") || "",
    technology: queryParams.get("technology") || "",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchTrainer(filters);
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchData();
  }, [location.search]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this trainer?")) {
      try {
        await deleteTrainer(id);
        window.location.reload();
      } catch (err) {
        console.error("Error deleting trainer:", err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="p-4 rounded shadow"
        style={{
          backgroundColor: "#fff7ef",
          border: "2px solid #d0a6c0",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ fontWeight: "700", color: "#493129" }}
        >
          Trainers List
        </h2>

        <table
          className="table table-hover"
          style={{
            backgroundColor: "#fdf5eb",
            border: "2px solid #8b597b",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#8b597b",
              color: "white",
              fontSize: "17px",
              borderBottom: "2px solid #8b597b",
            }}
          >
            <tr>
              <th style={{ borderRight: "2px solid #e8cde0" }}>Name</th>
              <th style={{ borderRight: "2px solid #e8cde0" }}>Place</th>
              <th style={{ borderRight: "2px solid #e8cde0" }}>Technologies</th>
              <th style={{ borderRight: "2px solid #e8cde0" }}>Email</th>
              <th style={{ borderRight: "2px solid #e8cde0" }}>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody style={{ fontSize: "16px" }}>
            {trainers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-3">
                  No trainers found.
                </td>
              </tr>
            ) : (
              trainers.map((t) => (
                <tr
                  key={t.id}
                  style={{
                    borderBottom: "2px solid #e1c9c1",
                    backgroundColor: "#fff",
                  }}
                >
                  <td style={{ borderRight: "1px solid #e6d5d0" }}>{t.name}</td>
                  <td style={{ borderRight: "1px solid #e6d5d0" }}>{t.place}</td>
                  <td style={{ borderRight: "1px solid #e6d5d0" }}>
                    {t.technology1}, {t.technology2}
                  </td>
                  <td style={{ borderRight: "1px solid #e6d5d0" }}>{t.email}</td>
                  <td style={{ borderRight: "1px solid #e6d5d0" }}>{t.phone}</td>

                  <td>
                    {/* VIEW BUTTON WITH ALERT */}
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#c08ec4",
                        color: "white",
                        marginRight: "8px",
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                      onClick={() => {
                        alert(
                          `Name: ${t.name}\nPlace: ${t.place}\nEmail: ${t.email}\nPhone: ${t.phone}\nTechnologies: ${t.technology1}, ${t.technology2}`
                        );
                      }}
                    >
                      View
                    </button>

                    <Link
                      to={`/update/${t.id}`}
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#8b597b",
                        color: "white",
                        marginRight: "8px",
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      Update
                    </Link>

                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#493129",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
