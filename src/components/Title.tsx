
type TitleProps = {
    title: string
    className?: string;
}
export const Title = ({ title, className }: TitleProps) => {
    return(
        <div className={`flex flex-col justify-center text-black font-sans font-bold ${className}`}>
              <h3 className='text-3xl'>{title}</h3>
        </div>
    )
}