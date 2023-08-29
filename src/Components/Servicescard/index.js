import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BasicCard(props) {
    // First Step

const image= props.image;
const heading = props.heading;
const heading1 = props.heading1;



// Second Step

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="400"
          image={image} 
        //   Thrird Step
          alt="Services"

          //className="imageContainer"

        />
        <CardContent>

          
          <Typography gutterBottom variant="h6" component="div"
          sx={{textAlign:"center"}}  >
            {heading}
          </Typography>
          
          <Typography gutterBottom variant="body2" component="div">
            {heading1}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}