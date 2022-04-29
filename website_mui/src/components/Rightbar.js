import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="purple"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      right bar
    </Box>
  );
};

export default Rightbar;
