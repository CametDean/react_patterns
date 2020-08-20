import React, { useState, useContext } from "react";
import "./Tabs.css"

const TabsContext = React.createContext()

export const Tabs = ({children}) => {
    return <TabsContext.Provider value={useState(0)}>{children}</TabsContext.Provider>
}


export const TabList = ({children, className}) => {

    const [activeIndex, setActiveIndex] = useContext(TabsContext)

    const TabListChildren = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            isActive: index === activeIndex,
            onTabActivatedByClick: () => setActiveIndex(index),
            onTabActivatedByKeyPressed: (e) => {if(e.key === "Enter"){setActiveIndex(index)}}
        })
    })

    return <div className={className}>{TabListChildren}</div>
}


export const Tab = ({children, isActive, onClick, onKeyDown, onTabActivatedByClick, onTabActivatedByKeyPressed}) => {

    const className = isActive ? "isActive tab" : "tab"

    return <div
        role="button"
        tabIndex="0"
        onClick={onClick ? () => {onTabActivatedByClick(); return onClick()} : () => {onTabActivatedByClick()}}
        onKeyDown={onKeyDown ? (e) => {onTabActivatedByKeyPressed(e); return onKeyDown(e)} : (e) => {onTabActivatedByKeyPressed(e)}}
        className={className}
    >
        {children}
    </div>
}


export const TabPanels = ({children}) => {

    const [activeIndex] = useContext(TabsContext)

    return <div className="tab-panel">{children[activeIndex]}</div>

}


export const TabPanel = ({children}) => {

    return <>{children}</>

}