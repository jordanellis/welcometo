import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./Game";
import Rules from "./Rules";
import Menu from "./Menu";
import Setup from "./Setup";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ margin: "0 auto", overflowX: "hidden", height: "100%" }}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}
