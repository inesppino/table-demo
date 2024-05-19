import { Button, Stack, Typography } from "@mui/material";

type ErrorPropsType = {
  handleRefetch: () => void;
};

const ErrorFeedback = ({ handleRefetch }: ErrorPropsType) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ marginTop: "20vh" }}
      alignItems="center"
    >
      <Typography variant="h4" align="center">
        Oops! Something happened
      </Typography>
      <Button
        variant="contained"
        size="medium"
        sx={{ maxWidth: "150px" }}
        onClick={handleRefetch}
      >
        Try again
      </Button>
    </Stack>
  );
};

export default ErrorFeedback;
