import { Container, Typography } from "@mui/material";
import CustomTable from "./components/Table";
import HomeIcon from "@mui/icons-material/Home";
import useProperties from "./hook/useProperties";
import Loading from "./components/Loading";
import ErrorFeedback from "./components/ErrorFeedback";
import { useState } from "react";

function App() {
  const [sort, setSort] = useState<"asc" | "desc">("desc");
  const [key, setKey] = useState<string>("");
  const { loading, error, properties, refetch } = useProperties(sort, key);

  const handleSort = (property: string) => {
    let order = sort;
    if (property === key) {
      order = sort === "asc" ? "desc" : "asc";
    } else {
      order = "asc";
    }
    setKey(property);
    setSort(order);
  };
  return (
    <>
      <header className="header">
        <Typography variant="h1" align="center">
          Spotaroom
        </Typography>
        <HomeIcon fontSize="medium" />
      </header>
      <main className="main">
        {loading ? <Loading /> : null}
        {error !== null ? <ErrorFeedback handleRefetch={refetch} /> : null}
        {properties.length !== 0 ? (
          <Container
            component="section"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h2" align="left" gutterBottom>
              Properties
            </Typography>
            <CustomTable
              rows={properties}
              onSort={handleSort}
              selectedKey={key}
              order={sort}
            />
          </Container>
        ) : (
          <p>No properties found</p>
        )}
      </main>
      <footer className="footer">
        <Typography variant="body2">Inés Pedraza Pino - 2024</Typography>
      </footer>
    </>
  );
}

export default App;
