import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useWindowDimensions from "./GetScreenWidth";

export default function Stories() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <Grid
        container
        spacing={6}
        sx={{
          my: 5,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            How our client made 10x revenue
          </Typography>
          <Box
            sx={{
              height: width > 650 ? 570 : 400,
              mt: 1,
              position: "relative",
              boxShadow: "14px 14px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src="/stories.png" alt="none" width={"100%"} height="100%" />
            <Box
              sx={{
                width: 200,
                position: "absolute",
                bottom: 0,
                left: width > 500 ? -40 : 0,
                backgroundColor: "#fff",
                py: 2,
                borderRadius: 1,
                px: 1,
                boxShadow: "14px 14px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 17,
                  color: "primary.main",
                }}
              >
                I learned so much, even as a professional.
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                }}
              >
                Ut vehicula lacus a lacus tempor, nec viverra justo condimentum.
                Integer eu urna dapibus, scelerisque nisl non, semper ipsum.
                Etiam dolor arcu, tincidunt a arcu eget.
              </Typography>
              <Button>Juan Huang</Button>
            </Box>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                borderRadius: 13,
                textTransform: "capitalize",
                px: 2,
                position: "absolute",
                right: -10,
                bottom: 30,
                fontSize: 18,
              }}
            >
              more stories
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#444444",
              lineHeight: 0.9,
              mb: 2,
            }}
          >
            Other successful stories
          </Typography>
          <Divider />
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 20,
              fontWeight: "bold",
              my: 2,
            }}
          >
            Amateur
          </Typography>
          <Typography
            sx={{
              lineHeight: 1,
              fontSize: 20,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </Typography>
          <Button
            sx={{
              pl: 0,
              mt: 2,
              textTransform: "capitalize",
              fontSize: 18,
            }}
          >
            More Information
          </Button>
          <Divider />
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 20,
              fontWeight: "bold",
              my: 2,
            }}
          >
            Beginner
          </Typography>
          <Typography
            sx={{
              lineHeight: 1,
              fontSize: 20,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </Typography>
          <Button
            sx={{
              pl: 0,
              mt: 2,
              textTransform: "capitalize",
              fontSize: 18,
            }}
          >
            More Information
          </Button>
          <Divider />
          <Typography
            sx={{
              color: "primary.main",
              fontSize: 20,
              fontWeight: "bold",
              my: 2,
            }}
          >
            Professional
          </Typography>
          <Typography
            sx={{
              lineHeight: 1,
              fontSize: 20,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius.
          </Typography>
          <Button
            sx={{
              pl: 0,
              mt: 2,
              textTransform: "capitalize",
              fontSize: 18,
            }}
          >
            More Information
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: width > 500 ? 500 : "100%",
          mx: "auto",
          boxShadow: " 0px 8px 28px rgba(83, 83, 83, 0.15)",
          borderRadius: "15px",
          backgroundColor: "#fff",
          mt: 10,
          position: "relative",
          mb: 2,
          pb: 1,
        }}
      >
        <img src="/garden.png" alt="none" width={"100%"} height="150px" />
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            maxWidth: 300,
            lineHeight: 1,
            textAlign: "center",
            mx: "auto",
            my: 2,
          }}
        >
          Still are you hesitating?
        </Typography>
        <Typography
          sx={{
            maxWidth: "95%",
            mx: "auto",
            textAlign: "center",
          }}
        >
          Your work is going to fill a large part of your life, and the only way
          to be truly satisfied.
        </Typography>
        <Box
          sx={{ display: "flex", maxWidth: "95%", mx: "auto", mt: 2, gap: 1 }}
        >
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{
              backgroundColor: "#F8F8F8",
              width: "50%",
            }}
          />
          <TextField
            label="Enter phone tel"
            type="text"
            autoComplete="current-password"
            sx={{
              backgroundColor: "#F8F8F8",
              width: "50%",
            }}
          />
        </Box>
        <Box sx={{ width: "95%", mx: "auto", mt: 2 }}>
          <TextField
            id="outlined-multiline-static"
            label="Enter your subject"
            multiline
            rows={4}
            sx={{
              width: "100%",
            }}
          />
        </Box>

        <Button
          sx={{
            backgroundColor: "primary.main",
            width: "95%",
            mx: "auto",
            my: 3,
            display: "block",
            borderRadius: "20px",
            color: "#fff",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          SEND MESSAGE
        </Button>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            backgroundColor: "primary.main",
            transform: "rotate(45deg)",
            position: "absolute",
            top: 150,
            left: -80,
          }}
        ></Box>
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "#FED372",
            position: "absolute",
            right: -120,
            bottom: 80,
          }}
        ></Box>
      </Box>
    </Container>
  );
}
