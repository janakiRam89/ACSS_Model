import { Box, Button, Grid2, Modal, Typography } from '@mui/material'
import React from 'react'

export const DeleteConfirmation = ({deleteConfirmation,handleClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
  return (

  <Box sx={{...style}}>
    <Typography id="modal-modal-title" variant="h7" component="h2">
      Delete Confirmation
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 0 }}>
        Do you want to confirm delete operaion?
    </Typography>
    <Grid2 container spacing={3} justifyContent="center" sx={{marginTop:2}}>
        <Grid2 item><Button variant="contained" color="primary" onClick={deleteConfirmation}>Confirm</Button></Grid2>   
     <Grid2 item><Button variant="outlined" color="primary" onClick={handleClose}>Cancel</Button></Grid2>
     </Grid2>
  </Box>
  

)
}
