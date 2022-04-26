import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import SimpleAccordion from "./Acardion";

export default function Flag() {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <img src="/flag.png" alt="none" width={"100%"} height="100%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: 50,
              color: "primary.main",
              lineHeight: 1,
            }}
          >
            See why we are trusted the world over
          </Typography>
          <Typography
            sx={{
              mt: 2,
            }}
          >
            The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency.
          </Typography>
          <SimpleAccordion />
        </Grid>
      </Grid>
    </Container>
  );
}
