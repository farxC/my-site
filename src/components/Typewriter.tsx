import { useLayoutEffect, useState } from "react";


interface TypewriterProps {
    text: string;
    delay: number
    infinite?: boolean
    className?: string
}

export const Typewriter = ({ text, delay, infinite, className }: TypewriterProps) => {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useLayoutEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay)

            return () => clearTimeout(timeout)
        } else if (infinite) {
            const after_writing = setTimeout(() => {
                setCurrentIndex(0);
                setCurrentText('')
            }, 4000)

            return () => clearTimeout(after_writing)
        }


    }, [currentIndex, delay, text])

    return (
        <span className={`text-md font-black ${className}`}>{currentText}</span>
    )
}