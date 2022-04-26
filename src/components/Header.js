import { Box, Button, Container } from "@mui/material";
import React from "react";
import useWindowDimensions from "./GetScreenWidth";
import MainButton from "./MainButton";
import MainPage from "./MainPage";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  const { width } = useWindowDimensions();
  return (
    <div className="headerBox">
      <Container>
        <Box>
          <header>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pt: 2,
              }}
            >
              <Button
                sx={{
                  m: 0,
                  p: 0,
                }}
              >
                <img src="/logo.png" width={87} height={80} alt="logo" />
              </Button>
              {width > 845 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MainButton text={"products"} />
                  <MainButton text={"about us"} />
                  <MainButton text={"blog"} />
                  <MainButton
                    text={"Contact"}
                    sx={{
                      mr: 15,
                    }}
                  />
                  <Button>
                    <img src="/tel.png" />
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <MainButton
                      text={"95-004-80-90"}
                      sx={{
                        m: 0,
                        p: 0,
                        color: "#037B35",
                      }}
                    />
                    <MainButton
                      text={"94-641-40-00"}
                      sx={{
                        m: 0,
                        p: 0,
                        color: "#037B35",
                      }}
                    />
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Button>
                    <AiOutlineMenu color="#fff" size={30} />
                  </Button>
                </Box>
              )}
            </Box>
          </header>
        </Box>
        <MainPage />
      </Container>
    </div>
  );
}
