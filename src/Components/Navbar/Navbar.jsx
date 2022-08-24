import * as React from 'react';

// Component Imports
import NavTabs from './NavTabs';

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{
            backgroundColor: '#5246A6'
        }}
      >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            Neil Hanson
          </Typography>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </Box>
  );
}