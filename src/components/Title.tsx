import { useState } from 'react';

import Typography from '@mui/material/Typography';
import type { TypographyVariant } from '@mui/material/styles';
import Box from '@mui/material/Box';

import useResize, { type BreakpointName } from '@/hooks/useResize';

type Text = string | React.JSX.Element;

interface TitleProps { section: Text; title: Text; subtitle?: Text; action?: React.JSX.Element; }
export default function Title({ section, title, subtitle, action }: TitleProps) {
    const [screen, setScreen] = useState<BreakpointName>('desktop');

    const sizes: { [x in string]: { [b in BreakpointName]: TypographyVariant } } = {
        title: { desktop: 'h4', tablet: 'h5', mobile: 'h6' },
        subtitle: { desktop: 'h5', tablet: 'h6', mobile: 'body1' }
    };

    useResize({
        onMobile: () => { setScreen('mobile'); },
        onTablet: () => { setScreen('tablet'); },
        onDesktop: () => { setScreen('desktop'); }
    }, []);

    return (
        <Box textAlign="center">
            <Typography
                variant="button"
                gutterBottom
                component="p"
                color="text.secondary"
            >
                {section}
            </Typography>
            <Typography
                variant={sizes.title[screen]}
                component="h4"
                color="text.primary"
                fontFamily="Inter, sans-serif"
                mb={3}
            >
                {title}
            </Typography>
            {
                subtitle && <Typography
                    variant={sizes.subtitle[screen]}
                    gutterBottom
                    component="h6"
                    color="text.secondary"
                    fontFamily="Inter, sans-serif"
                >
                    {subtitle}
                </Typography>
            }
            {action}
        </Box>
    );
}