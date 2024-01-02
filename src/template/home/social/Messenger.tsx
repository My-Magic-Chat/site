import { SocialIcon } from './interface';

export default function Messenger({ size = 1 }: SocialIcon) {
    const width = size * 20;
    const height = size * 20;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0" y="0"
            viewBox="0 0 64 64">
            <g>
                <g fillRule="evenodd">
                    <path fill="#0091ff"
                        d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16"
                        opacity="1" data-original="#0091ff"></path>
                    <path fill="#00b4ff"
                        d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30"
                        opacity="1" data-original="#00b4ff"></path>
                    <path fill="#006eff" d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" opacity="1"
                        data-original="#006eff"></path>
                    <path fill="#ffffff"
                        d="M45.158 26.548a1 1 0 0 0-1.448-1.33 77402.16 77402.16 0 0 1-6.539 4.904 2 2 0 0 1-2.362.027l-4.589-3.278A4.676 4.676 0 0 0 27.501 26H27.5a2.707 2.707 0 0 0-2.295 1.272l-6.363 10.18a1 1 0 0 0 1.448 1.33l6.539-4.904a2 2 0 0 1 2.362-.028l4.589 3.278a4.676 4.676 0 0 0 2.719.872h.001a2.707 2.707 0 0 0 2.295-1.272zM18 47.195A20.605 20.605 0 0 1 10 31c0-11.59 9.858-21 22-21s22 9.41 22 21-9.858 21-22 21a22.974 22.974 0 0 1-5.827-.746l-5.34 2.447A2 2 0 0 1 18 51.883z"
                        opacity="1" data-original="#ffffff"></path>
                </g>
            </g>
        </svg>
    );
}