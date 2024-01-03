import * as React from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { EventData } from '@/events';

const pages: { key: EventData<'section_click'>['section'], value: string }[] = [
    { key: 'feature', value: 'Funcionalidades' },
    { key: 'social', value: 'Integrações' },
    { key: 'plan', value: 'Planos' }
];

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
                    <Avatar alt="Remy Sharp" sx={{ bgcolor: palette.secondary.main }} />
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

interface MenuButtonsProps { onClick: (page: EventData<'section_click'>['section']) => void; }
function MenuButtons({ onClick }: MenuButtonsProps) {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
                pages.map((page) => (
                    <Button
                        key={page.key}
                        color="inherit"
                        onClick={() => onClick(page.key)}
                        sx={{ my: 2, display: 'block' }}
                    >
                        {page.value}
                    </Button>
                ))
            }
        </Box>
    );
}

interface NavProps { goTo: (page: EventData<'section_click'>['section']) => void; }
export default function Nav({ goTo }: NavProps) {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
                    <Title />
                    <MenuButtons onClick={goTo} />
                    <AvatarButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}