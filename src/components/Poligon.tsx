interface PlanCardProps { background: string; };
export default function Poligon({ background }: PlanCardProps) {
    return (
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
            <polygon fill={background} points="0,273 1921,273 1921,0 "></polygon>
        </svg>
    );
}