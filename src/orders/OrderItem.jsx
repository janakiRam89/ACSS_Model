import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid2, Typography } from '@mui/material';
import React from 'react'

export const OrderItem = ({itemNo,status,desc,type}) => {
    let itemNo1=8754515;
    let type1="SERVICES& PERKS";
    let Status1="Ok-READY TO GO";

  return (
    <Box>
        <Accordion sx={{width:'100%'}}>
            <AccordionSummary >
                <Container sx={{width:'62rem',display:'flex',justifyContent:'space-between'}}>
           <div >
                    <Typography sx={{fontWeight:'bold'}} >{itemNo}</Typography>
                    <br />
                    <Typography sx={{marginTop:-2}}>REVENUE ASSURANCE TEST</Typography>
                    </div>
                    <div>
                        <Typography sx={{fontWeight:'bold'}} >OrderType</Typography>
                    <br />
                    <Typography sx={{marginTop:-2}}>{type}</Typography>
                    </div>
                <div>
                    <Typography sx={{fontWeight:'bold'}} >Line Status</Typography>
                    <br />
                    <Typography sx={{marginTop:-2}}>{status}</Typography>
                </div>
                </Container>
               <ExpandMoreOutlined/>
            </AccordionSummary>
            <AccordionDetails sx={{margin:'-0.5rem'}}>
            {desc}
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}
