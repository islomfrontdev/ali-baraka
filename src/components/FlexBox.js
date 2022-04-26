import { Box } from "@mui/material";
import React from "react";

export default function FlexBox({ children, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
