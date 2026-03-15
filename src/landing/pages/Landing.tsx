import LandingLayout from "../components/LandingLayout";
import { Box, Card, CardMedia } from "@material-ui/core";

const Landing = () => {

  return (
    <LandingLayout>
      <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
          <Card square={true} sx={{ height: "80vh" }}>
                <CardMedia
                    component="img"
                    height="70%"
                    width="70%"
                    image="img/robert-frost.png"
                />
          </Card>
      </Box>
      </main>
    </LandingLayout>
  );
};

export default Landing;
