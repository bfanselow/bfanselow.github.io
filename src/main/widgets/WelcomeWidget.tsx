import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const WelcomeWidget = () => {
  return (
    <>
        <Card elevation={6} sx={{ backgroundColor: "transparent", width: "100%" }}>
          <CardContent>
            <Typography component="div" gutterBottom variant="h1">
                Welcome to my personal Website 
            </Typography>
            <Typography
              component="div"
              sx={{ fontWeight: 300, mb: 3 }}
              variant="h1"
            >
              Enjoy! 
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              gutterBottom
              marginBottom={2}
              variant="h4"
            >
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={6} sx={{ backgroundColor: "transparent", width: "100%" }}>
          <CardContent>
            <Typography variant="h5">Made with</Typography>
            <Grid container spacing={3}>
              <Grid item>
                  <Card elevation={3}>
                      <CardContent>
                          React (17.0)
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item>
                  <Card elevation={3}>
                      <CardContent>
                          Typescript (4.1)
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item>
                  <Card elevation={3}>
                      <CardContent>
                          Material-UI (5.0)
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item>
                  <Card elevation={3}>
                      <CardContent>
                          Lightgallery-react (2.8)
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item>
                  <Card elevation={3}>
                      <CardContent>
                          Some design concepts from: "react-material-admin" https://github.com/m6v3l9/react-material-admin 
                      </CardContent>
                  </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </>
  );
};

export default WelcomeWidget;
