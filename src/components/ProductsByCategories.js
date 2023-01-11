import React from 'react'
import {
    Box,
    Grid,
} from "@mui/material"
import ProductCard from './Card'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonCard from './PersonCard';
import product from "../assets/product.png"

const ProductsByCategories = (props) => {
  
    const persons = [
        {
            image : product,
            name : "Eddy"
        },
        {
            image : product,
            name : "Eddy"
        },
        {
            image : product,
            name : "Eddy"
        },
        {
            image : product,
            name : "Eddy"
        },
        {
            image : product,
            name : "Eddy"
        },
        {
            image : product,
            name : "Eddy"
        }
    ]
  
    return (
    <>
    <Box sx={(theme) => ({
            display : "flex",
            margin : "10px",
            fontWeight : "bold"
        })}>
            <p>{props.category}</p>
        </Box>
        <Box sx={(theme) => ({
            display : "flex",
            justifyContent : "space-around",
            alignItems : "center"
        })}>
            <Box sx={(theme) => ({
                flex : "2"
            })}>
                <Grid container spacing={3} className="p-3">
                    {
                        props.category == "Recommanded Sellers" ? persons.map((person) => {
                            return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PersonCard data={person} />
                            </Grid>
                            )
                        }) : props.data.map((p) => {
                            return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <ProductCard data={p} />
                            </Grid>
                            ) 
                        })
                    }
                </Grid>
            </Box>
            <Box sx={(theme) => ({
                flex : "0.1",
                color : "rgba(51,153,170,255)",
                fontWeight : "bold",
                "&:hover":{
                    "cursor" : "pointer"
                }
            })}>
                <Box><ArrowForwardIcon/></Box>
                <Box>View All</Box>
            </Box>
        </Box>
    </>
  )
}

export default ProductsByCategories