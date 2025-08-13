
export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full'>
            <div className='p-3 sm:p-4 md:p-6'>
                {children}
            </div>
        </div>
    );
}