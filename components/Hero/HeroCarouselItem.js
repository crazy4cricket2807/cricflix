import { createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";

import HeroLayout from "./HeroLayout";

const HeroCarouselItem = (props) => {
  const { title, photo } = props;
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${photo})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          sx={{ opacity: 0.75 }}
        >
          {title}
        </Typography>
      </ThemeProvider>
    </HeroLayout>
  );
};

export default HeroCarouselItem;
