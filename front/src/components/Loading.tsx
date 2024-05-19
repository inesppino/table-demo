import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ marginTop: "20vh" }}
      alignItems="center"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loading;
