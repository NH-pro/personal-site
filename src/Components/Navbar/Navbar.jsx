import * as React from 'react';

// Component Imports
import NavTabs from './NavTabs';

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{
            backgroundImage: 'url("https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: 'cover'
        }}
      >
        <Toolbar >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography 
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '5em',
              color: 'black'
            }}
          >
            Neil Hanson
          </Typography>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </Box>
  );
}