import { useActionState, useCallback, useEffect, useLayoutEffect, useState } from "react";


interface TypewriterProps {
    text: string;
    delay: number
    infinite?: boolean
}

export const Typewriter = ({ text, delay, infinite }: TypewriterProps) => {

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
        <span className="text-3xl md:text-5xl lg:text-7xl font-bold">{currentText}</span>
    )
}