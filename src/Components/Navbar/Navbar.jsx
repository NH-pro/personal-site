import * as React from 'react';

// Component Imports
import NavTabs from './NavTabs';

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


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
          <Typography 
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '6em',
              color: 'white',
              textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            }}
          >
            Neil Hanson - Software Developer
          </Typography>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </Box>
  );
}