import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useWindowDimensions from "../src/components/GetScreenWidth";
import Header from "../src/components/Header";

export default function Questions({ questions }) {
  const { width } = useWindowDimensions();
  return (
    <div>
      <Header />
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
                  Ut vehicula lacus a lacus tempor, nec viverra justo
                  condimentum. Integer eu urna dapibus, scelerisque nisl non,
                  semper ipsum. Etiam dolor arcu, tincidunt a arcu eget.
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
                more questions
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
              F.A.Q
            </Typography>
            <Divider />
            {questions.map((q) => (
              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: 20,
                    fontWeight: "bold",
                    my: 2,
                  }}
                >
                  Question : {q.question || "no question"} ?
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1,
                    fontSize: 20,
                  }}
                >
                  Answer : {q.answer || "no answer"}
                </Typography>

                <Divider sx={{ mt: 1 }} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://alibaraka.pythonanywhere.com/api/questions/"
  );
  const questions = await res.json();
  return {
    props: {
      questions,
    },
  };
}
