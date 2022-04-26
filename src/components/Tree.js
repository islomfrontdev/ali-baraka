import { Box } from "@mui/material";
import React from "react";

export default function Tree() {
  return (
    <Box
      sx={{
        width: 200,
        height: 700,
        backgroundImage: `url("/tree.png")`,

        position: "absolute",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
