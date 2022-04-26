import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FlexBox from "./FlexBox";
import useWindowDimensions from "./GetScreenWidth";
import YellowBtn from "./YellowBtn";
import { FaPlay } from "react-icons/fa";
export default function MainPage() {
  const { width } = useWindowDimensions();
  return (
    <FlexBox
      sx={{
        flexWrap: width < 845 ? "wrap" : "nowrap",
        my: 5,
        gap: width < 845 ? 4 : 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: width > 845 ? "60%" : "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: width > 650 ? "67px" : 40,
            color: "#fff",
          }}
        >
          ВСЕ ДЛЯ ТЕПЛИЦ
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.55)",
            fontSize: "18px",
            width: width > 845 ? "80%" : "100%",
          }}
        >
          Here will be brief information about our company and some of
          advantages of our offers. Here will be brief information about our
          company.
        </Typography>
        <YellowBtn />
      </Box>

      <Box
        sx={{
          height: width > 845 ? 350 : width > 650 ? 300 : 220,
          width: width > 845 ? 600 : "100%",
          border: "1px solid rgba(3, 123, 53, 1)",
          borderTopLeftRadius: "500px",
          borderBottomLeftRadius: "500px",
          mr: width > 845 ? -20 : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: width > 845 && "none",
        }}
      >
        <Box
          sx={{
            width: width > 650 ? 200 : 150,
            height: width > 650 ? 200 : 150,
            border: "1px solid rgba(3, 123, 53, 1)",
            transform: "rotate(45deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              width: width > 650 ? 150 : 100,
              height: width > 650 ? 150 : 100,
              borderRadius: "50%",
              backgroundColor: "#A88042",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "rotate(315deg)",
              opacity: 0.5,
              pl: 3,
            }}
          >
            <FaPlay size={70} color="#FCBD17" />
          </Button>
        </Box>
      </Box>
    </FlexBox>
  );
}
