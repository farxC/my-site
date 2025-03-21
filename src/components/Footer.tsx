import {format} from 'date-fns'

export const Footer = () => {
    const date = format(Date.now() , 'dd/MM/yyyy')
    
    return (
        <footer className = 'flex justify-center gap-2 text-black font-serif' >
        <p>{date},  Mato Grosso do Sul, Brasil</p>
        <img src="brasil.png" alt="Bandeira do Brasil" className='brasil-image' />
      </footer >
    )
}