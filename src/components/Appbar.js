import { Grid,Box, Avatar, Container, Typography, Button } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook'
const Appbar = () => {
    const fullnew = './images/small.jpg';
  return (
    <Box>
        <Grid container sx={{alignContent : 'center' , justifyContent : "center",alignItems : 'center',marginTop : "4%"}}>
   <Grid item lg={6} sx={{height : '60vh',backgroundColor : "#fff"}}>
    <Container sx={{marginTop : "14%" , marginLeft : "10%"}}>
    <Typography variant='h7' sx={{color : 'red'}}>Hello I'm</Typography>
  <Typography variant='h4' >GAURANG AGRAWAL</Typography>
  <Typography variant='h6'>A Creative Developer From India.</Typography>
  <Typography variant='h8'>I'm Creative Web and Mobile app developer, and I am very passionate.
  <br></br>
  and dedicated to my work.
  
  </Typography>
  <Typography>
                       <a href="https://www.instagram.com/gaurang.agrawal.1612/" className='cursor'>
                       <InstagramIcon color='error' fontSize='medium' sx={{margin : '1%'}}/>
                        </a> 
                        <a href="https://github.com/gaurang123123" className='cursor'>
                       <GitHubIcon color='primary' fontSize='medium' sx={{margin : '1%'}}/>
                        </a> 
                        <a href="https://www.linkedin.com/in/gaurang-agrawal-4ab64627a/" className='cursor'>
                       <LinkedInIcon color='error' fontSize='medium' sx={{margin : '1%'}}/>
                        </a>
                        <a href="https://www.facebook.com/gaurang.agrawal.161/" className='cursor'>
                       <FacebookIcon color='primary' fontSize='medium' sx={{margin : '1%'}}/>
                        </a>
                    </Typography>
                    <br>
                    </br>
                    <Button variant='contained' color='error'sx={{margin:"2%"}}>Hire Me</Button>
                    <Button variant='outlined' color='primary' sx={{margin:"2%"}}>About Me</Button>

    </Container>

   </Grid>
   <Grid item lg={6} sx={{height : '60vh'}}>
    <Container sx={{marginTop : "15%",marginLeft : "4%"}} >
    <Avatar src={fullnew} alt="image"  sx={{ width: 250, height: 250 }} class="imgbx"/>
    </Container>
   
   </Grid>
        </Grid>
    </Box>
  )
}
{/* <div class="container8">
<div class="card">
    <div class="imgbx">
        <a href="">
        <img src="icons/mask.png" >
    </a>
  
    </div>
   <h2><div id="aqi">---</div></h2>
    <p id="para">-------</p>
    <button id="btn1" onclick="hide()">Read more</button>
</div> */}

export default Appbar