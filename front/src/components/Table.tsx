import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export interface Row {
  id: string;
  image: string;
  title: string;
  city: string;
  address: string;
  link: string;
}

interface CustomTableProps {
  rows: Row[];
}

const CustomTable = ({ rows }: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="properties table" className="table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.image} alt={row.title} className="table__image" />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell sx={{ textTransform: "capitalize" }}>
                {row.city}
              </TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  View detail
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
