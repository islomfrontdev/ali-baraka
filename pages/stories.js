import React, { useState } from "react";
import useWindowDimensions from "../src/components/GetScreenWidth";
import Header from "../src/components/Header";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FlexBox from "../src/components/FlexBox";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Stories({ stories }) {
  const { width } = useWindowDimensions();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike = (id) => {
    const copyLike = like;
    copyLike[id] = !copyLike[id];
    setLike(copyLike);
  };
  return (
    <div>
      <Header />
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            my: 5,
            alignItems: "center",
          }}
        >
          {stories.map((s) => (
            <Grid key={s.id} item xs={12} sm={6} md={4}>
              <Card sx={{ width: "100%" }}>
                <CardHeader
                  avatar={<Avatar></Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Islom Shahobiddinov"
                  subheader="April 28, 2022"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    s.image ||
                    "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
                  }
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    {s.name || "no text"}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>{s.text}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => handleLike(s.id)}
                    aria-label="add to favorites"
                  >
                    <AiOutlineHeart />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://alibaraka.pythonanywhere.com/api/stories/");
  const stories = await res.json();
  return {
    props: {
      stories,
    },
  };
}
