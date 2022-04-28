import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function MainButton({ text, sx, to }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => to && router.push(to)}
      sx={{
        textTransform: "capitalize",
        color: "white",
        fontSize: "18px",
        mx: 2,
        display: "block",
        ...sx,
        borderBottom: router.pathname == to && "2px solid rgba(3, 123, 53, 1)",
        borderRadius: 0,
        pb: 0,
      }}
    >
      {text}
    </Button>
  );
}
