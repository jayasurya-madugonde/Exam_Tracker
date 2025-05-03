import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  driveLink: string;
}

// Define the type for the style object
interface Styles {
  [key: string]: React.CSSProperties;
}

const StudyMaterialsList: React.FC = () => {
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pdfCollection = collection(db, 'pdfs');
        setLoading(true);
        const snapshot = await getDocs(pdfCollection);

        if (snapshot.empty) {
          setError('No study materials found.');
        } else {
          const docs: StudyMaterial[] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<StudyMaterial, 'id'>), // Ensuring correct type
          }));
          setMaterials(docs);
        }
      } catch (err) {
        console.error('Error fetching study materials:', err);
        setError('Failed to load study materials.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📚 Study Materials</h2>

      {error && <p style={styles.error}>{error}</p>}

      {loading ? (
        <p style={styles.loading}>Loading materials...</p>
      ) : materials.length === 0 ? (
        <p style={styles.noData}>No study materials found.</p>
      ) : (
        <div style={styles.grid}>
          {materials.map((item) => (
            <div key={item.id} style={styles.card}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.subject}>📘 {item.subject}</p>
              <a
                href={item.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                🔗 View PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Inline CSS styles with correct typing
const styles: Styles = {
  container: {
    width: '100%',
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjust to start from the top
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f7f9fc',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  error: {
    color: 'red',
    textAlign: 'center' as const,
    fontWeight: 'bold',
  },
  loading: {
    textAlign: 'center' as const,
    fontStyle: 'italic',
    color: '#666',
  },
  noData: {
    textAlign: 'center' as const,
    color: '#999',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px', // Optional: Adjust the width of the grid
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '20px',
    color: '#1f2937',
    marginBottom: '10px',
  },
  subject: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '15px',
  },
  link: {
    display: 'inline-block',
    padding: '8px 14px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
  },
};

export default StudyMaterialsList;
