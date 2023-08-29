// import * as React from 'react';
// // import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';

// import Typography from '@mui/material/Typography';

// // const bull = (
// //   <Box
// //     component="span"
// //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// //   >
// //     •
// //   </Box>
// // );

// export default function TestimonialsCard(props) {

//   const heading = props.heading;
//   const heading1 = props.heading1;
//   const heading2= props.heading2;
 


//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
        
//         <Typography variant="h6" component="div"
//           sx={{textAlign:'center'}}
//         >
//         {heading}
//         </Typography>
//         <Typography sx={{ fontSize: 14 , textAlign:'center'}} color="text.secondary" gutterBottom>
//          {heading1}
//         </Typography>
//         <Typography sx={{ mb: 1.5, }} color="text.secondary">
//           {heading2}
//         </Typography>
        
       
//       </CardContent>
//       <CardActions>
        
//       </CardActions>
//     </Card>


//   );
// }





import React from 'react';
import { Container, Typography } from '@mui/material';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'T Satish Babu',
      text: 'Manager - Maintenance & Production',
      text1: ' "I am very satisfied with the service provided by this company. The team was very professional and responsive to my needs."',
    },
    {
      name: 'Vrushali Pol',
      text: 'Manager - Enterprise Sales',
      text1: '"I have been a customer of this company for several years now and I have always been impressed with their pompt reply, commited work & good with market price." ',
    },
    {
      name: 'J Praven Kumar Reddy',
      text: 'Junior Engineer - Mechanical',
      text1: '"The firm so supportive, creative and spontaneous to work. They support us 24/7, even in odd times and their creativeness is so amazing. Thanks for the support." ',
    },
    {
      name: 'Subramanian Viswanathan',
      text: 'Production Manager',
      text1: '"I have been a client to this firm from a long time. Almost all products & services will be available at very reasonable prices." ',
    },
    {
      name: 'G Shivanand Basavaraj',
      text: 'Manager - Purchase',
      text1: '"The team over there has always been proactive in answering us & maintaining a good relation with us. Thanks for the services." ',
    },
    
    // Add more testimonial objects as needed
  ];

  return (
    <Container>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} style={styles.testimonial}>
          <Typography variant="h6" sx={{color:"SeaGreen", fontFamily:"raleway"}} style={styles.name}>
            {testimonial.name}
          </Typography>
          <Typography variant="body2"sx={{color:"inherit", marginBottom:'10px',fontFamily:"raleway"}} style={styles.text}>
            {testimonial.text}
          </Typography>

          <Typography variant="body1"  sx={{ }}
           style={styles.text}>
            {testimonial.text1}
          </Typography>
        </div>
      ))}
    </Container>
  );
};

const styles = {
  testimonial: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px 0',
  },
  name: {
    fontWeight: 'bold',
  },
  text: {
    fontStyle: 'italic',
  },
};

export default Testimonials;
