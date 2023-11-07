import { Box, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useRouteError } from "react-router-dom";
function ErrorCreate() {
  const error = useRouteError();
  return (
    <div>
      {error && error.data && (
        <Box sx={{ textAlign: "center", marginTop: "200px" }}>
          <Typography variant="h4" color="error">
            {error.data.message}
          </Typography>
          <Typography variant="body1" color="error.light">
            Status : {error.status}
          </Typography>
          <SentimentVeryDissatisfiedIcon fontSize="large" color="error" />
        </Box>
      )}
    </div>
  );
}

export default ErrorCreate;
