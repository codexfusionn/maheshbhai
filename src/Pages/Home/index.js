import {  Typography } from "@mui/material";

//import Box from "@mui/material";
import BasicCard from "../../Components/Card"; 
import BoxComponent from "../../Components/Box1";

// Fourth Step
import Grid from '@mui/material/Grid';
import Testimonials from "../../Components/Testimonialscard";
import LandingPage from "../../Components/LandingPage";


export default function Home(){
    return(
        
        <>

        <div>
      <LandingPage />
    </div>




        <BoxComponent sx={{ marginTop:'20px', marginBottom:'20px'}}/> 
             

       
        <Typography variant="h4" gutterBottom
       sx={{textAlign:"center",color:"orangered" ,marginTop:"80px", marginBottom:'40px',
       fontFamily:"raleway",
    }}
        >Our Products and Services
</Typography>
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
heading="Hand Tools"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
heading="Fabrications & Welding"
/>
</Grid>
<Grid item xs={3}>
<BasicCard 
image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
heading="Bearings & Power Transmission"
/>
</Grid>
<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
heading="Hydraulics"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
heading="All types of Pipes & Fittings"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
heading="MS Structural Steel"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
heading="Industrial Chemicals"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
heading="Industrial Lubricants"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
heading="General Stationery"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
heading="Security"
/>
</Grid>


<Grid item xs={3}>
<BasicCard 
image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
heading="Pumps & Motors"
/>
</Grid>

<Grid item xs={3}>
<BasicCard 
image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
heading="Hardware"
/>
</Grid>
</Grid>



<Typography variant="h4" gutterbuttom 
sx={{textAlign:"center",


        fontFamily:"raleway",
        color:"	orangered",
        marginTop:"20px",

        marginBottom:"20px",




}}  

>Our Client Testimonials</Typography>




<Testimonials/>











    
        </>



    )
}