import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";

type Result = {
  id: string;
  name: string;
  link: string;
};

const ResultsPage: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Results"), (snapshot) => {
      const data: Result[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        link: doc.data().link,
      }));

      setResults(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.header}>
        <h1 style={styles.title}>📄 View Exam Results</h1>
        <p style={styles.subtitle}>Stay updated with the latest result announcements.</p>
      </div>

      {loading && <p style={styles.message}>Loading results...</p>}
      {!loading && results.length === 0 && <p style={styles.message}>No results available currently.</p>}

      <div style={styles.cardGrid}>
        {results.map((result) => (
          <div key={result.id} style={styles.card}>
            <h3 style={styles.resultTitle}>{result.name}</h3>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Result
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
    background: "linear-gradient(to right, #e8f0ff, #f8faff)",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#264653",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.8rem",
    borderRadius: "20px",
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  resultTitle: {
    fontSize: "1.4rem",
    color: "#333",
    marginBottom: "1rem",
    fontWeight: 600,
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    background: "linear-gradient(to right, #43cea2, #185a9d)",
    padding: "0.6rem 1.4rem",
    borderRadius: "8px",
    fontWeight: 600,
    transition: "opacity 0.2s ease",
    display: "inline-block",
  },
};

export default ResultsPage;
