// src/components/AppBar.js

import React from 'react';
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = ({ open, toggleDrawer }) => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          サンプルアプリ
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
