// import { Link, animateScroll as scroll } from 'react-scroll';

// const Navigation = ({sections}) => {
//     return (
//         <nav class="navbar sticky-top">
//             <div className="container">
//                 <a href="" className="navbar-brand">jagadishChakma<sup><i class="fas fa-code"></i></sup></a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>

//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav ms-auto">
// {
//   sections.map((section) => (
//     <li class="nav-item">
//       <Link
//         key={section.id}
//         activeClass="active"
//         className='nav-link'
//         to={section.id}
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={100}
//       >
//         {section.label}
//       </Link>
//     </li>
//   ))
// }
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navigation;
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, animateScroll as scroll } from 'react-scroll';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a href="" className="navbar-brand">jagadishChakma<sup><i class="fas fa-code"></i></sup></a>
      </Typography>
      <Divider />
      <List>
        {props.sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              component="a"
              href={`#${section.id}`}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'rgb(51, 51, 51)' }}>
        <Toolbar className='container'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
            <a href="" className="navbar-brand">jagadishChakma<sup><i class="fas fa-code"></i></sup></a>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navbar-nav">
            {props.sections.map((section) => (
              <Button
                key={section.id}
                component={Link}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                activeClass="active" 
                sx={{
                  color: '#fff',
                  borderRadius: '0px',
          
                  // '&.active': {
                  //     borderBottom: '2px solid yellow', // Example of active styling
                  // },
              }}
      
              >
                {section.label}
              </Button>
            ))}

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
