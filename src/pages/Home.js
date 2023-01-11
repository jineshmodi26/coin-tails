import { Button, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import logo from "../assets/logo.png"
import person from "../assets/person-outline.png"
import star from "../assets/Vector.png"
import cart from "../assets/cart.png"
import cat from "../assets/cat.png"
import Hero from "../assets/Hero.png"
import computerLogo from "../assets/computer_logo.png"
import dealLogo from "../assets/deals_logo.png"
import dressLogo from "../assets/dress_logo.png"
import shopLogo from "../assets/shop_logo.png"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import product from "../assets/product.png"
import ProductsByCategories from "../components/ProductsByCategories";
import Footer from "../components/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

    const [tab0, setTab0] = useState("products")
    const [tab, setTab] = useState("computers")

    const tab0Default = {
        color : "black",
        marginX : "10px",
        "&:hover" : {
            color : "rgba(51,153,170,255)",
            cursor : "pointer"
        }
    }

    const tab0Click = {
        marginX : "10px",
        borderBottom : "3px solid rgba(51,153,170,255)",
        color : "rgba(51,153,170,255)"
    }

    const tabDefault = {
        backgroundColor : "white",
        color : "black",
        width : "100%",
        "&:hover" : {
            "cursor" : "pointer"
        }
    }
        
    const tabClick = {
        backgroundColor : "rgba(51,153,170,255)",
        color : "white"
    }

    const tabLogos = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }

    const data = [
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        },
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        },
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        },
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        },
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        },
        {
            id : "1",
            image : product,
            name : "Fuel supply system",
            rating : 4,
            price : 70.99,
            reviews : 559
        }
    ]

    const categories = [
        {
            name : "Recommanded Goods"
        },
        {
            name : "Recommanded Sellers"
        },
        {
            name : "Top Products"
        },
        {
            name : "Recently Added"
        },
        {
            name : "Products on discount"
        },
    ]

  return (
    <>
        <Box className="logo-bar" sx={(theme) => ({
            display : "flex"
        })}>
            <Box sx={(theme) => ({
            })}>
                <img src={logo} height="80"/>
            </Box>
        </Box>
        <Box sx={(theme) => ({
            display : "flex",
            margin : "auto",
            justifyContent : "center"
        })}>
            <Box sx={(theme) => ({
                ...(tab0Default),
                ...(tab0 == "products" && tab0Click)
            })} onClick={() => {setTab0("products")}}><p>Prodcuts</p></Box>
            <Box sx={(theme) => ({
                ...(tab0Default),
                ...(tab0 == "manufecture" && tab0Click)
            })} onClick={() => {setTab0("manufecture")}}><p>Manufacture</p></Box>
        </Box>
        <Box sx={(theme) => ({
            display : "flex",
            marginX : "2%",
            marginY : "1%",
            justifyContent : "flex-end",
            alignItems : "center",
            [theme.breakpoints.down('md')]: {
                flexDirection : "column"
            },
            [theme.breakpoints.down('sm')]: {
                flexDirection : "column",
            },
        })}>
            <Box sx={(theme) => ({
                marginX : "10px"
            })}>
                <TextField sx={(theme) => ({
                    width : "1000px",
                    [theme.breakpoints.down('lg')]: {
                        width : "700px",
                    },
                    [theme.breakpoints.down('md')]: {
                        width : "500px",
                    },
                    [theme.breakpoints.down('sm')]: {
                        width : "250px",
                    }, 
                })} placeholder="What are you looking for ..."
                    InputProps={{
                        endAdornment: (
                            <IconButton
                            edge="end"
                            style={{borderRadius : 0,backgroundColor : "rgba(51,153,170,255)"}}
                            >
                                <Button style={{color : "white"}}>Search</Button>
                            </IconButton>
                        ),
                      }}
                />
            </Box>
            <Box className="" sx={(theme) => ({
                display : "flex"
            })}>
                <Box sx={(theme) => ({
                    marginX : "10px",
                    fontSize : "13px",
                })}><img src={person} className="m-auto"/><Box>My Account</Box></Box>
                <Box sx={(theme) => ({
                    marginX : "10px",
                    fontSize : "13px"
                })}><img  src={star} className="m-auto"/> <Box>Wishlist</Box></Box>
                <Box sx={(theme) => ({
                    marginX : "10px",
                    fontSize : "13px"
                })}><img  src={cart} className="m-auto"/> <Box>Cart</Box></Box>
            </Box>
        </Box>
        <Box sx={(theme) => ({
            backgroundColor : "rgba(51,153,170,255)",
            display : "flex",
            justifyContent : "flex-start",
            alignItems : "center",
            color : "white"
        })}>
            <Box className="py-3 px-5">
                <img src={cat}/>
            </Box>
            <Box className="py-3 px-5">
                <p>All Categories</p>
            </Box>
            <Box className="py-3 px-5">
                <p>|</p>
            </Box>
            <Box className="py-3 px-5">
                Customer Services
            </Box>
            <Box className="py-3 px-5">
                Sell on ConinTails.com
            </Box>
            <Box className="py-3 px-5">
                Help
            </Box>
        </Box>
        <Box className="m-5 p-12 text-center relative overflow-hidden bg-no-repeat bg-cover" sx={(theme) => ({
            height : "300px",
            backgroundImage : `url(${Hero})`,
            borderRadius : "15px"
        })}></Box>
        <Box className="" sx={(theme) => ({
            display : "flex",
            justifyContent : "space-evenly",
            border : "1px solid lightgrey",
            lineHeight : "50px"
        })}>
            <Box className="" sx={(theme) => ({
                ...(tabDefault),
                ...(tab == "computers" && tabClick)
            })} onClick={() => {setTab("computers")}}>
                <Box sx={(theme) => ({
                   ...(tabLogos) 
                })}>
                    <img src={computerLogo} className="mx-2"/><span>Computers & Accessories</span>
                </Box>
            </Box>
            <Box sx={(theme) => ({
                ...(tabDefault),
                ...(tab == "deals" && tabClick)
            })} onClick={() => {setTab("deals")}}>
                <Box sx={(theme) => ({
                   ...(tabLogos) 
                })}>
                    <img src={dealLogo} className="mx-2"/><span>Deal of the Day</span>
                </Box>
            </Box>
            <Box sx={(theme) => ({
                ...(tabDefault),
                ...(tab == "dresses" && tabClick)
            })} onClick={() => {setTab("dresses")}}>
                <Box sx={(theme) => ({
                   ...(tabLogos) 
                })}>
                    <img src={dressLogo} className="mx-2"/><span>Dresses</span>
                </Box>
            </Box>
            <Box sx={(theme) => ({
                ...(tabDefault),
                ...(tab == "shop" && tabClick)
            })} onClick={() => {setTab("shop")}}>
                <Box sx={(theme) => ({
                   ...(tabLogos) 
                })}>
                    <img src={shopLogo} className="mx-2"/><span>Shop Home & Office</span>
                </Box>
            </Box>
        </Box>
        <Box>
            {categories.map((category) => {
                return <ProductsByCategories category={category.name} data={data}/>
            })}
        </Box>
        <Box>
            <Footer />
        </Box>
    </>
  )
}

export default Home
