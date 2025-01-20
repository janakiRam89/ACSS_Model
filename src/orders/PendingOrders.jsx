import { Box, Button, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, Grid2, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { OrderItem } from './OrderItem';
import FormControlContext from '@mui/material/FormControl/FormControlContext';
import data from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteConfirmation } from './DeleteConfirmation';
import { orderDetailsActions } from '../store';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
export const PendingOrders = ({handlePendingModel}) => {

  const [selectedItems,setSelectedItems]=useState([]);
  const [deleteModal,setDeleteModal]=useState(false);
  const dispatch=useDispatch();
  const handleOpen=()=>{
    setDeleteModal(true);
  }
  const handleClose=()=>setDeleteModal(false)

    let count=4;
    let date='12/12/2024';
  //  console.log(data);
    let OrderNo=234234233;
    const orderData=useSelector((store)=>{
      console.log(store.pendingorders.orders);
      return store.pendingorders.orders[0];
      
    })
    const handleChange=(id)=>{
      console.log(id);
      setSelectedItems((previous)=>{
        console.log(previous);
        
        if(previous.findIndex((item)=>item==id)!=-1){
          return previous.filter(item=>item!=id);
        }
        else{
         return [...previous,id]
        }
        return [];
      })
      
    }
    const onDeleteConfirmation=()=>{
      console.log('delete confirmation');
      dispatch(orderDetailsActions.deleteOrders(selectedItems));
      handleClose();
    }
   
    
    
  return (
  
    <Box sx={{ ...style}}>
      <Modal open={deleteModal} onClose={handleClose}>
        <DeleteConfirmation deleteConfirmation={onDeleteConfirmation} handleClose={handleClose}/>
      </Modal>
    <Container>
        <Typography variant='h6'>Pending Order view Details</Typography>
        <Divider sx={{opacity:1,backgroundColor:'black'}}/>
        <Container sx={{display:'flex',justifyContent:'flex-start',gap:4}}>
            <Typography variant='h7' >Total Lines ({orderData.items.length})</Typography>
            <Typography variant='h7' >Order Number ({orderData.orderNo})</Typography>
            <Typography variant='h7' > Effective Date({orderData.effectiveDate})</Typography>
        </Container>
        <Divider sx={{opacity:1,backgroundColor:'black'}}/>      
        <Container>
      <FormGroup>
        {orderData.items.map((item)=>
      <FormControlLabel control={<Checkbox onChange={()=>handleChange(item.itemNo)}   />} label=<OrderItem type={item.orderType} status={item.Status} desc={item.Description} itemNo={item.itemNo} /> />
        )}
      </FormGroup>
      {/* <Grid2 Container >
        <Grid2 item>
        <Button variant="contained" sx={{backgroundColor:'black',borderRadius:'20%'}}>
        Success
        </Button>
        </Grid2>
        <Grid2 item>
        <Button variant="outlined" sx={{backgroundColor:'black',borderRadius:'20%'}}>
        Cancel
        </Button>
        </Grid2>
      </Grid2> */}
      <Grid2 container spacing={3} justifyContent="center" sx={{marginTop:2}}>
      <Grid2 item><Button onClick={handleOpen} variant="contained" color="primary" sx={{backgroundColor:'black',borderRadius:'10%'}} >Delete</Button></Grid2>   
     <Grid2 item><Button onClick={handlePendingModel} variant="outlined" color="primary">Cancel</Button></Grid2>
     </Grid2>
      </Container>
      </Container>   
  </Box>
  )
}

