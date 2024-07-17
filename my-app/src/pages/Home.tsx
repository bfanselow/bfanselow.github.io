import  { FC } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const LandingPage: FC = () => {

    return (
        <Card sx={{ width: "100vw", height: "100vh", backgroundColor: "#333A3F" }}>
            <Box>
                <CardMedia
                    sx={{ overflow: "hidden" }}
                    component="img"
                    height="100%"
                    width="100%"
                    image="/images/cb_nordic.jpg"
                />
            <Box
                sx={{
                    position: 'absolute',
                    top: 200,
                    left: 200,
                    width: '50%',
                    color: 'white',
                    textShadow: '3px 3px 3px rgba(51, 51, 51, 0.90)',
                    padding: '15px',
                }}
            >
                <Typography variant="h5">
                The world is a huge place. How will you know where you fit in unless you explore beyond your comfort zone? – Ernest Shackleton
                </Typography>
            </Box>
        </Box>
        </Card>
    );
};

export default LandingPage;
