// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import Button from '@mui/material/Button';



// const LandingPage = () => {
//     return (
//       <Container
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '100vh',
//         //   backgroundImage: 'url("path/to/your/image.jpg")',
//           backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1691645879~exp=1691646479~hmac=f4e113874503539952e4c45dc8d2de6d7cc4e433d9d9395aa0e70733c903427f")' ,
//           // backgroundImage:" ",
//          backgroundSize:"cover",
//           backgroundPosition: 'center',
//         }}
//       >
//         <Typography variant="h1" sx={{ color: 'black', textAlign: 'center',fontFamily: "raleway", fontSize:'3rem', }}>
//         Welcome to Sri Venkateswara Enterprises
//         </Typography>
//         <Typography variant="h6" sx={{ color: 'black', textAlign: 'center',fontFamily: 'raleway' ,marginTop:'10PX',
//  }}>

// We offer a wide range of Products & Services for all your Business Needs

//         </Typography>
//         {/* <Link to={Contactus}></Link> */}

//         <Button variant="contained"  sx={{marginTop:'20PX',}}
        
              
        
        
//         >CONTACT US</Button>
        
//       </Container>
//     );
//   };
  
//   export default LandingPage;
  
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


const heroStyle=
{
  minHeight:'100vh',
  backgroundImage:'url("https://img.freepik.com/free-vector/abstract-digital-low-poly-connection-banner-design_1017-32434.jpg?w=1380&t=st=1691646922~exp=1691647522~hmac=3969da62185f6fc5e69135c9ed5029491e75537a93523b6d2f1ba284b80a1ee1" )',
  backgroundSize:'cover',
  backgroundPosition:'center',
  display:'Hex',
  alignItems:'center',
  justifyContent:'center',


};

const heroTextStyle={
  textAlign:'center',

};
const actionButtonStyle={
  margin:'16px',
}
export default function LandingPage(){


return(
  <>
  
  
  

  <div>
    <Grid container style={heroStyle}>
      <Grid item xs={12}>
        <div style={heroTextStyle}>

        <Typography variant="h1" sx={{ color: 'White', textAlign: 'center',fontFamily: "raleway", fontSize:'3rem', }}>
      Welcome to Sri Venkateswara Enterprises         </Typography>

      <Typography variant="h6" sx={{ color: 'White', textAlign: 'center',fontFamily: 'raleway' ,marginTop:'10PX',}}>


         We offer a wide range of Products & Services for all your Business Needs

        </Typography>
          <NavLink to="/Contact Us">
          <Button variant='contained' color="success"
          style={actionButtonStyle}>
            CONTACT US
          </Button>

          </NavLink>

        </div>
      </Grid>

    </Grid>
  </div>


  </>

)
}