import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import avatar from "../assets/avatar.png"
import { height } from '@mui/system';

export default function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140px"
          image={props.data.image}
          alt="green iguana"
        />
        {/* <Avatar alt="Remy Sharp" src={avatar} sx={(theme) => ({
            margin : "auto",
            width : "50px",
            height : "50px"
        })}/> */}
        {/* <img src={props.data.image}/> */}
        <CardContent>
          <Typography gutterBottom variant="p" component="div" className='font-bold text-gray-600'>
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                    display : "flex",
                    justifyContent : "space-evenly",
                    alignItems : "center"
                }}>
                    <Rating name="read-only" value={props.data.rating} readOnly /><span>{`(${props.data.reviews})`}</span>
            </Box>
          </Typography>
          <Typography gutterBottom variant="p" component="div" className='font-bold text-gray-700'>
            Ether {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
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
        })} fullWidth size="small" endIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}