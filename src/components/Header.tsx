import {
    faXTwitter,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import header from '../assets/header_image.png';


type LinkProps = {
    href: string;
    icon: IconProp; // Use the appropriate type for FontAwesome icons

}
const Link = ({ href, icon }: LinkProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FontAwesomeIcon icon={icon} className="text-xl cursor-pointer" />
    </a>
);

export const Header = () => {
    
    return (
        <header className="relative object-fill">
            <img src={header} className="w-full lg:h-[170px] sm:h-[200px] object-cover bg-black/70" />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/75" />
            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start ml-3 justify-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">good doubts.</h1>
                <div className="flex items-center mb-2 gap-8">
                    <p>by farxc</p>
                    <div className="flex items-center">
                        <Link href={`https://x.com/detonobombas`} icon={faXTwitter} />
                        <Link href={`https://github.com/farxc`} icon={faGithub} />
                        <Link href={`https://linkedin.com/in/rafaelornunes`} icon={faLinkedin} />
                    </div>
                </div>
                <p className='text-sm mt-2 font-sans'>computer science, philosophy, and literature.</p>
            </div>
        </header>

    )
}