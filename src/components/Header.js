import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "./GetScreenWidth";
import MainButton from "./MainButton";
import MainPage from "./MainPage";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
export default function Header() {
  const { width } = useWindowDimensions();
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (width > 880) {
      setSidebar(false);
    }
  }, [width]);
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
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => router.push("/home")}
                sx={{
                  m: 0,
                  p: 0,
                }}
              >
                <img src="/logo.png" width={87} height={80} alt="logo" />
              </Button>
              {width > 880 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MainButton text={"Home"} to="/home" />
                  <MainButton text={"products"} to="/products" />
                  <MainButton text={"f.a.q"} to="/questions" />
                  <MainButton
                    text={"blog"}
                    sx={{
                      mr: 15,
                    }}
                    to="/stories"
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
                  <Button onClick={() => setSidebar(!sidebar)}>
                    <AiOutlineMenu color="#fff" size={30} />
                  </Button>
                </Box>
              )}
            </Box>
          </header>
        </Box>
        <MainPage />
        {sidebar && (
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              width: 300,
              minHeight: "100vh",
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <Button
              onClick={() => setSidebar(false)}
              sx={{
                mb: 10,
                ml: "auto",
              }}
            >
              <FaTimes size={30} />
            </Button>
            <MainButton
              text={"home"}
              sx={{
                color: "#000",
                mx: "auto",
              }}
              to={"/home"}
            />
            <MainButton
              text={"products"}
              sx={{
                color: "#000",
                mx: "auto",
              }}
              to={"/products"}
            />

            <MainButton
              text={"blog"}
              sx={{
                color: "#000",
                mx: "auto",
              }}
              to="/stories"
            />
            <MainButton
              text={"F.A.Q"}
              sx={{
                color: "#000",
                mx: "auto",
              }}
              to="/questions"
            />
            <Box sx={{ textAlign: "center" }}>
              <Button sx={{ mx: "auto", ml: "auto" }}>
                <img src="/tel.png" />
              </Button>
            </Box>
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
        )}
      </Container>
    </div>
  );
}
