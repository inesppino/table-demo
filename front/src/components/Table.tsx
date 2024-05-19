import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SortableTableCell from "./SortableTableCell";

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
  selectedKey: string;
  order: string;
  onSort: (property: string) => void;
}

const CustomTable = ({
  rows,
  selectedKey,
  order,
  onSort,
}: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="properties table" className="table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <SortableTableCell
              label="title"
              selectedKey={selectedKey}
              order={order}
              handleClick={onSort}
            />
            <SortableTableCell
              label="city"
              selectedKey={selectedKey}
              order={order}
              handleClick={onSort}
            />
            <SortableTableCell
              label="address"
              selectedKey={selectedKey}
              order={order}
              handleClick={onSort}
            />

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
