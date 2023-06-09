import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: "3rem", mx: "auto", textAlign: "center" }}>
      <h1>Welcome To...</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "14rem",
          mx: "auto",
        }}
      >
        <Button variant="contained" onClick={() => navigate("/setup")}>
          Play
        </Button>
        <Button variant="contained" onClick={() => navigate("/rules")}>
          Rules
        </Button>
      </Box>
    </Box>
  );
}
