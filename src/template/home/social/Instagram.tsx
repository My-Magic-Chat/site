import { SocialIcon } from './interface';

export default function Instagram({ size = 1 }: SocialIcon) {
    const width = size * 20;
    const height = size * 20;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0" y="0" viewBox="0 0 64 64">
            <g>
                <g fillRule="evenodd">
                    <path fill="#ff3a55" d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16" opacity="1" data-original="#ff3a55">

                    </path>
                    <path fill="#ff796c" d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30" opacity="1" data-original="#ff796c"></path>
                    <path fill="#e00047" d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" opacity="1" data-original="#e00047">

                    </path>
                </g>
                <circle cx="44.5" cy="19.5" r="2.5" fill="#ffffff" opacity="1" data-original="#ffffff"></circle>
                <path fill="#ffffff" fillRule="evenodd" d="M32 24a8 8 0 1 1-8 8 8.004 8.004 0 0 1 8-8zm0-4a12 12 0 1 1-12 12 12.006 12.006 0 0 1 12-12z" opacity="1" data-original="#ffffff"></path>
                <path fill="#ffffff" fillRule="evenodd" d="M52 22a10 10 0 0 0-10-10H22a10 10 0 0 0-10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0A14 14 0 0 0 42 8H22A14 14 0 0 0 8 22v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z" opacity="1" data-original="#ffffff">
                </path>
            </g>
        </svg>
    );
}