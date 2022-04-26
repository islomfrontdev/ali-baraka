import { Button } from "@mui/material";
import React from "react";

export default function MainButton({ text, sx }) {
  return (
    <Button
      sx={{
        textTransform: "capitalize",
        color: "white",
        fontSize: "18px",
        mx: 2,
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}
