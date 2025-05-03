// src/pages/ApplyPage.tsx
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";

type Exam = {
  id: string;
  name: string;
  link: string;
};

const ApplyPage: React.FC = () => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Apply"), (snapshot) => {
      const data: Exam[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        link: doc.data().link,
      }));

      setExams(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.header}>
        <h1 style={styles.title}>🎓 Apply for Competitive Exams</h1>
        <p style={styles.subtitle}>Your future starts here. Choose an exam and apply now!</p>
      </div>

      {loading && <p style={styles.message}>Loading exams...</p>}
      {!loading && exams.length === 0 && <p style={styles.message}>No exams available currently.</p>}

      <div style={styles.cardGrid}>
        {exams.map((exam) => (
          <div key={exam.id} style={styles.card}>
            <h3 style={styles.examTitle}>{exam.name}</h3>
            <a
              href={exam.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    padding: "3rem 2rem",
    minHeight: "100vh",
    width:"100%",
    background: "linear-gradient(to right, #f0f4ff, #f8f9fd)",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#2a2a72",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
  },
  message: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#888",
    marginTop: "2rem",
  },
 
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Force 4 columns
    gap: "6rem",
    width: "100%", // Ensure full width utilization
    margin: "0 auto",
    padding: "0 1rem", // Add slight padding to prevent edge crowding
    boxSizing: "border-box" // Include padding in width calculation
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.8rem",
    borderRadius: "20px",
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  examTitle: {
    fontSize: "1.4rem",
    color: "#333",
    marginBottom: "1rem",
    fontWeight: 600,
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    padding: "0.6rem 1.4rem",
    borderRadius: "8px",
    fontWeight: 600,
    transition: "opacity 0.2s ease",
    display: "inline-block",
  },
};

// Add :hover via CSS class in real app (e.g., CSS/SCSS or Tailwind)

export default ApplyPage;
