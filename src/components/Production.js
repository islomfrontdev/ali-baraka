import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import FlexBox from "./FlexBox";
import useWindowDimensions from "./GetScreenWidth";

export default function Production() {
  const { width } = useWindowDimensions();
  const [product, setProduct] = useState(1);
  return (
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
        <Grid item xs={12} md={6} onClick={() => setProduct(1)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 1 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product1.png"
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
                }}
              >
                Asosiy Plyonka Turlari
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
        <Grid item xs={12} md={6} onClick={() => setProduct(2)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 2 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product2.png"
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
                }}
              >
                Asosiy Zajim turlari
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
        <Grid item xs={12} md={6} onClick={() => setProduct(3)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 3 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product3.png"
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
                }}
              >
                Tomchilab sug’orish tizimi
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
        <Grid item xs={12} md={6} onClick={() => setProduct(4)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 4 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product4.png"
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
                }}
              >
                ISSIQXONANING sovutish TIZIMI
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
        <Grid item xs={12} md={6} onClick={() => setProduct(5)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 5 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product5.png"
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
                }}
              >
                ISSIQXONANING ISITISH TIZIMI
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
        <Grid item xs={12} md={6} onClick={() => setProduct(6)}>
          <FlexBox
            sx={{
              gap: 4,
              border:
                product === 6 ? " 2px solid #037B35" : "2px solid #D9DCEC",
              borderRadius: "10px ",
              p: width > 650 ? 1.5 : 0.5,
              cursor: "pointer",
              height: 130,
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
                src="/product6.png"
                width={"100%"}
                height="100%"
                alt="none"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: width > 650 ? 24 : 18,
                  textTransform: "uppercase",
                }}
              >
                QO’shimcha aksessuarlar
              </Typography>
              <Typography>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </Typography>
            </Box>
          </FlexBox>
        </Grid>
      </Grid>
    </Container>
  );
}
