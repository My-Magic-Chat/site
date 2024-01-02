import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default [
    {
        name: 'Basic',
        price: <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h4" mr={1}>
                Grátis
            </Typography>
        </Box>,
        features: [
            {
                icon: <CheckIcon color="success" />,
                label: '1 automação'
            },
            {
                icon: <CheckIcon color="success" />,
                label: '1 canal'
            },
            {
                icon: <CloseIcon color="error" />,
                label: 'Suporte'
            },
            {
                icon: <CloseIcon color="error" />,
                label: 'Dashboard Analytics'
            }
        ],
        button_label: 'Contratar',
        disabled: false,
    },
    {
        name: 'Essencial',
        badge: {
            label: 'Mais Popular',
            color: 'success'
        },
        price: <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h4" mr={1}>
                R$ 19,99
            </Typography>
            <Typography variant="h6">
                /mês
            </Typography>
        </Box>,
        features: [
            {
                icon: <CheckIcon color="success" />,
                label: '10 automações'
            },
            {
                icon: <CheckIcon color="success" />,
                label: '2 canais'
            },
            {
                icon: <CloseIcon color="error" />,
                label: 'Suporte'
            },
            {
                icon: <CloseIcon color="error" />,
                label: 'Dashboard Analytics'
            }
        ],
        button_label: 'Tenho interesse',
        disabled: true,
    },
    {
        name: 'Premium',
        badge: {
            label: 'Mais Rentável',
            color: 'info'
        },
        price: <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h4" mr={1}>
                R$ 39,99
            </Typography>
            <Typography variant="h6">
                /mês
            </Typography>
        </Box>,
        features: [
            {
                icon: <CheckIcon color="success" />,
                label: '25 automações'
            },
            {
                icon: <CheckIcon color="success" />,
                label: '5 canais'
            },
            {
                icon: <CheckIcon color="success" />,
                label: 'Suporte'
            },
            {
                icon: <CloseIcon color="error" />,
                label: 'Dashboard Analytics'
            }
        ],
        button_label: 'Tenho interesse',
        disabled: true,
    },
    {
        name: 'Elite',
        price: <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h4" mr={1}>
                R$ 89,99
            </Typography>
            <Typography variant="h6">
                /mês
            </Typography>
        </Box>,
        features: [
            {
                icon: <CheckIcon color="success" />,
                label: '100 automações'
            },
            {
                icon: <CheckIcon color="success" />,
                label: '10 canais'
            },
            {
                icon: <CheckIcon color="success" />,
                label: 'Suporte Especial'
            },
            {
                icon: <CheckIcon color="success" />,
                label: 'Dashboard Analytics'
            }
        ],
        button_label: 'Tenho interesse',
        disabled: true,
    }
];