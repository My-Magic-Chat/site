import { SocialIcon } from './interface';

export default function Whatsapp({ size = 1 }: SocialIcon) {
    const width = size * 20;
    const height = size * 20;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0" y="0" viewBox="0 0 64 64">
            <g>
                <g fillRule="evenodd">
                    <path fill="#00d264"
                        d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16"
                        opacity="1" data-original="#00d264"></path>
                    <path fill="#00eb78"
                        d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30"
                        opacity="1" data-original="#00eb78"></path>
                    <path fill="#00b950" d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" opacity="1"
                        data-original="#00b950"></path>
                    <g fill="#fff">
                        <path
                            d="M21.673 47.093a2.003 2.003 0 0 1 1.593.218 18.981 18.981 0 1 0-6.581-6.574 1.994 1.994 0 0 1 .216 1.588C16.344 44.296 15 49 15 49l6.673-1.907zm-8.454-4.359a23.002 23.002 0 1 1 8.047 8.047s-6.377 1.822-9.535 2.725a1.001 1.001 0 0 1-1.237-1.237l2.725-9.535z"
                            fill="#ffffff" opacity="1" data-original="#ffffff"></path>
                        <path
                            d="M21.981 24.786a18.703 18.703 0 0 0 17.224 17.352h.002a4.964 4.964 0 0 0 3.894-1.44l.698-.698a1.76 1.76 0 0 0 .515-1.243v-1.482a1.001 1.001 0 0 0-.553-.895l-4.459-2.229a1 1 0 0 0-1.155.187l-1.94 1.94a1.001 1.001 0 0 1-.903.274l-.009-.002a10 10 0 0 1-7.845-7.845l-.002-.009a1.001 1.001 0 0 1 .274-.903l1.94-1.94a1 1 0 0 0 .187-1.155l-2.229-4.459a1.001 1.001 0 0 0-.895-.553h-1.26a2.138 2.138 0 0 0-1.587.706l-.664.738a4.86 4.86 0 0 0-1.238 3.589l.005.067z"
                            fill="#ffffff" opacity="1" data-original="#ffffff"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}