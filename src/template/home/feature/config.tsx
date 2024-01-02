import CommentIcon from '@mui/icons-material/Comment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export interface ListFeatureData {
    title: string;
    description: string;
    icon: React.JSX.Element;
}

export default [
    {
        title: 'Mensagens diretas',
        description: 'Inicia automaticamente a automação de mensagens diretas no Instagram ao receber uma mensagem com uma palavra-chave específica',
        icon: <AccessTimeIcon color="primary" />
    },
    {
        title: 'Menções nos Stories',
        description: 'Identifica automaticamente menções à sua conta ou marca nos stories de outros usuários',
        icon: <AlternateEmailIcon color="primary" />
    },
    {
        title: 'Comentários',
        description: 'Nossa aplicação identifica automaticamente os comentários em suas postagens e responde de maneira personalizada',
        icon: <CommentIcon color="primary" />
    },
    {
        title: 'Atendimento personalizado',
        description: 'Se seu cliente precisar de mais ajudar, você poderá atendê-lo de maneira personalizada',
        icon: <SupportAgentIcon color="primary" />
    }
] satisfies ListFeatureData[];