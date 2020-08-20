import React, { useState } from "react";
import "./Accordeon.css";

export const Accordeon = ({children, isOpen = 0}) => {

    const [activeIndex, setActiveIndex] = useState(isOpen)

    const AccordeonChildren = React.Children.map(children, (child, index) => {
        if (child.type === AccordeonItem){
            return React.cloneElement(child, {
                activeIndex: activeIndex,
                indexAccordeonItem: index,
                onActiveLabel: (index) => {setActiveIndex(index); return console.log(index)}
            })
        }
        return child
    })
    return <div className="accordeon">{AccordeonChildren}</div>
}


export const AccordeonItem = ({children, activeIndex, indexAccordeonItem, onActiveLabel}) => {

    const AccordeonItemChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            isActive: activeIndex === indexAccordeonItem,
            onActivate: () => onActiveLabel(indexAccordeonItem),
        })
    })
    return <div className="accordeon__item">{AccordeonItemChildren}</div>
}


export const AccordeonLabel = ({children, isActive, onActivate}) => {

    return <button
        onClick={() => onActivate()}
        className={isActive ? 'accordeon__label isButtonActive' : 'accordeon__label isButtonInactive'}
    >
        {children}
    </button>
}


export const AccordeonPanel = ({children, isActive}) => {
    return isActive && <div className="accordeon__panel">{children}</div>
}