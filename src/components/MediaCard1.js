import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard1() {
  return (
    <div style={{ marginRight: 100 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="190"
          image={require("../images/waste.jpg")}
          alt="waste"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prevent Food Waste
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Food waste is one of the biggest waste streams in Singapore and the amount of food waste generated has grown by around 20% over the last 10 years.
 With our app, you can search for a great recipe for the ingredients left in your fridge.
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}
