import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Container,
  styled,
  Button,
  CardActions,
} from "@mui/material";
import React from "react";
import LensIcon from '@mui/icons-material/Lens';
const Textcomponent = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "4%",
  },
}));
const Typocomponent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "30%",
  },
}));

const Headercomponent = () => {
  const image = "./images/fullnew.jpg";
  return (
    <div>
      <Typography
        gutterBottom
        variant="h5"
        align="center"
        sx={{ fontWeight: "800" }}
      >
        About Me
      </Typography>
      <Typocomponent
        gutterBottom
        variant="h8"
        align="center"
        sx={{ marginLeft: "45.5%" }}
      >
        Why Choose Me?
      </Typocomponent>
      <hr></hr>
      <Container sx={{height :"40%"}}>
        <Card sx={{ margin: "2%" ,height :"40%" }}>
          <CardContent>
            <Grid container sx={{margin : 0 , padding : 0}}>
              <Grid item lg={6} xs={12}>
                <img src={image} alt="image" width="80%" height="90%" style={{marginTop : "3%"}} />
              </Grid>
              <Grid item lg={6} md={3} xs={12}>
                <Typography>
                  Full stack web and mobile developer with background knowledge
                  of MERN stack with redux and Hooks,along with a knack of
                  building application with full efficiency. Strong professional with a willing to become asset
                  for an organization.
                </Typography>
                <Typography variant="h4"  sx={{marginTop : "20%"}}>Here are a Few Highlights:</Typography>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Full Stack web and mobile development.</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Interactive Front End as per the Design.</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>React and React Native</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Redux and State Management.</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Building Rest Api.</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Managing Database.</Typography>
                <br></br>
                <Typography variant="h9"><LensIcon fontSize="small" color="secondary"/>Intermediate Knowledge about developing apps in flutter.</Typography>






              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Headercomponent;
