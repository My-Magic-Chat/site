import Telegram from '@mui/icons-material/Telegram';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import WhatsApp from '@mui/icons-material/WhatsApp';

export interface Config {
    tag?: string;
    label: string;
    title: string;
    disabled: boolean;
    description: string;
    icon: React.JSX.Element;
}

export default [
    {
        tag: 'Novo!',
        title: 'Instagram',
        description: 'Automatização de processos de vendas no Instagram não é apenas uma tendência, mas uma necessidade para empresas que desejam permanecer competitivas no mercado digital',
        icon: <Instagram sx={{ fontSize: 40, color: '#DD2A7B' }} />,
        label: 'Começar',
        disabled: false
    },
    {
        title: 'Whatsapp',
        description: 'WhatsApp emerge como uma ferramenta estratégica e indispensável para as empresas. Facilita a comunicação instantânea, personalização de interações e acompanhamento eficiente',
        icon: <WhatsApp sx={{ fontSize: 40, color: '#075e54' }} />,
        label: 'Em breve',
        disabled: true
    },
    {
        title: 'Telegram',
        description: 'Telegram se destaca como uma ferramenta estratégica para empresas que buscam aprimorar suas estratégias digitais é um meio poderoso para impulsionar o desempenho comercial',
        icon: <Telegram sx={{ fontSize: 40, color: '#0088CC' }} />,
        label: 'Em breve',
        disabled: true
    },
    {
        title: 'Messenger',
        description: 'Messenger vai além de uma simples eficiência; é uma abordagem estratégica para empresas que buscam se destacar em um mercado dinâmico',
        icon: <Facebook sx={{ fontSize: 40, color: '#3B5998' }} />,
        label: 'Em breve',
        disabled: true
    }
] satisfies Config[];