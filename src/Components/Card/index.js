import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BasicCard(props) {
    // First Step

const image = props.image;
const heading = props.heading;


// Second Step

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="219"
          image={image} 
        //   Thrird Step
          alt="Categories"

        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div"
          sx={{textAlign:'center'}}>
            {heading}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}