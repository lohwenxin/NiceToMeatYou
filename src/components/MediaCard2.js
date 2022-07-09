import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <div style={{ marginLeft: 100 }}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="190"
            image={require("../images/donate.jpg")}
            alt="donate"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Help People in Need
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Contrary to the stereotype that there is no hunger in Singapore, the reality is that 10% of Singaporean householes are food insecure. You could help with this situation by donating your excess food to people in need.
            </Typography>
        </CardContent>
        
        </Card>
    </div>
  );
}
