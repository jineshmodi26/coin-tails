import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import avatar from "../assets/avatar.png"
import personcard from "../assets/personcard.png"

export default function PersonCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={personcard}
          alt="green iguana"
        />
        </CardActionArea>
        {/* <img src={props.data.image}/> */}
        <Box sx={() => ({
            borderTopLeftRadius : "20px",
            borderTopRightRadius : "20px",
        })}>
            <Box>
            <Avatar alt="Remy Sharp" src={avatar} sx={(theme) => ({
                margin : "auto",
                width : "50px",
                height : "50px",
                position : "relative",
                transform : "translate3d(0%, -50%, 0)",
                margin : "auto"
            })}/>
            </Box>
            {/* <CardContent> */}
            <Typography gutterBottom variant="p" component="div" className='font-bold text-gray-600'>
                {props.data.name}
            </Typography>
            <Typography gutterBottom variant="p" component="div" className='font-bold text-gray-600'>
                Home Decorator
            </Typography>
            {/* </CardContent> */}
        <CardActions sx={(theme) => ({
            display : "flex",
            justifyContent : "center"
        })}>
            <Button sx={(theme) => ({
                backgroundColor : "rgba(51,153,170,255)",
                color : "white",
                "&:hover" : {
                    backgroundColor : "rgba(51,153,170,255)",
                    color : "white"
                }
            })} fullWidth size="small">
            Follow
            </Button>
        </CardActions>
        </Box>
    </Card>
  );
}