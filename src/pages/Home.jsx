import React, { useState } from 'react'
import { AppBar, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid2, Modal, ThemeProvider, Toolbar, Typography } from "@mui/material";

import { PendingOrders } from '../orders/PendingOrders';

export const Home = () => {
    const [pendingModel,setPendingModel] =useState(false);
    const handlePendingOrders=()=>{
      console.log("pending orders");
      setPendingModel(true);
    }
    const openPendingModel=()=>{
      console.log('opening modal');
      
      setPendingModel(true);}
    const closePendingModel=()=>{
      console.log('closing modal');
      
      setPendingModel(false);}
    return (
    <>
    <Modal open={pendingModel} onClose={closePendingModel}>
    <PendingOrders handlePendingModel={closePendingModel}/>
  </Modal>
  <AppBar position="relative" style={{backgroundColor:'black'}}>
   <Toolbar>
    <Typography variant="h4">ACSS</Typography>
   </Toolbar>
   </AppBar>
   <main>
    <Container maxWidth="sm">
      <Typography variant="h5" align="center">Pending Orders</Typography>
      <Typography variant="string" align="center">Hello everyone , this page is about pending orders in ACSS as of today</Typography>
      <Grid2 container spacing={3} justifyContent="center" sx={{marginTop:2}}>
      <Grid2 item><Button variant="contained" color="primary" onClick={handlePendingOrders}>Get Pending Orders</Button></Grid2>   
     <Grid2 item><Button variant="outlined" color="primary">Try more</Button></Grid2>
     </Grid2>
    </Container>
    </main>
    </>
  )
}
