import { useEffect, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { fetchAllProperties } from "./services/fetchAllProperties";
import CustomTable from "./components/Table";
import HomeIcon from "@mui/icons-material/Home";

export interface Property {
  title: string;
  link: string;
  address: string;
  city: string;
  image: string;
  id: string;
}

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const data = await fetchAllProperties();
    setProperties(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20vh" }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <Typography variant="h1" align="center">
          Spotaroom
        </Typography>
        <HomeIcon fontSize="medium" />
      </header>
      <main className="main">
        <Container
          component="section"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h2" align="left" gutterBottom>
            Properties
          </Typography>
          <CustomTable rows={properties} />
        </Container>
      </main>
      <footer className="footer">
        <Typography variant="body2">Inés Pedraza Pino - 2024</Typography>
      </footer>
    </>
  );
}

export default App;
