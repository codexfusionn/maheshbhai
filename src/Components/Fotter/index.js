import { Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';


export default function Fotter(){
    return(
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:"20px"}}>
            <Grid item xs={6}>
                <Typography variant="caption" display="block" gutterBottom
                 sx={{textDecoration:"", display:"flex", alignItems:"center",justifyContent:'center', color:"inherit",
                }}
                  >Copyright © Sri Venkateswara Enterprises 2023.</Typography>
                <Typography sx={{display:"flex", alignItems:"center",justifyContent:'center'}}> <FacebookRoundedIcon sx={{color:"blue",  mr: 1 }}/> <InstagramIcon sx={{color:"red", mr: 1}}/> <TwitterIcon sx={{color:"#1976d2", mr: 1}}/> <LocationOnSharpIcon sx={{color:"Green", mr: 1}}/></Typography>
                

            </Grid>


            <Grid item xs={6}>
                <Typography variant="caption" display="block" gutterBottom sx={{textDecoration:"underline", 
                 display:"flex",
                  alignItems:"center",
                  justifyContent:'center', 
                  color:"inherit"
                  }}>
                    Powered by 6icube Techno Consultants Pvt. Ltd.</Typography>
                </Grid>


        </Grid>

        
        </>
    )

    
    
}