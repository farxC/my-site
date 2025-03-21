import scenario from '../assets/scenario.png'
import { Typewriter } from './Typewriter'

export const Header = () => {
    return (
        <header className="relative object-fill">
            <img src={scenario} className="w-full lg:h-[170px] sm:h-[200px] object-cover " alt="Background" />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>

            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                <Typewriter delay={80} infinite text='#!/rafael.dev'></Typewriter>
            </div>
        </header>

    )
}