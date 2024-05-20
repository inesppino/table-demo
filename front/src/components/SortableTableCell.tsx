import { TableCell } from "@mui/material";

interface SortableTableCellProps {
  label: string;
  selectedKey: string;
  order: string;
  handleClick: (label: string) => void;
}

const SortableTableCell = ({
  label,
  selectedKey,
  order,
  handleClick,
}: SortableTableCellProps) => {
  return (
    <TableCell sx={{ cursor: "pointer" }} onClick={() => handleClick(label)}>
      {label === selectedKey ? (order === "asc" ? "↑ " : "↓ ") : ""}
      {label}
    </TableCell>
  );
};

export default SortableTableCell;
