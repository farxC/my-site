export const AboutMe = () => {
    return (
            <div className='w-full rounded-xl border-1 bg-neutral-50 shadow-sm mx-auto max-w-4xl'>
                <div className='p-3 sm:p-4 md:p-6'>
                    <h3 className='ml-2 sm:ml-5 border-b-1 text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4'>About me</h3>
                    <div className='space-y-3 md:space-y-4'>
                        <p className='border-l-4 p-2 leading-relaxed pl-3 sm:pl-4 text-sm sm:text-base'>
                            I'm Rafael Ortiz Nunes, 20y developer. I like Computer Science, Philosophy, Literature and High Performance.
                        </p>
                        <p className='border-l-4 p-2 leading-relaxed pl-3 sm:pl-4 text-sm sm:text-base'>
                            The theory and practice of Software Engineering is fascinating and that is a mountain that must be climbed.
                            It's all about learn how to learn and fly, being light and look at where we are.
                        </p>
                    </div>
                </div>
            </div>
    );
}