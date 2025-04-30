import { AppBar, Button, Card, CardContent, CardMedia, Container, createTheme, CssBaseline, Grid2, Modal, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { PendingOrders } from "./orders/PendingOrders";
import { Home } from "./pages/Home";


export default function App(){
  console.log("changed app for git branch")
  const theme = createTheme({
    colorSchemes: {
      dark: false,
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return(
  <ThemeProvider theme={darkTheme}>
  <CssBaseline/>
  <Home/>
  </ThemeProvider>
  )
}

/*
    <Container>
    <Grid2 container>
      <Grid2 item>
        <Card sx={{maxWidth:300}}>
          <CardMedia image="https://picsum.photos/1920/1080?random" sx={{height:300
          }}/>
          <CardContent>
            <Typography variant="h4">
              Heading
            </Typography>
            <Typography variant="string">
            e release of Letraset sheets containing Lorem Ipsum passages, a
            nd more recently with desktop publishing software like Aldus Page
            Maker including versions of Lorem Ipsum.
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
    </Container>


*/
