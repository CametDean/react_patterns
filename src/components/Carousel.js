import React, { useState, useContext, useEffect } from "react"
import "./Carousel.css"


const CarouselContext = React.createContext()


export const Carousel = ({children, isPlaying=false}) => {

    const [slideComponent, setSlideComponent] = useState([])
    const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(isPlaying)
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselContext = {
        slideComponent: slideComponent,
        setSlideComponent: (value) => setSlideComponent(value),
        isPlaying: isCurrentlyPlaying,
        setIsPlaying: (value) => setIsCurrentlyPlaying(value),
        currentIndex: currentIndex,
        setCurrentIndex: (value) => setCurrentIndex(value)
    }

    const carouselChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            onNumberOfSlidesChanged: (newNumber) => setSlideComponent(newNumber)
        })
    })

    return <CarouselContext.Provider value={carouselContext}>
        <>{carouselChildren}</>
    </CarouselContext.Provider>
}


export const Slides = ({children, onNumberOfSlidesChanged}) => {
    const {currentIndex, setCurrentIndex, isPlaying} = useContext(CarouselContext)
    const numberOfSlidesChildren = React.Children.count(children)

    useEffect(() => {
        if (isPlaying){
            let timeout = setTimeout(
                () => {
                    setCurrentIndex((currentIndex + 1) % numberOfSlidesChildren)
                }, 3000);
            return () => clearTimeout(timeout)
        }
    }, [isPlaying, setCurrentIndex, currentIndex, numberOfSlidesChildren])

    useEffect(() => {
        onNumberOfSlidesChanged(children)
    }, [children, onNumberOfSlidesChanged])

    return <ul className="Slide">{children[currentIndex]}</ul>
}



export const Slide = ({children}) => {
    return <><li>{children}</li></>
}


export const SlideNav = ({className, navType}) => {
    return <><ul className={className}><SlideNavItems navType={navType} /></ul></>
}


export const SlideNavItems = ({navType="bullet"}) => {
    const {currentIndex, setCurrentIndex, slideComponent, setIsPlaying} = useContext(CarouselContext)

    return <>
        {slideComponent.map((element, index) => (
            <li
                key={index}
                role="button"
                tabIndex="0"
                onClick={() => {setIsPlaying(false); return setCurrentIndex(index)}}
                onKeyDown={(e) => {if(e.key === "Enter"){setCurrentIndex(index)}}}
                className={currentIndex === index ? "btn" : "btn"}
            >
                {navType === "bullet" ? <div className={currentIndex === index ? "bulletActive" : "bullet"}/> : index}
            </li>
        ))}
    </>
}

export const PlayPause = ({children}) => {
    const {isPlaying, setIsPlaying} = useContext(CarouselContext)

    return <div
        role="button"
        tabIndex="0"
        onKeyDown={(e) => {if(e.key === "Enter"){setIsPlaying(!isPlaying)}}}
    >
        <div onClick={() => setIsPlaying(!isPlaying)}>
            { isPlaying ? children[1] : children[0] }
        </div>
    </div>
}

export const Previous = ({children}) => {
    const {currentIndex, setCurrentIndex, slideComponent} = useContext(CarouselContext)

    return <div
        role="button"
        tabIndex="0"
        onClick={() => setCurrentIndex((currentIndex - 1 + slideComponent.length) % slideComponent.length)}
        onKeyDown={(e) => {if(e.key === "Enter"){setCurrentIndex((currentIndex - 1 + slideComponent.length) % slideComponent.length)}}}
    >
        {children}
    </div>
}

export const Next = ({children}) => {
    const {currentIndex, setCurrentIndex, slideComponent} = useContext(CarouselContext)

    return<div
        role="button"
        tabIndex="0"
        onClick={() => setCurrentIndex((currentIndex + 1) % slideComponent.length)}
        onKeyDown={(e) => {if(e.key === "Enter"){setCurrentIndex((currentIndex + 1) % slideComponent.length)}}}
    >
        {children}
    </div>
}