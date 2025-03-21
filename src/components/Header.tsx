import scenario from '../assets/scenario.png'
import { Typewriter } from './Typewriter'

export const Header = () => {
    return (
        <header className="relative object-fill">
            <img src={scenario} className="w-full lg:h-[250px] sm:h-[200px] object-cover " alt="Background" />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>

            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                {/* <span className="text-3xl md:text-5xl lg:text-7xl font-bold">rafael.dev#!</span> */}
                <Typewriter delay={80} infinite text='rafael.dev#!'></Typewriter>
                <section>
                    <nav className="mt-2 flex gap-4 bg-black/50 px-2 py-1 md:px-4 md:py-2 rounded-lg justify-between">
                        <a className="hover:underline hover:cursor-pointer text-sm md:text-lg">Recommendations</a>
                        <a className="hover:underline hover:cursor-pointer text-sm md:text-lg">Articles</a>
                        <a className="hover:underline hover:cursor-pointer text-sm md:text-lg">Social</a>
                    </nav>
                </section>
            </div>
        </header>

    )
}