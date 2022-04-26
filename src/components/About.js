import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useWindowDimensions from "./GetScreenWidth";

export default function About() {
  const { width } = useWindowDimensions();
  const [active, setActive] = useState(1);
  return (
    <Container
      sx={{
        overflow: "auto",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          mt: 5,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: width > 650 ? 50 : 40,
              textTransform: "uppercase",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            little ABout our company
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work is to love what you do.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={() => setActive(1)}
              sx={{
                border: active === 1 && "1px solid #037B35",
                borderRadius: 10,
                px: 2,
              }}
            >
              More about
            </Button>
            <Button
              onClick={() => setActive(2)}
              sx={{
                border: active === 2 && "1px solid #037B35",
                borderRadius: 10,
                px: 2,
              }}
            >
              our youtube
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/about.png" width={"100%"} height="100%" alt="none" />
        </Grid>
      </Grid>
    </Container>
  );
}
