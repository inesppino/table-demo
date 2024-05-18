import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

export interface Property {
  title: string;
  link: string;
  address: string;
  city: string;
  image: string | null;
  id: string;
}

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const response = await fetch("http://localhost:3000/api/properties");
    const data = await response.json();
    console.log(data);
    setProperties(data);
  };

  if (properties.length === 0) {
    <h2>Loading...</h2>;
  }

  return (
    <main>
      <h1>Spot A Room</h1>

      <section>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Link</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.link}
                  </TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">
                    <img
                      src={row.image}
                      alt={row.title}
                      className="table-image"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </main>
  );
}

export default App;
