import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Contact(){
    return (
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item xs={6}>
<Typography  variant="h5" gutterBottom component="div"
sx={{textAlign:"center",
fontFamily:"raleway",
marginTop:"20px",
color:"orange",
// marginLeft: "auto",
// marginRight: "auto",
maxWidth: "100%",

//mr:"4",
}}

>Overview</Typography>


 <Typography 
                     >
                        Founded in 1986 by Shri Sama Ravinder Reddy with a vision to build a leading enterprise in industrial and commercial supplies, SVE has relentlessly risen to glory with its steadfast focus on achieving customer delight through excellence, innovation and agility. The company takes pride in its unwavering commitment to on-time delivery, happieness and satisfaction of its customer.
</Typography>  
</Grid>


<div style={{ display:'flex',
            justifyContent:'center',
            alignItems:"center",
            marginTop:'15px',
            marginLeft:"150px"
            
}}>
<Grid item xs={6}>
<img
          src="https://img.freepik.com/free-vector/sentiment-analysis-concept-illustration_114360-5182.jpg?w=740&t=st=1683612118~exp=1683612718~hmac=f48fa6779df6f7b1d4005529bd34d284e298ac57853d9e5fe11849fa7f220b0c"
          alt="Sri Venkateswara Enterprises logo"
          height="300px" width="300px"
          
          
          />
</Grid>
</div>

{/* <div style={{ display:'flex',
            justifyContent:'center',
            alignItems:"center",
            marginTop:'15px',
            marginLeft:"50px"
            
}}> */}
<Grid item xs={6}>
<img
          src="https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg?1&w=740&t=st=1683450898~exp=1683451498~hmac=fd3e1726354cb01e6f6db68f7e01cc067cafffab038909cdf0946fa2a3e14ba5"
          alt="Sri Venkateswara Enterprises logo"
          height="300px" width="300px"
          
          
          />
</Grid>
{/* </div> */}
<Grid item xs={6}>
<Typography variant="h5" gutterBottom component="div"
sx={{textAlign:"center",
fontFamily:"raleway",
marginTop:"20px",
color:"orange",
}}>Our Mission</Typography>
<Typography sx={{textAlign:"justify"}}>To exceed expectations by offering the best service, a strong bond of confidence to our clients and maintaining a continuous level of growth by supplying products as per customer requirements and specifications. Committed to total customer satisfaction and trust in business for the speedy and prompt delivery, 24 hours a day and 365 days a year.</Typography>
</Grid>


<Grid item xs={6}>
<Typography variant="h5" gutterBottom component="div"
sx={{textAlign:"center",
fontFamily:"raleway",
marginTop:"20px",
color:"orange",
}}>Our Vision & Purpose</Typography>
<Typography sx={{textAlign:"justify"}}>Sri Venkateswara Enterprises sole purpose is to deliver Industrial Products and its allied services to buyers at their doorstep by using Innovative technology and resources to qualify as a preferred supplier. We aspire that our customers have delightful experience and always aim to achieve high level of customer satisfaction in everyting we offer. Our main aim and goal is to cater to the needs of our clients by providing them with superior quality products at competitive and economical prices.</Typography>
</Grid>

<div style={{ display:'flex',
            justifyContent:'center',
            alignItems:"center",
            marginTop:'15px',
            marginLeft:"150px"
            
}}>
<Grid item xs={6}>
<img
          src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=740&t=st=1683611693~exp=1683612293~hmac=7683e601677269eb3495871ebc3a002c3b9277e6f062c7f3b13b7d4fee2431ab"
          alt="Sri Venkateswara Enterprises logo"
          height="300px" width="300px"
          
          
          />
</Grid>

</div>

{/* <div style={{ display:'flex',
            justifyContent:'center',
            alignItems:"center",
            marginTop:'15px',
            marginLeft:"100%",
            marginRight:"50%",
            
}}> */}
<Grid item xs={6}>
<img
          src="https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?w=740&t=st=1683611630~exp=1683612230~hmac=a1c944d0103e216402d4c8aa45026aa132e410cfaa6699bc915a2c4ec8cd4132"
          alt="Sri Venkateswara Enterprises logo"
          height="300px" width="300px"
          
          
          />
</Grid>
{/* </div> */}
<Grid item xs={6}>
<Typography variant="h5" gutterBottom component="div"
sx={{textAlign:"center",
fontFamily:"raleway",
marginTop:"20px",
color:"orange",
}}>Core Values</Typography>
<Typography sx={{textAlign:"justify"}}>Passionate: Passionate about providing quality grade products to our clients.
Excellence: To strive relentlessly, and expand our abilities to become the best in the industry.
Integrity: Embrace business integrity as an essential component in the way we conduct our business.
Customer Satisfaction: Delivering exceptional experience to customers by providing high quality services.
Commitment: Commitment to our customers by providing best quality products & services and act with professionalism in all deeds and interactions.</Typography>
</Grid>



<Grid item xs={6}>
<Typography variant="h5" gutterBottom component="div"
sx={{textAlign:"center",
fontFamily:"raleway",
marginTop:"20px",
color:"orange",
}}>Why Us</Typography>
<Typography sx={{textAlign:"justify"}}>We're one of the prominent names offering complete bottling solutions for Liquor and Beverage Industry. The superlative quality, reliability and cost-effectiveness of our products have been appreciated by the clients across. Furthermore, the following attributes have helped us in becoming our clients favourite: Customizable Product Line Timely Deliveries Ethical usiness Approach Hassle-Free transactions.s</Typography>
</Grid>

<div style={{ display:'flex',
            justifyContent:'center',
            alignItems:"center",
            marginTop:'15px',
            marginLeft:"150px"
            
}}>

<Grid item xs={6}>
<img
          src="https://img.freepik.com/free-vector/flat-people-asking-questions_23-2148929673.jpg?w=740&t=st=1683612049~exp=1683612649~hmac=26ddacd9b9872c7144541312a14bcde466a14dad6291c224ea856b0ffd0d2747"
          alt="Sri Venkateswara Enterprises logo"
          height="300px" width="300px"
          
          
          />
</Grid>

</div>

</Grid>      
        </>
    )
} 