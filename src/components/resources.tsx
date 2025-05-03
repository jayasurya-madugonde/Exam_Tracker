import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

// Resource type
interface Resource {
  id: string;
  name: string;
  link: string;
}

const ResourceList: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Resources"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Resource[];

        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  // Styles (inline)
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(to bottom right, #f7faff, #dce7f9)",
    minHeight: "100vh", // Full height of the viewport
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
  };

  const headingStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#333",
    fontSize: "2rem",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    width: "100%", // Full width for the grid
    maxWidth: "1200px", // Optional: limits the grid size on larger screens
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardHoverStyle: React.CSSProperties = {
    ...cardStyle,
    transform: "translateY(-6px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  };

  const titleStyle: React.CSSProperties = {
    marginBottom: "0.5rem",
    fontSize: "20px",
    color: "#222",
  };

  const linkStyle: React.CSSProperties = {
    color: "#0077cc",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>📚 Useful Resources</h2>
      <div style={gridStyle}>
        {resources.map((res) => (
          <div
            key={res.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              Object.assign((e.currentTarget as HTMLDivElement).style, cardHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign((e.currentTarget as HTMLDivElement).style, cardStyle);
            }}
          >
            <h3 style={titleStyle}>{res.name}</h3>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Visit ➜
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
