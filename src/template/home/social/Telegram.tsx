import { SocialIcon } from './interface';

export default function Telegram({ size = 1 }: SocialIcon) {
    const width = size * 20;
    const height = size * 20;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0" y="0"
            viewBox="0 0 64 64">
            <g>
                <g fillRule="evenodd">
                    <path fill="#199bdf"
                        d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16"
                        opacity="1" data-original="#199bdf"></path>
                    <path fill="#32b4ff"
                        d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30"
                        opacity="1" data-original="#32b4ff"></path>
                    <path fill="#0082be" d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" opacity="1"
                        data-original="#0082be"></path>
                    <path fill="#ffffff"
                        d="M45.08 17.032a3 3 0 0 1 4.11 3.229L44.754 49.1a3 3 0 0 1-4.745 1.959L26.927 41.42a2 2 0 0 1-.186-3.064l12.207-11.529a.5.5 0 0 0-.617-.782L22.193 36.57a6 6 0 0 1-4.733.795l-7.572-1.893a2 2 0 0 1-.279-3.789L45.08 17.032z"
                        opacity="1" data-original="#ffffff"></path>
                </g>
            </g>
        </svg>
    );
}