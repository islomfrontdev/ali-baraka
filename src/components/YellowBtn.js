import { Button } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function YellowBtn({ children, sx }) {
  return (
    <Button
      sx={{
        width: "136px",
        borderRadius: "26px",
        color: "#fff",
        backgroundColor: "#FCBD17",
        "&:hover": {
          backgroundColor: "#FCBD17",
        },
        display: "flex",
        gap: 1,
        py: 1,
        alignItems: "center",
        mt: 2,
      }}
    >
      Explore
      <BsArrowRight size={20} />
    </Button>
  );
}
