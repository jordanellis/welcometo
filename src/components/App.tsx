import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from './Game';

const App = () => {
  return (
    <Box>
      <CssBaseline />
			<BrowserRouter>
				<Box sx={{ margin: "0 auto", overflowX: "hidden" }}>
					<Routes>
						<Route path="/" element={<Game />} />
					</Routes>
				</Box>
			</BrowserRouter>
    </Box>
  );
};

export default App;
