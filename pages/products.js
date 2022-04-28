import React, { useEffect, useState } from "react";
import useWindowDimensions from "../src/components/GetScreenWidth";
import Header from "../src/components/Header";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Products({ products }) {
  const { width } = useWindowDimensions();
  const [product, setProduct] = useState(1);
  return (
    <div>
      <Header />
      <Container>
        <Typography
          sx={{
            fontSize: width > 650 ? 60 : 40,
            textTransform: "uppercase",
            mt: 5,
            fontWeight: "bold",
          }}
        >
          our production
        </Typography>
        <Typography
          sx={{
            maxWidth: 600,
          }}
        >
          Your work is going to fill a large part of your life, and the only way
          to be truly satisfied is to do what you believe is great work
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {products.map((p) => (
            <Grid
              key={p.id}
              item
              xs={12}
              md={6}
              onClick={() => setProduct(p.id)}
            >
              <Box
                sx={{
                  gap: 4,
                  border:
                    product === p.id
                      ? " 2px solid #037B35"
                      : "2px solid #D9DCEC",
                  borderRadius: "10px ",
                  p: width > 650 ? 1.5 : 0.5,
                  cursor: "pointer",
                  height: 130,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    width: width > 650 ? 120 : 80,
                    height: width > 650 ? 105 : 70,
                    objectFit: "cover",
                  }}
                >
                  <img
                    src={
                      p.image ||
                      "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
                    }
                    width={"100%"}
                    height="100%"
                    alt="none"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: width > 650 ? 25 : 18,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      lineHeight: 1,
                    }}
                  >
                    {p.name || "no name"}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{p.text || "no text"}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://alibaraka.pythonanywhere.com/api/products/");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
