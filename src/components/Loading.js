import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
