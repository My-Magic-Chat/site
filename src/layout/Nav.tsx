import * as React from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const pages = ['Planos', 'Contato', 'Sobre'];
const settings = ['Perfil', 'Automações', 'Sair'];

function Title() {
    return (
        <>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                My Magic Chat
            </Typography>

            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                My Magic Chat
            </Typography>
        </>
    );
}

function AvatarButton() {
    const { palette } = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget); };

    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ bgcolor: palette.secondary.main }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {
                    settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </Box>
    );
}

function MenuButtons() {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
                pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, display: 'block' }}
                    >
                        {page}
                    </Button>
                ))
            }
        </Box>
    );
}

export default function ResponsiveAppBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
                    <Title />
                    <MenuButtons />
                    <AvatarButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}