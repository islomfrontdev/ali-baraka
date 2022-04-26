import { Box } from "@mui/material";
import React from "react";
import useWindowDimensions from "./GetScreenWidth";

export default function Awesome() {
  const { width } = useWindowDimensions();
  return (
    <Box
      sx={{
        height: width > 845 ? 130 : 90,
        backgroundImage: `url("/awesome.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        maxWidth: "1440px",
        mx: "auto",
      }}
    ></Box>
  );
}
