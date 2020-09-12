import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="h1" gutterBottom>
                    For Real Weather
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
