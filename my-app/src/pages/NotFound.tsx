import React, { FC, Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Paper, Typography } from "@mui/material";

import { useTitle } from "../hooks/TitleContext";

const NotFound: FC = () => {
    const location = useLocation();
    const { setTitle } = useTitle();
    useEffect(() => setTitle("Not Found"), [setTitle]);

    if (!location) {
        return <Fragment />;
    }
    return (
        <Container fixed>
            <Paper>
                <Typography variant="h2" component="h2">
                    Page not Found
                </Typography>
                <Typography variant="h4" component="h4">
                    {location.pathname} does not exist
                </Typography>
            </Paper>
        </Container>
    );
};

export default NotFound;
