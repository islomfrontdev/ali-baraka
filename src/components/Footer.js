import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBox from "./FlexBox";
import useWindowDimensions from "./GetScreenWidth";
import MainButton from "./MainButton";

export default function Footer() {
  const { width } = useWindowDimensions();
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "#fff",
        py: 5,
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} sm={6} md={3}>
            <Box
              sx={{
                width: "100%",
                mx: "auto",
              }}
            >
              <Button sx={{ p: 0 }}>
                <img src="/logo1.png" alt="none" width={87} height={70} />
              </Button>
              <MainButton
                text="Tashkent, Mustakillik St, 15"
                sx={{
                  m: 0,
                  p: 0,
                  mt: 1,
                  display: "block",
                  textAlign: "left",
                  fontSize: 16,
                }}
              />
              <MainButton
                text="Tel: +998 99 000 00 00"
                sx={{
                  m: 0,
                  p: 0,
                  mt: 1,
                  display: "block",
                  textAlign: "left",
                  fontSize: 16,
                }}
              />
              <MainButton
                text="E-mail: hello@alibaraka.com"
                sx={{
                  m: 0,
                  p: 0,
                  mt: 1,
                  display: "block",
                  textAlign: "left",
                  fontSize: 16,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: 20,
              }}
            >
              About
            </Typography>
            <MainButton
              text="About us"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                mt: 2,
              }}
            />
            <MainButton
              text="Our team"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
              }}
            />
            <MainButton
              text="Frequent Questions"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
            <MainButton
              text="Contact us"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: 20,
              }}
            >
              Products
            </Typography>
            <MainButton
              text="Suv taqsimoti"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                mt: 2,
              }}
            />
            <MainButton
              text="Plyonka"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
            <MainButton
              text="Zajim"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: -1,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
            <MainButton
              text="Isitish x Sovutish"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: 20,
              }}
            >
              Blog
            </Typography>
            <MainButton
              text="10X"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                mt: 2,
                textAlign: "left",
              }}
            />
            <MainButton
              text="Gardening"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
            <MainButton
              text="Melon"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: -1,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
            <MainButton
              text="Water dist"
              sx={{
                m: 0,
                p: 0,
                mt: 0.7,
                pl: 0,
                fontSize: 16,
                color: "#60B45A",
                textAlign: "left",
              }}
            />
          </Grid>
        </Grid>
        <Divider
          sx={{
            color: "#555",
            my: 5,
          }}
        />

        <FlexBox sx={{ flexDirection: width > 500 ? "row" : "column" }}>
          <MainButton
            text="Все права защищены."
            sx={{ ml: 0, fontSize: 16, pl: 0 }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography>Разработано в</Typography>
            <img src="/abba1.svg" alt="none" width={100} height={50} />
            <img src="/abba2.svg" alt="none" width={100} height={50} />
          </Box>
        </FlexBox>
      </Container>
    </Box>
  );
}
