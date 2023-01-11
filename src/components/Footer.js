import React from 'react'
import {
    Box,
    Grid,
    Button
} from "@mui/material"
import frame from "../assets/frame.png"
import playstore from "../assets/playstore.png"
import appstore from "../assets/appstore.png"
import google from "../assets/google.png"
import tweeter from "../assets/tweeter.png"
import tiktok from "../assets/tiktok.png"
import { fontWeight } from '@mui/system'

// sx={(theme) => ({})}

const Footer = () => {
  return (
    <>
    <Box sx={(theme) => ({
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor : "#444444",
        color : "white",
        padding : "2%"
    })}>
        <Box>
            <Box>
                <Grid container spacing={2} sx={(theme) => ({
                    alignItems : "center",
                    paddingY : "20px" 
                })}>
                    <Grid item>Download :</Grid>
                    <Grid item><Button startIcon={<img src={playstore}/>} sx={(theme) => ({
                        width : "200px",
                        backgroundColor : "black",
                        color : "white",
                        '&:hover' : {
                            backgroundColor : "black"
                        }
                    })}>Available on the Google Play</Button></Grid>
                    <Grid item><Button startIcon={<img src={appstore}/>} sx={(theme) => ({
                        width : "200px",
                        backgroundColor : "black",
                        color : "white",
                        '&:hover' : {
                            backgroundColor : "black"
                        }
                    })}>Available on the App Store</Button></Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2} sx={(theme) => ({
                        alignItems : "center",
                        paddingY : "20px" 
                    })}>
                    <Grid item>Follow us :</Grid>
                    <Grid item><Box sx={(theme) => ({
                        backgroundColor : "#EEF4F5",
                        borderRadius : "3px",
                        color : "white",
                        padding : "7px",
                        '&:hover' : {
                            backgroundColor : "#EEF4F5"
                        }
                    })}><img src={google} width="20px"/></Box></Grid>
                    <Grid item><Box sx={(theme) => ({
                        backgroundColor : "#EEF4F5",
                        borderRadius : "3px",
                        color : "white",
                        padding : "7px",
                        '&:hover' : {
                            backgroundColor : "#EEF4F5"
                        }
                    })}><img src={tweeter} width="20px"/></Box></Grid>
                    <Grid item><Box sx={(theme) => ({
                        backgroundColor : "#EEF4F5",
                        borderRadius : "3px",
                        color : "white",
                        padding : "7px",
                        '&:hover' : {
                            backgroundColor : "#EEF4F5"
                        }
                    })}><img src={tiktok} width="20px"/></Box></Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={5} sx={(theme) => ({
                        alignItems : "center",
                        paddingY : "20px" ,
                        color : "#3399AA"
                    })}>
                    <Grid item>About CoinTails</Grid>
                    <Grid item>Help & Support</Grid>
                    <Grid item>Customer Service</Grid>
                </Grid>
            </Box>
        </Box>
        <Box><img src={frame} width="100px" className='m-auto'/>Scan the QR to download the App</Box>
    </Box></>
  )
}

export default Footer