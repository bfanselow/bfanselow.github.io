import React, { FC, useEffect } from "react";

import { Container, Paper, Theme } from "@mui/material";

/**
 * 
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    title: {
        textAlign: "center",
        paddingBottom: "40px",
    },
    body: {
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "15px",
    },
    navigationList: {
        listStylePosition: "inside",
    },
    pages: {
        listStyleType: "none",
    },
    logo: {
        height: theme.spacing(30),
        width: theme.spacing(30),
        display: "block",
        margin: "0 auto",
    },
}));
 */

const LandingPage: FC = () => {

    return (
        <Container fixed>
            <Paper>
                <img src="/images/cb_nordic.jpg" alt="cb_nordic" />
            </Paper>
        </Container>
    );
};

export default LandingPage;
