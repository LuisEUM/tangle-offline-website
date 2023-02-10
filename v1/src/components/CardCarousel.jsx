import { useState, useEffect } from "react";

const CardCarousel = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(props.children.length)
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    useEffect(() => {
        setLength(props.children.length)
    }, [props.children.length])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }    

    return(
        <div 
            className={`carousel-container ${props.isPadding ? 'cards-padding' : ''}`} 
            style={{display: `${!props.display ? "none" : "flex"}`}}
        >
            <div 
                className="carousel-content-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div 
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {props.children}
                </div>
            </div>
            <div>
                {[...Array(length)].map((e, i) => {
                    return <span key={i} className={i === currentIndex ? "active-dot" : "carousel-dot"}></span>
                })}
            </div>
        </div>
    );
}

export default CardCarousel;