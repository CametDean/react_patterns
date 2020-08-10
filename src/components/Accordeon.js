import React, { useState } from "react";

export const Accordeon = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const AccChildren = React.Children.map(children, (child, index) => {
        if (child.type === AccordeonItem){
            return React.cloneElement(child, {
                activeIndex: activeIndex,
                indexAccItem: index,
                onActiveLabel: (index) => {setActiveIndex(index); return console.log(index)}
            })
        }else{
            return child
        }
    })
    return <div>{AccChildren}</div>
}


export const AccordeonItem = ({children, activeIndex, indexAccItem, onActiveLabel}) => {

    const AccItemChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            isActive: activeIndex === indexAccItem,
            onActivate: () => onActiveLabel(indexAccItem),
        })
    })
    return <div>{AccItemChildren}</div>
}


export const AccordeonLabel = ({children, isActive, onActivate}) => {

    const className = isActive ? "isButtonActive" : "isButtonInactive"
    return <div>
        <button
            onClick={() => onActivate()}
            className={className}
        >
            {children}
        </button>
    </div>
}


export const AccordeonPanel = ({children, isActive}) => {

    const render = children
    return <div>{isActive && render}</div>
}