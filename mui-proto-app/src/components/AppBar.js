import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar'
import Toolbar  from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu'
import Fade from '@mui/material/Fade'
import { MenuItems } from './index'

const StyledAppBar = styled(MuiAppBar, {})();

const AppBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <StyledAppBar position="absolute">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu-button"
                        onClick={handleClick}
                        sx={{
                            mr: 2
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="h6" component="div">
                            Hello World
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Avatar alt="logo" src={props.logo} />
                    </Box>
                </Toolbar>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItems onClick={handleClose} />
                </Menu>
            </StyledAppBar>
        </>
    );
};

export default AppBar
