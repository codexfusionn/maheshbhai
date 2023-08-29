import * as React from 'react';
import Box from '@mui/material/Box';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function BoxComponent() {
  return (
    

    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:"20px"}}>
      <Grid item xs={1.5}>
    
    </Grid>
<Grid item xs={3}>
    <Box component="div" sx={{ p: 3, border: '1px solid seagreen', width:"180px",
    borderRadius: '10px', minHeight:"90px"}}>
      {/* Content inside the box */}
      <Typography sx={{justifyContent:'center',alignItems:'center',display:'flex'}}><BusinessCenterOutlinedIcon sx={{  color:"blue",  mr: '1' , }}/></Typography>

      <Typography variant='h6' gutterBottom sx={{justifyContent:'center',alignItems:'center',display:'flex', color:'seagreen'}}> 25+</Typography>

      <Typography variant='h6' gutterBottom sx={{textAlign:'center',alignItems:'center',display:'flex' , color:"#1976d2"}}>Years of Experience</Typography>
      
      

    </Box>
    </Grid>

    <Grid item xs={3}>
    <Box component="div" sx={{ p: 3, border: '1px solid seagreen',width:"200px",
    borderRadius: '10px', minHeight:"100px"}}>
      {/* Content inside the box */}
      <Typography sx={{justifyContent:'center',alignItems:'center',display:'flex'}}><PeopleAltOutlinedIcon sx={{  color:"blue",  mr: 1, }}/></Typography>

      <Typography variant='h6' gutterBottom  sx={{justifyContent:'center',alignItems:'center',display:'flex',color:'seagreen'}}> 55+ </Typography>

      
      
      <Typography variant='h6' gutterBottom  sx={{textAlign:'center',alignItems:'center',display:'flex',color:"#1976d2"}}> Valuable Happy Clients across India</Typography>
      

    </Box>
    </Grid>

    <Grid item xs={3} >
    <Box component="div" sx={{ p: 3, border: '1px solid seagreen',width:"200px",
    borderRadius: '10px', minHeight:"135px"}}>
      {/* Content inside the box */}
      <Typography sx={{ justifyContent:'center',alignItems:'center',display:'flex'}}><ShoppingCartOutlinedIcon sx={{  color:"blue",  mr: 1,}}/></Typography>

      <Typography variant='h6' gutterBottom sx={{textAlign:'center',alignItems:'center',display:'flex',color:'seagreen'}}> Wide Range of Products</Typography>

      
      
      <Typography variant='body1' gutterBottom sx={{textAlign:'center',alignItems:'center',display:'flex',color:"#1976d2"}}>You Name it, We Supply it </Typography>
     

    </Box>
    </Grid>
    <Grid item xs={1.5}>
    
    </Grid>



    </Grid>
    
  );

}