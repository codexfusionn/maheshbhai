import { Grid, Typography} from '@mui/material';
import * as React from 'react';
import CallIcon from '@mui/icons-material/Call';
import SignIn from '../../Components/Contactcard';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
// import { Typography } from "@mui/material";
// import BasicCard from "../../Components/Cilentscard"; 
// Fourth Step
// import Grid from '@mui/material/Grid';

export default function Home(){
    return(
        <>
        <div style={{ justifyContent:"center", alignItems: 'center',display: 'flex',marginTop:"10px"
    
    }} >

        <img
        src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1683726977~exp=1683727577~hmac=9893196b239ec6fcceaf168e2acd2092f515124eb5b133d859a87fd54c6e02cd"
        alt="logo"
        height="740px"
        width="740px"
        sx={{textAlign:"center",
       
                //margintop:"10px"
    
    }}
        
        
        />


        </div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
        <Grid item xs={6}>
        <Typography variant='h4' gutterbuttom 
        sx={{textAlign:"center", color:"purple", marginBottom:"10px", fontFamily:"raleway"
    }}
        
        >Connect</Typography>
         <Divider /> 

        <Typography variant='h5'gutterBottom 
        sx={{ textAlign:"center", fontFamily:"Raleway", color:"orangeRed" , marginTop:"10px", textDecoration:"bold"}}> Sri Venkateswara Enterprises </Typography>

        <Typography sx={{textAlign:'center',marginTop:"20px"}} > <CallIcon/> </Typography>

        <Typography variant='h5'gutterBottom 
        sx={{ textAlign:"center", fontFamily:"Raleway", color:"seagreen",}} > Call Us</Typography>

        <Typography variant='body1'gutterBottom 
        sx={{ textAlign:"center", fontfamily:"Raleway", fontWeight:"700"}} >+919849044476</Typography>

        <Typography sx={{textAlign:'center',marginTop:"20px"}} > <EmailIcon/> </Typography>



        <Typography variant='h5'gutterBottom 
        sx={{ textAlign:"center", fontFamily:"Raleway", color:"seagreen"}} > Email</Typography>  


             <Typography variant='body1'gutterBottom 
        sx={{ textAlign:"center", fontfamily:"Raleway", fontWeight:"700" , }} >enquiry@sve.enterprises</Typography>


        <Typography sx={{textAlign:'center',marginTop:"20px"}} > <LocationOnIcon/> </Typography>

        <Typography variant='h5'gutterBottom 
        sx={{ textAlign:"center", fontFamily:"Raleway", color:"seagreen"}} > Regd. Office</Typography>  

        <Typography variant='body1'gutterBottom 
        sx={{ textAlign:"center", fontfamily:"Raleway", fontWeight:"700"}} >12-1-508/89/5, Laxminagar, North Lallaguda, Hyderabad,</Typography>

        <Typography variant='body1'gutterBottom 
        sx={{ textAlign:"center", fontfamily:"Raleway", fontWeight:"700"}} >Telangana - 500017, India</Typography>










            </Grid>



          <Grid item xs={6}>
         <SignIn

         
         />
            </Grid>
        </Grid>







        </>
        
    )
}