import { Box } from "@mui/material";
import React from "react";
import useWindowDimensions from "./GetScreenWidth";
import SwiperCom from "./Swiper";

export default function Awesome2() {
  const { width } = useWindowDimensions();
  return (
    <Box
      sx={{
        height: width > 845 ? 130 : 90,
        backgroundImage: `url("/awesome2.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <SwiperCom />
    </Box>
  );
}
